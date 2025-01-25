import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthContext";
import PropTypes from "prop-types";

const ProtectedRoute = ({ requiredPermissions, children }) => {
  const { isAuthenticated, currentUser } = useContext(AuthContext);

  // Fallback: Retrieve user data from localStorage if context is lost
  const storedUser = JSON.parse(localStorage.getItem("authUser"));
  const isLoggedIn = isAuthenticated || storedUser !== null;
  const user = currentUser || storedUser;

  if (!isLoggedIn) {
    return <Navigate to="/admin/login" replace />;
  }

  const hasPermission = user
    ? requiredPermissions.every((perm) => user.permissions.includes(perm))
    : false;

  if (!hasPermission) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  requiredPermissions: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
