import { Link } from "react-router-dom";
import {
  FaChartPie,
  FaUsers,
  FaCog,
  FaFileAlt,
  FaShoppingCart,
  FaBell,
  FaTasks,
  FaDollarSign,
  FaHome,
} from "react-icons/fa";
import PropTypes from "prop-types";
import "./HomeDashboard.css";

const HomeDashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <p>Monitor and manage your system efficiently</p>
      </header>

      {/* Dashboard Overview Cards */}
      <div className="dashboard-cards">
        <DashboardCard
          icon={<FaChartPie />}
          title="Analytics"
          value="75%"
          color="#4CAF50"
        />
        <DashboardCard
          icon={<FaUsers />}
          title="Users"
          value="1,245"
          color="#2196F3"
        />
        <DashboardCard
          icon={<FaShoppingCart />}
          title="Orders"
          value="678"
          color="#FF9800"
        />
        <DashboardCard
          icon={<FaFileAlt />}
          title="Reports"
          value="320"
          color="#9C27B0"
        />
        <DashboardCard
          icon={<FaBell />}
          title="Notifications"
          value="15"
          color="#E91E63"
        />
        <DashboardCard
          icon={<FaTasks />}
          title="Tasks"
          value="42"
          color="#795548"
        />
        <DashboardCard
          icon={<FaDollarSign />}
          title="Revenue"
          value="$12,500"
          color="#607D8B"
        />
        <DashboardCard
          icon={<FaCog />}
          title="Settings"
          value="Manage"
          color="#3F51B5"
        />
      </div>

      {/* Navigation Button */}
      <div className="dashboard-btn-container">
        <Link to="/">
          <button className="dashboard-btn">
            <FaHome />
            Goto Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

// Reusable Dashboard Card Component
const DashboardCard = ({ icon, title, value, color }) => {
  return (
    <div className="dashboard-card" style={{ backgroundColor: color }}>
      <div className="dashboard-icon">{icon}</div>
      <div className="dashboard-info">
        <h3>{title}</h3>
        <p>{value}</p>
      </div>
    </div>
  );
};

// PropTypes Validation
DashboardCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  color: PropTypes.string.isRequired,
};

export default HomeDashboard;
