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
      {
        label: "Overview",
        icon: "FaCircle",
        path: "/admin/overview",
        permission: "VIEW_OVERVIEW",
      },
    ],
  },
  {
    section: "Settings",
    items: [
      {
        label: "Settings",
        icon: "FaCog",
        path: "/admin/settings",
        permission: "VIEW_SETTINGS",
      },
      {
        label: "DEV-Settings",
        icon: "FaCogs",
        path: "#",
        permission: "VIEW_DEV_SETTINGS",
        submenu: [
          {
            label: "Permissions",
            path: "/admin/dev-settings/permissions",
            permission: "VIEW_PERMISSIONS",
          },
        ],
      },
    ],
  },
  {
    section: "Purchase",
    items: [
      {
        label: "Purchase Order",
        icon: "FaCog",
        path: "/admin/purchase_order",
        permission: "VIEW_PURCHASE_ORDER",
      },
      {
        label: "Purchase Requests",
        icon: "FaCog",
        path: "/admin/purchase_request",
        permission: "VIEW_PURCHASE_REQUEST",
      },
      {
        label: "Products",
        icon: "FaCogs",
        path: "#",
        permission: "VIEW_PRODUCTS",
        submenu: [
          {
            label: "Stock",
            path: "/admin/products/stock",
            permission: "VIEW_PERMISSIONS",
          },
          {
            label: "Product List",
            path: "/admin/products/product_list",
            permission: "VIEW_PRODUCT_LIST",
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
      {
        label: "Employees",
        icon: "FaUsers",
        path: "#",
        permission: "VIEW_EMPLOYEES",
        submenu: [
          {
            label: "Add Employee",
            path: "/admin/employees/add",
            permission: "ADD_EMPLOYEE",
          },
          {
            label: "List Employees",
            path: "/admin/employees/list",
            permission: "LIST_EMPLOYEE",
          },
        ],
      },
    ],
  },
];
