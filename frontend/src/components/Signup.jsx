import React, { useState } from "react";
import "./Signup.css";
import catImg from "../assets/cat.png";

export default function Signup() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="signup-container">
      
      {/* LEFT SIDE */}
      <div className="left-box">
        <h1>Create account</h1>
        <p>Enter details to create your account</p>

        <form>
          <label>Name*</label>
          <input type="text" placeholder="Enter your name" />

          <label>Email*</label>
          <input type="email" placeholder="Enter a valid email" />

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

          <button className="create-btn">Create account</button>
        </form>

        <p className="login-text">
          Already have an account? <a href="/login">Login</a>
        </p>

        <div className="socials">
          <img src="https://img.icons8.com/color/48/google-logo.png" alt="google" />
          <img src="https://img.icons8.com/color/48/facebook.png" alt="fb" />
          <img src="https://img.icons8.com/ios-filled/50/mac-os.png" alt="apple" />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right-box">
        <img src={catImg} alt="cat illustration" />
      </div>
    </div>
  );
}
