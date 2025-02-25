import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import {
  FaTachometerAlt,
  FaCogs,
  FaUsers,
  FaCaretDown,
  FaBell,
} from "react-icons/fa";
import "./Sidebar.css";
import { FaGear } from "react-icons/fa6";

const Sidebar = ({ isOpen, setSidebarOpen }) => {
  const location = useLocation();
  const { checkPermission } = useContext(AuthContext);
  const sidebarRef = useRef(null);

  // Determine if a link is active
  const isActive = (path) => location.pathname === path;

  // Check if the user has a specific permission
  const hasPermission = (permission) => checkPermission(permission);

  // ✅ Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        window.innerWidth < 768
      ) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, setSidebarOpen]);

  // ✅ Close sidebar when clicking a main link (without submenu) or a submenu link
  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };

  return (
    <div ref={sidebarRef} className={`sidebar ${isOpen ? "" : "collapsed"}`}>
      <ul className="menu">
        {/* Dashboard */}
        {hasPermission("VIEW_DASHBOARD") && (
          <li className={`menu-item ${isActive("/admin/") ? "active" : ""}`}>
            <Link to="/admin" onClick={handleLinkClick}>
              <FaTachometerAlt className="icon" />
              <span className="sidebar-link-text">Dashboard</span>
            </Link>
          </li>
        )}

        {/* Users */}
        {hasPermission("VIEW_USER_MANAGEMENT") && (
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
              {hasPermission("ADD_USER") && (
                <li
                  className={`${
                    isActive("/admin/users/add")
                      ? "submenu-item active"
                      : "submenu-item"
                  }`}
                >
                  <Link to="/admin/users/add" onClick={handleLinkClick}>
                    <span className="sidebar-link-text">Add User</span>
                  </Link>
                </li>
              )}
              {hasPermission("LIST_USER") && (
                <li
                  className={`${
                    isActive("/admin/users/list")
                      ? "submenu-item active"
                      : "submenu-item"
                  }`}
                >
                  <Link to="/admin/users/list" onClick={handleLinkClick}>
                    <span className="sidebar-link-text">List User</span>
                  </Link>
                </li>
              )}
            </ul>
          </li>
        )}

        {/* Notifications */}
        {hasPermission("VIEW_NOTIFICATIONS") && (
          <li
            className={`menu-item ${
              location.pathname.startsWith("/admin/notifications")
                ? "active"
                : ""
            }`}
          >
            <Link to="#">
              <FaBell className="icon" />
              <span className="sidebar-link-text">Notifications</span>
              <FaCaretDown className="submenu-icon" />
            </Link>
            <ul className="submenu">
              {hasPermission("VIEW_MESSAGES") && (
                <li
                  className={`${
                    isActive("/admin/notifications/messages")
                      ? "submenu-item active"
                      : "submenu-item"
                  }`}
                >
                  <Link
                    to="/admin/notifications/messages"
                    onClick={handleLinkClick}
                  >
                    <span className="sidebar-link-text">Messages</span>
                  </Link>
                </li>
              )}
              {hasPermission("VIEW_SUBSCRIPTIONS") && (
                <li
                  className={`${
                    isActive("/admin/notifications/subscription")
                      ? "submenu-item active"
                      : "submenu-item"
                  }`}
                >
                  <Link
                    to="/admin/notifications/subscription"
                    onClick={handleLinkClick}
                  >
                    <span className="sidebar-link-text">Subscription</span>
                  </Link>
                </li>
              )}
            </ul>
          </li>
        )}

        {/* Settings */}
        {hasPermission("VIEW_SETTINGS") && (
          <li
            className={`menu-item ${
              isActive("/admin/settings") ? "active" : ""
            }`}
          >
            <Link to="/admin/settings" onClick={handleLinkClick}>
              <FaGear className="icon" />
              <span className="sidebar-link-text">Settings</span>
            </Link>
          </li>
        )}

        {/* DEV-Settings */}
        {hasPermission("VIEW_DEV_SETTINGS") && (
          <li
            className={`menu-item ${
              location.pathname.startsWith("/admin/dev-settings")
                ? "active"
                : ""
            }`}
          >
            <Link to="#">
              <FaCogs className="icon" />
              <span className="sidebar-link-text">DEV-Settings</span>
              <FaCaretDown className="submenu-icon" />
            </Link>
            <ul className="submenu">
              {hasPermission("VIEW_PERMISSIONS") && (
                <li
                  className={`${
                    isActive("/admin/dev-settings/permissions")
                      ? "submenu-item active"
                      : "submenu-item"
                  }`}
                >
                  <Link
                    to="/admin/dev-settings/permissions"
                    onClick={handleLinkClick}
                  >
                    <span className="sidebar-link-text">Permissions</span>
                  </Link>
                </li>
              )}
              {hasPermission("VIEW_STYLES") && (
                <li
                  className={`${
                    isActive("/admin/dev-settings/styles")
                      ? "submenu-item active"
                      : "submenu-item"
                  }`}
                >
                  <Link
                    to="/admin/dev-settings/styles"
                    onClick={handleLinkClick}
                  >
                    <span className="sidebar-link-text">Styles</span>
                  </Link>
                </li>
              )}
              {hasPermission("VIEW_PREFERENCES") && (
                <li
                  className={`${
                    isActive("/admin/dev-settings/preferences")
                      ? "submenu-item active"
                      : "submenu-item"
                  }`}
                >
                  <Link
                    to="/admin/dev-settings/preferences"
                    onClick={handleLinkClick}
                  >
                    <span className="sidebar-link-text">Preferences</span>
                  </Link>
                </li>
              )}
            </ul>
          </li>
        )}
      </ul>
    </div>
  );
};

// Add PropTypes validation
Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setSidebarOpen: PropTypes.func.isRequired,
};

export default Sidebar;
