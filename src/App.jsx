// export default function App() {
//   return <h1 style={{ padding: 24 }}>Hello PATHFINDER 👋</h1>;

import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import DashboardHome from "./pages/Dashboard/DashboardHome";
import Courses from "./pages/Courses";
import Assignments from "./pages/Assignments";
import Profile from "./pages/Profile";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in (token exists in localStorage)
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (token && userData) {
      setUser(JSON.parse(userData));
    }
    setLoading(false);
  }, []);

  const handleLogin = (userData, token) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", token);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={user ? <Navigate to="/Dashboard" /> : <LandingPage />}
          />
          <Route
            path="/login"
            element={
              user ? (
                <Navigate to="/Dashboard" />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/signup"
            element={
              user ? (
                <Navigate to="/Dashboard" />
              ) : (
                <SignUp onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/forgot-password"
            element={user ? <Navigate to="/Dashboard" /> : <ForgotPassword />}
          />
          <Route
            path="/Dashboard"
            element={
              user ? (
                <Dashboard user={user} onLogout={handleLogout} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/courses"
            element={user ? <Courses user={user} /> : <Navigate to="/login" />}
          />
          <Route
            path="/assignments"
            element={
              user ? <Assignments user={user} /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/profile"
            element={user ? <Profile user={user} /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
