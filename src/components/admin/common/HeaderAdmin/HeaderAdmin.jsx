// import React from "react";
import "./HeaderAdmin.css";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import PropTypes from "prop-types";
import { AuthContext } from "../../../../context/AuthContext";
import { useContext } from "react";

const HeaderAdmin = ({ toggleSidebar }) => {
  const { logout } = useContext(AuthContext); // Destructure the logout function from AuthContext

  const handleLogout = () => {
    logout(); // Call the logout function
    window.location.href = "/admin/login"; // Redirect to the login page
  };

  return (
    <header className="header-dashboard">
      <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
        ☰
      </button>
      <h1 className="header-title">Admin Dashboard</h1>
      <div className="header-actions">
        <button className="heade r-btn">Profile</button>
        <button className="header-btn" onClick={handleLogout}>
          Logout
        </button>
        <Link to="/" className="rounded-link-button">
          <FaHome></FaHome>
        </Link>
      </div>
    </header>
  );
};

// Prop validation for the expected props
HeaderAdmin.propTypes = {
  toggleSidebar: PropTypes.func.isRequired, // Ensuring toggleSidebar is a function and required
  isOpen: PropTypes.bool, // Ensuring isOpen is a boolean, but not required if you don't use it
};

export default HeaderAdmin;
