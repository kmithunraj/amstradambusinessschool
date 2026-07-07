export const upcomingClasses = [
  {
    id: 1,
    title: 'Strategic Performance Management',
    date: '2026-07-10',
    time: '18:30 – 21:30 IST',
    format: 'Live Online',
    faculty: 'Prof. Dr. Willem van der Berg',
    room: 'Virtual Classroom A',
  },
  {
    id: 2,
    title: 'Competitive & Corporate Strategy',
    date: '2026-07-12',
    time: '18:30 – 21:30 IST',
    format: 'Live Online',
    faculty: 'Prof. Dr. Anna de Vries',
    room: 'Virtual Classroom B',
  },
  {
    id: 3,
    title: 'Amsterdam Leadership Programme',
    date: '2026-07-14',
    time: '17:00 – 20:00 IST',
    format: 'Hybrid',
    faculty: 'Dr. Pieter Janssen',
    room: 'Leadership Lab',
  },
  {
    id: 4,
    title: 'Corporate Finance',
    date: '2026-07-17',
    time: '18:30 – 21:30 IST',
    format: 'Live Online',
    faculty: 'Prof. Dr. Lars Hendriks',
    room: 'Virtual Classroom A',
  },
  {
    id: 5,
    title: 'Digital Business',
    date: '2026-07-19',
    time: '18:30 – 21:30 IST',
    format: 'Live Online',
    faculty: 'Dr. Sophie Bakker',
    room: 'Virtual Classroom C',
  },
]

export const programmeStartDate = '2026-07-10'
export const orientationDate = '2026-07-08'

export const scheduleEvents = [
  { date: '2026-07-08', title: 'Cohort Orientation – Live Online', type: 'event' },
  { date: '2026-07-10', title: 'Strategic Performance Management – Session 1', type: 'class' },
  { date: '2026-07-12', title: 'Competitive & Corporate Strategy – Session 1', type: 'class' },
  { date: '2026-07-14', title: 'Amsterdam Leadership Programme – Kick-off', type: 'workshop' },
  { date: '2026-07-17', title: 'Corporate Finance – Session 1', type: 'class' },
  { date: '2026-07-19', title: 'Digital Business – Session 1', type: 'class' },
  { date: '2026-07-22', title: 'Change Management – Session 1', type: 'class' },
  { date: '2026-07-24', title: 'Purpose-Driven Strategy – Session 1', type: 'class' },
  { date: '2026-07-26', title: 'Executive Networking Session', type: 'event' },
  { date: '2026-08-01', title: 'Amsterdam Immersion Week – Info Session', type: 'event' },
]

export const admissionCategory = 'Tier 2'
export const programmeDegree = 'Business Development'
export const selectionDate = '2026-06-26'

export {
  autoDebitLastDate,
  dueDiligenceDeadline,
  dueDiligenceFee,
  courseFeeExclTax,
  courseFeeBtw,
  courseFeeBtwRate,
  courseFeeTotal,
  totalPayable,
  courseFeeInstalments,
  courseFeeBreakup,
  formatCourseFeeBreakupText,
  formatInr,
} from './fees'

import {
  autoDebitLastDate,
  courseFeeExclTax,
  courseFeeBtw,
  courseFeeTotal,
  formatCourseFeeBreakupText,
  formatInr,
} from './fees'

