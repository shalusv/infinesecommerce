import { useState, useEffect, useRef, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { sidebarLinks } from "../../../../datas/DataLinks";
import * as Icons from "react-icons/fa";
import "./Sidebar.css";
import PropTypes from "prop-types";
import { AuthContext } from "../../../../context/AuthContext";

const Sidebar = ({ isOpen, setIsOpen, toggleButtonRef }) => {
  const { currentUser } = useContext(AuthContext); // Get current user
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);
  const sidebarRef = useRef(null);
  // ------------------------------------------------------------

  // Function to check if the user has a specific permission
  const hasPermission = (permission) =>
    currentUser?.permissions.includes(permission);

  // Filter sidebar items based on user permissions
  const filteredSidebarLinks = sidebarLinks
    .map((section) => ({
      ...section,
      items: section.items
        .map((item) => {
          if (item.submenu) {
            const filteredSubmenu = item.submenu.filter((subItem) =>
              hasPermission(subItem.permission)
            );
            return filteredSubmenu.length > 0
              ? { ...item, submenu: filteredSubmenu }
              : null;
          } else {
            return hasPermission(item.permission) ? item : null;
          }
        })
        .filter(Boolean), // Remove null values (items with no allowed sub-links)
    }))
    .filter((section) => section.items.length > 0); // Remove empty sections

  //  ------------------------------------------------------------

  // Function to toggle submenus
  const toggleSubmenu = (index) => {
    setOpenMenu((prev) => (prev === index ? null : index));
  };

  // Function to handle regular link clicks (without submenu)
  const handleLinkClick = () => {
    setOpenMenu(null);
    if (window.innerWidth <= 768) {
      setIsOpen(false); // Close sidebar
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebarElement = sidebarRef.current;
      const toggleButton = toggleButtonRef?.current;

      // ✅ Check if clicked outside both sidebar & toggle button
      if (
        sidebarElement &&
        !sidebarElement.contains(event.target) &&
        toggleButton &&
        !toggleButton.contains(event.target)
      ) {
        if (window.innerWidth <= 768) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen, toggleButtonRef]);
  return (
    <aside ref={sidebarRef} className={`sidebar ${isOpen ? "" : "collapsed"}`}>
      <nav className="sidebar-nav">
        {filteredSidebarLinks.map((section, sectionIdx) => (
          <div key={sectionIdx} className="sidebar-section">
            {section.section.toLowerCase() !== "main" && (
              <div className="sidebar-section-title">{section.section}</div>
            )}
            <ul className="sidebar-menu">
              {section.items.map((item, idx) => {
                const IconComponent = Icons[item.icon] || Icons.FaCircle;
                const hasSubmenu = item.submenu && item.submenu.length > 0;
                const menuKey = `${sectionIdx}-${idx}`;
                const isSubmenuActive = hasSubmenu
                  ? item.submenu.some(
                      (subItem) => location.pathname === subItem.path
                    )
                  : false;
                const isSubmenuOpen = openMenu === menuKey || isSubmenuActive;

                return (
                  <li
                    key={idx}
                    className={`sidebar-item ${isSubmenuOpen ? "open" : ""}`}
                  >
                    {hasSubmenu ? (
                      <div
                        className={`sidebar-link has-submenu ${
                          isSubmenuActive ? "active-link" : ""
                        }`}
                        onClick={() => toggleSubmenu(menuKey)}
                      >
                        <IconComponent className="sidebar-icon" />
                        <span className="sidebar-text">{item.label}</span>
                        <span
                          className={`submenu-arrow ${
                            isSubmenuOpen ? "rotate" : ""
                          }`}
                        >
                          ❯
                        </span>
                      </div>
                    ) : (
                      <NavLink
                        to={item.path}
                        end
                        className="sidebar-link"
                        onClick={handleLinkClick} // Close submenu when clicking a non-submenu link
                      >
                        <IconComponent className="sidebar-icon" />
                        <span className="sidebar-text">{item.label}</span>
                      </NavLink>
                    )}

                    {hasSubmenu && isSubmenuOpen && (
                      <ul className="sidebar-submenu open">
                        {item.submenu.map((subItem, subIdx) => (
                          <li key={subIdx} className="sidebar-subitem">
                            <NavLink
                              to={subItem.path}
                              end
                              className="sidebar-sublink"
                              onClick={handleLinkClick} // Close submenu when clicking a sub-link
                            >
                              {subItem.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  toggleButtonRef: PropTypes.object.isRequired,
};

export default Sidebar;
