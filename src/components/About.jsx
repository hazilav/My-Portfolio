"use client";

import { User, MapPin } from "lucide-react";
import { personalInfo, stats } from "@/data/resumeData";

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-[#05070B] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#0B6CFF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0D1117] border border-white/10 text-xs font-semibold text-[#00BFFF] uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Crafting Digital Growth & Modern Experiences</span>
          </div>
          <h2 className="font-bebas text-6xl sm:text-7xl text-white tracking-wider">
            ABOUT <span className="text-gray-300">ME</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-sm sm:text-base mt-2">
            Combining digital marketing strategy, conversion web design, and continuous learning to scale brands.
          </p>
        </div>

        {/* Text-Only Bio & 4 Stat Cards Layout */}
        <div className="max-w-4xl mx-auto flex flex-col gap-6 text-center items-center">
          <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide">
            BIO & PROFESSIONAL PERSPECTIVE
          </h3>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl">
            {personalInfo.bio}
          </p>
          <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
            With hands-on experience in WordPress & Elementor site development, code-based website building, and AI-assisted workflows, I create websites that don't just look stunning but convert visitors into customers.
          </p>

          {/* Location & Availability Badge */}
          <div className="inline-flex flex-wrap items-center justify-center gap-6 px-6 py-3 bg-[#0D1117] rounded-2xl border border-white/10 text-xs text-gray-300 my-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#00BFFF]" />
              <span className="font-medium">{personalInfo.location}</span>
            </div>
            <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Freelance & Client Contracts</span>
            </div>
          </div>

          {/* 4 Stat Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card p-5 rounded-2xl border border-white/10 flex flex-col items-center text-center bg-[#12141C]"
              >
                <div className="font-bebas text-4xl text-white">{stat.value}</div>
                <div className="text-xs font-bold text-gray-200 mt-1">{stat.label}</div>
                <div className="text-[11px] text-gray-400 mt-0.5">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
