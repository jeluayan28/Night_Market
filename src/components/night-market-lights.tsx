"use client";

import React from "react";

export function NightMarketLights() {
  return (
    <div className="relative w-full overflow-hidden bg-[#17152B] py-2 select-none">
      {/* Floating Ambient Light Dust/Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-6 left-[15%] w-1.5 h-1.5 rounded-full bg-[#FFD166] opacity-70 animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute top-8 left-[35%] w-2 h-2 rounded-full bg-[#FF4FA3] opacity-60 animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-5 left-[60%] w-1.5 h-1.5 rounded-full bg-[#FF8A3D] opacity-70 animate-float" style={{ animationDelay: "0.8s" }} />
        <div className="absolute top-9 left-[82%] w-2 h-2 rounded-full bg-[#FFD166] opacity-60 animate-float" style={{ animationDelay: "2.3s" }} />
      </div>

      {/* Hanging Wire SVG */}
      <div className="relative w-full h-12">
        <svg
          className="w-full h-12 text-[#FFD166]/25 stroke-current"
          viewBox="0 0 1200 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,5 Q 150,45 300,10 Q 450,45 600,10 Q 750,45 900,10 Q 1050,45 1200,5"
            strokeWidth="1.5"
            strokeDasharray="4 2"
          />
        </svg>

        {/* Swaying Bulbs & Lanterns Container */}
        <div className="absolute top-0 left-0 right-0 flex justify-between px-4 sm:px-12 md:px-20 max-w-7xl mx-auto -mt-1 pointer-events-none">
          
          {/* Item 1: Glowing Bulb (Gold) */}
          <div className="flex flex-col items-center animate-sway">
            <div className="w-[1.5px] h-3 bg-[#FFD166]/40" />
            <div className="w-4 h-4 rounded-full bg-[#FFD166] text-[#FFD166] animate-flicker shadow-[0_0_16px_#FFD166,0_0_30px_#FFD166]" />
          </div>

          {/* Item 2: Traditional Japanese/Asian Lantern (Pink) */}
          <div className="flex flex-col items-center mt-2 animate-sway-slow" style={{ animationDelay: "0.5s" }}>
            <div className="w-[1.5px] h-4 bg-[#FF4FA3]/50" />
            <div className="relative w-5 h-7 rounded-lg bg-gradient-to-b from-[#FF4FA3] to-[#d83486] text-[#FF4FA3] animate-flicker shadow-[0_0_20px_#FF4FA3,0_0_35px_#FF4FA3] flex flex-col justify-between items-center py-1 border border-white/20">
              <div className="w-3 h-[1px] bg-white/60" />
              <div className="w-3 h-[1px] bg-white/60" />
              <div className="w-3 h-[1px] bg-white/60" />
            </div>
          </div>

          {/* Item 3: Glowing Bulb (Orange Food Accent) */}
          <div className="flex flex-col items-center animate-sway" style={{ animationDelay: "1.2s" }}>
            <div className="w-[1.5px] h-2.5 bg-[#FF8A3D]/40" />
            <div className="w-4 h-4 rounded-full bg-[#FF8A3D] text-[#FF8A3D] animate-flicker shadow-[0_0_16px_#FF8A3D,0_0_28px_#FF8A3D]" />
          </div>

          {/* Item 4: Large Traditional Lantern (Gold Highlight) */}
          <div className="flex flex-col items-center mt-3 animate-sway-slow" style={{ animationDelay: "0.2s" }}>
            <div className="w-[1.5px] h-5 bg-[#FFD166]/50" />
            <div className="relative w-6 h-8 rounded-lg bg-gradient-to-b from-[#FFD166] to-[#e6b333] text-[#FFD166] animate-flicker shadow-[0_0_22px_#FFD166,0_0_40px_#FFD166] flex flex-col justify-between items-center py-1 border border-black/20">
              <div className="w-4 h-[1px] bg-[#17152B]/40" />
              <div className="w-4 h-[1px] bg-[#17152B]/40" />
              <div className="w-4 h-[1px] bg-[#17152B]/40" />
            </div>
            {/* Tassel */}
            <div className="w-1 h-2 bg-[#FFD166]/70 rounded-b-sm" />
          </div>

          {/* Item 5: Glowing Bulb (Pink Accent) */}
          <div className="flex flex-col items-center animate-sway" style={{ animationDelay: "0.8s" }}>
            <div className="w-[1.5px] h-3 bg-[#FF4FA3]/40" />
            <div className="w-4 h-4 rounded-full bg-[#FF4FA3] text-[#FF4FA3] animate-flicker shadow-[0_0_16px_#FF4FA3,0_0_28px_#FF4FA3]" />
          </div>

          {/* Item 6: Traditional Lantern (Orange) */}
          <div className="flex flex-col items-center mt-2 animate-sway-slow" style={{ animationDelay: "1.0s" }}>
            <div className="w-[1.5px] h-4 bg-[#FF8A3D]/50" />
            <div className="relative w-5 h-7 rounded-lg bg-gradient-to-b from-[#FF8A3D] to-[#e56d20] text-[#FF8A3D] animate-flicker shadow-[0_0_20px_#FF8A3D,0_0_35px_#FF8A3D] flex flex-col justify-between items-center py-1 border border-white/20">
              <div className="w-3 h-[1px] bg-white/60" />
              <div className="w-3 h-[1px] bg-white/60" />
            </div>
          </div>

          {/* Item 7: Glowing Bulb (Gold) */}
          <div className="flex flex-col items-center animate-sway" style={{ animationDelay: "1.5s" }}>
            <div className="w-[1.5px] h-2.5 bg-[#FFD166]/40" />
            <div className="w-4 h-4 rounded-full bg-[#FFD166] text-[#FFD166] animate-flicker shadow-[0_0_16px_#FFD166,0_0_30px_#FFD166]" />
          </div>

        </div>
      </div>

      {/* Animated Glowing Bottom Border Ribbon */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#FF8A3D] via-[#FF4FA3] to-transparent opacity-80 animate-pulse" />
    </div>
  );
}