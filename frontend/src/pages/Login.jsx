import React, { useState } from "react";
import "../styles/Login.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

// Validation schema using Yup


const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Login API call
  const login = async (obj) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/employees/login",
        obj,
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Login Successful!", response.data);
      localStorage.setItem("id", response.data.id);
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("message", response.data.message);
    localStorage.setItem("role", response.data.role);
    localStorage.setItem("fullName", response.data.fullName);

      //Example: redirect based on role
      if (response.data.role === "ROLE_ADMIN") {
        window.location.href = "/admin-dashboard";
      } else {
        window.location.href = "/employee-dashboard";
      }

    } catch (error) {
      console.error("Login Failed:", error);
      alert("Invalid credentials!");
    }
  };

  // Handle login submit
  const handleLogin = async (e) => {
    
    e.preventDefault();
    // Validate data using Yup
    try {
 

      const obj = {
        personalMail: data.email,
        password: data.password,
      };

      login(obj);

    } catch (validationErrors) {
      const newErrors = {};
      validationErrors.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });

      setErrors(newErrors);
    }
    
  };

  return (
    <>
     

      <div className="login-container">
        <div className="login-card">
          <h2>Welcome Back</h2>
          <p className="login-subtext">Login to access your dashboard</p>

          <form >
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={data.email}
              onChange={handleChange}
            />
            {errors.email && <div className="error-text">{errors.email}</div>}

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={data.password}
              onChange={handleChange}
            />
            {errors.password && (
              <div className="error-text">{errors.password}</div>
            )}

            <button type="button" className="login-btn" onClick={handleLogin}>
              Login
            </button>
          </form>
        </div>
      </div>

     
    </>
  );
};

export default Login;
