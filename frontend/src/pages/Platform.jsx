import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Platform.css";

export default function Platform() {
  return (
    <>
      <Header />

      <div className="platform-container">
        <h1 className="platform-title">Our Platform</h1>
        <p className="platform-desc">
          EmployeeMS is a modern employee management system built for HR teams
          to manage employees, attendance, payroll and reports with ease.
        </p>

        <div className="platform-features">
          <div className="feature-card">
            <h3>✔ Employee Management</h3>
            <p>Track employee details, roles, departments and attendance.</p>
          </div>

          <div className="feature-card">
            <h3>✔ Admin Dashboard</h3>
            <p>Powerful dashboard to manage and monitor company workflow.</p>
          </div>

          <div className="feature-card">
            <h3>✔ Secure Login System</h3>
            <p>Safe authentication system for admins and employees.</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
