import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../../../../datas/DataUsers"; // Import the user data
import "./LoginAdmin.css";

const LoginAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }

    // Check credentials
    const foundUser = users.find(
      (user) => user.username === email && user.password === password
    );

    if (foundUser) {
      // Set user details and permissions in localStorage/sessionStorage
      localStorage.setItem("authUser", JSON.stringify(foundUser));
      sessionStorage.setItem("sessionAuth", JSON.stringify(foundUser));

      // Navigate to the admin dashboard
      navigate("/admin/");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Admins Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Username</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your username"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginAdmin;
