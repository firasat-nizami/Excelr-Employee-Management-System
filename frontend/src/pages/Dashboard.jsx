import React, { useEffect, useState } from "react";
import EmployeeTable from "../components/EmployeeTable";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

  const navigate = useNavigate();

  const [empData, setEmpData] = useState([]);

  const fetchData = async() => {
      let res = await axios.get("http://localhost:8080/api/employees");
      let data = await res.data;
      setEmpData(data)

  }
useEffect(() => {

fetchData();


},[])

console.log(empData);

const onDelete = async(id) => {
  console.log("id "+id);
  await axios.delete(`http://localhost:8080/api/employees/${id}`)
  fetchData();
}

const onView = (emp_id) => {
  console.log("on view "+emp_id)
   navigate(`/employee-dashboard/${emp_id}`, {
  state: { employee: empData }
});

}

const fullName = localStorage.getItem("fullName");
const role = localStorage.getItem("role").substring(5);
  
  return (
    <div>
      <h2>Admin Dashboard -- {fullName} ( {role} ) </h2>

      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:16, marginTop:16}}>
        <div className="card"><div className="stat-label">Total employees</div><div className="stat-value">{empData.length}</div></div>
        <div className="card"><div className="stat-label">Active Projects</div><div className="stat-value">8</div></div>
        <div className="card"><div className="stat-label">Pending Tasks</div><div className="stat-value">12</div></div>
        <div className="card"><div className="stat-label">Departments</div><div className="stat-value">6</div></div>
      </div>

      
     <EmployeeTable employee = {empData} onDelete={onDelete} onView = {onView}/>
    </div>
  );
}
