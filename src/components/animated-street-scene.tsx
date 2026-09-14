"use client";

import React from "react";
import { Utensils, Flame, Coffee, Sparkles } from "lucide-react";

export function AnimatedStreetScene() {
  return (
    <div className="relative w-full h-48 bg-gradient-to-b from-[#17152B] via-[#1f1c3a] to-[#17152B] overflow-hidden border-b border-[#2e2a52]/60 select-none">
      
      {/* 1. Background Market Stalls Lineup */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-between px-4 sm:px-12 max-w-7xl mx-auto opacity-90 pointer-events-none">
        
        {/* Stall 1: BBQ Skewers */}
        <div className="relative flex flex-col items-center">
          {/* Steam FX */}
          <div className="absolute -top-7 flex gap-1">
            <div className="w-1.5 h-4 bg-white/30 rounded-full blur-[1px] animate-steam" style={{ animationDelay: "0s" }} />
            <div className="w-1.5 h-4 bg-white/30 rounded-full blur-[1px] animate-steam" style={{ animationDelay: "0.8s" }} />
          </div>
          {/* Glowing Sign */}
          <div className="bg-[#FF8A3D] text-[#17152B] text-[10px] font-black px-2 py-0.5 rounded shadow-[0_0_12px_#FF8A3D] flex items-center gap-1">
            <Flame className="w-3 h-3 fill-current" /> BBQ STALL
          </div>
          {/* Canopy Roof */}
          <div className="w-24 h-4 bg-gradient-to-r from-[#FF8A3D] via-[#FFD166] to-[#FF8A3D] rounded-t-md mt-1 border-b border-black/20" />
          {/* Stall Counter */}
          <div className="w-20 h-10 bg-[#2b274c] border-x border-b border-[#3b3666] flex items-center justify-center">
            <div className="w-14 h-2 bg-[#FF8A3D]/20 rounded-full" />
          </div>
        </div>

        {/* Stall 2: Noodle & Dumplings */}
        <div className="relative flex flex-col items-center hidden sm:flex">
          {/* Steam FX */}
          <div className="absolute -top-7 flex gap-1">
            <div className="w-1.5 h-4 bg-white/30 rounded-full blur-[1px] animate-steam" style={{ animationDelay: "0.4s" }} />
            <div className="w-1.5 h-4 bg-white/30 rounded-full blur-[1px] animate-steam" style={{ animationDelay: "1.2s" }} />
          </div>
          <div className="bg-[#FF4FA3] text-white text-[10px] font-black px-2 py-0.5 rounded shadow-[0_0_12px_#FF4FA3] flex items-center gap-1">
            <Utensils className="w-3 h-3" /> NOODLES
          </div>
          <div className="w-24 h-4 bg-gradient-to-r from-[#FF4FA3] via-[#6C4CF1] to-[#FF4FA3] rounded-t-md mt-1 border-b border-black/20" />
          <div className="w-20 h-10 bg-[#2b274c] border-x border-b border-[#3b3666] flex items-center justify-center">
            <div className="w-14 h-2 bg-[#FF4FA3]/20 rounded-full" />
          </div>
        </div>

        {/* Stall 3: Boba Tea */}
        <div className="relative flex flex-col items-center">
          <div className="bg-[#FFD166] text-[#17152B] text-[10px] font-black px-2 py-0.5 rounded shadow-[0_0_12px_#FFD166] flex items-center gap-1">
            <Coffee className="w-3 h-3" /> BOBA TEA
          </div>
          <div className="w-24 h-4 bg-gradient-to-r from-[#FFD166] via-[#FF8A3D] to-[#FFD166] rounded-t-md mt-1 border-b border-black/20" />
          <div className="w-20 h-10 bg-[#2b274c] border-x border-b border-[#3b3666] flex items-center justify-center">
            <div className="w-14 h-2 bg-[#FFD166]/20 rounded-full" />
          </div>
        </div>

      </div>

      {/* 2. Cobblestone Ground Line */}
      <div className="absolute bottom-0 w-full h-6 bg-gradient-to-t from-[#110f20] to-[#17152B] border-t border-[#3b3666]/40" />

      {/* 3. Animated Walking Family */}
      <div className="absolute bottom-3 left-0 animate-walk-across flex items-end gap-3 z-10 pointer-events-none">
        
        {/* Parent 1 (Tall Left) */}
        <div className="animate-parent-walk flex flex-col items-center">
          {/* Head */}
          <div className="w-5 h-5 rounded-full bg-[#6C4CF1] border border-white/20 shadow-[0_0_8px_#6C4CF1]" />
          {/* Body */}
          <div className="w-6 h-10 bg-gradient-to-b from-[#6C4CF1] to-[#4b33a8] rounded-t-md mt-0.5" />
          {/* Legs */}
          <div className="flex gap-1 -mt-0.5">
            <div className="w-1.5 h-6 bg-[#17152B]" />
            <div className="w-1.5 h-6 bg-[#17152B]" />
          </div>
        </div>

        {/* Child (Jumping in Middle with Boba) */}
        <div className="animate-child-jump flex flex-col items-center relative -mx-1">
          {/* Holding Boba / Sparkle */}
          <Sparkles className="absolute -top-3 -right-2 w-3 h-3 text-[#FFD166] animate-pulse" />
          {/* Head */}
          <div className="w-4 h-4 rounded-full bg-[#FFD166] border border-white/30 shadow-[0_0_10px_#FFD166]" />
          {/* Body / Clothes */}
          <div className="w-4.5 h-7 bg-gradient-to-b from-[#FF4FA3] to-[#d42d80] rounded-t-md mt-0.5" />
          {/* Legs */}
          <div className="flex gap-1 -mt-0.5">
            <div className="w-1 h-4.5 bg-[#17152B]" />
            <div className="w-1 h-4.5 bg-[#17152B]" />
          </div>
        </div>

        {/* Parent 2 (Tall Right) */}
        <div className="animate-parent-walk flex flex-col items-center" style={{ animationDelay: "0.3s" }}>
          {/* Head */}
          <div className="w-5 h-5 rounded-full bg-[#FF8A3D] border border-white/20 shadow-[0_0_8px_#FF8A3D]" />
          {/* Body */}
          <div className="w-6 h-9.5 bg-gradient-to-b from-[#FF8A3D] to-[#cc6319] rounded-t-md mt-0.5" />
          {/* Legs */}
          <div className="flex gap-1 -mt-0.5">
            <div className="w-1.5 h-6 bg-[#17152B]" />
            <div className="w-1.5 h-6 bg-[#17152B]" />
          </div>
        </div>

      </div>

    </div>
  );
}