import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "./pages/AdminDashboard";
import Sidebar from "./components/Sidebar";

import Platform from "./pages/Platform";


function App() {
  return (
    <Routes>

      {/* Public Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/platform" element={<Platform />} />


      {/* Admin Panel (with Sidebar) */}
      <Route
        path="/dashboard"
        element={
          <Sidebar>
            <AdminDashboard />
          </Sidebar>
        }
      />
    </Routes>
  );
}

export default App;
