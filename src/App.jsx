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
import DevPermissions from "./pages/admin/regular/DevPermissions/DevPermissions";
import DevStyles from "./pages/admin/regular/DevStyles/DevStyles";
import SearchDashboard from "./pages/admin/common/SearchDashboard/SearchDashboard";

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
                    <Route
                      path="search-results"
                      element={<SearchDashboard />}
                    />

                    <Route path="/" element={<HomeDashboard />} />
                    <Route path="users/list" element={<DashboardList />} />
                    <Route path="unauthorized" element={<UnauthorizedPage />} />
                    <Route
                      path="dev-settings/permissions"
                      element={<DevPermissions />}
                    />
                    <Route path="dev-settings/styles" element={<DevStyles />} />
                    <Route
                      path="/admin/dev-settings/[preferences]"
                      element={<UnauthorizedPage />}
                    />
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
