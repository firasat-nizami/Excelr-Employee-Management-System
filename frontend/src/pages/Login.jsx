import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/Login.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-text"
                />

                <label>Password</label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error-text"
                />

                <button type="submit" className="login-btn">
                  Login
                </button>
              </Form>
            )}
          </Formik>

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
