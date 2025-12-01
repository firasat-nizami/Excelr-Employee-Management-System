import React, { useState } from "react";
import "../styles/Signup.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("User Registered:", form);
  };

  return (
    <>
      <Header />

      <div className="signup-container">
        <div className="signup-card">
          <h2>Create Account</h2>
          <p className="signup-subtext">Join EmployeeMS and manage your workspace</p>

          <form onSubmit={handleSignup}>
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Choose a password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Re-enter your password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />

            <button type="submit" className="signup-btn">Sign Up</button>
          </form>

          <p className="signup-login-text">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Signup;

