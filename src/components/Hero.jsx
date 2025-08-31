import React from "react";
import { Link } from "react-router-dom";
import bigFigure from "../assets/hero2.svg";            // hoodie figure
import gdgcWordSvg from "../assets/biggdgc.svg";       // large GDGC outline
import saveCollectionSvg from "../assets/shop.svg";    // "Save collection" button SVG
import card2Figure from "../assets/fig2.svg"; // update the path/name if different
import card3Figure from "../assets/fig3.svg";

export default function Hero() {
  return (
    <main className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-[879px_1fr] gap-6">
        {/* ===== Big card ===== */}
        <section
          className="relative overflow-hidden rounded-[24px] group"
          style={{
            width: 879,
            height: 671,
            background: "linear-gradient(180deg, #8B1E3F 7.69%, #320A16 64.9%)",
          }}
        >
          {/* GDGC wordmark (your nudged position) */}
          <img
            src={gdgcWordSvg}
            alt="GDGC"
            className="absolute top-10 left-1/2 -translate-x-1/2 w-[560px] max-w-[85%] translate-x-[-180px] translate-y-[20px]"
          />

          {/* Figure (bottom-left as in your version) */}
          <img
            src={bigFigure}
            alt=""
            className="absolute bottom-0 left-0 h-[92%] w-auto select-none pointer-events-none"
          />

          {/* CONTENT BLOCK: moves up slightly on hover */}
          <div
            className="absolute left-1/2 -translate-x-1/2 w-full px-6 text-center
                       transition-transform duration-300 ease-in-out
                       group-hover:-translate-y-18 translate-x-[-340px] translate-y-[-55px]"
            style={{ top: 345 + 90 }}
          >
            <h2
              className="text-white"
              style={{
                fontFamily: "Product Sans, 'Google Sans', ui-sans-serif, system-ui",
                fontWeight: 400,
                fontSize: 45,
                lineHeight: "26px",
                letterSpacing: "-0.06em",
              }}
            >
              Wear the code, Live the culture.
            </h2>

            <p
              className="mt-12 text-white/90 mx-auto max-w-[673px]"
              style={{
                fontFamily: "Teknaf, ui-sans-serif, system-ui",
                fontWeight: 400,
                fontSize: 26,
                lineHeight: "120%",
                letterSpacing: "0.10em",
              }}
            >
              We are GDGC NIT Campus, a community of dreamers, doers and builders.
              <br />
              Our merch represent innovation, trust and collaboration that fuel our journey.
            </p>
          </div>

          {/* Save collection button (SVG): fades in on hover */}
          <Link to="/collection/GDG002">
          <img
            src={saveCollectionSvg}
            alt="Save collection"
            className="absolute left-1/2 bottom-8 -translate-x-1/2
                       opacity-0 translate-y-2 transition-all duration-300 ease-in-out
                       group-hover:opacity-100 group-hover:translate-y-4 cursor-pointer select-none translate-x-[-45px]"
          /></Link>
        </section>

        {/* ===== Right column placeholders ===== */}
        <div className="grid gap-6">
          {/* ===== Card 2 (right-top) — blur figure, reveal content ===== */}
<div
  className="relative overflow-hidden rounded-[24px] group"
  style={{
    height: 318, // adjust to your exact Figma height
    background:
      "linear-gradient(180deg, rgba(139, 30, 63, 0.9) 12.02%, rgba(45, 10, 21, 0.9) 78.37%)",
  }}
>
  {/* Figure (blurs slightly on hover) */}
  <img
    src={card2Figure}
    alt=""
    className="
      absolute inset-0 m-auto max-w-[80%] max-h-[80%] object-contain
      transition-all duration-300 ease-in-out
      group-hover:blur-[3px] group-hover:scale-[1.02]
      select-none pointer-events-none
    "
  />

  {/* Content box (198×104 at top:109, left:78) */}
  <div
    className="
      absolute text-center text-white grid place-items-center bg-transparent
      opacity-0 translate-y-2 transition-all duration-300 ease-in-out
      group-hover:opacity-100 group-hover:translate-y-0 
    "
    style={{
      top: 50,
      left: 60,
      width: 198,
      height: 104,
      // boxShadow: "4px 4px 4.7px 0px #FFFFFF40",
    }}
  >
    <h3
      className="text-[40px] leading-[120%] tracking-[0.1em]"
      style={{ fontFamily: "Teknaf, ui-sans-serif, system-ui", fontWeight: 400 }}
    >
      More than Merch,<br />It’s an Identity
    </h3>
  </div>

  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/35 to-transparent" />
</div>

          {/* ===== Card 3 (right-bottom) — blur figure, reveal content ===== */}
<div
  className="relative overflow-hidden rounded-[24px] group"
  style={{
    height: 318, // adjust to your Figma height if different
    background: "linear-gradient(180deg, #5A2A83 12.98%, #100A22 88.46%)",
  }}
>
  {/* Figure (blurs slightly on hover) */}
  <img
    src={card3Figure}
    alt=""
    className="
      absolute inset-0 m-auto max-w-[80%] max-h-[80%] object-contain
      transition-all duration-300 ease-in-out
      group-hover:blur-[3px] group-hover:scale-[1.02]
      select-none pointer-events-none
    "
  />

  {/* Content box (310×177 at top:72.5, left:22) */}
  <div
    className="
      absolute text-center text-white grid place-items-center bg-transparent
      opacity-0 translate-y-2 transition-all duration-300 ease-in-out
      group-hover:opacity-100 group-hover:translate-y-0 translate-x-[-15px]
    "
    style={{
      top: 72.5,
      left: 22,
      width: 310,
      height: 177,
      // borderWidth: 1,
      // borderStyle: "solid",
      // borderColor: "rgba(255,255,255,0.6)",
    }}
  >
    <h3
      className="text-[32px] leading-[120%] tracking-[0.1em]"
      style={{ fontFamily: "Stacker, ui-sans-serif, system-ui", fontWeight: 400 }}
    >
      Code,<br />
      Create<br />
      and<br />
      Conquer.
    </h3>
  </div>

  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 to-transparent" />
</div>

        </div>
      </div>
    </main>
  );
}
