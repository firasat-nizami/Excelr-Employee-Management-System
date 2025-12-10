import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Header />

      <div style={{ padding: "50px" }}>
        <h1>About Us</h1>
        <p>
          Our Employee Management System helps companies streamline operations,
          track employee performance, and improve workflow efficiency.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default About;
