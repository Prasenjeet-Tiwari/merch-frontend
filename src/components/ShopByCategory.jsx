// src/components/ShopByCategory.jsx
import React from "react";

// ⬇️ Replace these with your real SVGs (place under src/assets/)
import catAnime from "../assets/anime.svg";
import catNature from "../assets/nature.svg";
import catSports from "../assets/sports.svg";
import catAnimal from "../assets/animal.svg";
import catMusic from "../assets/music.svg";
import catGaming from "../assets/gaming.svg";
import catMemes from "../assets/memes.svg";
import catDigital from "../assets/digital.svg";
import catPop from "../assets/culture.svg";
import catScience from "../assets/science.svg";
import tshirtsSvg from "../assets/4tshirt.svg"; 

export default function ShopByCategory() {
  const categories = [
    { name: "Anime", icon: catAnime, href: "#", imgClass: "h-[70px]" },
    { name: "Nature", icon: catNature, href: "#", imgClass: "h-[70px]" },
    { name: "Sports", icon: catSports, href: "#", imgClass: "h-[70px]" },
    { name: "Animal", icon: catAnimal, href: "#", imgClass: "h-[70px]" },
    { name: "Music", icon: catMusic, href: "#", imgClass: "h-[70px]" },
    { name: "Gaming", icon: catGaming, href: "#", imgClass: "h-[70px]" },
    { name: "Memes", icon: catMemes, href: "#", imgClass: "h-[70px]" },
    { name: "Digital", icon: catDigital, href: "#", imgClass: "h-[70px]" },
    { name: "Pop Culture", icon: catPop, href: "#", imgClass: "h-[70px]" },
    { name: "Science", icon: catScience, href: "#", imgClass: "h-[70px]" },
  ];

  return (
    <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-14">
      {/* Header */}
      <h2 className="font-prototype font-medium text-[28px] leading-[120%] tracking-[0.10em] text-white text-center mb-10 ">
        Shop By Category
      </h2>

      {/* Chip row */}
      <div
        className="
          mx-auto
          flex flex-wrap items-center justify-center gap-4
          lg:w-[800px] lg:h-[96px] lg:justify-between lg:gap-0
        "
      >
        {categories.map((c, i) => (
          <a
            key={i}
            href={c.href}
            aria-label={c.name}
            className="
              inline-flex items-center justify-center
              w-[50px] h-[88px]
              rounded-[12px]
              border border-transparent
              transition ease-in-out duration-300
              hover:border-[#A1A1AA]/50 hover:bg-white/5
              active:scale-95
              focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A1A1AA]/50
            "
          >
            <img
              src={c.icon}
              alt=""
              className={`w-auto ${c.imgClass} pointer-events-none select-none`}
            />
          </a>
        ))}
      </div>
      {/* T-shirts composite SVG (not clickable for now) */}
      <div className="w-full flex justify-center mb-10">
        <img
          src={tshirtsSvg}
          alt="Featured T-shirts"
          className="
            pointer-events-none select-none
            w-[956.0150756835938px] h-[282.57421875px]
            max-w-full
          "
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Shop All button (Teknaf 24px, 153x47 frame, 12px radius, 3px border) */}
      <div className="w-full flex justify-center">
        <a
  href="#"
  role="button"
  aria-label="Shop All"
  className="
    inline-flex items-center justify-center
    w-[153px] h-[47px]
    rounded-[12px] border-[3px]
    text-white
    bg-white/10 border-white/10
    transition ease-in-out duration-300
    focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40
    hover:bg-white/20 hover:border-white/30
  "
>
  <span className="font-teknaf text-[15px] leading-[120%] tracking-[0.10em]">
    Shop All
  </span>
</a>

      </div>
    </section>
  );
}
