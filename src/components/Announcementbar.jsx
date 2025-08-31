// components/AnnouncementBar.jsx
import React from "react";

export default function AnnouncementBar() {
  return (
    <div className="border-t border-gray-800/60 mt-12">
      <div className="mx-auto max-w-screen-xl px-6">
        <div
          className="
            mx-auto w-[1215px] max-w-full h-[47px]
            rounded-[14px] border
            flex items-center justify-center px-4
            bg-white/10 border-[#A1A1AA]
            transition ease-in-out duration-300
            hover:bg-white/20 hover:border-[#A1A1AA]/80
          "
        >
          <p
            className="
              text-[20px] leading-[120%] tracking-[0.1em]
              text-white text-center truncate
            "
            style={{ fontFamily: "Teknaf, sans-serif" }}
          >
            ⚡ New Drop: Cyberpunk Collection now live!
          </p>
        </div>
      </div>
    </div>
  );
}
