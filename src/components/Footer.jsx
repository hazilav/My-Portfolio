"use client";

import Link from "next/link";
import { ArrowUp, Instagram, Linkedin, Globe, Heart } from "lucide-react";
import { personalInfo } from "@/data/resumeData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#05070B] border-t border-white/10 pt-16 pb-24 md:pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0B6CFF] to-[#00BFFF] flex items-center justify-center font-bebas text-lg text-white">
                MH
              </div>
              <span className="font-bebas text-2xl tracking-wider text-white">
                MUHAMMED HAZIL AV
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-gray-400 max-w-sm leading-relaxed">
              {personalInfo.tagline}. Dedicated to delivering modern digital experiences, search visibility, and conversion-focused web architecture.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">
              Navigation Quick Links
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
              <Link href="/#hero" className="hover:text-[#00BFFF] transition-colors">
                Intro / Home
              </Link>
              <Link href="/#about" className="hover:text-[#00BFFF] transition-colors">
                About Bio & Skills
              </Link>
              <Link href="/#works" className="hover:text-[#00BFFF] transition-colors">
                Works Showcase
              </Link>
              <Link href="/#services" className="hover:text-[#00BFFF] transition-colors">
                Services & Deliverables
              </Link>
              <Link href="/#contact" className="hover:text-[#00BFFF] transition-colors">
                Contact Me
              </Link>
            </div>
          </div>

          {/* Socials & Back to top */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#0D1117] border border-white/10 text-gray-300 hover:text-[#00BFFF] hover:border-[#0B6CFF]/50 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#0D1117] border border-white/10 text-gray-300 hover:text-[#00BFFF] hover:border-[#0B6CFF]/50 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#0D1117] border border-white/10 text-gray-300 hover:text-[#00BFFF] hover:border-[#0B6CFF]/50 transition-all"
                aria-label="Website"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <div>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Designed & Built with Luxury Aesthetics</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
