import React from 'react';
import {Navigate, useNavigate} from 'react-router-dom';

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isAuthenticated,
  children,
}) => {
  const navigate = useNavigate();
  const {pathname} = location;
  if (!isAuthenticated) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};

export default ProtectedRoute;
