import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";   // ✔ Correct path (same folder)

export default function Header() {
  return (
    <header className="header">
      <Link className="logo" to="/">
        EmployeeMS
      </Link>

      <nav className="nav">
        <Link to="/platform">Platform</Link>
        <Link to="/solutions">Solutions</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup" className="start-btn">Start for free</Link>
      </nav>
    </header>
  );
}
