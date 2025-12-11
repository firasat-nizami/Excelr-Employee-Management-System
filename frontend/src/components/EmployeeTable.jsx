import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { FaEdit, FaTrash } from "react-icons/fa";
import "./EmployeeTable.css";
import { useNavigate } from "react-router-dom";


export default function EmployeeTable({employee,onDelete}){

  
   const handleDelete = (id) => {
    onDelete(id);
  };

  const navigate = useNavigate();

  const handleEdit = (id) => {
    nav
  };
  return (
      <div className="container">
      <h2 className="title">Employee List</h2>

      <button onClick={() => {navigate("/signup")}} className="create-btn" >
        + Create Employee
      </button>
       <table className="emp-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employee.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.fullName}</td>
              <td>{emp.personalMail}</td>
              <td>{emp.roles}</td>
              <td className="actions">
                <FaEdit className="icon edit" onClick={() => handleEdit(emp.id)} />
                <FaTrash className="icon delete" onClick={() => handleDelete(emp.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    // <table className="table">
    //   <thead>
    //     <tr><th>Name</th><th>Email</th><th>Designation</th><th>Actions</th></tr>
    //   </thead>
    //   <tbody>
    //     {employee.length === 0 ? (
    //       <tr><td colSpan={4}>No employees found</td></tr>
    //     ) : employee.map(emp => (
    //       <tr key={emp._id || emp.id}>
    //         <td>{emp.fullName}</td>
    //         <td>{emp.personalMail}</td>
    //         {/* <td>{emp.designation}</td> */}
    //         <td>
    //           <Link to={`/employees/edit/${emp._id || emp.id}`} style={{marginRight:8}}>Edit</Link>
    //           <button className="btn-muted" onClick={()=>onDelete(emp._id || emp.id)}>Delete</button>
    //         </td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
  );
}
