import React from "react";

export default function Profile(){
  const user = JSON.parse(localStorage.getItem("ems_user") || "{}");
  return (
    <div>
      <h2>My Profile</h2>
      <div className="card" style={{maxWidth:720}}>
        <p><strong>Name:</strong> {user.name || "-"}</p>
        <p><strong>Email:</strong> {user.email || "-"}</p>
      </div>
    </div>
  );
}
