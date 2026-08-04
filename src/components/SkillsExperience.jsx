"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle,
} from "lucide-react";
import {
  skillCategories,
  certifications,
  workExperience,
  education,
} from "@/data/resumeData";

export default function SkillsExperience() {
  const [activeSkillCategory, setActiveSkillCategory] = useState(0);

  return (
    <section id="skills-experience" className="py-24 relative bg-[#0A0B0E] border-t border-white/10 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#0B6CFF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Skills Section with Interactive Tabs */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide">
                CORE SKILLS & TECH STACK
              </h3>
              <p className="text-xs sm:text-sm text-gray-400">
                Categorized capabilities across development, marketing, and creative tools.
              </p>
            </div>

            {/* Category Selector Buttons */}
            <div className="flex flex-wrap gap-2">
              {skillCategories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSkillCategory(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    activeSkillCategory === idx
                      ? "bg-gradient-to-r from-[#0B6CFF] to-[#00BFFF] text-white shadow-glow"
                      : "bg-[#0D1117] text-gray-400 border border-white/10 hover:text-white"
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>

          {/* Active Skills Pill Display */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 bg-[#12141C]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {skillCategories[activeSkillCategory].skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#05070B]/80 border border-white/10 text-sm font-medium text-gray-200 hover:border-[#0B6CFF]/50 transition-colors"
                >
                  <CheckCircle className="w-4 h-4 text-[#00BFFF] shrink-0" />
                  <span>{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Showcase */}
        <div className="mb-20">
          <div className="mb-8">
            <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide">
              CERTIFICATIONS & CREDENTIALS
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Industry certifications in Analytics, Search Ads, Video Ads, SEO, and Content Strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="glass-card p-5 rounded-2xl border border-white/10 flex items-center justify-between hover:border-[#0B6CFF]/40 transition-all bg-[#12141C]"
              >
                <div className="flex items-center gap-3 min-w-0 pr-2">
                  <div className="w-10 h-10 rounded-xl bg-[#0B6CFF]/15 border border-[#0B6CFF]/30 flex items-center justify-center text-[#00BFFF] shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-white truncate">{cert.title}</h4>
                    <span className="text-xs text-gray-400 block truncate">{cert.issuer}</span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#00BFFF] bg-[#0B6CFF]/15 px-3 py-1 rounded-full border border-[#00BFFF]/20 shrink-0">
                  {cert.date}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Work Experience Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Work Experience */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-8">
              <Briefcase className="w-5 h-5 text-[#00BFFF]" />
              <h3 className="font-bebas text-3xl text-white tracking-wide">
                WORK EXPERIENCE
              </h3>
            </div>

            <div className="space-y-6">
              {workExperience.map((exp, idx) => (
                <div
                  key={idx}
                  className="glass-card p-6 rounded-2xl border border-white/10 relative overflow-hidden bg-[#12141C]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                    <span className="text-xs font-semibold text-[#00BFFF] bg-[#0B6CFF]/15 px-3 py-1 rounded-full border border-[#00BFFF]/20 shrink-0">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400 mb-3">{exp.company}</div>
                  <p className="text-xs sm:text-sm text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="space-y-1.5 border-t border-white/5 pt-3">
                    {exp.highlights.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-center gap-2 text-xs text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00BFFF]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Training */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-8">
              <GraduationCap className="w-5 h-5 text-[#00BFFF]" />
              <h3 className="font-bebas text-3xl text-white tracking-wide">
                EDUCATION & ACADEMICS
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between bg-[#12141C]"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h4 className="text-base font-bold text-white">{edu.degree}</h4>
                      <span className="text-xs font-semibold text-[#00BFFF] bg-[#0B6CFF]/15 px-3 py-1 rounded-full border border-[#00BFFF]/20 shrink-0">
                        {edu.year}
                      </span>
                    </div>
                    <div className="text-xs text-gray-400 mt-1">{edu.institution}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
