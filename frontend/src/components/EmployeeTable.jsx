import React from 'react';
import { Link } from 'react-router-dom';

export default function EmployeeTable({employees, onDelete}){
  return (
    <table className="table">
      <thead>
        <tr><th>Name</th><th>Email</th><th>Designation</th><th>Actions</th></tr>
      </thead>
      <tbody>
        {employees.length === 0 ? (
          <tr><td colSpan={4}>No employees found</td></tr>
        ) : employees.map(emp => (
          <tr key={emp._id || emp.id}>
            <td>{emp.name}</td>
            <td>{emp.email}</td>
            <td>{emp.designation}</td>
            <td>
              <Link to={`/employees/edit/${emp._id || emp.id}`} style={{marginRight:8}}>Edit</Link>
              <button className="btn-muted" onClick={()=>onDelete(emp._id || emp.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
