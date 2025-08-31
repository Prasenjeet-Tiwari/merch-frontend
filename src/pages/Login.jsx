// src/pages/Login.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

import logoMark from "../assets/logo.svg";
import logoWordmark from "../assets/gdgcnits.svg";

// field icons
import iconUser from "../assets/m.svg";   // email icon
import iconLock from "../assets/p.svg";   // password icon
// social icons
import googleIcon from "../assets/g.svg";
import facebookIcon from "../assets/f.svg";
import xIcon from "../assets/x.svg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      setResponse(data);
      console.log("Login response:", data);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 h-16 w-full flex items-center justify-between">
        {/* Left: logo cluster */}
        <div className="flex items-center gap-2">
          <img
            src={logoMark}
            alt="GDGC mark"
            className="h-6 sm:h-7 w-auto select-none pointer-events-none"
            draggable="false"
          />
          <a
            href="/"
            aria-label="Go to homepage"
            className="inline-flex items-center"
            title="GDGC NITS Marketplace"
          >
            <img
              src={logoWordmark}
              alt="GDGC NITS Marketplace"
              className="h-6 sm:h-7 w-auto transition-opacity hover:opacity-90"
              draggable="false"
            />
          </a>
        </div>

        {/* Right: Sign up prompt */}
        <div className="flex items-center gap-2">
          <span
            className="text-[16px] tracking-[0.0137em] leading-[100%]"
            style={{
              fontFamily: "Product Sans Medium, sans-serif",
              fontWeight: 500,
              color: "#B3B3B3",
            }}
          >
            Don’t have an account?
          </span>
          <Link
            to="/signup"
            className="text-[16px] tracking-[0.0137em] leading-[100%] underline transition-opacity hover:opacity-90"
            style={{
              fontFamily: "Product Sans Medium, sans-serif",
              fontWeight: 500,
              color: "#EE3970",
              textDecorationColor: "#EE3970",
              textDecorationThickness: "4.5%",
              textUnderlineOffset: "12.5%",
            }}
          >
            Sign up
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex-1 pt-10 pb-16">
  <div className="w-[350px] mx-auto">
    {/* Heading */}
    <h1 className="text-[25px] sm:text-[36px] font-medium text-center mb-6">
      Log in
    </h1>

    {/* Form */}
    <form
  className="w-[350px] mx-auto space-y-6 mt-8"
  onSubmit={handleSubmit}
>

      {/* Email */}
      <label className="block">
        <div className="flex items-center gap-3 border-b border-white/30 focus-within:border-white/80">
          <img src={iconUser} alt="" className="w-5 h-5 opacity-80" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-transparent py-2 outline-none placeholder-white/60 text-white"
          />
        </div>
      </label>

      {/* Password */}
      <label className="block">
        <div className="flex items-center gap-3 border-b border-white/30 focus-within:border-white/80">
          <img src={iconLock} alt="" className="w-5 h-5 opacity-80" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="flex-1 bg-transparent py-2 outline-none placeholder-white/60 text-white"
          />
        </div>
      </label>

      {/* Continue button */}
      <button
        type="submit"
        className="w-full h-[48px] rounded-[12px] font-medium text-[18px] transition-colors hover:bg-[#f25084] active:scale-[0.98] mt-8"
        style={{ background: "#EE3970", color: "#121212" }}
      >
        Continue
      </button>

      {/* Forgot / Reset */}
      <div className="text-center text-xs mt-2">
        <span className="text-white/60">Forgot Password ? </span>
        <Link
          to="/reset-password"
          className="text-[#EE3970] underline underline-offset-4 hover:opacity-90"
        >
          Reset Password
        </Link>
      </div>
    </form>
  </div>
</main>

    </div>
  );
}

