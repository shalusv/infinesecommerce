import { createContext, useState, useEffect } from "react";
import { users } from "../datas/DataUsers"; // Importing users data
import PropTypes from "prop-types";

// Create the AuthContext
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Check and load the user from localStorage on mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser) {
      // If user exists in localStorage, set it in state
      setIsAuthenticated(true);
      setCurrentUser(storedUser);
      console.log("User loaded from localStorage:", storedUser);
    } else {
      // Default to first user if none is found in localStorage
      const defaultUser = users.find((user) => user.id === 1);
      if (defaultUser) {
        setIsAuthenticated(true);
        setCurrentUser(defaultUser);
        localStorage.setItem("currentUser", JSON.stringify(defaultUser));
        console.log("Default user set:", defaultUser);
      }
    }
  }, []);

  // Login function to authenticate user
  const login = (username, password) => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      // If user is found, update permissions and localStorage
      // user.permissions = ["VIEW_DASHBOARD", "VIEW_NOTIFICATIONS"]; // Update permissions array here
      setCurrentUser(user);
      setIsAuthenticated(true);
      localStorage.setItem("currentUser", JSON.stringify(user));
      console.log("User logged in:", user);
      console.log("Updated permissions:", user.permissions);

      return true; // Login successful
    }
    return false; // Login failed
  };

  // Logout function to clear user and permissions
  const logout = () => {
    localStorage.removeItem("currentUser");
    setIsAuthenticated(false);
    setCurrentUser(null);
    console.log("User logged out");
  };

  // Check if the current user has specific permission
  const checkPermission = (permission) => {
    return currentUser?.permissions.includes(permission);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        currentUser,
        login,
        logout,
        checkPermission,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// PropTypes validation for AuthProvider props
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
