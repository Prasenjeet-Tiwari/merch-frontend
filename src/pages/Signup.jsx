import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logoMark from "../assets/logo.svg";
import logoWordmark from "../assets/gdgcnits.svg";
import figure from "../assets/death.svg";
import iconUser from "../assets/u.svg";
import iconEmail from "../assets/m.svg";
import iconLock from "../assets/p.svg";
import googleIcon from "../assets/g.svg";
import facebookIcon from "../assets/f.svg";
import xIcon from "../assets/x.svg";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setpasswordConfirm] = useState("");
  const [name, setName] = useState("")
  const [response, setResponse] = useState(null);

  // 🔹 Test backend on mount


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      setResponse({ message: "Passwords do not match" });
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, passwordConfirm, name }),
      });

      const data = await res.json();
      setResponse(data);
      console.log("Signup response:", data);
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <img src={logoMark} alt="GDGC mark" className="h-6 sm:h-9 w-auto" />
          <Link
  to="/"
  aria-label="Go to homepage"
  className="inline-flex items-center"
  title="GDGC NITS Marketplace"
>
  <img
    src={logoWordmark}
    alt="GDGC NITS Marketplace"
    className="h-9 sm:h-12 w-auto transition-opacity hover:opacity-90"
    draggable="false"
  />
</Link>
</div>

        <div className="flex items-center gap-2">
          <span className="text-[16px]" style={{ color: "#B3B3B3" }}>
            Already have an account?
          </span>
          <Link to="/login" className="underline text-[#EE3970]">Log in</Link>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex-1 grid lg:grid-cols-2 gap-8 lg:gap-12 items-start pt-8 pb-16">
        <div className="flex items-start justify-center">
          <img src={figure} alt="" className="w-full max-w-[400px]" />
        </div>

        {/* Form */}
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="text-[32px] font-medium mb-8 translate-x-[215px] translate-y-[60px]">Sign up</h1>

          <form
            className="w-full max-w-[310px] space-y-6 translate-y-[70px] translate-x-[110px]"
            onSubmit={handleSubmit}
          >
              <div className="flex items-center gap-3 border-b border-white/30">
              <img src={iconUser} alt="" className="w-5 h-5 opacity-80" />
              <input
                type="name"
                placeholder="username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 bg-transparent py-2 outline-none text-white"
              />
            </div>
            {/* Confirm Password */}
            

            {/* Email */}
            <div className="flex items-center gap-3 border-b border-white/30">
              <img src={iconEmail} alt="" className="w-5 h-5 opacity-80" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent py-2 outline-none text-white"
              />
            </div>

            {/* Password */}
            <div className="flex items-center gap-3 border-b border-white/30">
              <img src={iconLock} alt="" className="w-5 h-5 opacity-80" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex-1 bg-transparent py-2 outline-none text-white"
              />
            </div>
<div className="flex items-center gap-3 border-b border-white/30">
              <img src={iconLock} alt="" className="w-5 h-5 opacity-80" />
              <input
                type="password"
                placeholder="Confirm Password"
                value={passwordConfirm}
                onChange={(e) => setpasswordConfirm(e.target.value)}
                className="flex-1 bg-transparent py-2 outline-none text-white"
              />
            </div>
            {/* Continue Button */}
            <button
              type="submit"
              className="w-[320px] h-[45px] rounded-[12px] font-medium text-[18px] transition-colors hover:bg-[#f25084] active:scale-[0.98] translate-y-[30px]"
              style={{ background: "#EE3970", color: "#121212" }}
              onClick={handleSubmit}
            >
              Continue
            </button>

            {response && (
              <p className="text-sm mt-2">{response.message}</p>
            )}
          </form>
        </div>
      </main>
    </div>
  );
}

