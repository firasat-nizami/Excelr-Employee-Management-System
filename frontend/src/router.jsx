import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import Platform from "./pages/Platform";
import Solutions from "./pages/Solutions";
import AdminDashboard from "./pages/AdminDashboard";

import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Platform from "./pages/Platform";
import Solutions from "./pages/Solutions"; // <-- New Page

const router = createBrowserRouter([
  {
    path: "/",element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      {path:"platform" ,element:<Platform />},
      {path:"admin-dashboard" ,element:<Dashboard />},
      {path:"solutions", element:<Solutions />},
      { path: "forgot-password", element: <ForgotPassword /> },
      { path: "reset-password", element: <ResetPassword /> },

      { path: "about", element: <About /> },
      { path: "privacy-policy", element: <PrivacyPolicy /> },
      { path: "terms", element: <Terms /> },

      { path: "platform", element: <Platform /> },
      { path: "solutions", element: <Solutions /> } // <-- FIXED
    ]
  }
]);

export default router;
