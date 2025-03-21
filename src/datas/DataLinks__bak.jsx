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
  {
    section: "Project Management",
    items: [
      {
        label: "Projects",
        icon: "FaProjectDiagram",
        path: "#",
        permission: "VIEW_PROJECTS",
        submenu: [
          {
            label: "Active Projects",
            path: "/admin/projects/active",
            permission: "VIEW_ACTIVE_PROJECTS",
          },
          {
            label: "Completed Projects",
            path: "/admin/projects/completed",
            permission: "VIEW_COMPLETED_PROJECTS",
          },
          {
            label: "Archived Projects",
            path: "/admin/projects/archived",
            permission: "VIEW_ARCHIVED_PROJECTS",
          },
          {
            label: "Add New Project",
            path: "/admin/projects/add",
            permission: "ADD_PROJECT",
          },
        ],
      },
      {
        label: "Timeline & Tasks",
        icon: "FaTasks",
        path: "#",
        permission: "VIEW_TIMELINE_TASKS",
        submenu: [
          {
            label: "Milestones",
            path: "/admin/projects/milestones",
            permission: "VIEW_MILESTONES",
          },
          {
            label: "Task Assignments",
            path: "/admin/projects/tasks",
            permission: "VIEW_TASKS",
          },
        ],
      },
      {
        label: "Team & Roles",
        icon: "FaUsersCog",
        path: "/admin/projects/team",
        permission: "VIEW_TEAM_ROLES",
      },
      {
        label: "Documents",
        icon: "FaFileAlt",
        path: "/admin/projects/documents",
        permission: "VIEW_DOCUMENTS",
      },
      {
        label: "Client Communication",
        icon: "FaComments",
        path: "/admin/projects/communication",
        permission: "VIEW_CLIENT_COMMUNICATION",
      },
      {
        label: "Billing & Payments",
        icon: "FaMoneyCheckAlt",
        path: "/admin/projects/billing",
        permission: "VIEW_BILLING_PAYMENTS",
      },
      {
        label: "Reports & Analytics",
        icon: "FaChartLine",
        path: "/admin/projects/reports",
        permission: "VIEW_REPORTS_ANALYTICS",
      },
    ],
  },
];
