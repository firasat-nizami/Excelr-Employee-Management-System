import React, { useState } from "react";
import "../styles/Login.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logged In:", email, password);
  };

  return (
    <>
      <Header />

      <div className="login-container">
        <div className="login-card">

          <h2>Welcome Back</h2>
          <p className="login-subtext">Login to access your dashboard</p>

          <form onSubmit={handleLogin}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className="login-btn">Login</button>
          </form>

          <p className="register-text">
            Don’t have an account? <a href="/signup">Create one</a>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
