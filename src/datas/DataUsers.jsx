// src/datas/DataUsers.jsx
export const users = [
  {
    id: 2,
    username: "developer",
    password: "123",
    permissions: [
      "VIEW_DASHBOARD",
      "VIEW_DEV_SETTINGS",
      "VIEW_DEV_PERMISSION",
      "VIEW_USER_MANAGEMENT",
      "ADD_USER",
      "LIST_USER",
    ],
  },
  {
    id: 2,
    username: "admin",
    password: "adminpassword",
    permissions: [
      "VIEW_DASHBOARD",
      "VIEW_USER_MANAGEMENT",
      "ADD_USER",
      "LIST_USER",
    ],
  },
  {
    id: 3,
    username: "manager",
    password: "managerpassword", //
    permissions: [
      "VIEW_DASHBOARD",
      "VIEW_USER_MANAGEMENT",
      "ADD_USER",
      "LIST_USER",
    ],
  },
  {
    id: 4,
    username: "user1",
    password: "userpassword",
    permissions: ["VIEW_DASHBOARD", "VIEW_USER_MANAGEMENT", "LIST_USER"],
  },
];
