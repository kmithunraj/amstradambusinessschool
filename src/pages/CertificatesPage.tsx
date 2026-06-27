import { Award, Clock, CheckCircle2 } from 'lucide-react'
import { certificates } from '../data/mockData'

const statusConfig = {
  in_progress: { label: 'In Progress', color: 'bg-amber-100 text-amber-800', icon: Clock },
  upcoming: { label: 'Upon Completion', color: 'bg-blue-100 text-blue-800', icon: Award },
  completed: { label: 'Earned', color: 'bg-green-100 text-green-800', icon: CheckCircle2 },
}

export default function CertificatesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-abs-navy">Certificates</h1>
        <p className="mt-1 text-gray-600">Your programme credentials and module certificates</p>
      </div>

      <div className="rounded-xl border border-abs-gold/30 bg-gradient-to-r from-abs-navy to-abs-navy-light p-6 text-white">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-abs-gold">
            <Award className="h-8 w-8 text-abs-navy" />
          </div>
          <div>
            <p className="text-sm text-white/70">Programme</p>
            <h2 className="text-xl font-semibold">Executive MBA – University of Amsterdam</h2>
            <p className="mt-1 text-sm text-white/60">
              Mithun Raj Kumar · India Executive Track · Cohort 2026 · Enrolled · Starts July 2026
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert) => {
          const status = statusConfig[cert.status]
          const StatusIcon = status.icon
          return (
            <div key={cert.id} className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-abs-cream">
                  <Award className="h-6 w-6 text-abs-gold" />
                </div>
                <span className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${status.color}`}>
                  <StatusIcon className="h-3 w-3" />
                  {status.label}
                </span>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{cert.title}</h3>
              <p className="mt-1 text-sm text-gray-500">{cert.issuer}</p>
              <p className="mt-3 text-xs text-gray-400">{cert.description}</p>
              <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                <span className="text-xs text-gray-500">{cert.date}</span>
                <span className="text-xs text-gray-400">Not yet available</span>
              </div>
            </div>
          )
        })}
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <h2 className="font-semibold text-abs-navy">Accreditation</h2>
        <p className="mt-2 text-sm text-gray-600">
          The Amsterdam Business School Executive MBA is accredited by AACSB, AMBA, and EQUIS —
          the triple crown of business school accreditation. Your degree will be awarded by the
          University of Amsterdam upon successful completion of all programme requirements.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {['AACSB', 'AMBA', 'EQUIS', 'NVAO'].map((acc) => (
            <span key={acc} className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700">
              {acc}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
