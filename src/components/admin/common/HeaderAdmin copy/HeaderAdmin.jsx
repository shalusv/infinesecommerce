import "./HeaderAdmin.css";
import { Link } from "react-router-dom";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import PropTypes from "prop-types";
import { AuthContext } from "../../../../context/AuthContext";
import { useContext, useState } from "react";
import logoSmall from "../../../../assets/images/admin/basic/logo/logo-small.png";

const HeaderAdmin = ({ toggleSidebar }) => {
  const { logout, currentUser } = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
    window.location.href = "/admin/login";
  };

  return (
    <header className="header-dashboard">
      {/* First Row: Sidebar Toggle + Logo + Profile */}
      <div className="top-header">
        <div className="left-section">
          <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
            ☰
          </button>
          <Link to="/admin" className="logo-admin">
            <img src={logoSmall} alt="Logo" className="logo-admin-img" />
            <span className="logo-admin-text">
              iNFiNE<span className="logo-admin-text-sub"> S</span>
            </span>
          </Link>
        </div>

        <div className="profile-section">
          <span className="user-name">
            {currentUser?.username.toUpperCase()}
          </span>
          <div
            className="profile-icon-wrapper"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <FaUserCircle className="profile-icon" />
            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/admin/profile" className="dropdown-item">
                  Profile
                </Link>
                <button className="dropdown-item" onClick={handleLogout}>
                  Logout
                </button>
                <Link to="/" className="dropdown-item">
                  Home
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Second Row: Search Bar (Moves Down on Small Screens) */}
      <div className="search-bar-container">
        <form className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
      </div>
    </header>
  );
};

HeaderAdmin.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

export default HeaderAdmin;