export const emails = [
  {
    id: 7,
    from: 'Finance Office · Amsterdam Business School',
    subject: 'Payment Successful — Course Fee Auto-Debit Confirmed',
    preview: 'Your course fee auto-debit of ₹3,19,300 has been processed successfully. Payment reference: ABS-CF-2026-19057...',
    date: '2026-07-05',
    unread: true,
    feeType: 'auto-debit-success' as const,
    body: `Dear Mithun Raj Kumar,

This is to confirm that the scheduled auto-debit for your course fee has been processed successfully.

Payment Confirmation:
Fee Type: Course Fee Auto-Debit
Amount Debited: ${formatInr(courseFeeTotal)} (INR)
Payment Date: 5 July 2026
Payment Mode: e-NACH Auto-Debit
Bank Reference Number: UVA-ENACH-260705-44192
Finance Receipt Number: ABS-FIN-2026-19057
Mandate Reference: ENACH-ABS-784421
Status: Successful

Fee Summary:
Course Fee (excl. BTW): ${formatInr(courseFeeExclTax)}
BTW — Belasting toegevoegde waarde (3%): ${formatInr(courseFeeBtw)}
Total Course Fee Paid: ${formatInr(courseFeeTotal)}

Your course fee stands fully settled. There are no pending programme fee payments at this time.

Please retain this email for your finance records and reimbursement documentation, if applicable.

Regards,

Finance Office
Amsterdam Business School
University of Amsterdam`,
  },
  {
    id: 6,
    from: 'Finance Office · Amsterdam Business School',
    subject: 'Course Fee — Auto-Debit Schedule & Payment Details',
    preview: 'Your course fee of ₹3,19,300 (incl. BTW) will be auto-debited in a single instalment via e-NACH. Last date of auto-debit: 5 July 2026...',
    date: '2026-06-28',
    unread: true,
    feeType: 'course-fee' as const,
    deadline: autoDebitLastDate,
    body: `Dear Mithun Raj Kumar,

Thank you for your enrolment in the Business Development degree under the Tier 2 category. Please find below your course fee breakup and auto-debit schedule.

${formatCourseFeeBreakupText()}

Fee Summary (incl. Amsterdam BTW):
Course Fee (excl. BTW): ${formatInr(courseFeeExclTax)}
BTW — Belasting toegevoegde waarde (3%): ${formatInr(courseFeeBtw)}
Total Course Fee (incl. BTW): ${formatInr(courseFeeTotal)}

Auto-Debit (Company Bank Account):
Single Instalment: ${formatInr(courseFeeTotal)} — Auto-debit on 5 July 2026

Last Date of Auto-Debit: 5 July 2026

Per Amsterdam Business School invoicing policy, BTW (Dutch VAT) is applied to executive programme services for India-track participants as per cross-border education regulations.

Please ensure sufficient balance is maintained in your registered company bank account before the debit date. All programme payments must be processed through your company bank account as per programme policy.

If you have any questions regarding your fee schedule, please contact the Finance Office.

Regards,

Finance Office
Amsterdam Business School
University of Amsterdam`,
  },
  {
    id: 5,
    from: 'Finance Office · Amsterdam Business School',
    subject: 'Payment Successful — Degree Due Diligence Fee',
    preview: 'We have received your Degree Due Diligence fee payment of ₹30,000. Transaction reference: ABS-DD-2026-88421...',
    date: '2026-06-27',
    unread: false,
    feeType: 'payment-success' as const,
    body: `Dear Mithun Raj Kumar,

This is to confirm that your payment has been received successfully.

Payment Confirmation:
Fee Type: Degree Due Diligence Fee
Amount Paid: ₹30,000 (INR)
Transaction Reference: ABS-DD-2026-88421
Payment Date: 27 June 2026
Payment Mode: Company bank account
Status: Successful

No further action is required for this payment.

Regards,

Finance Office
Amsterdam Business School
University of Amsterdam`,
  },
  {
    id: 4,
    from: 'Finance Office · Amsterdam Business School',
    subject: 'Degree Due Diligence Fee — Payment Required',
    preview: 'Please remit the Degree Due Diligence fee of ₹30,000 through your registered company bank account. Last date: 29 June 2026...',
    date: '2026-06-27',
    unread: false,
    deadline: '2026-06-29',
    feeType: 'due-diligence' as const,
    body: `Dear Mithun Raj Kumar,

Further to your selection for the Business Development degree under the Tier 2 category, please note that the Degree Due Diligence fee is now due.

Fee Details:
Fee Type: Degree Due Diligence Fee
Amount: ₹30,000 (INR)
Last Date for Payment: 29 June 2026
Payment Mode: Company bank account (as per programme policy)

All financial transactions for this programme must be processed through your company bank account. Please ensure payment is initiated before the deadline to avoid any delay in your enrolment confirmation.

If you have already remitted the fee, kindly disregard this reminder.

Regards,

Finance Office
Amsterdam Business School
University of Amsterdam`,
  },
  {
    id: 3,
    from: 'Finance Office · Amsterdam Business School',
    subject: 'ENACH Registration Successful',
    preview: 'Your e-NACH mandate for auto-debit has been successfully registered on your company bank account...',
    date: '2026-06-27',
    unread: true,
    body: `Dear Mithun Raj Kumar,

This is to confirm that your e-NACH (Electronic National Automated Clearing House) registration has been completed successfully.

Registration Details:
Account Type: Company Bank Account
Mandate Status: Active
Auto-Debit: Enabled for programme fee instalments

Future tuition and programme-related payments will be auto-debited from your registered company bank account as per the agreed schedule.

No further action is required for ENACH setup at this time.

Regards,

Finance Office
Amsterdam Business School
University of Amsterdam`,
  },
  {
    id: 2,
    from: 'Finance Office · Amsterdam Business School',
    subject: 'Action Required — Register e-NACH for Fee Auto-Debit',
    preview: 'All programme payments must be processed through your company bank account. Please complete your e-NACH registration at the earliest...',
    date: '2026-06-26',
    unread: false,
    body: `Dear Mithun Raj Kumar,

Congratulations on your selection for the Business Development degree programme.

To proceed with fee processing, you are required to register for e-NACH (Electronic National Automated Clearing House) to enable auto-debit of programme instalments.

Important:
• All financial transactions for this programme must be done through your company bank account.
• Please process the ENACH registration as soon as possible to avoid delays in your onboarding.

Once registered, future fee instalments will be automatically debited as per your payment schedule.

Please complete the ENACH registration through the link shared by our banking partner or contact the Finance Office for assistance.

Regards,

Finance Office
Amsterdam Business School
University of Amsterdam`,
  },
  {
    id: 1,
    from: 'Admissions Office · Amsterdam Business School',
    subject: 'Congratulations — You Have Been Selected',
    preview: 'Dear Mithun, we are pleased to inform you that you have been selected for the Amsterdam Business School Business Development degree, India Executive Track, under the Tier 2 category...',
    date: '2026-06-26',
    unread: false,
    category: 'Tier 2',
    body: `Dear Mithun Raj Kumar,

Congratulations! We are pleased to inform you that you have been selected for the Amsterdam Business School Business Development degree, India Executive Track.

After a rigorous review of your application, interview performance, and professional profile, the Admissions Committee has confirmed your place in the programme under the Tier 2 category.

Selection Category: Tier 2
Degree: Business Development
Track: India Executive Track
Cohort: 2026
Date of Selection: 26 June 2026
Programme Start: 10 July 2026

We look forward to welcoming you to the Amsterdam Business School community.

Warm regards,

Dr. Helena van Dijk
Director of Admissions
Amsterdam Business School
University of Amsterdam`,
  },
]

