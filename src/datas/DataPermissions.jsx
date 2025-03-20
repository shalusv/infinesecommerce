// src/datas/permissions.jsx
export const permissions = [
  {
    id: 1,
    permission: "VIEW_DASHBOARD",
    type: 1,
    parent: null,
    description: "Access to the dashboard",
    updated: "2025-01-01",
    user_id: 1,
  },
  {
    id: 2,
    permission: "VIEW_USER_MANAGEMENT",
    type: 1,
    parent: null,
    description: "Access to manage users",
    updated: "2025-01-01",
    user_id: 1,
  },
  {
    id: 3,
    permission: "ADD_USER",
    type: 2,
    parent: 2,
    description: "Edit user details",
    updated: "2025-01-01",
    user_id: 1,
  },
  {
    id: 4,
    permission: "LIST_USER",
    type: 2,
    parent: 2,
    description: "Delete users",
    updated: "2025-01-01",
    user_id: 1,
  },
  {
    id: 5,
    permission: "VIEW_ORDERS",
    type: 1,
    parent: null,
    description: "View orders",
    updated: "2025-01-01",
    user_id: 1,
  },
  {
    id: 6,
    permission: "VIEW_NOTIFICATIONS",
    type: 1,
    parent: null,
    description: "View notifications",
    updated: "2025-01-01",
    user_id: 1,
  },
  {
    id: 7,
    permission: "VIEW_MESSAGES",
    type: 1,
    parent: 6,
    description: "View messages",
    updated: "2025-01-01",
    user_id: 1,
  },

  {
    id: 8,
    permission: "VIEW_SETTINGS",
    type: 1,
    parent: 6,
    description: "View settings",
    updated: "2025-01-01",
    user_id: 1,
  },
  {
    id: 9,
    permission: "VIEW_SUBSCRIPTIONS",
    type: 1,
    parent: 6,
    description: "View subscritpions",
    updated: "2025-01-01",
    user_id: 1,
  },
  {
    id: 10,
    permission: "VIEW_DEV_SETTINGS",
    type: 1,
    parent: null,
    description: "Developer Settings",
    updated: "2025-01-01",
    user_id: 1,
  },
  {
    id: 11,
    permission: "VIEW_PERMISSIONS",
    type: 2,
    parent: 5,
    description: "Manage permissions for developer settings",
    updated: "2025-01-05",
    user_id: 2,
  },
  {
    id: 12,
    permission: "VIEW_STYLES",
    type: 2,
    parent: 5,
    description: "Manage styles and themes",
    updated: "2025-01-08",
    user_id: 3,
  },
  {
    id: 13,
    permission: "VIEW_PREFERENCES",
    type: 2,
    parent: 5,
    description: "Manage developer preferences",
    updated: "2025-01-10",
    user_id: 4,
  },
  {
    id: 14,
    permission: "ADD_PERMISSION",
    type: 3,
    parent: 5,
    description: "Add new permissions",
    updated: "2025-01-12",
    user_id: 5,
  },
  {
    id: 15,
    permission: "REMOVE_PERMISSION",
    type: 3,
    parent: 6,
    description: "Remove existing permissions",
    updated: "2025-01-14",
    user_id: 6,
  },

  {
    id: 16,
    permission: "THEMES",
    type: 3,
    parent: 5,
    description: "Reset theme to default",
    updated: "2025-01-18",
    user_id: 8,
  },
  {
    id: 17,
    permission: "PREFERENCES",
    type: 3,
    parent: 5,
    description: "Update developer preferences",
    updated: "2025-01-20",
    user_id: 9,
  },
];
