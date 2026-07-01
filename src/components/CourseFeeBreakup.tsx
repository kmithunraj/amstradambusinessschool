import { courseFeeBreakup, courseFeeExclTax, courseFeeBtw, courseFeeBtwRate, courseFeeTotal, formatInr } from '../data/fees'

interface CourseFeeBreakupProps {
  showTax?: boolean
  compact?: boolean
}

export default function CourseFeeBreakup({ showTax = true, compact = false }: CourseFeeBreakupProps) {
  return (
    <div className="space-y-3">
      <div className="overflow-hidden rounded-lg border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-abs-cream">
            <tr>
              <th className="px-4 py-2.5 font-semibold text-abs-navy">Component</th>
              {!compact && <th className="hidden px-4 py-2.5 font-semibold text-abs-navy sm:table-cell">Covers</th>}
              <th className="px-4 py-2.5 text-right font-semibold text-abs-navy">Amount</th>
            </tr>
          </thead>
          <tbody>
            {courseFeeBreakup.map((item, i) => (
              <tr key={item.label} className={i > 0 ? 'border-t border-gray-100' : ''}>
                <td className="px-4 py-3">
                  <p className="font-medium text-gray-900">{item.label}</p>
                  <p className="mt-0.5 text-xs text-gray-500">{item.description}</p>
                  {compact && (
                    <p className="mt-1 text-xs text-gray-400">{item.includes[0]}</p>
                  )}
                </td>
                {!compact && (
                  <td className="hidden px-4 py-3 text-xs text-gray-600 sm:table-cell">
                    <ul className="space-y-1">
                      {item.includes.map((point) => (
                        <li key={point}>· {point}</li>
                      ))}
                    </ul>
                  </td>
                )}
                <td className="px-4 py-3 text-right font-medium text-gray-900">
                  {formatInr(item.amount)}
                </td>
              </tr>
            ))}
            <tr className="border-t-2 border-gray-200 bg-abs-cream/50">
              <td className="px-4 py-3 font-semibold text-abs-navy" colSpan={compact ? 1 : 2}>
                Subtotal (excl. BTW)
              </td>
              <td className="px-4 py-3 text-right font-semibold text-abs-navy">
                {formatInr(courseFeeExclTax)}
              </td>
            </tr>
            {showTax && (
              <>
                <tr className="border-t border-gray-100">
                  <td className="px-4 py-3 text-gray-700" colSpan={compact ? 1 : 2}>
                    BTW — Belasting toegevoegde waarde ({courseFeeBtwRate}%)
                  </td>
                  <td className="px-4 py-3 text-right text-gray-700">{formatInr(courseFeeBtw)}</td>
                </tr>
                <tr className="border-t border-gray-200 bg-abs-navy/5">
                  <td className="px-4 py-3 font-semibold text-abs-navy" colSpan={compact ? 1 : 2}>
                    Total (incl. BTW)
                  </td>
                  <td className="px-4 py-3 text-right font-semibold text-abs-navy">
                    {formatInr(courseFeeTotal)}
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500">
        Delivered fully online for India Executive Track participants. Personal equipment and internet connectivity are not included.
      </p>
    </div>
  )
}
