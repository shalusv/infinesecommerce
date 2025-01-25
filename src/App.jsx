import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider
import CommonDashboardLayout from "./components/admin/CommonDashbaordlayout/CommonDashbaordlayout";
import Login from "./pages/client/common/Login/Login";
import DashboardList from "./pages/admin/regular/DashboardList/DashboardList";
import UnauthorizedPage from "./pages/admin/common/UnauthorizedPage/UnauthorizedPage";
import ProtectedRoute from "./components/admin/common/ProtectedRoute/ProtectedRoute"; // Import ProtectedRoute
import HomeDashboard from "./pages/admin/regular/HomeDashboard/HomeDashboard";
import AdminLogin from "./pages/admin/common/LoginAdmin/LoginAdmin"; // Import AdminLogin component

import "./App.css";
import "./assets/styles/style.css";
import "./assets/styles/root.css";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Login />} /> {/* Client Login */}
          <Route path="/admin/login" element={<AdminLogin />} />{" "}
          {/* Admin Login */}
          {/* Admin Routes with ProtectedRoute */}
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute requiredPermissions={["VIEW_DASHBOARD"]}>
                <CommonDashboardLayout>
                  <Routes>
                    <Route path="/" element={<HomeDashboard />} />
                    <Route path="users/list" element={<DashboardList />} />
                    <Route path="unauthorized" element={<UnauthorizedPage />} />
                  </Routes>
                </CommonDashboardLayout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
