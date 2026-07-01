export interface CourseFeeLineItem {
  label: string
  description: string
  amount: number
  includes: string[]
}

export const autoDebitLastDate = '2026-07-05'
export const dueDiligenceDeadline = '2026-06-29'
export const dueDiligenceFee = 30000

export const courseFeeExclTax = 310000
export const courseFeeBtwRate = 3
export const courseFeeBtw = 9300
export const courseFeeTotal = courseFeeExclTax + courseFeeBtw
export const totalPayable = courseFeeTotal + dueDiligenceFee

/**
 * EMBA fee breakup for the India Executive Track (fully online delivery):
 * academic tuition + programme fees (materials, live online delivery, leadership, technology, events).
 */
export const courseFeeBreakup: CourseFeeLineItem[] = [
  {
    label: 'Academic Tuition',
    description: 'Core EMBA instruction across four semesters',
    amount: 165000,
    includes: [
      'Live online faculty sessions (IST schedule)',
      'Semester assessments and academic credit',
      'University of Amsterdam degree conferral',
    ],
  },
  {
    label: 'Programme Materials & Case Library',
    description: 'Required readings, cases, and digital study resources',
    amount: 35000,
    includes: [
      'Case study packs and course textbooks',
      'HBR and academic journal access',
      'Pre-reading and assignment materials',
    ],
  },
  {
    label: 'Live Online Delivery & Faculty Access',
    description: 'Real-time instruction for India Executive Track participants',
    amount: 55000,
    includes: [
      'IST-scheduled live online sessions across 24 months',
      'Faculty-led workshops, breakout rooms, and Q&A',
      'Online intensive modules and synchronous cohort learning',
    ],
  },
  {
    label: 'Amsterdam Leadership Programme',
    description: 'Online leadership development track',
    amount: 25000,
    includes: [
      'Live online leadership labs and executive coaching modules',
      'Peer leadership assessments',
      'Runs alongside core curriculum',
    ],
  },
  {
    label: 'Technology & Learning Platform',
    description: 'Digital infrastructure for the India Executive Track',
    amount: 12000,
    includes: [
      'Virtual classroom and student portal access',
      'Learning management system licences',
      'Recorded session library',
    ],
  },
  {
    label: 'Cohort Events & Executive Networking',
    description: 'Virtual programme events and peer network activities',
    amount: 10000,
    includes: [
      'Online cohort orientation and networking sessions',
      'Virtual executive speaker series',
      'Digital graduation ceremony participation',
    ],
  },
  {
    label: 'Programme Administration',
    description: 'Enrolment, records, and student services',
    amount: 8000,
    includes: [
      'Academic records and transcript processing',
      'Finance and admissions support',
      'Cohort coordination for India track',
    ],
  },
]

export const courseFeeInstalments = [
  { label: 'Single Instalment', amount: courseFeeTotal, debitDate: autoDebitLastDate },
]

export function formatInr(amount: number) {
  return `₹${amount.toLocaleString('en-IN')}`
}

export function formatCourseFeeBreakupText() {
  const lines = courseFeeBreakup.map(
    (item) => `• ${item.label}: ${formatInr(item.amount)}`,
  )
  return [
    'Course Fee Breakdown (excl. BTW):',
    ...lines,
    `Subtotal: ${formatInr(courseFeeExclTax)}`,
  ].join('\n')
}
