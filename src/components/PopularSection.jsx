import React from "react";

// Replace with your real SVG/PNG assets
import product1 from "../assets/week1.svg";
import product2 from "../assets/week2.svg";
import product3 from "../assets/week3.svg";

export default function PopularSection() {
  // Per-card sizing/positioning — tweak these classes per your Figma
  const items = [
    { img: product1, href: "#", imgClass: "h-[400px] transform -translate-y-[-15px] -translate-x-[-100px]" }, // bigger, a bit up & left
    { img: product2, href: "#", imgClass: "h-[400px] transform translate-y-[20px] translate-x-[65px]" }, // custom height, down & right
    { img: product3, href: "#", imgClass: "h-[400px] transform -translate-y-[-20px] translate-x-[40px] " }, // slightly up
  ];

  return (
    <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-14">
      {/* Header row */}
      <div className="flex items-center justify-between mb-10">
        <h2
          className="font-prototype text-[30px] leading-[120%] tracking-[0.10em] translate-x-[100px]"
          style={{ color: "#BE9AED" }}
        >
          Popular this week
        </h2>

        <a
          href="#"
          className="font-teknaf text-[16px] leading-[120%] tracking-[0.10em] hover:underline underline-offset-4 translate"
          style={{ color: "#BE9AED" }}
        >
          Shop all
        </a>
      </div>

      {/* 3 clickable SVGs (no boxes) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((it, i) => (
          <a key={i} href={it.href} className="block">
            <img
              src={it.img}
              alt={`Product ${i + 1}`}
              className={`w-auto object-contain transition ${it.imgClass}`}
            />
          </a>
        ))}
      </div>
    </section>
  );
}
