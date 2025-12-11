import React from 'react';
import { Link,useNavigate  } from 'react-router-dom';
import { FaEdit, FaTrash,FaEye } from "react-icons/fa";
import "./EmployeeTable.css";


export default function EmployeeTable({employee,onDelete,onView}){

  

   const handleDelete = (id) => {
    onDelete(id);
  };

  const handleView = (emp_id) => {
    onView(emp_id)
  }

  const handleEdit = (id) => {
    
  };
  return (
      <div className="container">
      <h2 className="title">Employee List</h2>

      <button className="create-btn" >
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
                  <FaEye className="icon eye" onClick={() => handleView(emp.id)} />
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
