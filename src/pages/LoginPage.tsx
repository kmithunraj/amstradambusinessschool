import { useState, type FormEvent } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { ArrowLeft, Mail, ShieldCheck, AlertCircle } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import AbsLogo from '../components/AbsLogo'

export default function LoginPage() {
  const { user, pendingEmail, requestOtp, verifyOtp, cancelLogin } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [error, setError] = useState('')
  const [otpSent, setOtpSent] = useState(false)

  if (user) return <Navigate to="/portal/dashboard" replace />

  const handleEmailSubmit = (e: FormEvent) => {
    e.preventDefault()
    setError('')
    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid professional email address.')
      return
    }
    requestOtp(email)
    setOtpSent(true)
  }

  const handleOtpSubmit = (e: FormEvent) => {
    e.preventDefault()
    setError('')
    if (verifyOtp(otp)) {
      navigate('/portal/dashboard')
    } else {
      setError('Invalid verification code. Please try again.')
    }
  }

  const showOtpStep = otpSent || pendingEmail

  return (
    <div className="flex min-h-screen">
      {/* Left panel */}
      <div className="relative hidden w-1/2 lg:block">
        <img
          src="https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=1200&q=80"
          alt="Amsterdam skyline"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-abs-navy/75" />
        <div className="absolute inset-0 flex flex-col justify-end p-12">
          <h2 className="font-display text-3xl font-bold text-white">
            Executive MBA Student Portal
          </h2>
          <p className="mt-3 max-w-md text-white/75">
            Access your classes, schedule, curriculum, certificates, and connect with your cohort
            on the student forum.
          </p>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex w-full flex-col justify-center bg-white px-6 py-12 lg:w-1/2 lg:px-16">
        <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-abs-navy">
          <ArrowLeft className="h-4 w-4" />
          Back to website
        </Link>

        <div className="mx-auto w-full max-w-md">
          <div className="mb-8 flex items-center gap-3">
            <AbsLogo className="h-12 w-12" variant="contained" />
            <div>
              <p className="font-semibold text-abs-navy">Amsterdam Business School</p>
              <p className="text-sm text-gray-500">Student Portal Sign In</p>
            </div>
          </div>

          {!showOtpStep ? (
            <>
              <h1 className="text-2xl font-bold text-gray-900">Sign in with your email</h1>
              <p className="mt-2 text-sm text-gray-600">
                Enter your professional email address. We will send a one-time verification code.
              </p>

              <form onSubmit={handleEmailSubmit} className="mt-8 space-y-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Professional Email
                  </label>
                  <div className="relative mt-1.5">
                    <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 text-sm outline-none ring-abs-navy focus:border-abs-navy focus:ring-2 focus:ring-abs-navy/20"
                      autoFocus
                    />
                  </div>
                </div>

                {error && (
                  <div className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full rounded-lg bg-abs-navy py-3 text-sm font-semibold text-white transition hover:bg-abs-navy-light"
                >
                  Send Verification Code
                </button>
              </form>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-bold text-gray-900">Enter verification code</h1>
              <p className="mt-2 text-sm text-gray-600">
                A 6-digit code has been sent to{' '}
                <span className="font-medium text-gray-900">{pendingEmail || email}</span>
              </p>

              <form onSubmit={handleOtpSubmit} className="mt-8 space-y-5">
                <div>
                  <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                    Verification Code
                  </label>
                  <div className="relative mt-1.5">
                    <ShieldCheck className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input
                      id="otp"
                      type="text"
                      inputMode="numeric"
                      maxLength={6}
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                      placeholder="Enter 6-digit code"
                      className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 text-sm tracking-widest outline-none ring-abs-navy focus:border-abs-navy focus:ring-2 focus:ring-abs-navy/20"
                      autoFocus
                    />
                  </div>
                </div>

                {error && (
                  <div className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full rounded-lg bg-abs-navy py-3 text-sm font-semibold text-white transition hover:bg-abs-navy-light"
                >
                  Verify & Sign In
                </button>

                <button
                  type="button"
                  onClick={() => {
                    cancelLogin()
                    setOtpSent(false)
                    setOtp('')
                    setError('')
                  }}
                  className="w-full text-sm text-gray-500 hover:text-abs-navy"
                >
                  Use a different email
                </button>
              </form>

              <p className="mt-6 rounded-lg bg-abs-cream px-4 py-3 text-xs text-gray-600">
                Didn't receive the code? Check your spam folder or wait 60 seconds before requesting a new one.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
