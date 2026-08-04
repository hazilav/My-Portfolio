"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, MessageSquare, MessageCircle } from "lucide-react";
import { personalInfo } from "@/data/resumeData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section detection
      const sections = ["hero", "about", "works", "services", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Intro", href: "/#hero", id: "hero" },
    { name: "About", href: "/#about", id: "about" },
    { name: "Works", href: "/#works", id: "works" },
    { name: "Services", href: "/#services", id: "services" },
    { name: "Contact", href: "/#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#05070B]/85 backdrop-blur-md border-b border-white/10 py-4 shadow-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#0B6CFF] to-[#00BFFF] flex items-center justify-center font-bebas text-xl text-white shadow-glow">
            MH
          </div>
          <div className="flex flex-col">
            <span className="font-bebas text-2xl tracking-wider text-white group-hover:text-[#00BFFF] transition-colors">
              MUHAMMED HAZIL
            </span>
            <span className="text-[10px] text-gray-400 font-medium tracking-widest -mt-1 uppercase">
              Digital Marketer & Dev
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0D1117]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                activeSection === link.id ? "text-white font-semibold" : "text-gray-400 hover:text-white"
              }`}
            >
              {activeSection === link.id && (
                <motion.span
                  layoutId="activeNavTab"
                  className="absolute inset-0 bg-[#0B6CFF]/20 rounded-full border border-[#0B6CFF]/40"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </Link>
          ))}
        </nav>

        {/* Right Action CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={personalInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#0B6CFF] to-[#00BFFF] hover:shadow-glow transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4 fill-current text-white" />
            <span>WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white bg-[#0D1117] border border-white/10 focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#00BFFF]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Animated Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#05070B]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-bebas tracking-wide py-2 border-b border-white/5 transition-colors ${
                    activeSection === link.id ? "text-[#00BFFF] font-bold pl-2 border-l-2 border-[#00BFFF]" : "text-gray-300"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <a
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#0B6CFF] to-[#00BFFF] text-white font-semibold text-center shadow-glow"
                >
                  <MessageCircle className="w-4 h-4 fill-current text-white" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
