import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/Login.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

// Validation schema
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [val,setVal] = useState([])

  const handleChange = (e) => {
    const {name, value} = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
      
  }

  const login = async (obj) => {
   

    try {
        const response = await axios.post(
            "http://localhost:8080/api/employees/login",
            obj,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );

        // If login success
        console.log("Login Successful!");
        console.log("Response:", response.data);

        // Store token
        //localStorage.setItem("token", response.data.token);

        // Navigate to dashboard based on role
        if (response.data.role === "ADMIN") {
            window.location.href = "/admin-dashboard";
        } else {
            window.location.href = "/employee-dashboard";
        }

    } catch (error) {
        console.error("Login Failed:", error);
        alert("Invalid credentials!");
    }
};


  const handleLogin = (e) => {
     e.preventDefault();

     console.log(data.email,data.password)
     let obj = {personalMail:data.email,password:data.password};
    login(obj)
     
  }
  return (
    <>
      <Header />

      <div className="login-container">
        <div className="login-card">
          <h2>Welcome Back</h2>
          <p className="login-subtext">Login to access your dashboard</p>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              console.log("Logged In:", values);
            }}
          >
            {() => (
              <Form>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={data.email}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-text"
                />

                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={data.password}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error-text"
                />

                <button type="submit" className="login-btn" onClick={(e) => handleLogin(e)}>
                  Login
                </button>
              </Form>
            )}
          </Formik>

          {/* This section has been removed */}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
