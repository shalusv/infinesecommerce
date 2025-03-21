// src/datas/DataLinks.jsx

export const sidebarLinks = [
  {
    section: "Main",
    items: [
      {
        label: "Dashboard",
        icon: "FaTachometerAlt",
        path: "/admin",
        permission: "VIEW_DASHBOARD",
      },
    ],
  },
  {
    section: "Settings",
    items: [
      {
        label: "DEV-Settings",
        icon: "FaCogs",
        path: "#",
        permission: "VIEW_DEV_SETTINGS",
        submenu: [
          {
            label: "Permissions",
            path: "/admin/dev-settings/permissions",
            permission: "VIEW_DEV_PERMISSION",
          },
        ],
      },
    ],
  },

  {
    section: "Human Resources",
    items: [
      {
        label: "Users",
        icon: "FaUser",
        path: "#",
        permission: "VIEW_USER_MANAGEMENT",
        submenu: [
          {
            label: "Add User",
            path: "/admin/users/add",
            permission: "ADD_USER",
          },
          {
            label: "List User",
            path: "/admin/users/list",
            permission: "LIST_USER",
          },
        ],
      },
    ],
  },
];
