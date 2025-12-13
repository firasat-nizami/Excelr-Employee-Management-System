import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {

  const [isLogin, setIsLogin] = useState();

  const message = localStorage.getItem("message");

  const handleLogout = () => {
    
   
    if(message){
      setIsLogin(true)
      localStorage.removeItem("email");
      localStorage.removeItem("message");
    localStorage.removeItem("role")
    localStorage.removeItem("fullName")
    }
     setIsLogin(!isLogin)
  }
  return (
    <header className="header">
      <Link className="logo" to="/">
        EmployeeMS
      </Link>

      <nav className="nav">
        {/* Home Link */}
        <Link to="/">Home</Link>
        
        {/* Login Button: Now uses the class "login-btn" */}
        <Link to="/login" className="login-btn" onClick={handleLogout}>{isLogin ? "Login": "Logout"}</Link>
      </nav>
    </header>
  );
}