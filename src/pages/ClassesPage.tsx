import { Video, FileText, Clock, User } from 'lucide-react'
import { upcomingClasses, enrolledCourses, programmeStartDate, orientationDate } from '../data/mockData'

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function ClassesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-abs-navy">Classes</h1>
        <p className="mt-1 text-gray-600">
          Enrolled modules for Semester 1 · Live sessions begin {formatDate(programmeStartDate)}
        </p>
      </div>

      <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
        <p className="font-semibold text-blue-900">Classes have not started yet</p>
        <p className="mt-1 text-sm text-blue-700">
          You are enrolled in 7 Semester 1 modules. Pre-reading materials are available below.
          Live session links will activate on the day of each class. Cohort orientation is on {formatDate(orientationDate)}.
        </p>
      </div>

      {/* Upcoming sessions */}
      <div>
        <h2 className="mb-4 font-semibold text-abs-navy">Scheduled Live Sessions</h2>
        <div className="space-y-4">
          {upcomingClasses.map((cls) => (
            <div
              key={cls.id}
              className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex gap-4">
                <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-abs-navy text-white">
                  <span className="text-xs uppercase">
                    {new Date(cls.date).toLocaleDateString('en-IN', { month: 'short' })}
                  </span>
                  <span className="text-xl font-bold leading-none">
                    {new Date(cls.date).getDate()}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-medium text-abs-gold">{cls.format}</p>
                  <h3 className="font-semibold text-gray-900">{cls.title}</h3>
                  <div className="mt-1 flex flex-wrap gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {cls.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {cls.faculty}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  <FileText className="h-4 w-4" />
                  Pre-reading
                </button>
                <button
                  disabled
                  title="Available when the session starts"
                  className="flex cursor-not-allowed items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-400"
                >
                  <Video className="h-4 w-4" />
                  Join Live
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All enrolled modules */}
      <div>
        <h2 className="mb-4 font-semibold text-abs-navy">Enrolled Modules – Semester 1</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {enrolledCourses.map((course) => (
            <div key={course.name} className="rounded-xl border border-gray-200 bg-white p-5">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-gray-900">{course.name}</h3>
                <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800">
                  Enrolled
                </span>
              </div>
              <p className="mt-1 text-sm text-gray-500">{course.faculty}</p>
              <p className="mt-3 text-xs text-gray-500">
                First session: <span className="font-medium text-gray-700">{course.firstSession}</span>
              </p>
              <div className="mt-4 flex gap-2">
                <button className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-abs-cream py-2 text-xs font-medium text-abs-navy hover:bg-gray-100">
                  <FileText className="h-3.5 w-3.5" />
                  Pre-reading
                </button>
                <button
                  disabled
                  className="flex flex-1 cursor-not-allowed items-center justify-center gap-1.5 rounded-lg bg-gray-50 py-2 text-xs font-medium text-gray-400"
                >
                  <Video className="h-3.5 w-3.5" />
                  Recordings
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-xs text-gray-400">
        Programme start date: {new Date(programmeStartDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
      </p>
    </div>
  )
}
