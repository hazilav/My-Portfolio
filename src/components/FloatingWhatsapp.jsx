"use client";

import { MessageCircle } from "lucide-react";
import { personalInfo } from "@/data/resumeData";

export default function FloatingWhatsapp() {
  return (
    <a
      href={personalInfo.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 group"
    >
      <MessageCircle className="w-7 h-7 fill-current" />
      {/* Tooltip on hover */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-[#0D1117] text-xs font-semibold text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
        Chat on WhatsApp
      </span>
    </a>
  );
}
