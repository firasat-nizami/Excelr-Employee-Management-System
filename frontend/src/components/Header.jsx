import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-inner">

        <h2 className="logo" onClick={() => navigate("/")}>
          EmployeeMS
        </h2>

        <nav className="nav">
          <Link to="/">Platform</Link>
          <Link to="/solutions">Solutions</Link>
          <Link to="/login">Login</Link>

          <button className="start-btn" onClick={() => navigate("/signup")}>
            Start for free
          </button>
        </nav>

      </div>
    </header>
  );
}
