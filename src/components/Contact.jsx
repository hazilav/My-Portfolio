"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Instagram,
  Linkedin,
  Globe,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { personalInfo } from "@/data/resumeData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Website Development",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission state
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", projectType: "Website Development", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#05070B] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#0B6CFF]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0D1117] border border-[#0B6CFF]/30 text-xs font-semibold text-[#00BFFF] uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="font-bebas text-5xl sm:text-6xl text-white tracking-wide">
            LET'S BUILD SOMETHING <span className="text-gradient">EXTRAORDINARY</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-sm sm:text-base mt-2">
            Have a new project, redesign inquiry, or growth strategy in mind? Send a message or connect directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-card p-8 rounded-3xl border border-white/10 flex flex-col gap-6">
              <h3 className="font-bebas text-3xl text-white tracking-wide">
                CONTACT DETAILS
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Reach out for freelance project bookings, website redesign audits, or strategic digital marketing consultation.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#05070B] border border-white/10 hover:border-[#0B6CFF]/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0B6CFF]/15 flex items-center justify-center text-[#00BFFF] group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-400 font-medium">Email Address</div>
                    <div className="text-sm font-semibold text-white group-hover:text-[#00BFFF] transition-colors">
                      {personalInfo.email}
                    </div>
                  </div>
                </a>

                {/* Phone / WhatsApp */}
                <a
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#05070B] border border-white/10 hover:border-[#0B6CFF]/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0B6CFF]/15 flex items-center justify-center text-[#00BFFF] group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-400 font-medium">Phone / WhatsApp</div>
                    <div className="text-sm font-semibold text-white group-hover:text-[#00BFFF] transition-colors">
                      {personalInfo.phone}
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#05070B] border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-[#0B6CFF]/15 flex items-center justify-center text-[#00BFFF]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-400 font-medium">Location</div>
                    <div className="text-sm font-semibold text-white">{personalInfo.location}</div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-3">
                  Connect on Social Platforms
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#05070B] border border-white/10 text-gray-300 hover:text-[#00BFFF] hover:border-[#0B6CFF]/50 transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={personalInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#05070B] border border-white/10 text-gray-300 hover:text-[#00BFFF] hover:border-[#0B6CFF]/50 transition-all"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={personalInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#05070B] border border-white/10 text-gray-300 hover:text-[#00BFFF] hover:border-[#0B6CFF]/50 transition-all"
                    aria-label="Website"
                  >
                    <Globe className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 rounded-3xl border border-white/10 relative">
              <h3 className="font-bebas text-3xl text-white tracking-wide mb-6">
                SEND A DIRECT MESSAGE
              </h3>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#05070B] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#0B6CFF] transition-colors text-sm"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#05070B] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#0B6CFF] transition-colors text-sm"
                    />
                  </div>
                </div>

                {/* Project Type Select */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#05070B] border border-white/10 text-white focus:outline-none focus:border-[#0B6CFF] transition-colors text-sm"
                  >
                    <option value="Website Development">Website Design & Development</option>
                    <option value="Website Redesign">Website Redesign & Audit</option>
                    <option value="SEO Optimization">SEO & Keyword Optimization</option>
                    <option value="Social Media Management">Social Media Strategy & Reels</option>
                    <option value="Branding & Posters">Branding & Poster Design</option>
                    <option value="Meta & Google Ads">Meta & Google Ad Support</option>
                  </select>
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    Project Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your project goals, timelines, and requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#05070B] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#0B6CFF] transition-colors text-sm resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-[#0B6CFF] to-[#00BFFF] shadow-glow hover:shadow-glow-lg transition-all duration-300 disabled:opacity-50"
                >
                  {loading ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
