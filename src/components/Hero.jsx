"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Compass, Sparkles, CheckCircle2, TrendingUp, Zap, MessageSquare } from "lucide-react";

export default function Hero() {
  const toolsList = [
    "WordPress",
    "Elementor",
    "Google Analytics",
    "Google Ads",
    "Meta Business Suite",
    "Adobe Illustrator",
    "SEMrush",
    "Canva",
    "Adobe Photoshop",
    "Antigravity",
  ];

  const infiniteTools = [...toolsList, ...toolsList, ...toolsList, ...toolsList];

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-12 overflow-hidden bg-[#0A0B0E] text-[#F3F4F6] flex flex-col justify-between items-center">
      
      {/* GIANT BACKGROUND WATERMARK TYPOGRAPHY */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-full text-center pointer-events-none select-none z-0">
        <h1 className="font-bebas text-[140px] sm:text-[200px] md:text-[280px] lg:text-[340px] font-black tracking-widest text-[#161822] uppercase opacity-60 leading-none">
          HAZIL
        </h1>
      </div>

      {/* MAIN HERO GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
        
        {/* LEFT COLUMN: Main Role Headline, Description & Thumbnail Previews */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-4 text-left flex flex-col justify-center order-2 lg:order-1 z-20"
        >
          <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-wider leading-[0.95] mb-4">
            CREATIVE <br />
            <span className="text-gray-200">DEVELOPER</span> & MARKETER
          </h2>

          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-md">
            Digital marketer and website developer skilled in building responsive custom web platforms, social media campaigns, and data-driven growth strategies across digital channels.
          </p>
        </motion.div>

        {/* CENTER COLUMN: Large Headshot Portrait Overlapping Watermark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative flex flex-col items-center justify-center order-1 lg:order-2 z-10"
        >
          <div className="relative w-[340px] sm:w-[420px] md:w-[480px] lg:w-[540px] aspect-[4/5] overflow-hidden">
            <Image
              src="/images/profile.png"
              alt="Muhammed Hazil AV"
              fill
              priority
              sizes="540px"
              className="object-cover object-top hover:scale-105 transition-transform duration-500"
            />
            {/* Matte Dark Fade Gradient at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0E] via-transparent to-transparent opacity-90" />
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Senior UI/UX Dark Luxury Status & Performance Hub (Replacing Old Featured Card) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-3 text-left flex flex-col justify-center order-3 z-20 space-y-4"
        >
          {/* Live Status Badge */}
          <div className="p-4 rounded-2xl glass-card border border-white/10 bg-[#12141C]/90 backdrop-blur-md">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase">Available for Work</span>
            </div>
            <p className="text-xs text-gray-300 font-medium">Accepting New Client Projects & Freelance Contracts</p>
          </div>

          {/* Key Impact Stats */}
          <div className="p-4 rounded-2xl glass-card border border-white/10 bg-[#12141C]/90 backdrop-blur-md space-y-3">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <span className="text-xs text-gray-400 font-medium">Experience</span>
              <span className="font-bebas text-2xl text-white">1+ Yr</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400 font-medium">Client Projects</span>
              <span className="font-bebas text-2xl text-white">10+</span>
            </div>
          </div>

          {/* Quick Contact Action Button */}
          <Link
            href="/#contact"
            className="w-full py-3.5 px-4 rounded-2xl bg-white text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors shadow-lg"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Start a Project →</span>
          </Link>
        </motion.div>

      </div>

      {/* FULL-SCREEN EDGE-TO-EDGE CONTINUOUS SLIDING APP ICONS MARQUEE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative z-20 w-full overflow-hidden mt-12 py-2"
      >
        <div className="w-full overflow-hidden relative">
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#0A0B0E] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#0A0B0E] to-transparent z-10 pointer-events-none" />

          <div className="animate-continuous-slide gap-4 px-2">
            {infiniteTools.map((tool, idx) => (
              <div
                key={idx}
                className="shrink-0 px-5 py-2.5 rounded-full bg-[#141622]/80 border border-white/10 text-xs font-bold text-gray-300 hover:text-white hover:border-white/30 transition-all flex items-center gap-2 shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-gray-400" />
                <span>{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  );
}
