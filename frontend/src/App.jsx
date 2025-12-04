import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Platform from "./pages/Platform";
import Solutions from "./pages/Solutions";
import AdminDashboard from "./pages/AdminDashboard";
import Sidebar from "./components/Sidebar";

// New Pages
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin-dashboard" element={<Dashboard/>}/>

        {/* New Pages */}
        <Route path="/platform" element={<Platform />} />
        <Route path="/solutions" element={<Solutions />} />

        {/* Footer Linked Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />

        {/* Admin Dashboard */}
        <Route
          path="/dashboard"
          element={
            <Sidebar>
              <AdminDashboard />
            </Sidebar>
          }
        />
      </Routes>
    </>
  );
}

export default App;
