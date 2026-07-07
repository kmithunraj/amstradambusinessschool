import { Link } from 'react-router-dom'
import { Calendar, Mail, BookOpen, MessageSquare, Clock, MapPin, Rocket } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { upcomingClasses, emails, enrolledCourses, programmeStartDate, orientationDate, admissionCategory, programmeDegree } from '../data/mockData'

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
}

function formatDateShort(date: string) {
  return new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
}

function daysUntilStart() {
  const start = new Date(programmeStartDate)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  start.setHours(0, 0, 0, 0)
  return Math.ceil((start.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
}

export default function DashboardPage() {
  const { user } = useAuth()
  const unreadEmails = emails.filter((e) => e.unread).length
  const nextClass = upcomingClasses[0]
  const daysLeft = daysUntilStart()
  const programmeStarted = daysLeft <= 0
  const startStatusText =
    daysLeft > 1 ? `Your programme starts in ${daysLeft} days`
    : daysLeft === 1 ? 'Your programme starts tomorrow'
    : daysLeft === 0 ? 'Your programme starts today' : 'Your programme is now in session'
  const startStatusBody = programmeStarted
    ? `Your first live session, Strategic Performance Management, began on ${formatDate(programmeStartDate)}. Cohort orientation was held on ${formatDate(orientationDate)}. You can now review your schedule, course materials, and onboarding updates in the portal.`
    : `First live session: Strategic Performance Management on ${formatDate(programmeStartDate)}. Cohort orientation is on ${formatDate(orientationDate)}. Review pre-reading materials and complete onboarding tasks before classes begin.`

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-abs-navy">
          Welcome, {user?.name?.split(' ')[0]}
        </h1>
        <p className="mt-1 text-gray-600">
          {programmeDegree} · India Executive Track · {admissionCategory} · Enrolled for Year 1, Semester 1
        </p>
      </div>

      {/* Pre-start banner */}
      <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
        <div className="flex items-start gap-3">
          <Rocket className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
          <div>
            <p className="font-semibold text-blue-900">{startStatusText}</p>
            <p className="mt-1 text-sm text-blue-700">{startStatusBody}</p>
          </div>
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            label: 'Enrolled Modules',
            value: '7',
            sub: programmeStarted ? 'Semester 1 · In progress' : 'Semester 1 · Not yet started',
            icon: BookOpen,
            color: 'bg-blue-50 text-blue-700',
          },
          { label: 'Unread Emails', value: String(unreadEmails), sub: 'Onboarding & prep', icon: Mail, color: 'bg-amber-50 text-amber-700' },
          {
            label: programmeStarted ? 'Programme Status' : 'Days Until Start',
            value: programmeStarted ? 'Live' : String(daysLeft),
            sub: `First session ${formatDateShort(programmeStartDate)}`,
            icon: Calendar,
            color: 'bg-green-50 text-green-700',
          },
          {
            label: 'Programme Progress',
            value: programmeStarted ? 'Started' : '0%',
            sub: programmeStarted ? 'Classes underway' : 'Classes not yet started',
            icon: Rocket,
            color: 'bg-purple-50 text-purple-700',
          },
        ].map(({ label, value, sub, icon: Icon, color }) => (
          <div key={label} className="rounded-xl border border-gray-200 bg-white p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500">{label}</p>
                <p className="mt-1 text-3xl font-bold text-abs-navy">{value}</p>
                <p className="mt-1 text-xs text-gray-400">{sub}</p>
              </div>
              <div className={`rounded-lg p-2.5 ${color}`}>
                <Icon className="h-5 w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Next class */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-abs-navy">First Live Session</h2>
            <Link to="/portal/schedule" className="text-sm font-medium text-abs-gold hover:underline">
              View schedule
            </Link>
          </div>
          {nextClass && (
            <div className="mt-4 rounded-xl bg-abs-navy p-6 text-white">
              <p className="text-sm text-abs-gold">Starts {formatDate(programmeStartDate)} · {nextClass.format}</p>
              <h3 className="mt-1 text-xl font-semibold">{nextClass.title}</h3>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/80">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {new Date(nextClass.date).toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {nextClass.time}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  {nextClass.room}
                </span>
              </div>
              <p className="mt-3 text-sm text-white/60">Faculty: {nextClass.faculty}</p>
              <Link
                to="/portal/classes"
                className="mt-4 inline-block rounded-lg border border-white/30 px-4 py-2 text-sm font-semibold text-white/90"
              >
                View Pre-reading Materials
              </Link>
            </div>
          )}
        </div>

        {/* Quick links */}
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="font-semibold text-abs-navy">Before You Start</h2>
          <div className="mt-4 space-y-2">
            {[
              { to: '/portal/emails', label: 'Emails & Payments', icon: Mail, badge: unreadEmails },
              { to: '/portal/resources', label: 'Pre-reading Materials', icon: BookOpen },
              { to: '/portal/forum', label: 'Meet Your Cohort', icon: MessageSquare },
              { to: '/portal/curriculum', label: 'View Curriculum', icon: BookOpen },
            ].map(({ to, label, icon: Icon, badge }) => (
              <Link
                key={to}
                to={to}
                className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-abs-cream"
              >
                <span className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-abs-gold" />
                  {label}
                </span>
                {badge ? (
                  <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700">
                    {badge}
                  </span>
                ) : null}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Enrolled modules */}
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-abs-navy">Semester 1 – Enrolled Modules</h2>
          <Link to="/portal/classes" className="text-sm font-medium text-abs-gold hover:underline">
            View all
          </Link>
        </div>
        <p className="mt-1 text-sm text-gray-500">Registered for all modules below. Sessions begin in July 2026.</p>
        <div className="mt-4 space-y-3">
          {enrolledCourses.map((course) => (
            <div
              key={course.name}
              className="flex flex-col gap-1 rounded-lg border border-gray-100 bg-abs-cream/50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <span className="font-medium text-gray-800">{course.name}</span>
                <p className="text-xs text-gray-400">{course.faculty}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-500">First session: {course.firstSession}</span>
                <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                  Enrolled
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
