import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../AuthProvider";

const ProtectedRoute = ({ children }: { children: JSX.Element}) => {
    const auth = useAuth();
    const location = useLocation();

    if (!auth.isAccessibleToPath(location.pathname)) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
}

export default ProtectedRoute;