export const certificates = [
  {
    id: 1,
    title: 'Executive Leadership Foundations',
    issuer: 'Amsterdam Business School',
    date: 'Available after programme completion',
    status: 'upcoming' as const,
    description: 'Awarded upon completion of the Amsterdam Leadership Programme modules.',
  },
  {
    id: 2,
    title: 'Strategic Performance Management – Module Certificate',
    issuer: 'Amsterdam Business School',
    date: 'Available after module completion',
    status: 'upcoming' as const,
    description: 'Module completion certificate for Year 1, Semester 1.',
  },
  {
    id: 3,
    title: 'Executive MBA Degree',
    issuer: 'University of Amsterdam',
    date: 'Expected June 2028',
    status: 'upcoming' as const,
    description: 'Full EMBA degree upon successful completion of all programme requirements.',
  },
]

export const forumPosts = [
  {
    id: 1,
    author: 'Priya Sharma',
    role: 'Senior VP, FinTech – Mumbai',
    title: 'Pre-reading for Strategic Performance Management – tips?',
    content: 'Has anyone started the Van der Berg case pack yet? Classes kick off on 10 July and I want to make sure I am prepared for the first session.',
    replies: 5,
    likes: 8,
    time: '2 hours ago',
    tag: 'Strategic Performance Management',
  },
  {
    id: 2,
    author: 'Rajesh Menon',
    role: 'Director, Manufacturing – Bangalore',
    title: 'Amsterdam immersion week – travel tips?',
    content: 'First time visiting Amsterdam for the September residency. Any recommendations on neighbourhoods to stay near the ABS campus?',
    replies: 14,
    likes: 21,
    time: '5 hours ago',
    tag: 'General',
  },
  {
    id: 3,
    author: 'Ananya Desai',
    role: 'Head of Strategy, E-commerce – Delhi',
    title: 'Corporate Finance pre-reading – where to start?',
    content: 'The reading list for Corporate Finance looks extensive. Anyone prioritising specific chapters before the 17 July session?',
    replies: 4,
    likes: 6,
    time: '1 day ago',
    tag: 'Corporate Finance',
  },
  {
    id: 4,
    author: 'Mithun Raj Kumar',
    role: 'Executive – India Track',
    title: 'Study group for Semester 1 modules?',
    content: 'Looking to connect with a few cohort mates before classes begin in July. Prefer evening IST slots for pre-session discussions. DM me if interested!',
    replies: 2,
    likes: 5,
    time: '1 day ago',
    tag: 'General',
    isOwn: true,
  },
  {
    id: 5,
    author: 'Vikram Iyer',
    role: 'CFO, Healthcare – Chennai',
    title: 'Orientation session on 8 July – what to expect?',
    content: 'Is anyone else attending the cohort orientation on 8 July? Would be good to connect before the programme officially starts on the 10th.',
    replies: 9,
    likes: 14,
    time: '2 days ago',
    tag: 'General',
  },
]

export const enrolledCourses = [
  { name: 'Strategic Performance Management', firstSession: '10 Jul 2026', faculty: 'Prof. Dr. Willem van der Berg', status: 'enrolled' as const },
  { name: 'Competitive & Corporate Strategy', firstSession: '12 Jul 2026', faculty: 'Prof. Dr. Anna de Vries', status: 'enrolled' as const },
  { name: 'Change Management', firstSession: '22 Jul 2026', faculty: 'Dr. Eva Smit', status: 'enrolled' as const },
  { name: 'Corporate Finance', firstSession: '17 Jul 2026', faculty: 'Prof. Dr. Lars Hendriks', status: 'enrolled' as const },
  { name: 'Purpose-Driven Strategy', firstSession: '24 Jul 2026', faculty: 'Dr. Marieke Vos', status: 'enrolled' as const },
  { name: 'Digital Business', firstSession: '19 Jul 2026', faculty: 'Dr. Sophie Bakker', status: 'enrolled' as const },
  { name: 'Amsterdam Leadership Programme', firstSession: '14 Jul 2026', faculty: 'Dr. Pieter Janssen', status: 'enrolled' as const },
]
