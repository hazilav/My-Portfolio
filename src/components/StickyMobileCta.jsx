"use client";

import Link from "next/link";
import { MessageSquare, MessageCircle } from "lucide-react";
import { personalInfo } from "@/data/resumeData";

export default function StickyMobileCta() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#05070B]/95 backdrop-blur-md border-t border-white/10 px-4 py-3 flex items-center gap-3">
      <Link
        href="/#contact"
        className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#0B6CFF] to-[#00BFFF] text-white font-semibold text-xs shadow-glow"
      >
        <MessageSquare className="w-4 h-4" />
        <span>Contact Me</span>
      </Link>
      <a
        href={personalInfo.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-xs shadow-md"
      >
        <MessageCircle className="w-4 h-4 fill-current" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
