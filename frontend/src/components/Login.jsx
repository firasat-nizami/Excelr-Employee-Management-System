import React, { useState } from "react";
import "./Login.css";
import vaseImg from "../assets/vase.png";

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="login-container">
      {/* LEFT SIDE */}
      <div className="left-box">
        <h1>Welcome Back!</h1>
        <p>Login to continue</p>

        <form>
          <label>Email*</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password*</label>
          <div className="password-wrapper">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="********"
            />
            <span
              className="eye-icon"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? "🙈" : "👁️"}
            </span>
          </div>

          <button className="login-btn">Login</button>
        </form>

        <p className="signup-text">
          Don't have an account? <a href="/signup">Create account</a>
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="right-box">
        <img src={vaseImg} alt="illustration" />
      </div>
    </div>
  );
}
