import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { sidebarLinks } from "../../../../datas/DataLinks";
import * as Icons from "react-icons/fa";
import "./Sidebar.css";
import PropTypes from "prop-types";

const Sidebar = ({ isOpen }) => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);

  // Function to toggle submenus
  const toggleSubmenu = (index) => {
    setOpenMenu((prev) => (prev === index ? null : index));
  };

  // Function to handle regular link clicks (without submenu)
  const handleLinkClick = () => {
    setOpenMenu(null); // Close any open submenu when a non-submenu link is clicked
  };

  return (
    <aside className={`sidebar ${isOpen ? "" : "collapsed"}`}>
      <nav className="sidebar-nav">
        {sidebarLinks.map((section, sectionIdx) => (
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
};

export default Sidebar;
