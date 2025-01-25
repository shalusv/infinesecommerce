// src/pages/client/regular/Home/HomePage.jsx
// import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link to="/login">
        <button>Login Here</button>
      </Link>
    </div>
  );
};

export default HomePage;
