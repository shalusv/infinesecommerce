// src/pages/admin/regular/HomeDashboard/HomeDashboard.jsx
// import React from "react";
import { Link } from "react-router-dom";

const HomeDashboard = () => {
  return (
    <div>
      <h1>Welcome to the Admin Dashboard</h1>
      <p>
        This is the home page for admins. You can add other sections here later.
      </p>
      <Link to="/admin/dashboard">
        <button>Go to Dashboard</button>
      </Link>
    </div>
  );
};

export default HomeDashboard;
