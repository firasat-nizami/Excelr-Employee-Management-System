import React, { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../services/api";
import { Link } from "react-router-dom";

export default function Employees(){
  const [emps,setEmps]=useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(()=>{ load(); },[]);

  const load=async()=>{
    try{ const res = await getEmployees(); setEmps(res.data || []); }catch(e){console.error(e);}
    setLoading(false);
  };

  const handleDelete=async(id)=>{
    if(!window.confirm("Delete this employee?")) return;
    await deleteEmployee(id);
    setEmps(prev=>prev.filter(e=> (e._id||e.id) !== id));
  };

  return (
    <div>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <h2>Employees</h2>
        <Link to="/employees/add" className="btn primary">Add Employee</Link>
      </div>

      <div className="card" style={{marginTop:12}}>
        {loading ? <div>Loading...</div> :
          <table className="table">
            <thead><tr><th>Name</th><th>Email</th><th>Designation</th><th>Actions</th></tr></thead>
            <tbody>
              {emps.length===0 ? <tr><td colSpan={4}>No employees</td></tr> : emps.map(emp=>(
                <tr key={emp._id||emp.id}>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.designation}</td>
                  <td>
                    <Link to={`/employees/edit/${emp._id||emp.id}`}>Edit</Link> | <button className="btn link" onClick={()=>handleDelete(emp._id||emp.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        }
      </div>
    </div>
  );
}
