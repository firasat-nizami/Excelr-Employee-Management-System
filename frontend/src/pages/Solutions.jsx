import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Solutions() {
  return (
    <>
      <Header />

      <div className="page-container">
        <h1>Our Solutions</h1>
        <p>
          We offer end-to-end employee management solutions such as payroll,
          attendance automation, onboarding, leave management, and workforce analytics.
        </p>
      </div>

      <Footer />
    </>
  );
}
