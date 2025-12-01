import axios from "axios";

const USE_API = false; // set true if you have backend auth endpoints
const BASE = "http://localhost:5000/api"; // change if needed

export async function apiLogin({ email, password }) {
  const res = await axios.post(`${BASE}/auth/login`, { email, password });
  return res.data;
}

export async function apiSignup(payload) {
  const res = await axios.post(`${BASE}/auth/signup`, payload);
  return res.data;
}

// wrapper used by UI
export async function login(credentials) {
  if (USE_API) {
    const data = await apiLogin(credentials);
    localStorage.setItem("ems_token", data.token);
    localStorage.setItem("ems_role", data.role);
    localStorage.setItem("ems_user", JSON.stringify(data.user || {}));
    return data;
  } else {
    // mock: accept any credentials, return role based on email keyword
    const role = credentials.email.includes("admin") ? "admin" : "employee";
    const token = "mock-token-" + Date.now();
    localStorage.setItem("ems_token", token);
    localStorage.setItem("ems_role", role);
    localStorage.setItem("ems_user", JSON.stringify({ name: "Demo User", email: credentials.email }));
    return { token, role };
  }
}

export async function signup(payload) {
  if (USE_API) {
    return await apiSignup(payload);
  } else {
    // store locally (for demo)
    const users = JSON.parse(localStorage.getItem("ems_users") || "[]");
    users.push({ id: Date.now(), ...payload });
    localStorage.setItem("ems_users", JSON.stringify(users));
    return { ok: true };
  }
}

export function logout() {
  localStorage.removeItem("ems_token");
  localStorage.removeItem("ems_role");
  localStorage.removeItem("ems_user");
}

