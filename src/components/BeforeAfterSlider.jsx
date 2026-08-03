"use client";

import { useState } from "react";
import Image from "next/image";
import { SlidersHorizontal } from "lucide-react";

export default function BeforeAfterSlider({ beforeImage, afterImage, title }) {
  const [sliderPos, setSliderPos] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPos(Number(e.target.value));
  };

  return (
    <div className="relative w-full rounded-2xl overflow-hidden glass-card border border-white/15 aspect-[16/9] shadow-2xl select-none">
      {/* After Image (Full width underneath) */}
      <div className="absolute inset-0">
        <Image
          src={afterImage}
          alt="After Website Redesign"
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-cover object-top"
        />
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#0B6CFF] text-white text-xs font-bold shadow-glow">
          AFTER: Modern Redesign
        </div>
      </div>

      {/* Before Image (Clipped overlay) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <div className="relative w-full h-full min-w-[100%]">
          <Image
            src={beforeImage}
            alt="Before Legacy Website"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover object-top"
          />
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gray-900/90 text-gray-300 text-xs font-bold border border-white/20">
            BEFORE: Legacy Website
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-[#00BFFF] shadow-glow pointer-events-none z-10"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#00BFFF] text-gray-950 flex items-center justify-center shadow-lg border-2 border-white">
          <SlidersHorizontal className="w-4 h-4" />
        </div>
      </div>

      {/* Range Input Overlay */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPos}
        onChange={handleSliderChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
        aria-label="Before and After visual comparison slider"
      />
    </div>
  );
}
