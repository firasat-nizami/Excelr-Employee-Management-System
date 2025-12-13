import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup"; // If you have this page
import Header from "./components/Header";
import Footer from "./components/Footer";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import EmployeeView from "./pages/EmployeeView";

function App() {
  return (
    <BrowserRouter>
     <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Main Pages */}
        <Route path="/about" element={<About />} />
    
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Admin */}
        <Route path="/admin-dashboard" element={<Dashboard />} />

         {/* Dashboards */}
 
        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
        <Route path="/employee-dashboard/:emp_id" element={<EmployeeView/>} />
        
      </Routes>
       <Footer />
    </BrowserRouter>
  );
}

export default App;
