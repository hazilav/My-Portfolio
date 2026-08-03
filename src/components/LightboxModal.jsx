"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

export default function LightboxModal({ isOpen, onClose, imageSrc, imageAlt, title, description }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#05070B]/90 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative max-w-5xl w-full glass-card rounded-3xl p-4 sm:p-6 border border-white/20 shadow-2xl flex flex-col gap-4 overflow-hidden max-h-[90vh]"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <h3 className="font-bebas text-2xl text-white tracking-wide">{title || imageAlt}</h3>
              {description && <p className="text-xs text-gray-400">{description}</p>}
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#0D1117] text-gray-400 hover:text-white border border-white/10"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Image Container */}
          <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-2xl overflow-hidden bg-[#0D1117] flex items-center justify-center">
            <Image
              src={imageSrc}
              alt={imageAlt || "Showcase Image"}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
