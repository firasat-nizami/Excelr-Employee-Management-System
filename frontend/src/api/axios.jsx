// src/api/axios.js
import axios from "axios";

const login = async() => {
      let res = await axios.get("http://localhost:8080/api/employees",{
        method:"POST",
        headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(obj)
      });
      let data = await res.data;
      setEmpData(data)

  }
useEffect(() => {

login();


},[])

// fetch("http://localhost:8080/api/login",{
//             method:"POST",
//             headers:{
//                 "Content-Type":"application/json"
//             },
//             body:JSON.stringify(obj)
//         })
//         .then(data => data.json())
//         .then(data => {
//             console.log(data)
//             localStorage.setItem("token",JSON.stringify(data.token))
//         }).catch(err => console.log(err))