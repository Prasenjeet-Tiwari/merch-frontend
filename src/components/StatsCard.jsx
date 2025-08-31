import React from "react";
import cloth from "../assets/last.svg";
import logoMark from "../assets/logo.svg";
import logoWordmark from "../assets/gdgcnits.svg";

/* ---------------- helpers (same as before) ---------------- */
function useInView(options = { threshold: 0.3 }) {
  const ref = React.useRef(null);
  const [inView, setInView] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, options);
    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);
  return { ref, inView };
}
function useHasHover() {
  const [hasHover, setHasHover] = React.useState(true);
  React.useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(hover: hover)");
    const handler = (e) => setHasHover(e.matches);
    handler(mq);
    mq.addEventListener ? mq.addEventListener("change", handler) : mq.addListener(handler);
    return () => {
      mq.removeEventListener ? mq.removeEventListener("change", handler) : mq.removeListener(handler);
    };
  }, []);
  return hasHover;
}
function useCountUp(target = 1000, duration = 2200, start = false) {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    if (!start) return;
    let raf;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return value;
}
function shortK(n) {
  if (n >= 1000) return `${Math.round(n / 1000)}K`;
  return `${Math.round(n)}`;
}

/* ---------------- Stats Card ---------------- */
function StatsCard({ creators = 30, sales = 40000 }) {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const hasHover = useHasHover();
  const [started, setStarted] = React.useState(false);

  React.useEffect(() => {
    if (!hasHover && inView && !started) setStarted(true);
  }, [hasHover, inView, started]);

  const onEnter = () => { if (hasHover && !started) setStarted(true); };
  const creatorsVal = useCountUp(creators, 1600, started);
  const salesVal = useCountUp(sales, 2000, started);

  return (
    <section className="w-auto flex justify-center mx-auto mt-12">
      <div
        ref={ref}
        onMouseEnter={onEnter}
        className="relative shrink-0 overflow-hidden
                   w-[900px] h-[300px]
                   rounded-[24px] grid grid-cols-[220px_1fr] items-center
                   px-8 py-6
                   box-border hover:shadow-[0_0_40px_rgba(138,56,245,0.15)]"
        style={{
          border: "1.33px solid #8A38F5",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "24px",
        }}
      >
        {/* left image */}
        <div className="flex items-center justify-center">
          <img
            src={cloth}
            alt=""
            className="h-[160px] w-auto select-none pointer-events-none opacity-95"
            draggable="false"
          />
        </div>

        {/* right text */}
        <div
          className="flex flex-col justify-center gap-6"
          style={{
            opacity: started ? 1 : 0,
            transform: started ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 500ms ease, transform 500ms ease",
          }}
        >
          {/* creators */}
          <div>
            <div className="font-product font-black text-white text-[40px] leading-none">
              {Math.floor(creatorsVal)}+
            </div>
            <div className="font-teknaf text-white/85 mt-1 text-[15px]">Creators</div>
            <div className="font-teknaf text-white/60 text-[13px] mt-1">
              Designers, Coders and Innovators
            </div>
          </div>

          {/* sales */}
          <div>
            <div className="font-product font-black text-white text-[40px] leading-none">
              {shortK(salesVal)}+
            </div>
            <div className="font-teknaf text-white/85 mt-1 text-[15px]">Sales</div>
            <div className="font-teknaf text-white/60 text-[13px] mt-1">
              Trusted by Communities Worldwide
            </div>
          </div>
        </div>

        {/* glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[24px]"
          style={{
            boxShadow: started
              ? "0 0 100px rgba(138,56,245,0.22)"
              : "0 0 80px rgba(138,56,245,0.12)",
            transition: "box-shadow 500ms ease",
          }}
        />
      </div>
    </section>
  );
}

/* ---------------- About Us Section ---------------- */
export default function AboutUs() {
  return (
    <div className="text-white px-6 md:px-12 lg:px-24 py-16">
      {/* heading + intro */}
      {/* <h2 className="text-lg font-teknaf text-white/70">About Us</h2>
      <h3 className="mt-3 text-2xl md:text-3xl font-product font-bold leading-snug">
        We are a family that believes in{" "}
        <span className="text-red-500">passion</span> and{" "}
        <span className="text-green-500">progress</span>. Our merchandise is a
        symbol of who we are.
      </h3>
      <p className="mt-4 text-white/70 max-w-3xl text-sm md:text-base">
        At GDGC NIT Campus, we believe in faith, trust, and spirit of
        innovation. Every design carries our story – of learning, building and
        leading together. We are not just a developer community.
      </p> */}

      {/* stats card */}
      <StatsCard />

      {/* bottom CTA */}
      <div className="mt-10 text-center text-xl font-prototype">
        Join Us. Be a part of the story.
      </div>

      

     {/* footer wrapper with gradient background */}
<div
  className="w-full mt-8"
  style={{
    background:
      "linear-gradient(180deg, rgba(71, 43, 108, 0.3333) 0%, rgba(24, 10, 43, 0.3333) 100%)",
    backdropFilter: "blur(75.2px)",
    WebkitBackdropFilter: "blur(75.2px)", // safari
  }}
>
  <footer className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-12 py-12 text-sm">
    {/* logo section */}
    <div className="flex flex-col space-y-3">
      <div className="flex items-center space-x-2">
        <img src={logoMark} alt="Logo mark" className="h-10 w-auto translate-x-[30px]" />
        <img src={logoWordmark} alt="GDGC NITS Marketplace" className="h-10 w-auto translate-x-[30px]" />
      </div>
      {/* <span className="font-product font-light text-white/70 text-sm">
        GDGC NITS Marketplace
      </span> */}
    </div>

    {/* about */}
    <div>
      <h4 className="font-product font-black text-white mb-2 translate-x-[80px]">About Us</h4>
      <ul className="space-y-1 translate-x-[80px]">
        <li className="font-product font-light text-white/70">About us</li>
        <li className="font-product font-light text-white/70">Contact us</li>
      </ul>
    </div>

    {/* help */}
    <div>
      <h4 className="font-product font-black text-white mb-2 translate-x-[80px]">Help</h4>
      <ul className="space-y-1 translate-x-[80px]">
        <li className="font-product font-light text-white/70">Orders</li>
        <li className="font-product font-light text-white/70">Delivery</li>
        <li className="font-product font-light text-white/70">Payment</li>
        <li className="font-product font-light text-white/70">Refund</li>
        <li className="font-product font-light text-white/70">Return</li>
      </ul>
    </div>

    {/* social */}
    <div>
      <h4 className="font-product font-black text-white mb-2 translate-x-[80px]">Social</h4>
      <ul className="space-y-1 translate-x-[80px]">
        <li className="font-product font-light text-white/70">Instagram</li>
        <li className="font-product font-light text-white/70">Facebook</li>
        <li className="font-product font-light text-white/70">gdgcnits.com</li>
      </ul>
    </div>
  </footer>
</div>

    </div>
  );
}
