import React, { useEffect, useState } from "react";
import { getEmployee, updateEmployee } from "../services/api";
import { useNavigate, useParams } from "react-router-dom";

export default function EditEmployee(){
  const { id } = useParams();
  const navigate = useNavigate();
  const [form,setForm]=useState({name:'',email:'',designation:''});
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    (async ()=>{
      try{ const res = await getEmployee(id); setForm(res.data || res); }catch(e){console.error(e);}
      setLoading(false);
    })();
  },[id]);

  const submit=async(e)=>{
    e.preventDefault();
    await updateEmployee(id,form);
    navigate('/employees');
  };

  if(loading) return <div>Loading...</div>;

  return (
    <div style={{maxWidth:720}}>
      <h2>Edit Employee</h2>
      <div className="card" style={{marginTop:12}}>
        <form onSubmit={submit}>
          <div className="form-control"><label>Name</label><input value={form.name||''} onChange={e=>setForm({...form,name:e.target.value})} className="input"/></div>
          <div className="form-control"><label>Email</label><input value={form.email||''} onChange={e=>setForm({...form,email:e.target.value})} className="input"/></div>
          <div className="form-control"><label>Designation</label><input value={form.designation||''} onChange={e=>setForm({...form,designation:e.target.value})} className="input"/></div>
          <div style={{display:'flex',justifyContent:'flex-end'}}><button className="btn primary">Update</button></div>
        </form>
      </div>
    </div>
  );
}
