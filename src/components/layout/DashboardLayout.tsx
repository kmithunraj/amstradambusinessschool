import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import {
  LayoutDashboard,
  BookOpen,
  Video,
  Calendar,
  Award,
  Mail,
  MessageSquare,
  User,
  LogOut,
  Menu,
  X,
  FileText,
} from 'lucide-react'
import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { admissionCategory } from '../../data/mockData'
import AbsLogo from '../AbsLogo'

const navItems = [
  { to: '/portal/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/portal/curriculum', label: 'Curriculum', icon: BookOpen },
  { to: '/portal/classes', label: 'Classes', icon: Video },
  { to: '/portal/schedule', label: 'Schedule', icon: Calendar },
  { to: '/portal/certificates', label: 'Certificates', icon: Award },
  { to: '/portal/emails', label: 'Emails', icon: Mail },
  { to: '/portal/forum', label: 'Forum', icon: MessageSquare },
  { to: '/portal/resources', label: 'Resources', icon: FileText },
  { to: '/portal/profile', label: 'Profile', icon: User },
]

export default function DashboardLayout() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const sidebar = (
    <aside className="flex h-full w-64 flex-col bg-abs-navy text-white">
      <div className="border-b border-white/10 px-5 py-6">
        <div className="flex items-center gap-3">
          <AbsLogo className="h-10 w-10" variant="contained" />
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-white/60">Student Portal</p>
            <p className="text-sm font-semibold leading-tight">Amsterdam Business School</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-abs-gold text-abs-navy'
                  : 'text-white/75 hover:bg-white/10 hover:text-white'
              }`
            }
          >
            <Icon className="h-4 w-4 shrink-0" />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-white/10 p-4">
        <div className="mb-3 rounded-lg bg-white/5 px-3 py-2">
          <p className="text-sm font-semibold">{user?.name}</p>
          <p className="truncate text-xs text-white/60">{user?.email}</p>
          <p className="mt-1 text-xs text-abs-gold">EMBA · {admissionCategory} · Cohort 2026</p>
        </div>
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/75 transition-colors hover:bg-white/10 hover:text-white"
        >
          <LogOut className="h-4 w-4" />
          Sign out
        </button>
      </div>
    </aside>
  )

  return (
    <div className="flex h-screen bg-abs-cream">
      <div className="hidden lg:block">{sidebar}</div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 h-full">{sidebar}</div>
        </div>
      )}

      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3 lg:px-8">
          <button
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
            onClick={() => setMobileOpen(true)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <div className="hidden lg:block">
            <p className="text-sm text-gray-500">Executive MBA · University of Amsterdam</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 sm:inline">
              Selected · {admissionCategory}
            </span>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-abs-navy text-sm font-semibold text-white">
              MR
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
