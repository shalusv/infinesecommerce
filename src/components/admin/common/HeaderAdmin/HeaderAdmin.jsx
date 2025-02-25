import "./HeaderAdmin.css";
import { useState, useRef, useEffect } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import logoAdmin from "../../../../assets/images/client/basic/logo-small.png";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const HeaderAdmin = ({ toggleSidebar }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Sample search results (for testing)
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

  // Handle search input change
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

  // Navigate to SearchDashboard on search
  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      const filteredResults = allResults.filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );

      navigate(`/admin/search-results?q=${encodeURIComponent(searchQuery)}`, {
        state: { results: filteredResults }, // Pass results
      });

      setShowResults(false);
    }
  };

  // Detect Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchSubmit();
    }
  };

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="header-dashboard">
      <div className="top-header">
        {/* Left Section - Menu Button & Logo */}
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

        {/* Middle Section - Searchbar */}
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
                onKeyDown={handleKeyPress} // Detect Enter key
              />
              <button className="search-btn" onClick={handleSearchSubmit}>
                <FaSearch />
              </button>
            </div>

            {/* Search Result Dropdown */}
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

        {/* Right Section - Profile */}
        <div className="right-section">
          <div className="profile-container">Profile</div>
        </div>
      </div>
    </header>
  );
};

HeaderAdmin.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

export default HeaderAdmin;
