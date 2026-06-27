import { CheckCircle2, Circle, BookMarked } from 'lucide-react'
import { curriculum, specializations } from '../data/curriculum'
import { programmeStartDate } from '../data/mockData'

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function CurriculumPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-abs-navy">Curriculum</h1>
        <p className="mt-1 text-gray-600">
          Executive MBA programme structure · India Executive Track
        </p>
      </div>

      {/* Enrolled banner */}
      <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
          <div>
            <p className="font-semibold text-blue-900">Enrolled in Year 1 – Semester 1</p>
            <p className="mt-1 text-sm text-blue-700">
              All 7 modules below are registered on your student record. Live sessions begin {formatDate(programmeStartDate)}.
            </p>
          </div>
        </div>
      </div>

      {curriculum.map((semester) => (
        <div key={semester.label} className="rounded-xl border border-gray-200 bg-white overflow-hidden">
          <div className="border-b border-gray-100 bg-abs-cream px-6 py-4">
            <h2 className="font-semibold text-abs-navy">{semester.label}</h2>
            {semester.note && (
              <p className="mt-1 text-sm text-gray-500">{semester.note}</p>
            )}
          </div>
          <div className="divide-y divide-gray-100">
            {semester.courses.map((course) => (
              <div key={course.name} className="flex items-center justify-between px-6 py-4">
                <div className="flex items-start gap-3">
                  {course.enrolled ? (
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                  ) : (
                    <Circle className="mt-0.5 h-5 w-5 shrink-0 text-gray-300" />
                  )}
                  <div>
                    <p className="font-medium text-gray-800">{course.name}</p>
                    {course.credits !== undefined && course.credits > 0 && (
                      <p className="text-xs text-gray-400">{course.credits} ECTS credits</p>
                    )}
                  </div>
                </div>
                {course.enrolled && (
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
                    Enrolled
                  </span>
                )}
                {course.status === 'available' && !course.enrolled && (
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
                    Upcoming
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Specializations */}
      <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
        <div className="border-b border-gray-100 bg-abs-cream px-6 py-4">
          <div className="flex items-center gap-2">
            <BookMarked className="h-5 w-5 text-abs-gold" />
            <h2 className="font-semibold text-abs-navy">Available Electives & Specializations</h2>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            You must complete at least two electives from one specialization area.
          </p>
        </div>
        <div className="grid gap-0 divide-y divide-gray-100 md:grid-cols-3 md:divide-x md:divide-y-0">
          {specializations.map((spec) => (
            <div key={spec.name} className="p-6">
              <h3 className="font-semibold text-abs-navy">{spec.name}</h3>
              <ul className="mt-3 space-y-2">
                {spec.electives.map((e) => (
                  <li key={e} className="flex items-center gap-2 text-sm text-gray-600">
                    <Circle className="h-3 w-3 shrink-0 text-abs-gold" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Year 2 detail */}
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <h2 className="font-semibold text-abs-navy">Year 2 – Semester 1 · Elective Selection</h2>
        <p className="mt-2 text-sm text-gray-600">
          Choose electives from one of the three specialization tracks below. You must complete at
          least two electives from the same specialization area.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {specializations.map((spec) => (
            <div key={spec.name} className="rounded-lg border border-gray-100 bg-abs-cream p-4">
              <p className="text-sm font-semibold text-abs-navy">{spec.name} Track</p>
              <ul className="mt-2 space-y-1">
                {spec.electives.map((e) => (
                  <li key={e} className="text-xs text-gray-600">· {e}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
