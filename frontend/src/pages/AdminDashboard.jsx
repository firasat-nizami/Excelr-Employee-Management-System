// src/pages/AdminDashboard.jsx
import React from "react";
import logo from "../assets/dashboard-logo.png";

import "../styles/Dashboard.css";

export default function AdminDashboard() {
  return (
    <div className="admin-container">

      {/* -------- Header -------- */}
      <div className="admin-header">
        <div className="header-left">
          <img src={logo} alt="Logo" className="admin-logo" />
          <h2>Admin Dashboard</h2>
        </div>

        <button className="logout-btn">Logout</button>
      </div>

      {/* -------- Hero Section -------- */}
      <div className="hero-section">
        <div className="hero-left">
          <h1>
            Modern UI <br />
            Employee <br />
            Management <br />
            System
          </h1>

          <p>
            Simplify your HR workflow and manage employees with smart UI.
          </p>

          <button className="get-started-btn">Get Started</button>
        </div>

        <div className="hero-right">
          <img
            src="/hero.png"
            alt="Dashboard hero"
            className="hero-image"
          />
        </div>
      </div>

    </div>
  );
}
