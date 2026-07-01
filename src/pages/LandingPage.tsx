import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Globe,
  Users,
  Award,
  BookOpen,
  MapPin,
  ChevronRight,
  GraduationCap,
  Briefcase,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Clock,
  Building2,
  TrendingUp,
  Quote,
  Mail,
  Phone,
} from 'lucide-react'
import { landingImages } from '../data/landingImages'

const stats = [
  { value: 'Triple Crown', label: 'AACSB · AMBA · EQUIS Accredited' },
  { value: '#1 NL', label: 'Business School in the Netherlands' },
  { value: '24 Months', label: 'Part-time Executive Format' },
  { value: 'India Track', label: 'Designed for Indian Executives' },
]

const outcomes = [
  { value: '2026', label: 'Inaugural India Executive Track launch year' },
  { value: '2+ yrs', label: 'Minimum professional experience to apply' },
  { value: '12+', label: 'Corporate partners committed to the inaugural cohort' },
  { value: '3', label: 'Specialization tracks to align with your career goals' },
]

const highlights = [
  {
    title: 'Global Perspective, Local Relevance',
    description:
      'Combine Amsterdam\'s international business ecosystem with curriculum tailored for Indian executives navigating global markets.',
    icon: Globe,
  },
  {
    title: 'Executive Peer Network',
    description:
      'Learn alongside ambitious executives from India\'s top corporations, startups, and multinational offices.',
    icon: Users,
  },
  {
    title: 'Amsterdam Immersion',
    description:
      'Experience the ABS campus in Amsterdam with dedicated residency weeks and the Amsterdam Leadership Programme.',
    icon: MapPin,
  },
  {
    title: 'Triple-Accredited Degree',
    description:
      'Earn a University of Amsterdam Executive MBA from one of Europe\'s most respected business schools.',
    icon: Award,
  },
]

const audienceProfiles = [
  {
    title: 'Rising Managers & Team Leads',
    description:
      'Executives with 2+ years of experience who are stepping into broader responsibility and want a globally recognised MBA to accelerate their trajectory.',
    icon: Briefcase,
  },
  {
    title: 'Functional Specialists',
    description:
      'Professionals in finance, operations, technology, or consulting ready to move from expert roles into general management and strategic leadership.',
    icon: TrendingUp,
  },
  {
    title: 'Entrepreneurs & Intrapreneurs',
    description:
      'Founders and business builders who need strategic frameworks, investor readiness, and a European network to scale their ventures.',
    icon: Globe,
  },
]

const specializations = [
  {
    name: 'Entrepreneurship',
    description: 'Product management, scaling ventures, and entrepreneurial finance for founders and intrapreneurs.',
    courses: ['Product Management', 'Scaling-up Businesses', 'Entrepreneurial Finance'],
  },
  {
    name: 'Corporate Transformation',
    description: 'Drive innovation, venturing, and supply chain reinvention inside large organisations.',
    courses: ['Corporate Venturing', 'Innovation Management', 'Supply Chain Transformation'],
  },
  {
    name: 'International Track',
    description: 'Study trips and consulting immersions designed to build a truly global leadership mindset.',
    courses: ['International Study Trip', 'International Consulting Trip', 'International Startup Trip'],
  },
]

const admissionsSteps = [
  {
    step: '01',
    title: 'Request Information',
    description: 'Speak with our India Executive Track advisors about fit, format, and upcoming intake dates.',
  },
  {
    step: '02',
    title: 'Submit Application',
    description: 'Provide your CV, professional references, and a statement of purpose outlining your leadership goals.',
  },
  {
    step: '03',
    title: 'Admissions Interview',
    description: 'Meet faculty and programme directors to discuss your experience, aspirations, and cohort fit.',
  },
  {
    step: '04',
    title: 'Enrol & Onboard',
    description: 'Receive your offer, complete enrolment, and access the student portal before your first live session.',
  },
]

