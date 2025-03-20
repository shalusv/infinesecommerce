import "./HeaderAdmin.css";
import { useState, useRef, useEffect } from "react";
import { FaBars, FaSearch, FaUser } from "react-icons/fa";
import logoAdmin from "../../../../assets/images/client/basic/logo-small.png";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const HeaderAdmin = ({ toggleSidebar }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const searchRef = useRef(null);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  const allResults = [
    "Dashboard",
    "Users",
    "Settings",
    "Reports",
    "Profile",
    "Notifications",
    "Billing",
    "Security",
    "Analytics",
    "API Access",
  ];

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim()) {
      setSearchResults(
        allResults.filter((item) =>
          item.toLowerCase().includes(query.toLowerCase())
        )
      );
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  };

  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      const filteredResults = allResults.filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );

      navigate(`/admin/search-results?q=${encodeURIComponent(searchQuery)}`, {
        state: { results: filteredResults },
      });

      setShowResults(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchSubmit();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        requestAnimationFrame(() => setIsProfileOpen(false));
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="header-dashboard">
      <div className="top-header">
        <div className="left-section">
          <div className="logo-admin-container">
            <button className="menu-toggle" onClick={toggleSidebar}>
              <FaBars />
            </button>
            <div className="logo-admin">
              <img
                src={logoAdmin}
                alt="Admin Logo"
                className="logo-admin-image"
              />
              <span className="logo-admin-text">
                <span className="logo-admin-title">
                  iNFiNE
                  <span className="logo-admin-subtitle">S</span>
                </span>
                <span className="logo-admin-tagline">EAMSQUARE</span>
              </span>
            </div>
          </div>
        </div>

        <div className="middle-section" ref={searchRef}>
          <div className="searchbar-container">
            <div className="search-wrapper">
              <input
                type="text"
                className="search-input"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={() => {
                  if (searchQuery.trim()) setShowResults(true);
                }}
                onKeyDown={handleKeyPress}
              />
              <button className="search-btn" onClick={handleSearchSubmit}>
                <FaSearch />
              </button>
            </div>

            {showResults && searchResults.length > 0 && (
              <div className="search-results">
                {searchResults.map((result, index) => (
                  <div
                    key={index}
                    className="search-result-item"
                    onClick={() => {
                      setSearchQuery(result);
                      handleSearchSubmit();
                    }}
                  >
                    {result}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="right-section">
          <div className="profile-container" ref={profileRef}>
            <span className="profile-name">Shalu S Vayakakdy</span>
            <div
              className="profile-icon"
              onClick={() => setIsProfileOpen((prev) => !prev)}
            >
              <FaUser size={20} />
            </div>

            {isProfileOpen && (
              <div className="profile-dropdown">
                <ul>
                  <li>
                    <a href="/profile">Profile</a>
                  </li>
                  <li>
                    <a href="/settings">Settings</a>
                  </li>
                  <li>
                    <a href="/logout">Logout</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

HeaderAdmin.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

export default HeaderAdmin;
