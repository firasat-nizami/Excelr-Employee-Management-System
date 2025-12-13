import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./EmployeeDashboard.css";
import axios from "axios";

export default function EmployeeDashboard() {
  const [employee, setEmployee] = useState([]);

  const id = localStorage.getItem("id");
  const fullName = localStorage.getItem("fullName");
  const role = localStorage.getItem("role").substring(5);

  const fetchData = async () => {
    let res = await axios.get(`http://localhost:8000/api/employees/${id}`);
    let data = await res.data;
    setEmployee(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="page-container">
      <div className="card">
        <h1 className="title">Employee Details -Welcome User {fullName}</h1>
        <p className="subtitle">View complete employee information</p>

        <div className="section">
          <h2>Personal Information</h2>
          <div className="grid">
            <div className="field">
              <label>Full Name</label>
              <p>{employee.fullName}</p>
            </div>
            <div className="field">
              <label>Employment Code</label>
              <p>{employee.employmentCode}</p>
            </div>
            <div className="field">
              <label>Date of Birth</label>
              <p>{employee.dob}</p>
            </div>
            <div className="field">
              <label>Gender</label>
              <p>{employee.gender}</p>
            </div>
            <div className="field">
              <label>Age</label>
              <p>{employee.age}</p>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Contact Information</h2>
          <div className="grid">
            <div className="field">
              <label>Personal Email</label>
              <p>{employee.personalMail}</p>
            </div>
            <div className="field">
              <label>Company Email</label>
              <p>{employee.companyMail}</p>
            </div>
            <div className="field">
              <label>Mobile</label>
              <p>{employee.mobile}</p>
            </div>
            <div className="field">
              <label>Emergency Contact Name</label>
              <p>{employee.emergencyContactName}</p>
            </div>
            <div className="field">
              <label>Emergency Mobile</label>
              <p>{employee.emergencyMobile}</p>
            </div>
          </div>
        </div>

        {/* CURRENT ADDRESS */}
        <div className="section">
          <h2>Current Address</h2>
          <div className="grid">
            <div className="field">
              <label>Address Line 1</label>
              <p>{employee.currentAddress?.addressLine1}</p>
            </div>
            <div className="field">
              <label>Address Line 2</label>
              <p>{employee.currentAddress?.addressLine2}</p>
            </div>
            <div className="field">
              <label>City</label>
              <p>{employee.currentAddress?.city}</p>
            </div>
            <div className="field">
              <label>Pincode</label>
              <p>{employee.currentAddress?.pincode}</p>
            </div>
          </div>
        </div>

        {/* PERMANENT ADDRESS */}
        <div className="section">
          <h2>Permanent Address</h2>
          <div className="grid">
            <div className="field">
              <label>Address Line 1</label>
              <p>{employee.permanentAddress?.addressLine1}</p>
            </div>
            <div className="field">
              <label>Address Line 2</label>
              <p>{employee.permanentAddress?.addressLine2}</p>
            </div>
            <div className="field">
              <label>City</label>
              <p>{employee.permanentAddress?.city}</p>
            </div>
            <div className="field">
              <label>Pincode</label>
              <p>{employee.permanentAddress?.pincode}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
