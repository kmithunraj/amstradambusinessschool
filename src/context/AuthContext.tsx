import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

const VALID_OTP = '227935'
const STORAGE_KEY = 'abs_emba_auth'

export interface AuthUser {
  email: string
  name: string
}

interface AuthContextType {
  user: AuthUser | null
  pendingEmail: string | null
  requestOtp: (email: string) => void
  verifyOtp: (otp: string) => boolean
  logout: () => void
  cancelLogin: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [pendingEmail, setPendingEmail] = useState<string | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        setUser(JSON.parse(stored))
      } catch {
        localStorage.removeItem(STORAGE_KEY)
      }
    }
  }, [])

  const requestOtp = (email: string) => {
    setPendingEmail(email.trim().toLowerCase())
  }

  const verifyOtp = (otp: string) => {
    if (otp.trim() !== VALID_OTP || !pendingEmail) return false
    const authUser: AuthUser = {
      email: pendingEmail,
      name: 'Mithun Raj Kumar',
    }
    setUser(authUser)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(authUser))
    setPendingEmail(null)
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem(STORAGE_KEY)
  }

  const cancelLogin = () => setPendingEmail(null)

  return (
    <AuthContext.Provider value={{ user, pendingEmail, requestOtp, verifyOtp, logout, cancelLogin }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
