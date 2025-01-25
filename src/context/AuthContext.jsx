import { createContext, useState, useEffect } from "react";
import { users } from "../datas/DataUsers"; // Importing users data
import { permissions } from "../datas/DataPermissions"; // Importing permissions data
import PropTypes from "prop-types";

// Create the AuthContext
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Check if `currentUser` exists in localStorage
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser) {
      // If user exists in localStorage, set it in state
      setIsAuthenticated(true);
      setCurrentUser(storedUser);
    } else {
      // Otherwise, set the first user (id=1) as default
      const defaultUser = users.find((user) => user.id === 1);
      if (defaultUser) {
        localStorage.setItem("currentUser", JSON.stringify(defaultUser));
        setIsAuthenticated(true);
        setCurrentUser(defaultUser);
      }
    }
  }, []);

  const login = (username, password) => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      setIsAuthenticated(true);
      setCurrentUser(user);
      return true; // Login successful
    }
    return false; // Login failed
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setIsAuthenticated(false);
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        currentUser,
        permissions,
        login,
        logout,
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
