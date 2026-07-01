import { useState } from 'react'
import { Mail, MailOpen, ArrowLeft, Star, Award } from 'lucide-react'
import {
  emails,
  programmeDegree,
  dueDiligenceFee,
  courseFeeExclTax,
  courseFeeBtw,
  courseFeeBtwRate,
  courseFeeTotal,
  autoDebitLastDate,
  courseFeeInstalments,
} from '../data/mockData'
import CourseFeeBreakup from '../components/CourseFeeBreakup'

function formatEmailDate(date: string) {
  return new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default function EmailsPage() {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const selected = emails.find((e) => e.id === selectedId)

  if (selected) {
    return (
      <div className="space-y-4">
        <button
          onClick={() => setSelectedId(null)}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-abs-navy"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to inbox
        </button>
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <div className="border-b border-gray-100 pb-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h1 className="text-xl font-semibold text-gray-900">{selected.subject}</h1>
              {selected.category && (
                <span className="flex items-center gap-1.5 rounded-full bg-abs-navy px-3 py-1 text-xs font-semibold text-abs-gold">
                  <Award className="h-3.5 w-3.5" />
                  Selected · {selected.category}
                </span>
              )}
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span>
                From: <span className="font-medium text-gray-700">{selected.from}</span>
              </span>
              <span>{formatEmailDate(selected.date)}</span>
            </div>
          </div>

          {'feeType' in selected && selected.feeType === 'payment-success' && (
            <div className="mt-5 rounded-xl border border-green-200 bg-green-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-green-700">Payment Successful</p>
              <p className="mt-1 text-lg font-bold text-abs-navy">
                ₹{dueDiligenceFee.toLocaleString('en-IN')} — Degree Due Diligence Fee
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Payment received via company bank account.
              </p>
            </div>
          )}

          {'feeType' in selected && selected.feeType === 'course-fee' && (
            <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">Course Fee · Auto-Debit</p>
              <p className="mt-1 text-lg font-bold text-abs-navy">
                ₹{courseFeeTotal.toLocaleString('en-IN')} incl. BTW
              </p>
              <p className="mt-2 text-sm text-gray-600">
                ₹{courseFeeExclTax.toLocaleString('en-IN')} excl. BTW + ₹{courseFeeBtw.toLocaleString('en-IN')} BTW ({courseFeeBtwRate}%)
              </p>
              <ul className="mt-3 space-y-1 text-sm text-gray-700">
                <li>Last date of auto-debit: {formatEmailDate(autoDebitLastDate)}</li>
                {courseFeeInstalments.map((instalment) => (
                  <li key={instalment.label}>
                    {instalment.label}: ₹{instalment.amount.toLocaleString('en-IN')} — {formatEmailDate(instalment.debitDate)}
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-amber-700">
                  Fee Breakdown
                </p>
                <CourseFeeBreakup compact />
              </div>
            </div>
          )}

          {'deadline' in selected && selected.deadline && selected.feeType === 'due-diligence' && (
            <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">Payment Deadline</p>
              <p className="mt-1 text-lg font-bold text-abs-navy">
                {formatEmailDate(selected.deadline)}
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Degree Due Diligence fee of ₹{dueDiligenceFee.toLocaleString('en-IN')} due via company bank account.
              </p>
            </div>
          )}

          {selected.category && (
            <div className="mt-5 rounded-xl border border-abs-gold/30 bg-abs-cream p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-abs-gold">Selection Category</p>
              <p className="mt-1 text-lg font-bold text-abs-navy">{selected.category}</p>
              <p className="mt-1 text-sm text-gray-600">
                You have been selected for the {programmeDegree} degree under the {selected.category} admissions category.
              </p>
            </div>
          )}

          <div className="mt-6 whitespace-pre-line text-sm leading-relaxed text-gray-700">
            {selected.body}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-abs-navy">Emails</h1>
          <p className="mt-1 text-gray-600">Admissions and programme communications</p>
        </div>
        <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
          {emails.filter((e) => e.unread).length} unread
        </span>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
        {emails.map((email, i) => (
          <button
            key={email.id}
            onClick={() => setSelectedId(email.id)}
            className={`flex w-full items-start gap-4 px-6 py-4 text-left transition-colors hover:bg-abs-cream ${
              i > 0 ? 'border-t border-gray-100' : ''
            } ${email.unread ? 'bg-blue-50/30' : ''}`}
          >
            <div className="mt-0.5">
              {email.unread ? (
                <Mail className="h-5 w-5 text-abs-navy" />
              ) : (
                <MailOpen className="h-5 w-5 text-gray-400" />
              )}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`text-sm ${email.unread ? 'font-semibold text-gray-900' : 'font-medium text-gray-700'}`}>
                  {email.from}
                </span>
                {email.unread && (
                  <Star className="h-3 w-3 fill-abs-gold text-abs-gold" />
                )}
                {email.category && (
                  <span className="rounded-full bg-abs-navy px-2 py-0.5 text-xs font-medium text-abs-gold">
                    {email.category}
                  </span>
                )}
                {'deadline' in email && email.deadline && (
                  <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">
                    {'feeType' in email && email.feeType === 'course-fee' ? 'Auto-debit by' : 'Due'}{' '}
                    {formatEmailDate(email.deadline)}
                  </span>
                )}
              </div>
              <p className={`mt-0.5 text-sm ${email.unread ? 'font-medium text-gray-800' : 'text-gray-600'}`}>
                {email.subject}
              </p>
              <p className="mt-1 truncate text-xs text-gray-400">{email.preview}</p>
            </div>
            <span className="shrink-0 text-xs text-gray-400">{formatEmailDate(email.date)}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
