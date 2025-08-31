import React from "react";

const DROPDOWNS = {
  "Best Sellers": ["For You","T - shirt","Poster","Art","Trending","Style","See all…"],
  "Categories": ["Anime","Nature","Sports","Animal","Music","Gaming","Memes","Digital","Pop Culture","Science"],
  "Trending": ["Anime","Funny","Sports","Animal","Music","Gaming","Memes","Digital","Pop Culture","Science"],
  "Clothing": ["All Clothing","T shirt","Hoodies Sweatshirt","Hats","Socks","Tank Tops","Gloves","Custom…"],
  "Sticker": ["All Sticker","Holographic Sticker","Car Sticker","Laptop Sticker","Anime Sticker","Custom…"],
  "Phone Case": ["All Phone Case","iPhone Case","Samsung…"],
  "Wall Art": ["All Wall Art","Poster","Art Prints","Custom Print…"],
  "Home & Living": ["All Items","Mugs","Throw Pillow","Throw blanket","Clock","Mat"],
  "Stationary": ["All Stationary","Notebooks","Post Cards","Mouse Pad","Greeting Card","Pen & Pencil"],
  "Gift": ["All Gift","Gift for him","Gift for her","Gift for kids","Budget Gifts","Anime Gifts","Fantasy Gifts","Gift Cards"],
};

const DROPDOWN_STYLES = {
  "Best Sellers": "w-[152px] h-[298px] pl-[42px] pr-[42px] pt-[24px] pb-[24px]",
  "Categories":   "w-[182px] h-[398px] pl-[49px] pr-[42px] pt-[24px] pb-[24px]",
  "Trending":     "w-[180px] h-[398px] pl-[49px] pr-[42px] pt-[24px] pb-[24px]",
  "Clothing":     "w-[176px] h-[363px] pl-[42px] pr-[42px] pt-[24px] pb-[24px]",
  "Sticker":      "w-[195px] h-[293px] pl-[42px] pr-[42px] pt-[24px] pb-[24px]",
  "Phone Case":   "w-[201px] h-[153px] pl-[42px] pr-[42px] pt-[24px] pb-[24px]",
  "Wall Art":     "w-[186px] h-[188px] pl-[42px] pr-[42px] pt-[24px] pb-[24px]",
  "Home & Living":"w-[190px] h-[258px] pl-[42px] pr-[42px] pt-[24px] pb-[24px]",
  "Stationary":   "w-[187px] h-[328px] pl-[42px] pr-[42px] pt-[24px] pb-[24px]",
  "Gift":         "w-[187px] h-[328px] pl-[42px] pr-[42px] pt-[24px] pb-[24px]",
};

export default function Navbar({ showUpdateBar = false }) {
  return (
    <nav className="w-full text-white relative z-[200]"> {/* ⬅️ raise nav */}
      {/* ==== Row 2: Categories ==== */}
      <div className="border-t border-gray-800 relative z-[200]"> {/* ⬅️ keep above page */}
        <div className="mx-auto max-w-screen-xl px-6 translate-y-[20px]">
          <div className="h-[15px] flex items-center justify-center">
            <div className="w-[994px] h-full flex items-center justify-between">
              {Object.keys(DROPDOWNS).map((item) => (
                <div key={item} className="relative group">
                  <button className="text-[12px] leading-none text-gray-200 hover:text-white whitespace-nowrap">
                    {item}
                  </button>

                  {/* ⬇️ dropdown panel */}
                  <div
                    className={`
                      absolute left-0 top-full mt-2
                      hidden group-hover:block group-focus-within:block
                      z-[210]                /* ⬅️ higher than nav & cards */
                      rounded-[5px] bg-[#0D0D0DF2]
                      ${DROPDOWN_STYLES[item]}
                      shadow-xl
                    `}
                  >
                    <ul className="flex flex-col gap-[10px] text-sm text-gray-200">
                      {DROPDOWNS[item].map((label) => (
                        <li key={label}>
                          <a href="#" className="block hover:text-white">{label}</a>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ==== Row 3: Update bar ==== */}
      {showUpdateBar && (
        <div className="border-t border-gray-800/60 mt-12 relative z-[190]">
          <div className="mx-auto max-w-screen-xl px-6">
            <div className="mx-auto w-[1215px] max-w-full h-[47px] rounded-[14px] border
                            flex items-center justify-center px-4
                            bg-white/10 border-[#A1A1AA]
                            transition ease-in-out duration-300
                            hover:bg-white/20 hover:border-[#A1A1AA]/80">
              <p className="text-[20px] leading-[120%] tracking-[0.1em] text-white text-center truncate"
                 style={{ fontFamily: "Teknaf, sans-serif" }}>
                ⚡ New Drop: Cyberpunk Collection now live!
              </p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
