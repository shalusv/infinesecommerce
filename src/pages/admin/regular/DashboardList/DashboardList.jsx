// src/pages/admin/common/UnauthorizedPage/UnauthorizedPage.jsx
// import React from "react";

import { Link } from "react-router-dom";

const DashboardList = () => {
  return (
    <div>
      <h1>Dashbaord List</h1>
      <p>Welcome.</p>
      <Link to="/admin/">
        <button>Go to Home</button>
      </Link>
    </div>
  );
};

export default DashboardList;
