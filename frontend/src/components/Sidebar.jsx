import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">EMS</h2>

      <ul className="sidebar-menu">
        <li><Link to="/admin-dashboard">Dashboard</Link></li>
        <li><Link to="/employees">Employees</Link></li>
        <li><Link to="/add-employee">Add Employee</Link></li>
        <li><Link to="/finance">Finance</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </div>
  );
}
