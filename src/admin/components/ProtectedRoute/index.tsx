import type { ReactNode, FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext.js';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default ProtectedRoute;