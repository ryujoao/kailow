import { Navigate } from 'react-router-dom'

interface ProtectedRouteProps {
  children: React.ReactNode
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'

  return isLoggedIn ? children : <Navigate to="/" />
}