// src/datas/DataUsers.jsx
export const users = [
  {
    id: 2,
    username: "developer",
    password: "123", // This should be hashed in production
    permissions: [
      "VIEW_DASHBOARD",
      "VIEW_NOTIFICATIONS",
      "VIEW_USER_MANAGEMENT",
      "VIEW_SETTINGS",
      "VIEW_MESSAGES",
      "VIEW_SUBSCRIPTIONS",
      "VIEW_DEV_SETTINGS",
      "VIEW_PERMISSIONS",
      "VIEW_STYLES",
      "VIEW_PREFERENCES",
      "VIEW_DEV_PERMISSION",
      "ADD_USER",
      "LIST_USER",
    ],
  },
  {
    id: 2,
    username: "admin",
    password: "adminpassword", // This should be hashed in production
    permissions: [
      "VIEW_DASHBOARD",
      "VIEW_NOTIFICATIONS",
      // "VIEW_USER_MANAGEMENT",
      // "ADD_USER",
      // "LIST_USER",
      "VIEW_SETTINGS",
      "VIEW_MESSAGES",
      "VIEW_SUBSCRIPTIONS",
      "VIEW_DEV_SETTINGS",
      // "VIEW_PERMISSIONS",
      // "VIEW_STYLES",
      // "VIEW_PREFERENCES",
    ],
  },
  {
    id: 3,
    username: "manager",
    password: "managerpassword", // This should be hashed in production
    permissions: ["VIEW_DASHBOARD"],
  },
  {
    id: 4,
    username: "user1",
    password: "userpassword", // This should be hashed in production
    permissions: ["VIEW_DASHBOARD"],
  },
  // Add more users as needed
];
