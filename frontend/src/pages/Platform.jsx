import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Platform() {
  return (
    <>
      <Header />

      <div className="page-container">
        <h1>Our Platform</h1>
        <p>
          EmployeeMS provides a modern platform to manage HR operations, attendance,
          employee onboarding, salary management, and performance tracking.
        </p>
      </div>

      <Footer />
    </>
  );
}
