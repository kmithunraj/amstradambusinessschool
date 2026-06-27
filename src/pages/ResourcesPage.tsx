import { FileText, Video, BookOpen, ExternalLink, Download } from 'lucide-react'

const resources = [
  {
    category: 'Programme Handbook',
    items: [
      { title: 'EMBA Programme Handbook 2026', type: 'PDF', size: '2.4 MB' },
      { title: 'Assessment & Grading Policy', type: 'PDF', size: '890 KB' },
      { title: 'Code of Academic Integrity', type: 'PDF', size: '420 KB' },
    ],
  },
  {
    category: 'Semester 1 Readings',
    items: [
      { title: 'Strategic Performance Management – Case Pack', type: 'PDF', size: '5.1 MB' },
      { title: 'Competitive Strategy – Porter Reading List', type: 'PDF', size: '1.2 MB' },
      { title: 'Corporate Finance – Financial Statements Guide', type: 'PDF', size: '3.8 MB' },
      { title: 'Digital Business – Platform Economics Primer', type: 'PDF', size: '2.1 MB' },
    ],
  },
  {
    category: 'Amsterdam Residency',
    items: [
      { title: 'Amsterdam Immersion Week Guide', type: 'PDF', size: '1.5 MB' },
      { title: 'ABS Campus Map & Facilities', type: 'PDF', size: '4.2 MB' },
      { title: 'Visa & Travel Checklist – Indian Nationals', type: 'PDF', size: '680 KB' },
    ],
  },
  {
    category: 'Recorded Sessions',
    items: [
      { title: 'Orientation Session – June 2026', type: 'Video', size: '1h 24m' },
      { title: 'Library & Research Tools Overview', type: 'Video', size: '45m' },
    ],
  },
]

export default function ResourcesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-abs-navy">Resources</h1>
        <p className="mt-1 text-gray-600">Programme materials, readings, and recorded sessions</p>
      </div>

      {resources.map((section) => (
        <div key={section.category} className="rounded-xl border border-gray-200 bg-white overflow-hidden">
          <div className="border-b border-gray-100 bg-abs-cream px-6 py-3">
            <h2 className="font-semibold text-abs-navy">{section.category}</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {section.items.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between px-6 py-4 hover:bg-abs-cream/50"
              >
                <div className="flex items-center gap-3">
                  {item.type === 'Video' ? (
                    <Video className="h-5 w-5 text-purple-500" />
                  ) : (
                    <FileText className="h-5 w-5 text-red-500" />
                  )}
                  <div>
                    <p className="text-sm font-medium text-gray-800">{item.title}</p>
                    <p className="text-xs text-gray-400">
                      {item.type} · {item.size}
                    </p>
                  </div>
                </div>
                <button className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-white">
                  {item.type === 'Video' ? (
                    <>
                      <ExternalLink className="h-3.5 w-3.5" />
                      Watch
                    </>
                  ) : (
                    <>
                      <Download className="h-3.5 w-3.5" />
                      Download
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <div className="flex items-start gap-4">
          <BookOpen className="h-6 w-6 shrink-0 text-abs-gold" />
          <div>
            <h2 className="font-semibold text-abs-navy">UvA Digital Library</h2>
            <p className="mt-1 text-sm text-gray-600">
              Access academic journals, case studies, and research databases through the University
              of Amsterdam library portal using your student credentials.
            </p>
            <button className="mt-3 flex items-center gap-1.5 text-sm font-medium text-abs-navy hover:underline">
              Open UvA Library Portal
              <ExternalLink className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
