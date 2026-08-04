"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  Layers,
  Sparkles,
  Maximize2,
  Folder,
  Sliders,
} from "lucide-react";
import { worksCategories, personalInfo } from "@/data/resumeData";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import LightboxModal from "@/components/LightboxModal";

export default function CategoryWorkPage({ params }) {
  const slug = params && typeof params.then === "function" ? (params.category || "") : (params?.category || "");
  const categoryData = worksCategories.find((cat) => cat.slug === slug || cat.slug === params?.category);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ src: "", alt: "", title: "", desc: "" });

  if (!categoryData) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center text-center px-4 bg-[#05070B]">
        <h1 className="font-bebas text-6xl text-white mb-4">Category Not Found</h1>
        <p className="text-gray-400 mb-8">The portfolio category you are looking for does not exist.</p>
        <Link
          href="/#works"
          className="px-6 py-3 rounded-xl bg-[#0B6CFF] text-white font-semibold text-sm shadow-glow"
        >
          Return to Works Grid
        </Link>
      </div>
    );
  }

  const openLightbox = (src, alt, title, desc) => {
    setSelectedImage({ src, alt, title, desc });
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen pt-28 pb-24 bg-[#05070B] relative">
      {/* Background Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#0B6CFF]/20 to-transparent blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Link */}
        <Link
          href="/#works"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0D1117] border border-white/10 text-xs font-semibold text-gray-300 hover:text-white hover:border-[#0B6CFF]/50 transition-all mb-8"
        >
          <ArrowLeft className="w-4 h-4 text-[#00BFFF]" />
          <span>Back to Portfolio Showcase</span>
        </Link>

        {/* Hero Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10 mb-16 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#05070B] border border-[#0B6CFF]/30 text-xs font-bold text-[#00BFFF] uppercase tracking-wider mb-4">
                <Folder className="w-3.5 h-3.5" />
                <span>Showcase Route</span>
              </div>
              
              <h1 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-white tracking-wide mb-4">
                {categoryData.title}
              </h1>

              <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
                {categoryData.subtitle}
              </p>

              {/* Deliverables Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {categoryData.deliverables.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold text-white bg-white/5 border border-white/10 px-3 py-1.5 rounded-full"
                  >
                    ✓ {item}
                  </span>
                ))}
              </div>

              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#0B6CFF] to-[#00BFFF] text-white font-semibold text-sm shadow-glow hover:shadow-glow-lg transition-all"
              >
                <span>Inquire About This Service</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>

            {/* Banner Main Image */}
            <div className="lg:col-span-5 relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/15 bg-[#0D1117] group cursor-pointer"
                 onClick={() => openLightbox(categoryData.image, categoryData.title, categoryData.title, categoryData.subtitle)}>
              <Image
                src={categoryData.image}
                alt={categoryData.title}
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070B]/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 right-3 p-2 rounded-lg bg-[#05070B]/80 text-white text-xs flex items-center gap-1.5">
                <Maximize2 className="w-3.5 h-3.5 text-[#00BFFF]" />
                <span>Click to Expand Lightbox</span>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Optional Before/After Section */}
        {categoryData.hasBeforeAfter && categoryData.beforeImage && categoryData.afterImage && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-2 mb-6">
              <Sliders className="w-5 h-5 text-[#00BFFF]" />
              <h2 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide">
                BEFORE vs AFTER COMPARISON SLIDER
              </h2>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm mb-6">
              Drag the interactive slider handle left or right to inspect the visual contrast between the legacy site and the high-converting redesign.
            </p>
            <BeforeAfterSlider
              beforeImage={categoryData.beforeImage}
              afterImage={categoryData.afterImage}
              title={categoryData.title}
            />
          </motion.div>
        )}

        {/* Detailed Projects Gallery Grid */}
        <div className="space-y-12">
          <div className="flex flex-col">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">CLIENT PROJECTS SHOWCASE</span>
            <h2 className="font-bebas text-4xl sm:text-5xl text-white tracking-wide">
              EXPLORE WORKS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categoryData.projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card glass-card-hover rounded-3xl p-8 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  {/* Header & Client */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold text-gray-200 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full">
                      Client: {project.client}
                    </span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                      Slot {idx + 1 < 10 ? '0' + (idx + 1) : idx + 1}
                    </span>
                  </div>

                  <h3 className="font-bebas text-3xl text-white tracking-wide mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {project.summary}
                  </p>

                  {/* Strategy Details */}
                  <div className="bg-[#05070B]/80 p-4 rounded-2xl border border-white/5 mb-6 text-xs text-gray-400 leading-relaxed">
                    <span className="font-bold text-white block mb-1">Execution & Strategy:</span>
                    {project.details}
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 border-t border-white/10 pt-4">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-[11px] font-medium text-gray-400 bg-white/5 px-2.5 py-1 rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-20 glass-card p-10 rounded-3xl border border-white/15 text-center flex flex-col items-center">
          <Sparkles className="w-8 h-8 text-[#00BFFF] mb-3 animate-pulse" />
          <h3 className="font-bebas text-4xl text-white tracking-wide mb-2">
            WANT SIMILAR RESULTS FOR YOUR BRAND?
          </h3>
          <p className="text-gray-400 text-sm max-w-xl mb-6">
            Get in touch with Muhammed Hazil AV today for custom website development, website redesign, or digital marketing strategy.
          </p>
          <Link
            href="/#contact"
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#0B6CFF] to-[#00BFFF] text-white font-semibold text-sm shadow-glow hover:shadow-glow-lg transition-all"
          >
            Start Your Project Now
          </Link>
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={selectedImage.src}
        imageAlt={selectedImage.alt}
        title={selectedImage.title}
        description={selectedImage.desc}
      />
    </div>
  );
}
