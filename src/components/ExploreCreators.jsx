// src/components/ExploreCreators.jsx
import React from "react";

import logo1 from "../assets/logo1.svg";
import logo2 from "../assets/logo2.svg";
import logo3 from "../assets/logo3.svg";
import logo4 from "../assets/logo4.svg";
import logo5 from "../assets/logo5.svg";
import logo6 from "../assets/logo6.svg";
import logo7 from "../assets/logo7.svg";

const creators = [
  { name: "Hooters",    units: "76K Unit Sold",  logo: logo1, href: "#" },
  { name: "Splitgate2", units: "276K Unit Sold", logo: logo2, href: "#" },
  { name: "toshShow",   units: "29K Unit Sold",  logo: logo3, href: "#" },
  { name: "Betr",       units: "2.8M Unit Sold", logo: logo4, href: "#" },
  { name: "Spulxgate",  units: "76K Unit Sold",  logo: logo5, href: "#" },
  { name: "Hooters",    units: "76K Unit Sold",  logo: logo6, href: "#" },
  { name: "Betr",       units: "2.8M Unit Sold", logo: logo7, href: "#" },
];

export default function ExploreCreators() {
  const loop = [...creators, ...creators];

  return (
    <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12">
      <h3 className="font-teknaf text-white text-[24px] sm:text-[28px] mb-6">
        Explore More Creators
      </h3>

      <div className="relative overflow-hidden">
        {/* optional glow; remove if you want absolutely nothing behind */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 mx-[-16px] sm:mx-[-24px] h-[160px] blur-2xl"
          style={{
            background:
              "linear-gradient(180deg, rgba(90,42,131,0.25) 0%, rgba(20,9,29,0.25) 100%)",
          }}
        />

        {/* Animated strip of just logos */}
        <div
          className="
            auto-scroll
            flex w-max items-center gap-8 sm:gap-10
            will-change-transform
            animate-[scroll-x_24s_linear_infinite]
            hover:[animation-play-state:paused]
          "
        >
          {loop.map((c, i) => (
            <a
              key={i}
              href={c.href}
              className="
                block shrink-0
                outline-none focus:outline-none focus:ring-0
                bg-transparent
              "
              // remove any default border/background
              style={{ border: "none" }}
              aria-label={c.name}
              title={`${c.name} • ${c.units}`}
            >
              <img
                src={c.logo}
                alt={`${c.name} logo`}
                className="h-[38px] sm:h-[42px] lg:h-[46px] w-auto object-contain block"
                style={{
                  background: "transparent",
                  border: "none",
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
