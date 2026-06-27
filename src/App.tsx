import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import DashboardLayout from './components/layout/DashboardLayout'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import CurriculumPage from './pages/CurriculumPage'
import ClassesPage from './pages/ClassesPage'
import SchedulePage from './pages/SchedulePage'
import CertificatesPage from './pages/CertificatesPage'
import EmailsPage from './pages/EmailsPage'
import ForumPage from './pages/ForumPage'
import ResourcesPage from './pages/ResourcesPage'
import ProfilePage from './pages/ProfilePage'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/portal"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="curriculum" element={<CurriculumPage />} />
            <Route path="classes" element={<ClassesPage />} />
            <Route path="schedule" element={<SchedulePage />} />
            <Route path="certificates" element={<CertificatesPage />} />
            <Route path="emails" element={<EmailsPage />} />
            <Route path="forum" element={<ForumPage />} />
            <Route path="resources" element={<ResourcesPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
