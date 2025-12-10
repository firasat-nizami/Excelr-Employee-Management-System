import React from "react";
import "../styles/Signup.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useFormik } from "formik";
import { signupValidationSchema } from "../validation/signupValidation";

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      employmentCode: "",
      dob: "",
      gender: "",
      personalMail: "",
      companyMail: "",
      mobile: "",
      emergencyContactName: "",
      emergencyMobile: "",
      currentCity: "",
      currentAddressLine1: "",
      currentAddressLine2: "",
      currentPincode: "",
      permanentCity: "",
      permanentAddressLine1: "",
      permanentAddressLine2: "",
      permanentPincode: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: signupValidationSchema,

    onSubmit: (values) => {
      console.log("REGISTERED SUCCESSFULLY:", values);
    },
  });

  return (
    <>
      <Header />

      <div className="signup-container">
        <div className="signup-card">
          <h2>Create Account</h2>
          <p className="signup-subtext">Join EmployeeMS and manage your workspace</p>

          <form onSubmit={formik.handleSubmit}>

            {/* Full Name */}
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="error-text">{formik.errors.name}</p>
            )}

            {/* Employment Code */}
            <label>Employment Code</label>
            <input
              type="text"
              name="employmentCode"
              placeholder="Enter employment code"
              value={formik.values.employmentCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.employmentCode && formik.errors.employmentCode && (
              <p className="error-text">{formik.errors.employmentCode}</p>
            )}

            {/* DOB */}
            <label>Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formik.values.dob}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.dob && formik.errors.dob && (
              <p className="error-text">{formik.errors.dob}</p>
            )}

            {/* Gender */}
            <label>Gender</label>
            <select
              name="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {formik.touched.gender && formik.errors.gender && (
              <p className="error-text">{formik.errors.gender}</p>
            )}

            {/* Personal Email */}
            <label>Personal Email</label>
            <input
              type="email"
              name="personalMail"
              placeholder="Enter personal email"
              value={formik.values.personalMail}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.personalMail && formik.errors.personalMail && (
              <p className="error-text">{formik.errors.personalMail}</p>
            )}

            {/* Company Email */}
            <label>Company Email</label>
            <input
              type="email"
              name="companyMail"
              placeholder="Enter company email"
              value={formik.values.companyMail}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.companyMail && formik.errors.companyMail && (
              <p className="error-text">{formik.errors.companyMail}</p>
            )}

            {/* Mobile */}
            <label>Mobile</label>
            <input
              type="text"
              name="mobile"
              placeholder="Enter mobile number"
              value={formik.values.mobile}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.mobile && formik.errors.mobile && (
              <p className="error-text">{formik.errors.mobile}</p>
            )}

            {/* Emergency Contact Name */}
            <label>Emergency Contact Name</label>
            <input
              type="text"
              name="emergencyContactName"
              placeholder="Enter emergency contact name"
              value={formik.values.emergencyContactName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.emergencyContactName &&
              formik.errors.emergencyContactName && (
                <p className="error-text">{formik.errors.emergencyContactName}</p>
              )}

            {/* Emergency Mobile */}
            <label>Emergency Mobile</label>
            <input
              type="text"
              name="emergencyMobile"
              placeholder="Enter emergency mobile"
              value={formik.values.emergencyMobile}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.emergencyMobile && formik.errors.emergencyMobile && (
              <p className="error-text">{formik.errors.emergencyMobile}</p>
            )}

            {/* Current Address */}
            <h3>Current Address</h3>

            <label>City</label>
            <input
              type="text"
              name="currentCity"
              placeholder="Enter city"
              value={formik.values.currentCity}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.currentCity && formik.errors.currentCity && (
              <p className="error-text">{formik.errors.currentCity}</p>
            )}

            <label>Address Line 1</label>
            <input
              type="text"
              name="currentAddressLine1"
              placeholder="Enter address line 1"
              value={formik.values.currentAddressLine1}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.currentAddressLine1 &&
              formik.errors.currentAddressLine1 && (
                <p className="error-text">
                  {formik.errors.currentAddressLine1}
                </p>
              )}

            <label>Address Line 2</label>
            <input
              type="text"
              name="currentAddressLine2"
              placeholder="Enter address line 2"
              value={formik.values.currentAddressLine2}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <label>Pincode</label>
            <input
              type="text"
              name="currentPincode"
              placeholder="Enter pincode"
              value={formik.values.currentPincode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.currentPincode && formik.errors.currentPincode && (
              <p className="error-text">{formik.errors.currentPincode}</p>
            )}

            {/* Permanent Address */}
            <h3>Permanent Address</h3>

            <label>City</label>
            <input
              type="text"
              name="permanentCity"
              placeholder="Enter city"
              value={formik.values.permanentCity}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.permanentCity && formik.errors.permanentCity && (
              <p className="error-text">{formik.errors.permanentCity}</p>
            )}

            <label>Address Line 1</label>
            <input
              type="text"
              name="permanentAddressLine1"
              placeholder="Enter address line 1"
              value={formik.values.permanentAddressLine1}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.permanentAddressLine1 &&
              formik.errors.permanentAddressLine1 && (
                <p className="error-text">
                  {formik.errors.permanentAddressLine1}
                </p>
              )}

            <label>Address Line 2</label>
            <input
              type="text"
              name="permanentAddressLine2"
              placeholder="Enter address line 2"
              value={formik.values.permanentAddressLine2}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <label>Pincode</label>
            <input
              type="text"
              name="permanentPincode"
              placeholder="Enter pincode"
              value={formik.values.permanentPincode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.permanentPincode &&
              formik.errors.permanentPincode && (
                <p className="error-text">{formik.errors.permanentPincode}</p>
              )}

            {/* Password */}
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Choose a password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="error-text">{formik.errors.password}</p>
            )}

            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Re-enter password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <p className="error-text">{formik.errors.confirmPassword}</p>
              )}

            {/* Submit Button */}
            <button type="submit" className="signup-btn">
              Sign Up
            </button>
          </form>

          <p className="signup-login-text">
            Already have an account?{" "}
            <a href="/login">Login</a>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Signup;
