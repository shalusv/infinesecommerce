// src/components/admin/common/Sidebar/Sidebar.jsx
// import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { Link, useLocation } from "react-router-dom"; // Import useLocation for route tracking
import {
  FaTachometerAlt,
  FaCogs,
  FaUsers,
  FaCaretDown,
  FaBell,
} from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = ({ isOpen }) => {
  const location = useLocation(); // Get the current route path

  // Function to determine if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className={`sidebar ${!isOpen ? "collapsed" : ""}`}>
      <ul className="menu">
        <li className={`menu-item ${isActive("/admin/") ? "active" : ""}`}>
          <Link to="/admin">
            <FaTachometerAlt className="icon" />
            <span className="sidebar-link-text">Dashboard</span>
          </Link>
        </li>

        <li
          className={`menu-item ${
            location.pathname.startsWith("/admin/users") ? "active" : ""
          }`}
        >
          <Link to="#">
            <FaUsers className="icon" />
            <span className="sidebar-link-text">Users</span>
            <FaCaretDown className="submenu-icon" />
          </Link>
          <ul className="submenu">
            <li
              className={`${
                isActive("/admin/users/add")
                  ? "submenu-item active"
                  : "submenu-item"
              }`}
            >
              <Link to="/admin/users/add">
                <span className="sidebar-link-text">Add User</span>
              </Link>
            </li>
            <li
              className={`${
                isActive("/admin/users/list")
                  ? "submenu-item active"
                  : "submenu-item"
              }`}
            >
              <Link to="/admin/users/list">
                <span className="sidebar-link-text">List User</span>
              </Link>
            </li>
          </ul>
        </li>

        <li
          className={`menu-item ${
            location.pathname.startsWith("/admin/notifications") ? "active" : ""
          }`}
        >
          <Link to="#">
            <FaBell className="icon" />
            <span className="sidebar-link-text">Notifications</span>
            <FaCaretDown className="submenu-icon" />
          </Link>
          <ul className="submenu">
            <li
              className={`${
                isActive("/admin/notifications/subscription")
                  ? "submenu-item active"
                  : "submenu-item"
              }`}
            >
              <Link to="/admin/notifications/subscription">
                <span className="sidebar-link-text">Subscription</span>
              </Link>
            </li>
            <li
              className={`${
                isActive("/admin/notifications/messages")
                  ? "submenu-item active"
                  : "submenu-item"
              }`}
            >
              <Link to="/admin/notifications/messages">
                <span className="sidebar-link-text">Messages</span>
              </Link>
            </li>
          </ul>
        </li>

        <li
          className={`menu-item ${isActive("/admin/settings") ? "active" : ""}`}
        >
          <Link to="/admin/settings">
            <FaCogs className="icon" />
            <span className="sidebar-link-text">Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

// Add PropTypes validation
Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired, // Validate `isOpen` as a required boolean
};

export default Sidebar;
