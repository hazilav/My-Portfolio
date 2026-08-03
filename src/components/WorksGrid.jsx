"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Folder, Layers, Sparkles } from "lucide-react";
import { worksCategories } from "@/data/resumeData";

export default function WorksGrid() {
  return (
    <section id="works" className="py-24 relative bg-[#0A0B0E] overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Inverted Font Size Hierarchy as Requested) */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">
            EXPLORE MY WORK COLLECTIONS
          </span>
          <h2 className="font-bebas text-6xl sm:text-7xl text-white tracking-wider">
            PORTFOLIO <span className="text-gray-400">SHOWCASE</span>
          </h2>
          <p className="text-gray-400 max-w-xl text-xs sm:text-sm mt-3">
            Explore dedicated project galleries across web development, social media management, SEO optimization, website redesigns, branding, and ad creative strategy.
          </p>
        </div>

        {/* 6 Showcase Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {worksCategories.map((category, idx) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative glass-card rounded-3xl overflow-hidden border border-white/10 bg-[#12141C] hover:border-white/30 transition-all flex flex-col justify-between shadow-xl"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0A0B0E]">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12141C] via-transparent to-transparent opacity-80" />

                {/* Category Pill Tag */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A0B0E]/80 backdrop-blur-md border border-white/10 text-[10px] font-bold text-gray-300 uppercase tracking-wider">
                  <Folder className="w-3.5 h-3.5 text-white" />
                  <span>Category 0{idx + 1}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-bebas text-3xl text-white tracking-wide mb-2 group-hover:text-gray-300 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {category.description}
                  </p>
                </div>

                <Link
                  href={`/works/${category.slug}`}
                  className="w-full py-3.5 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors shadow-md"
                >
                  <span>Explore Category</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
