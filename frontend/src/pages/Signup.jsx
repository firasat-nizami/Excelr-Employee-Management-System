// src/pages/Signup.jsx
import React, { useState } from "react";
import "../styles/Signup.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const POST_URL = "http://localhost:8000/api/employees"; // your endpoint

const Signup = () => {
  const [form, setForm] = useState({
    fullName: "",
    employmentCode: "",
    dob: "",
    gender: "",
    age: "",
    personalMail: "",
    companyMail: "",
    mobile: "",
    emergencyContactName: "",
    emergencyMobile: "",
    password: "",
    // nested address objects
    currentAddress: {
      city: "",
      addressLine1: "",
      addressLine2: "",
      pincode: "",
    },
    permanentAddress: {
      city: "",
      addressLine1: "",
      addressLine2: "",
      pincode: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  /**
   * Generic change handler that supports nested keys using dot notation:
   * name="currentAddress.city" -> updates form.currentAddress.city
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    // split on dot for nested updates
    if (name.includes(".")) {
      const [parentKey, childKey] = name.split(".");
      setForm((prev) => ({
        ...prev,
        [parentKey]: {
          ...prev[parentKey],
          [childKey]: value,
        },
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
    setError("");
    setSuccess("");
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    // Build payload matching your Postman example:
    const payload = {
      fullName: form.fullName,
      dob: form.dob,
      gender: form.gender,
      age: form.age === "" ? undefined : Number(form.age),
      employmentCode: form.employmentCode,
      mobile: form.mobile,
      personalMail: form.personalMail,
      companyMail: form.companyMail,
      emergencyContactName: form.emergencyContactName,
      emergencyMobile: form.emergencyMobile,
      password: form.password,
      currentAddress: {
        city: form.currentAddress.city,
        addressLine1: form.currentAddress.addressLine1,
        addressLine2: form.currentAddress.addressLine2,
        pincode: form.currentAddress.pincode,
      },
      permanentAddress: {
        city: form.permanentAddress.city,
        addressLine1: form.permanentAddress.addressLine1,
        addressLine2: form.permanentAddress.addressLine2,
        pincode: form.permanentAddress.pincode,
      },
    };

    // Log for debugging: you should now see currentAddress and permanentAddress
    console.log("Submitting payload:", payload);

     try {
    const response = await axios.post(POST_URL, payload, {
      // headers: { "Content-Type": "application/json" }, // axios sets this automatically for objects
      // withCredentials: true, // enable if server uses cookies/sessions
    });

    // Only redirect on a successful status code
    if (response.status >= 200 && response.status < 300) {
      console.log("REGISTERED SUCCESSFULLY:", response.data);
      // optional: store token / user data here before redirect
      navigate("/admin-dashboard");
    } else {
      // unlikely because axios throws for non-2xx, but keep for clarity
      setError("Unexpected response from the server.");
      console.warn("Unexpected status:", response.status, response.data);
    }
  } catch (err) {
    console.error("Submit error:", err);
    const msg =
      err?.response?.data?.message ||
      JSON.stringify(err?.response?.data) ||
      err?.message ||
      "An error occurred while registering.";
    setError(String(msg));
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      <Header />

      <div className="signup-container">
        <div className="signup-card">
          <h2>Create Account</h2>
          <p className="signup-subtext">Join EmployeeMS and manage your workspace</p>

          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={form.fullName}
              onChange={handleChange}
            />

            {/* Employment Code */}
            <label>Employment Code</label>
            <input
              type="text"
              name="employmentCode"
              placeholder="Enter employment code"
              value={form.employmentCode}
              onChange={handleChange}
            />

            {/* DOB */}
            <label>Date of Birth</label>
            <input type="date" name="dob" value={form.dob} onChange={handleChange} />

            {/* Gender */}
            <label>Gender</label>
            <select name="gender" value={form.gender} onChange={handleChange}>
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            {/* Age */}
            <label>Age</label>
            <input
              type="number"
              name="age"
              placeholder="Enter age"
              value={form.age}
              onChange={handleChange}
            />

            {/* Personal Email */}
            <label>Personal Email</label>
            <input
              type="email"
              name="personalMail"
              placeholder="Enter personal email"
              value={form.personalMail}
              onChange={handleChange}
            />

            {/* Company Email */}
            <label>Company Email</label>
            <input
              type="email"
              name="companyMail"
              placeholder="Enter company email"
              value={form.companyMail}
              onChange={handleChange}
            />

            {/* Mobile */}
            <label>Mobile</label>
            <input
              type="text"
              name="mobile"
              placeholder="Enter mobile number"
              value={form.mobile}
              onChange={handleChange}
            />

            {/* Emergency Contact Name */}
            <label>Emergency Contact Name</label>
            <input
              type="text"
              name="emergencyContactName"
              placeholder="Enter emergency contact name"
              value={form.emergencyContactName}
              onChange={handleChange}
            />

            {/* Emergency Mobile */}
            <label>Emergency Mobile</label>
            <input
              type="text"
              name="emergencyMobile"
              placeholder="Enter emergency mobile"
              value={form.emergencyMobile}
              onChange={handleChange}
            />

            {/* Current Address */}
            <h3>Current Address</h3>

            <label>City</label>
            <input
              type="text"
              name="currentAddress.city"
              placeholder="Enter city"
              value={form.currentAddress.city}
              onChange={handleChange}
            />

            <label>Address Line 1</label>
            <input
              type="text"
              name="currentAddress.addressLine1"
              placeholder="Enter address line 1"
              value={form.currentAddress.addressLine1}
              onChange={handleChange}
            />

            <label>Address Line 2</label>
            <input
              type="text"
              name="currentAddress.addressLine2"
              placeholder="Enter address line 2"
              value={form.currentAddress.addressLine2}
              onChange={handleChange}
            />

            <label>Pincode</label>
            <input
              type="text"
              name="currentAddress.pincode"
              placeholder="Enter pincode"
              value={form.currentAddress.pincode}
              onChange={handleChange}
            />

            {/* Permanent Address */}
            <h3>Permanent Address</h3>

            <label>City</label>
            <input
              type="text"
              name="permanentAddress.city"
              placeholder="Enter city"
              value={form.permanentAddress.city}
              onChange={handleChange}
            />

            <label>Address Line 1</label>
            <input
              type="text"
              name="permanentAddress.addressLine1"
              placeholder="Enter address line 1"
              value={form.permanentAddress.addressLine1}
              onChange={handleChange}
            />

            <label>Address Line 2</label>
            <input
              type="text"
              name="permanentAddress.addressLine2"
              placeholder="Enter address line 2"
              value={form.permanentAddress.addressLine2}
              onChange={handleChange}
            />

            <label>Pincode</label>
            <input
              type="text"
              name="permanentAddress.pincode"
              placeholder="Enter pincode"
              value={form.permanentAddress.pincode}
              onChange={handleChange}
            />

            {/* Password */}
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Choose a password"
              value={form.password}
              onChange={handleChange}
            />

            {/* Submit Button */}
            <button type="submit" className="signup-btn" disabled={loading}>
              {loading ? "Signing up..." : "Sign Up"}
            </button>

            {error && <p className="error-text" style={{ marginTop: 12 }}>{error}</p>}
            {success && <p className="success-text" style={{ marginTop: 12 }}>{success}</p>}
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