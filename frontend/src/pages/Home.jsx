import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import heroImg from "../assets/hero.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <div className="home-container">
        <div className="home-text">
          <h1 className="home-title">
            Modern UI <br /> Employee <br /> Management <br /> System
          </h1>

          <p className="home-subtitle">
            Simplify your HR workflow and manage employees with smart UI.
          </p>

          <Link to="/login">
            <button className="get-started-btn">Get Started</button>
          </Link>
        </div>

        <div className="home-image-container">
          <img src={heroImg} alt="Hero" className="hero-img" />
        </div>
      </div>

      <Footer />  {/* ⭐ Footer only on Home */}
    </>
  );
}
