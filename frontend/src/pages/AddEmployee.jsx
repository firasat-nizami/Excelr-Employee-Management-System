import React, { useState } from "react";
import { addEmployee } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function AddEmployee(){
  const [form,setForm]=useState({name:'',email:'',designation:''});
  const navigate = useNavigate();

  const submit=async(e)=>{
    e.preventDefault();
    await addEmployee(form);
    navigate('/employees');
  };

  return (
    <div style={{maxWidth:720}}>
      <h2>Add Employee</h2>
      <div className="card" style={{marginTop:12}}>
        <form onSubmit={submit}>
          <div className="form-control"><label>Name</label><input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="input" /></div>
          <div className="form-control"><label>Email</label><input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="input" /></div>
          <div className="form-control"><label>Designation</label><input value={form.designation} onChange={e=>setForm({...form,designation:e.target.value})} className="input" /></div>
          <div style={{display:'flex',justifyContent:'flex-end'}}><button className="btn primary">Save</button></div>
        </form>
      </div>
    </div>
  );
}
