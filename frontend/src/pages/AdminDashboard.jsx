import React from "react";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">

      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="sidebar-title">Admin Panel</h2>
        <ul className="sidebar-menu">

          <li>
            <Link to="/admin-dashboard">
              <span className="menu-title">Dashboard</span>
              <span className="menu-info">Overview & stats</span>
            </Link>
          </li>

          <li>
            <Link to="/employees">
              <span className="menu-title">Employees</span>
              <span className="menu-info">Manage employee data</span>
            </Link>
          </li>

          <li>
            <Link to="/projects">
              <span className="menu-title">Projects</span>
              <span className="menu-info">Ongoing & pending tasks</span>
            </Link>
          </li>

          <li>
            <Link to="/approvals">
              <span className="menu-title">Approvals</span>
              <span className="menu-info">Pending requests</span>
            </Link>
          </li>

          <li>
            <Link to="/reports">
              <span className="menu-title">Reports</span>
              <span className="menu-info">Daily & monthly reports</span>
            </Link>
          </li>

          <li>
            <Link to="/settings">
              <span className="menu-title">Settings</span>
              <span className="menu-info">System configuration</span>
            </Link>
          </li>

        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">

        {/* Top Navbar */}
        <div className="top-navbar">
          <h1>Admin Dashboard</h1>
          <button className="logout-btn">Logout</button>
        </div>

        {/* Cards Section */}
        <div className="cards-row">
          <div className="card">
            <h3>Total Employees</h3>
            <p>120</p>
          </div>

          <div className="card">
            <h3>Active Projects</h3>
            <p>8</p>
          </div>

          <div className="card">
            <h3>Pending Approvals</h3>
            <p>4</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
