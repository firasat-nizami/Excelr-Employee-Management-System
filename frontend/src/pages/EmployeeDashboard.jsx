import React from "react";

export default function EmployeeDashboard(){
  const user = JSON.parse(localStorage.getItem("ems_user") || "{}");
  return (
    <div>
      <h2>Welcome, {user.name || user.email}</h2>
      <div className="card" style={{marginTop:12}}>
        <h3>Your Profile</h3>
        <p>View your personal and finance details from the profile page.</p>
      </div>
    </div>
  );
}
