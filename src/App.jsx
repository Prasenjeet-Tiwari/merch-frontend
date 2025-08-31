import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Announcementbar from "./components/Announcementbar";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Collection from "./pages/Collection";

function Shell() {
  const { pathname } = useLocation();
  const isAuth = pathname === "/signup" || pathname === "/login";
  const isHome = pathname === "/";

  return (
    <div className="min-h-screen bg-black text-white">
      {!isAuth && <TopBar />}
      {!isAuth && <Navbar />}
      {!isAuth && isHome && <Announcementbar />} {/* ✅ only on "/" */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/collection/GDG002" element={<Collection />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Shell />
    </Router>
  );
}
