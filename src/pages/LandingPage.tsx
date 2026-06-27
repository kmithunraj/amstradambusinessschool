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
} from 'lucide-react'

const stats = [
  { value: 'Triple Crown', label: 'AACSB · AMBA · EQUIS Accredited' },
  { value: '#1 NL', label: 'Business School in the Netherlands' },
  { value: '24 Months', label: 'Part-time Executive Format' },
  { value: 'India Track', label: 'Designed for Indian Executives' },
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
      'Learn alongside senior leaders from India\'s top corporations, startups, and multinational offices.',
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
          <div className="hidden items-center gap-8 md:flex">
            <a href="#programme" className="text-sm text-white/80 hover:text-white">Programme</a>
            <a href="#curriculum" className="text-sm text-white/80 hover:text-white">Curriculum</a>
            <a href="#why-abs" className="text-sm text-white/80 hover:text-white">Why ABS</a>
            <a href="#contact" className="text-sm text-white/80 hover:text-white">Contact</a>
          </div>
          <Link
            to="/login"
            className="rounded-lg bg-abs-gold px-5 py-2.5 text-sm font-semibold text-abs-navy transition hover:bg-abs-gold-light"
          >
            Student Login
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center pt-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1920&q=80"
            alt="Amsterdam canals at sunset"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-abs-navy/95 via-abs-navy/80 to-abs-navy/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="mb-4 inline-block rounded-full border border-abs-gold/40 bg-abs-gold/10 px-4 py-1.5 text-sm font-medium text-abs-gold">
              Executive MBA · India Executive Track · 2026 Intake
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Lead with Purpose.<br />Think Globally.<br />Act from Amsterdam.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              The Amsterdam Business School Executive MBA for Indian executives combines world-class
              faculty, a rigorous curriculum, and an immersive Amsterdam experience — delivered in a
              format designed for busy senior leaders across India.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/login"
                className="inline-flex items-center gap-2 rounded-lg bg-abs-gold px-6 py-3 text-sm font-semibold text-abs-navy transition hover:bg-abs-gold-light"
              >
                Access Student Portal
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#programme"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Programme
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-gray-200 bg-white py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl font-bold text-abs-navy">{stat.value}</p>
              <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programme overview */}
      <section id="programme" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-abs-gold">The Programme</p>
              <h2 className="font-display mt-2 text-3xl font-bold text-abs-navy sm:text-4xl">
                Built for Indian Executives Who Lead at Scale
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Our 24-month part-time Executive MBA is structured around live online sessions timed
                for Indian executives, combined with intensive Amsterdam residency weeks. You will
                develop strategic leadership capabilities while maintaining your professional
                responsibilities.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Live sessions scheduled for IST evening slots',
                  'Amsterdam immersion weeks on the ABS campus',
                  'Amsterdam Leadership Programme alongside core curriculum',
                  'Specialization tracks in Entrepreneurship, Corporate Transformation, or International',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-abs-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e5347bb99?w=800&q=80"
                alt="Executive boardroom discussion"
                className="col-span-2 h-56 w-full rounded-2xl object-cover shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80"
                alt="University campus"
                className="h-40 w-full rounded-2xl object-cover shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=600&q=80"
                alt="Amsterdam cityscape"
                className="h-40 w-full rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why ABS */}
      <section id="why-abs" className="bg-abs-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-abs-gold">Why Amsterdam Business School</p>
            <h2 className="font-display mt-2 text-3xl font-bold text-abs-navy sm:text-4xl">
              Europe's Gateway to Global Business Education
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* Curriculum preview */}
      <section id="curriculum" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1454165804603-c05757a08203?w=800&q=80"
                alt="Strategic planning session"
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
              <div className="mt-6 space-y-4">
                {[
                  { year: 'Year 1 · Semester 1', courses: 'Strategic Performance Management, Corporate Strategy, Change Management, Corporate Finance, Digital Business + Leadership Programme' },
                  { year: 'Year 1 · Semester 2', courses: 'Ethics & Sustainability, Negotiations, International Business, Valuation, Strategic Analytics, Actualysis + Electives' },
                  { year: 'Year 2 · Semester 1', courses: 'Specialization electives: Entrepreneurship, Corporate Transformation, or International Track' },
                ].map((sem) => (
                  <div key={sem.year} className="rounded-xl border border-gray-200 p-4">
                    <p className="font-semibold text-abs-navy">{sem.year}</p>
                    <p className="mt-1 text-sm text-gray-600">{sem.courses}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Modern office workspace"
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
      <footer id="contact" className="bg-abs-navy py-12 text-white/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
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
          <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs">
            © 2026 Amsterdam Business School, University of Amsterdam. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
