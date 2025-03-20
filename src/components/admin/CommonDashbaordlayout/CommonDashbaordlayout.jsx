// src/components/admin/CommonDashboardLayout/CommonDashboardLayout.jsx
// import React from "react";
import "./CommonDashbaordlayout.css";
import PropTypes from "prop-types"; // Import PropTypes
import Sidebar from "../common/Sidebar/Sidebar";
import ProtectedRoute from "../common/ProtectedRoute/ProtectedRoute"; // Import ProtectedRoute

import "../../../assets/styles/root-admin.css";
import "./CommonDashbaordlayout.css";
import { useState } from "react";
import HeaderAdmin from "../common/HeaderAdmin/HeaderAdmin";

// Destructure props to make sure we get `children` and `requiredPermissions`
const CommonDashboardLayout = ({ children, requiredPermissions = [] }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    console.log("prev:", isSidebarOpen);
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="admin-layout">
      <HeaderAdmin toggleSidebar={toggleSidebar} />
      <div className="admin-content">
        <Sidebar isOpen={isSidebarOpen} />
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
