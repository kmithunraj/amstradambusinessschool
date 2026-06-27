export interface Course {
  name: string
  credits?: number
  enrolled?: boolean
  status?: 'enrolled' | 'available' | 'completed'
}

export interface Semester {
  label: string
  courses: Course[]
  note?: string
}

export interface Specialization {
  name: string
  electives: string[]
}

export const curriculum: Semester[] = [
  {
    label: 'Year 1 – Semester 1',
    courses: [
      { name: 'Strategic Performance Management', credits: 6, enrolled: true, status: 'enrolled' },
      { name: 'Competitive & Corporate Strategy', credits: 6, enrolled: true, status: 'enrolled' },
      { name: 'Change Management', credits: 6, enrolled: true, status: 'enrolled' },
      { name: 'Corporate Finance', credits: 6, enrolled: true, status: 'enrolled' },
      { name: 'Purpose-Driven Strategy', credits: 6, enrolled: true, status: 'enrolled' },
      { name: 'Digital Business', credits: 6, enrolled: true, status: 'enrolled' },
      { name: 'Amsterdam Leadership Programme (runs alongside the curriculum)', credits: 0, enrolled: true, status: 'enrolled' },
    ],
  },
  {
    label: 'Year 1 – Semester 2',
    courses: [
      { name: 'Ethics, Responsibility and Sustainability', credits: 6, status: 'available' },
      { name: 'Business Negotiations', credits: 6, status: 'available' },
      { name: 'Developments in International Business', credits: 6, status: 'available' },
      { name: 'Valuation', credits: 6, status: 'available' },
      { name: 'The Executive Process', credits: 6, status: 'available' },
      { name: 'Strategic Analytics', credits: 6, status: 'available' },
      { name: 'Actualysis (multidisciplinary business analysis course)', credits: 6, status: 'available' },
      { name: 'Elective(s)', credits: 6, status: 'available' },
    ],
  },
  {
    label: 'Year 2 – Semester 1',
    note: 'You must complete at least two electives from the same specialization area.',
    courses: [
      { name: 'Elective 1 (Choose a Specialization)', credits: 6, status: 'available' },
    ],
  },
]

export const specializations: Specialization[] = [
  {
    name: 'Entrepreneurship',
    electives: ['Product Management', 'Scaling-up Businesses', 'Entrepreneurial Finance'],
  },
  {
    name: 'Corporate Transformation',
    electives: ['Corporate Venturing', 'Innovation Management', 'Supply Chain Transformation'],
  },
  {
    name: 'International Track',
    electives: ['International Study Trip', 'International Consulting Trip', 'International Startup Trip'],
  },
]
