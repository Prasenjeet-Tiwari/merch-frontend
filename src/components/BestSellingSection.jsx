// src/components/BestSelling.jsx
import React from "react";

// assets
import bestGrid from "../assets/best.svg"; // best selling grid
import tee1 from "../assets/tee1.svg";
import tee2 from "../assets/tee2.svg";
import tee3 from "../assets/tee3.svg";

// Featured Creator assets
import creatorLogo from "../assets/creator.svg"; // replace with real creator logo svg
import card1 from "../assets/creator1.svg"; // product card 1 svg
import card2 from "../assets/creator2.svg"; // product card 2 svg
import blackFigure from "../assets/creator3.svg"; // character model svg

export default function BestSelling() {
  return (
    <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-14 space-y-20">
      {/* ---------------- Best Selling Designs ---------------- */}
      <div>
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-teknaf text-[40px] leading-[26px] tracking-[0.04em] text-white">
            Best Selling Designs
          </h2>
          <a
            href="#"
            className="font-teknaf text-[20px] leading-[120%] tracking-[0.10em] text-[#BE9AED] hover:underline underline-offset-4"
          >
            see all
          </a>
        </div>
        <div className="w-full flex justify-center">
          <img
            src={bestGrid}
            alt="Best selling designs grid"
            className="w-[960px] h-auto select-none pointer-events-none mt-12"
          />
        </div>
      </div>

      {/* ---------------- Design Your Own Products ---------------- */}
      <div
        className="mx-auto relative rounded-[48px] flex items-center justify-between gap-6 px-8 overflow-hidden w-full max-w-[1356px] h-[244px]"
        style={{
          background: "linear-gradient(90deg, #6C1731 0%, #8B1E52 100%)",
        }}
      >
        <div className="shrink-0">
          <h3
            className="text-white text-[40px] leading-[120%] tracking-[0.10em] whitespace-pre-line"
            style={{ fontFamily: "Product Sans Black, sans-serif", fontWeight: 900 }}
          >
            {`Design Your Own\nProducts !`}
          </h3>
        </div>
        <div className="flex items-center justify-center gap-6">
          {[tee1, tee2, tee3].map((src, i) => (
            <div key={i} className="grid place-items-center w-[131px] h-[174px]">
              <img
                src={src}
                alt=""
                className="w-[131px] h-[174px] object-contain select-none pointer-events-none"
              />
            </div>
          ))}
        </div>
        <div className="shrink-0">
          <a
            href="#"
            role="button"
            aria-label="Start Creating"
            className="inline-flex items-center justify-center w-[240px] h-[65px] rounded-[16px] bg-white text-black transition ease-in-out duration-300 hover:scale-[1.03] active:scale-[0.97] hover:bg-white/90 shadow-[0_0_0_0_rgba(255,255,255,0)] hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            <span
              className="text-[24px] leading-[120%] tracking-[0.10em]"
              style={{ fontFamily: "Product Sans, sans-serif", fontWeight: 400 }}
            >
              Start Creating
            </span>
          </a>
        </div>
      </div>

      {/* ---------------- Featured Creator ---------------- */}
      <div
        className="mx-auto relative rounded-[48px] flex items-center justify-between gap-8 px-10 overflow-hidden w-full max-w-[1356px] h-[489px]"
        style={{
          background: "linear-gradient(90deg, #6C1731 0%, #8B1E52 100%)",
        }}
      >
        {/* Left: Logo + merch + button */}
        <div className="flex flex-col items-start gap-6 z-10">
          <img
            src={creatorLogo}
            alt="Creator logo"
            className="w-[500px] h-auto object-contain select-none pointer-events-none translate-y-[24px]"
          />
          <span
            className="text-white text-[24px] leading-[100%] tracking-[-0.04em] translate-x-[100px] translate-y-[30px]"
            style={{ fontFamily: "Product Sans Black, sans-serif", fontWeight: 500  }}
          >
            OFFICIAL MERCH
          </span>
          <button
            type="button"
            aria-label="Shop now"
            className="inline-flex items-center justify-center w-[142px] h-[46px] rounded-[6px] bg-black text-white font-[Product Sans] text-[20px] leading-[26px] tracking-[0.10em] transition ease-in-out duration-300 hover:bg-white hover:text-black active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 translate-y-[30px] translate-x-[100px]"
          >
            Shop now
          </button>
        </div>

        {/* Middle: 2 product cards */}
        <div className="flex items-end gap-12 z-10">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center">
            <img
              src={card1}
              alt="Tony’s Comedy Tee"
              className="w-[200px] h-auto object-contain select-none pointer-events-none translate-x-[-184px]"
            />
            {/* <p
              className="text-white text-[20px] leading-[120%] tracking-[0] mt-4"
              style={{ fontFamily: "Prototype, sans-serif", fontWeight: 400 }}
            >
              Tony’s Comedy Tee
            </p>
            <p
              className="text-white text-[16px] leading-[120%] tracking-[0.10em] mt-1"
              style={{ fontFamily: "Prototype, sans-serif", fontWeight: 400 }}
            >
              From $49
            </p> */}
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center">
            <img
              src={card2}
              alt="Comedy Night Cargos"
              className="w-[200px] h-auto object-contain select-none pointer-events-none translate-x-[-184px]"
            />
            {/* <p
              className="text-white text-[20px] leading-[120%] tracking-[0] mt-4"
              style={{ fontFamily: "Prototype, sans-serif", fontWeight: 400 }}
            >
              Comedy Night Cargos
            </p>
            <p
              className="text-white text-[16px] leading-[120%] tracking-[0.10em] mt-1"
              style={{ fontFamily: "Prototype, sans-serif", fontWeight: 400 }}
            >
              From $49 */}
            {/* </p> */}
          </div>
        </div>

        {/* Right: Black figure */}
        <div className="absolute bottom-0 right-0 z-0">
          <img
            src={blackFigure}
            alt="Creator character"
            className="h-[489px] w-auto object-contain select-none pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
}
