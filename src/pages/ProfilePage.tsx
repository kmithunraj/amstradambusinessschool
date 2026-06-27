import { useAuth } from '../context/AuthContext'
import { Mail, MapPin, Phone, Calendar, GraduationCap, Building2, Rocket, Award } from 'lucide-react'
import { programmeStartDate, orientationDate, admissionCategory, programmeDegree, selectionDate, dueDiligenceDeadline, dueDiligenceFee } from '../data/mockData'

export default function ProfilePage() {
  const { user } = useAuth()
  const startFormatted = new Date(programmeStartDate).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  const selectedFormatted = new Date(selectionDate).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  const dueDiligenceFormatted = new Date(dueDiligenceDeadline).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  const orientationFormatted = new Date(orientationDate).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-abs-navy">Profile</h1>
        <p className="mt-1 text-gray-600">Your student account and programme details</p>
      </div>

      <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
        <div className="flex items-start gap-3">
          <Rocket className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
          <div>
            <p className="font-semibold text-blue-900">Selected on {selectedFormatted} · Programme starts {startFormatted}</p>
            <p className="mt-1 text-sm text-blue-700">
              You are registered for Year 1, Semester 1. Classes have not started yet — complete
              your onboarding checklist before the first session.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-6 lg:col-span-1">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-abs-navy text-2xl font-bold text-white">
              MR
            </div>
            <h2 className="mt-4 text-xl font-semibold text-gray-900">{user?.name}</h2>
            <p className="text-sm text-gray-500">{user?.email}</p>
            <span className="mt-3 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
              Selected · {admissionCategory}
            </span>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 lg:col-span-2">
          <h2 className="font-semibold text-abs-navy">Programme Details</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {[
              { icon: GraduationCap, label: 'Degree', value: programmeDegree },
              { icon: Building2, label: 'Track', value: 'India Executive Track' },
              { icon: Award, label: 'Selection Category', value: admissionCategory },
              { icon: Calendar, label: 'Date of Selection', value: selectedFormatted },
              { icon: Calendar, label: 'Cohort', value: '2026' },
              { icon: Rocket, label: 'Programme Start', value: startFormatted },
              { icon: Calendar, label: 'Enrolment Status', value: 'Year 1, Semester 1 – Enrolled' },
              { icon: MapPin, label: 'Campus', value: 'Amsterdam Business School, UvA' },
              { icon: Mail, label: 'Student Email', value: user?.email ?? '' },
              { icon: Calendar, label: 'Expected Completion', value: 'June 2028' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3 rounded-lg bg-abs-cream p-4">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-abs-gold" />
                <div>
                  <p className="text-xs text-gray-500">{label}</p>
                  <p className="text-sm font-medium text-gray-800">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <h2 className="font-semibold text-abs-navy">Pre-start Checklist</h2>
        <div className="mt-4 space-y-3">
          {[
            { task: 'Read your selection email from Admissions', done: true },
            { task: 'Complete e-NACH registration (company bank account)', done: true },
            { task: `Pay Degree Due Diligence fee (₹${dueDiligenceFee.toLocaleString('en-IN')}) by ${dueDiligenceFormatted}`, done: false },
            { task: 'Download Semester 1 pre-reading materials', done: false },
            { task: `Attend cohort orientation (${orientationFormatted})`, done: false },
          ].map(({ task, done }) => (
            <div key={task} className="flex items-center gap-3 rounded-lg bg-abs-cream px-4 py-3">
              <div className={`h-4 w-4 shrink-0 rounded-full border-2 ${done ? 'border-green-500 bg-green-500' : 'border-gray-300'}`} />
              <span className={`text-sm ${done ? 'text-gray-500 line-through' : 'text-gray-800'}`}>{task}</span>
              {!done && (
                <span className="ml-auto rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">
                  Pending
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <h2 className="font-semibold text-abs-navy">Programme Office Contact</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-abs-gold" />
            <div>
              <p className="text-xs text-gray-500">Email</p>
              <p className="text-sm text-gray-800">emba@abs.uva.nl</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-4 w-4 text-abs-gold" />
            <div>
              <p className="text-xs text-gray-500">Phone</p>
              <p className="text-sm text-gray-800">+31 20 525 4050</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-4 w-4 text-abs-gold" />
            <div>
              <p className="text-xs text-gray-500">Address</p>
              <p className="text-sm text-gray-800">Plantage Muidergracht 12, Amsterdam</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
