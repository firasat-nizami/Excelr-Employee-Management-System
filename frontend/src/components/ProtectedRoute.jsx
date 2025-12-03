import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("ems_token");
  if (!token) return <Navigate to="/login" replace />;
  return children;
}

export function AdminRoute({ children }) {
  const role = localStorage.getItem("ems_role");
  if (role !== "admin") return <Navigate to="/employee-dashboard" replace />;
  return children;
}

export function EmployeeRoute({ children }) {
  const role = localStorage.getItem("ems_role");
  if (role !== "employee") return <Navigate to="/dashboard" replace />;
  return children;
}
