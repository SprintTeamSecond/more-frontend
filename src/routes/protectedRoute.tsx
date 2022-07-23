import React from "react";
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isAuthenticated,
  children,
}) => {
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate("/login");
  }
  return children;
};

export default ProtectedRoute;
