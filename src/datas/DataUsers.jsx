// src/datas/DataUsers.jsx
export const users = [
  {
    id: 1,
    username: "admin",
    password: "adminpassword", // This should be hashed in production
    permissions: ["VIEW_DASHBOARD", "VIEW_USER_MANAGEMENT", "EDIT_USER"],
  },
  {
    id: 2,
    username: "manager",
    password: "managerpassword", // This should be hashed in production
    permissions: ["VIEW_DASHBOARD"],
  },
  {
    id: 3,
    username: "user1",
    password: "userpassword", // This should be hashed in production
    permissions: ["VIEW_ORDERS"],
  },
  // Add more users as needed
];
