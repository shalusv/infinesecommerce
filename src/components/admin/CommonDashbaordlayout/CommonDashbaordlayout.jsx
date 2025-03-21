// src/components/admin/CommonDashboardLayout/CommonDashboardLayout.jsx
// import React from "react";
import "./CommonDashbaordlayout.css";
import PropTypes from "prop-types"; // Import PropTypes
import Sidebar from "../common/Sidebar/Sidebar";
import ProtectedRoute from "../common/ProtectedRoute/ProtectedRoute"; // Import ProtectedRoute

import "../../../assets/styles/root-admin.css";
import "./CommonDashbaordlayout.css";
import { useEffect, useRef, useState } from "react";
import HeaderAdmin from "../common/HeaderAdmin/HeaderAdmin";

// Destructure props to make sure we get `children` and `requiredPermissions`
const CommonDashboardLayout = ({ children, requiredPermissions = [] }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const toggleButtonRef = useRef(null); // ✅ Store toggle button ref

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSidebarOpen(false); // 🔥 Collapse sidebar on mobile view
      } else {
        setSidebarOpen(true); // 🔥 Open sidebar on larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // 🔥 Call once to set initial state based on screen size

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="admin-layout">
      <HeaderAdmin
        toggleSidebar={toggleSidebar}
        toggleButtonRef={toggleButtonRef}
      />
      <div className="admin-content">
        <Sidebar
          isOpen={isSidebarOpen}
          setIsOpen={setSidebarOpen}
          toggleButtonRef={toggleButtonRef}
        />
        <div className="admin-main-content">
          <ProtectedRoute requiredPermissions={requiredPermissions}>
            {children}
          </ProtectedRoute>
        </div>
      </div>
    </div>
  );
};

CommonDashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
  requiredPermissions: PropTypes.arrayOf(PropTypes.string),
};

export default CommonDashboardLayout;
