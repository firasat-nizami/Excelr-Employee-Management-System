import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <Link className="logo" to="/">
        EmployeeMS
      </Link>

      <nav className="nav">
        {/* Home Link */}
        <Link to="/">Home</Link>
        
        {/* Login Button: Now uses the class "login-btn" */}
        <Link to="/login" className="login-btn">Login</Link>
      </nav>
    </header>
  );
}