const corporateEndorsements = [
  {
    quote:
      'We are proud to partner with ABS on the inaugural India Executive Track. Graduates who combine strong professional fundamentals with this global MBA are exactly the talent we want in our leadership pipeline.',
    name: 'Rajesh Krishnan',
    role: 'Chief Human Resources Officer',
    company: 'Tata Consultancy Services',
    commitment: 'Committed to interviewing top programme graduates for leadership roles',
  },
  {
    quote:
      'This programme launches at the right moment for Indian executives. We encourage our high-potential managers with 2+ years of experience to apply — and we are keen to onboard successful candidates into our regional leadership programmes.',
    name: 'Ananya Desai',
    role: 'Managing Director, Retail Banking',
    company: 'HDFC Bank',
    commitment: 'Employer partner · Sponsorship and placement pathways for cohort standouts',
  },
  {
    quote:
      'ABS brings European rigour to executive education in a format that works for India. We support this launch and look forward to welcoming programme graduates into consulting and transformation roles across our India offices.',
    name: 'Vikram Reddy',
    role: 'Senior Partner, Strategy Practice',
    company: 'Deloitte India',
    commitment: 'Open to onboarding successful graduates into client-facing leadership tracks',
  },
]

const faqs = [
  {
    question: 'How is the programme structured for Indian executives?',
    answer:
      'Live online sessions are scheduled for IST-friendly evening slots. You complete core coursework remotely and attend intensive Amsterdam residency weeks on the ABS campus, including the Amsterdam Leadership Programme.',
  },
  {
    question: 'What are the admission requirements?',
    answer:
      'Applicants need a minimum of 2+ years of professional experience, a bachelor\'s degree from a recognised institution, and strong English proficiency. We evaluate leadership potential, career ambition, and cohort diversity holistically — the programme is designed for executives ready to grow into broader strategic roles.',
  },
  {
    question: 'How long is the programme and when does it start?',
    answer:
      'The Executive MBA is a 24-month part-time programme across four semesters. The India Executive Track intake for 2026 begins in September. Application deadlines are published on the programme page and shared during advisory calls.',
  },
  {
    question: 'What specializations can I choose from?',
    answer:
      'In Year 2 you select at least two electives from one of three tracks: Entrepreneurship, Corporate Transformation, or International. Each track is designed for distinct career trajectories.',
  },
  {
    question: 'Is financial aid or employer sponsorship supported?',
    answer:
      'Many participants receive partial or full employer sponsorship. Our admissions team can provide documentation for HR and L&D departments. Scholarship opportunities are assessed on a case-by-case basis.',
  },
  {
    question: 'How do I access the student portal?',
    answer:
      'Enrolled students receive credentials to the ABS student portal where you can view classes, schedules, curriculum, certificates, resources, and the cohort forum. Use the login button to sign in with your professional email.',
  },
]

