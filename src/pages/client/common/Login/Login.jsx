// src/pages/client/common/Login/Login.jsx
// import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <p>Please click the button below to go to the admin dashboard.</p>
      {/* Button to go to admin */}
      <Link to="/admin">
        <button>Goto Admin</button>
      </Link>
    </div>
  );
};

export default Login;
