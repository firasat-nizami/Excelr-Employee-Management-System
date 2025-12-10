import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/Login.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    try {
      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Invalid credentials");
        return;
      }

      alert("Login successful!");

      // Navigate to dashboard
      navigate("/dashboard");

    } catch (error) {
      alert("Server error. Please try again.");
      console.error(error);
    }
  };

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
            onSubmit={handleLogin}
          >
            {() => (
              <Form>
                <label>Email</label>
                <Field type="email" name="email" placeholder="Enter your email" />
                <ErrorMessage name="email" component="div" className="error-text" />

                <label>Password</label>
                <Field type="password" name="password" placeholder="Enter your password" />
                <ErrorMessage name="password" component="div" className="error-text" />

                <button type="submit" className="login-btn">Login</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