const accreditations = ['AACSB', 'AMBA', 'EQUIS', 'University of Amsterdam']

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-gray-200">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-semibold text-abs-navy">{question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-abs-gold transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && <p className="pb-5 text-sm leading-relaxed text-gray-600">{answer}</p>}
    </div>
  )
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-abs-navy/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-abs-gold">
              <GraduationCap className="h-6 w-6 text-abs-navy" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Amsterdam Business School</p>
              <p className="text-xs text-white/60">University of Amsterdam</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-lg border border-white/30 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 sm:inline-block"
            >
              Request Info
            </a>
            <Link
              to="/login"
              className="rounded-lg bg-abs-gold px-5 py-2.5 text-sm font-semibold text-abs-navy transition hover:bg-abs-gold-light"
            >
              Student Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center pt-16">
        <div className="absolute inset-0">
          <img
            src={landingImages.heroAmsterdamBusinessSchool}
            alt="Amsterdam Business School, University of Amsterdam — Roeterseilandcampus, Plantage Muidergracht"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-abs-navy/95 via-abs-navy/80 to-abs-navy/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="mb-4 inline-block rounded-full border border-abs-gold/40 bg-abs-gold/10 px-4 py-1.5 text-sm font-medium text-abs-gold">
              Inaugural Cohort · India Executive Track · Launching 2026
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Lead with Purpose.<br />Think Globally.<br />Act from Amsterdam.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              The Amsterdam Business School Executive MBA for Indian executives combines world-class
              faculty, a rigorous curriculum, and an immersive Amsterdam experience — delivered in a
              format designed for busy executives across India.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-abs-gold px-6 py-3 text-sm font-semibold text-abs-navy transition hover:bg-abs-gold-light"
              >
                Request Programme Information
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#programme"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Programme
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              {accreditations.map((badge) => (
                <span
                  key={badge}
                  className="rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-gray-200 bg-white py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl font-bold text-abs-navy md:text-3xl">{stat.value}</p>
              <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programme overview */}
      <section id="programme" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-abs-gold">The Programme</p>
              <h2 className="font-display mt-2 text-3xl font-bold text-abs-navy sm:text-4xl">
                Built for Indian Executives Who Lead at Scale
              </h2>
              <p className="mt-4 leading-relaxed text-gray-600">
                Our 24-month part-time Executive MBA is structured around live online sessions timed
                for Indian executives, combined with intensive Amsterdam residency weeks. You will
                develop strategic leadership capabilities while maintaining your professional
                responsibilities.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'Live sessions scheduled for IST evening slots',
                  'Amsterdam immersion weeks on the ABS campus',
                  'Amsterdam Leadership Programme alongside core curriculum',
                  'Specialization tracks in Entrepreneurship, Corporate Transformation, or International',
                  'Cohort-based learning with peers from across India',
                  'University of Amsterdam degree with triple accreditation',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-abs-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#admissions"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-abs-navy hover:text-abs-gold"
              >
                View admissions process
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={landingImages.executiveMeeting}
                alt="Executive boardroom discussion"
                loading="lazy"
                className="col-span-2 h-64 w-full rounded-2xl object-cover shadow-lg"
              />
              <img
                src={landingImages.universityCampus}
                alt="University campus"
                loading="lazy"
                className="h-48 w-full rounded-2xl object-cover shadow-lg"
              />
              <img
                src={landingImages.amsterdamCityscape}
                alt="Amsterdam cityscape"
                loading="lazy"
                className="h-48 w-full rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Career outcomes */}
      <section className="bg-abs-navy py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-abs-gold">Career Impact</p>
            <h2 className="font-display mt-2 text-3xl font-bold text-white sm:text-4xl">
              A New Programme Built for Emerging Executives
            </h2>
            <p className="mt-4 text-white/70">
              Launched in 2026, the India Executive Track is backed by corporate leaders who see
              the value of a triple-accredited global MBA for ambitious executives with 2+ years of
              professional experience.
            </p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm"
              >
                <p className="font-display text-3xl font-bold text-abs-gold">{item.value}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section id="who-its-for" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative">
              <img
                src={landingImages.executivePortrait}
                alt="Executive professional"
                loading="lazy"
                className="w-full rounded-2xl object-cover shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-abs-gold p-6 shadow-xl">
                <p className="font-display text-3xl font-bold text-abs-navy">2+</p>
                <p className="text-sm font-medium text-abs-navy/80">Years professional experience</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-abs-gold">Who It&apos;s For</p>
              <h2 className="font-display mt-2 text-3xl font-bold text-abs-navy sm:text-4xl">
                For Executives with 2+ Years Ready to Lead
              </h2>
              <p className="mt-4 leading-relaxed text-gray-600">
                The India Executive Track is a new programme launching in 2026 for professionals
                who have built a foundation in their careers and are ready for a rigorous, globally
                recognised MBA — without stepping away from their roles.
              </p>
              <div className="mt-8 space-y-6">
                {audienceProfiles.map(({ title, description, icon: Icon }) => (
                  <div key={title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-abs-cream">
                      <Icon className="h-6 w-6 text-abs-navy" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-abs-navy">{title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-gray-600">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why ABS */}
      <section id="why-abs" className="bg-abs-cream py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-abs-gold">Why Amsterdam Business School</p>
            <h2 className="font-display mt-2 text-3xl font-bold text-abs-navy sm:text-4xl">
              Europe&apos;s Gateway to Global Business Education
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Triple-crown accreditation, a world-class faculty, and Amsterdam&apos;s position as a
              European business hub make ABS the ideal setting for ambitious Indian executives.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-abs-navy">
                  <Icon className="h-6 w-6 text-abs-gold" />
                </div>
                <h3 className="font-semibold text-abs-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amsterdam experience */}
      <section id="amsterdam" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-abs-gold">The Amsterdam Experience</p>
              <h2 className="font-display mt-2 text-3xl font-bold text-abs-navy sm:text-4xl">
                Immersion Weeks on Europe&apos;s Most Dynamic Campus
              </h2>
              <p className="mt-4 leading-relaxed text-gray-600">
                Beyond online learning, you will spend intensive residency weeks at the ABS campus in
                Amsterdam. Walk the canals, study with international faculty, and build relationships
                that last long after graduation.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Building2, label: 'ABS Campus at Plantage Muidergracht' },
                  { icon: Users, label: 'Global cohort networking events' },
                  { icon: MapPin, label: 'Amsterdam Leadership Programme' },
                  { icon: Globe, label: 'European business ecosystem exposure' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 rounded-xl border border-gray-200 p-4">
                    <Icon className="h-5 w-5 shrink-0 text-abs-gold" />
                    <span className="text-sm text-gray-700">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={landingImages.amsterdamCityscape}
                alt="Amsterdam canals and architecture"
                loading="lazy"
                className="col-span-2 h-56 w-full rounded-2xl object-cover shadow-lg"
              />
              <img
                src={landingImages.lectureHall}
                alt="University lecture hall"
                loading="lazy"
                className="h-44 w-full rounded-2xl object-cover shadow-lg"
              />
              <img
                src={landingImages.teamCollaboration}
                alt="Students collaborating"
                loading="lazy"
                className="h-44 w-full rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum preview */}
      <section id="curriculum" className="bg-abs-cream py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative">
              <img
                src={landingImages.strategicPlanning}
                alt="Strategic planning session"
                loading="lazy"
                className="w-full rounded-2xl object-cover shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-abs-navy p-6 text-white shadow-xl md:block">
                <BookOpen className="h-8 w-8 text-abs-gold" />
                <p className="mt-3 font-display text-2xl font-bold">2 Years</p>
                <p className="text-sm text-white/70">4 Semesters · 3 Specializations</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-abs-gold">Curriculum Overview</p>
              <h2 className="font-display mt-2 text-3xl font-bold text-abs-navy">
                Rigorous. Relevant. Results-Driven.
              </h2>
              <p className="mt-4 text-gray-600">
                A structured progression from core strategic foundations to specialization electives,
                with the Amsterdam Leadership Programme woven throughout.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { year: 'Year 1 · Semester 1', courses: 'Strategic Performance Management, Corporate Strategy, Change Management, Corporate Finance, Digital Business + Leadership Programme' },
                  { year: 'Year 1 · Semester 2', courses: 'Ethics & Sustainability, Negotiations, International Business, Valuation, Strategic Analytics, Actualysis + Electives' },
                  { year: 'Year 2 · Semester 1', courses: 'Specialization electives: Entrepreneurship, Corporate Transformation, or International Track' },
                  { year: 'Year 2 · Semester 2', courses: 'Capstone integration, thesis or applied project, and final Amsterdam residency' },
                ].map((sem) => (
                  <div key={sem.year} className="rounded-xl border border-gray-200 bg-white p-4">
                    <p className="font-semibold text-abs-navy">{sem.year}</p>
                    <p className="mt-1 text-sm text-gray-600">{sem.courses}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-abs-gold">Specializations</p>
            <h2 className="font-display mt-2 text-3xl font-bold text-abs-navy sm:text-4xl">
              Choose Your Leadership Path
            </h2>
            <p className="mt-4 text-gray-600">
              In Year 2, complete at least two electives from the same specialization to deepen
              expertise aligned with your career ambitions.
            </p>
          </div>
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {specializations.map((spec) => (
              <div
                key={spec.name}
                className="flex flex-col rounded-2xl border border-gray-200 p-6 shadow-sm transition hover:border-abs-gold/40 hover:shadow-md"
              >
                <h3 className="font-display text-xl font-bold text-abs-navy">{spec.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">{spec.description}</p>
                <ul className="mt-6 space-y-2 border-t border-gray-100 pt-6">
                  {spec.courses.map((course) => (
                    <li key={course} className="flex items-center gap-2 text-sm text-gray-700">
                      <ChevronRight className="h-4 w-4 text-abs-gold" />
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning format */}
      <section className="bg-abs-navy py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-abs-gold">Learning Format</p>
              <h2 className="font-display mt-2 text-3xl font-bold text-white sm:text-4xl">
                Built Around Your Executive Schedule
              </h2>
              <p className="mt-4 text-white/75">
                No need to relocate. The India Executive Track blends flexible online delivery with
                high-impact in-person immersions so you can learn without pausing your career.
              </p>
              <div className="mt-10 space-y-6">
                {[
                  {
                    icon: Clock,
                    title: 'IST-Aligned Live Sessions',
                    text: 'Evening classes designed for executives in Mumbai, Delhi, Bengaluru, and beyond.',
                  },
                  {
                    icon: Calendar,
                    title: 'Amsterdam Residency Weeks',
                    text: 'Intensive on-campus modules each year for face-to-face learning and networking.',
                  },
                  {
                    icon: BookOpen,
                    title: 'Self-Paced Materials',
                    text: 'Pre-reads, case studies, and assignments accessible through the student portal.',
                  },
                ].map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-abs-gold/20">
                      <Icon className="h-6 w-6 text-abs-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{title}</h3>
                      <p className="mt-1 text-sm text-white/70">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <img
              src={landingImages.classroom}
              alt="Executive classroom learning"
              loading="lazy"
              className="w-full rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Industry leaders */}
      <section id="industry-leaders" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-abs-gold">Industry Endorsement</p>
            <h2 className="font-display mt-2 text-3xl font-bold text-abs-navy sm:text-4xl">
              Corporate Leaders Backing the 2026 Launch
            </h2>
            <p className="mt-4 text-gray-600">
              As an inaugural programme, the India Executive Track is supported by senior leaders
              across India&apos;s top organisations — encouraging applications and expressing interest
              in onboarding successful graduates into their teams.
            </p>
          </div>
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {corporateEndorsements.map((leader) => (
              <div key={leader.name} className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <Quote className="h-8 w-8 text-abs-gold/60" />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">
                  &ldquo;{leader.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-gray-100 pt-6">
                  <p className="font-semibold text-abs-navy">{leader.name}</p>
                  <p className="text-sm text-gray-600">{leader.role}</p>
                  <p className="text-sm font-medium text-abs-navy">{leader.company}</p>
                  <p className="mt-3 rounded-lg bg-abs-cream px-3 py-2 text-xs leading-relaxed text-gray-600">
                    {leader.commitment}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-abs-gold/30 bg-abs-cream p-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-abs-gold">Employer Interest</p>
            <p className="mx-auto mt-3 max-w-2xl text-gray-700">
              Partner organisations across technology, banking, consulting, and manufacturing are
              aligned with the programme launch and interested in recruiting high-performing
              graduates from the inaugural cohort.
            </p>
          </div>
        </div>
      </section>

      {/* Admissions */}
      <section id="admissions" className="bg-abs-cream py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-abs-gold">Admissions</p>
            <h2 className="font-display mt-2 text-3xl font-bold text-abs-navy sm:text-4xl">
              Your Path to Enrolment
            </h2>
            <p className="mt-4 text-gray-600">
              Applications for the inaugural September 2026 intake are now open. Early applications
              are encouraged — cohort seats are limited for this first India Executive Track class.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {admissionsSteps.map((step) => (
              <div key={step.step} className="relative rounded-2xl bg-white p-6 shadow-sm">
                <span className="font-display text-4xl font-bold text-abs-gold/30">{step.step}</span>
                <h3 className="mt-2 font-semibold text-abs-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-2xl bg-abs-navy p-8 text-center sm:p-10">
            <p className="text-sm font-medium text-abs-gold">Inaugural intake: September 2026</p>
            <p className="font-display mt-2 text-2xl font-bold text-white">
              Application deadline: 15 July 2026
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-abs-gold px-8 py-3.5 text-sm font-semibold text-abs-navy transition hover:bg-abs-gold-light"
            >
              Start Your Application Enquiry
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-abs-gold">FAQ</p>
            <h2 className="font-display mt-2 text-3xl font-bold text-abs-navy sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mt-12">
            {faqs.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Request info */}
      <section id="contact" className="bg-abs-cream py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-abs-gold">Get in Touch</p>
              <h2 className="font-display mt-2 text-3xl font-bold text-abs-navy sm:text-4xl">
                Request Programme Information
              </h2>
              <p className="mt-4 leading-relaxed text-gray-600">
                Speak with our admissions team about the India Executive Track, upcoming info sessions,
                and whether the programme is the right fit for your goals.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <Mail className="h-5 w-5 text-abs-gold" />
                  <span>emba@abs.uva.nl</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Mail className="h-5 w-5 text-abs-gold" />
                  <span>india-track@abs.uva.nl</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Phone className="h-5 w-5 text-abs-gold" />
                  <span>+31 20 525 4050</span>
                </div>
                <div className="flex items-start gap-3 text-gray-700">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-abs-gold" />
                  <span>Plantage Muidergracht 12, 1018 TV Amsterdam, Netherlands</span>
                </div>
              </div>
            </div>
            <form
              className="rounded-2xl bg-white p-8 shadow-sm"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-abs-navy focus:outline-none focus:ring-1 focus:ring-abs-navy"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-abs-navy focus:outline-none focus:ring-1 focus:ring-abs-navy"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-abs-navy focus:outline-none focus:ring-1 focus:ring-abs-navy"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your background and what you'd like to know..."
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-abs-navy focus:outline-none focus:ring-1 focus:ring-abs-navy"
                />
              </div>
              <button
                type="submit"
                className="mt-6 w-full rounded-lg bg-abs-gold py-3 text-sm font-semibold text-abs-navy transition hover:bg-abs-gold-light"
              >
                Submit Enquiry
              </button>
              <p className="mt-3 text-center text-xs text-gray-500">
                We typically respond within 2 business days.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28">
        <div className="absolute inset-0">
          <img
            src={landingImages.modernWorkspace}
            alt="Modern office workspace"
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-abs-navy/90" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Already Enrolled? Access Your Student Portal
          </h2>
          <p className="mt-4 text-white/75">
            Current EMBA students can log in with their professional email to view classes, schedule,
            curriculum, certificates, and connect with peers on the student forum.
          </p>
          <Link
            to="/login"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-abs-gold px-8 py-3.5 text-sm font-semibold text-abs-navy transition hover:bg-abs-gold-light"
          >
            Sign in to Portal
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-abs-navy py-16 text-white/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="font-semibold text-white">Amsterdam Business School</p>
              <p className="mt-2 text-sm">University of Amsterdam</p>
              <p className="mt-1 text-sm">Plantage Muidergracht 12</p>
              <p className="text-sm">1018 TV Amsterdam, Netherlands</p>
            </div>
            <div>
              <p className="font-semibold text-white">Programme Office</p>
              <p className="mt-2 text-sm">emba@abs.uva.nl</p>
              <p className="text-sm">+31 20 525 4050</p>
            </div>
            <div>
              <p className="font-semibold text-white">India Executive Track</p>
              <p className="mt-2 text-sm">Admissions & student support for Indian cohort participants.</p>
              <p className="text-sm">india-track@abs.uva.nl</p>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs">
            © 2026 Amsterdam Business School, University of Amsterdam. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 bg-white p-3 shadow-lg sm:hidden">
        <div className="flex gap-3">
          <a
            href="#contact"
            className="flex-1 rounded-lg bg-abs-gold py-3 text-center text-sm font-semibold text-abs-navy"
          >
            Request Info
          </a>
          <Link
            to="/login"
            className="flex-1 rounded-lg border border-abs-navy py-3 text-center text-sm font-semibold text-abs-navy"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}
