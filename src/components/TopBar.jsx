import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";            // 55×29
import brandStack from "../assets/gdgcnits.svg";  // 131×57
import searchIcon from "../assets/search.svg";
import heartIcon from "../assets/heart.svg";
import cartIcon from "../assets/cart.svg";

export default function TopBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80 text-white">
      <div className="mx-auto max-w-screen-xl h-20 px-6 flex items-center justify-between gap-6">
        {/* Left: logo + brand */}
        <a href="/" className="flex items-start gap-3 shrink-0">
          <img src={logo} alt="Logo" className="w-[55px] h-[29px] translate-y-2" />
          <img src={brandStack} alt="GDGC NITS Marketplace" className="w-[131px] h-[57px]" />
        </a>

        {/* Middle: Search (animated border) */}
        <form onSubmit={(e) => e.preventDefault()} className="hidden md:flex flex-1 justify-center">
          <div className="search-wrapper w-[746px] h-[37px] max-w-full">
            <div className="search-inner">
              <input
                type="text"
                placeholder="Search Here"
                className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-sm leading-none"
                aria-label="Search"
              />
              <button type="submit" aria-label="search" className="p-1 rounded hover:bg-gray-900 active:scale-[0.98]">
                <img src={searchIcon} alt="" className="w-4 h-4 opacity-80" />
              </button>
            </div>
          </div>
        </form>

        {/* Right: Sign Up / Login / Icons */}
        <div className="flex items-center justify-between w-[240px] h-[30px] shrink-0">
          <Link to="/signup" className="flex items-center justify-center w-[74px] h-[30px] pl-[10px] pr-[20px] text-[12px] leading-none whitespace-nowrap hover:underline">
            Sign&nbsp;Up
          </Link>
          <Link to="/login" className="flex items-center justify-center w-[74px] h-[30px] pl-[10px] pr-[20px] text-sm hover:underline">
            Login
          </Link>
          <img src={heartIcon} alt="Wishlist" className="w-6 h-6 cursor-pointer" />
          <img src={cartIcon} alt="Cart" className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
