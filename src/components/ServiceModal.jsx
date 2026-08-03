"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CheckCircle2,
  DollarSign,
  Calendar,
  User,
  Mail,
  Phone,
  MessageSquare,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Send,
} from "lucide-react";
import { personalInfo } from "@/data/resumeData";

export default function ServiceModal({ isOpen, onClose, selectedService }) {
  const [step, setStep] = useState(1);
  const [budget, setBudget] = useState("₹20,000 - ₹50,000 ($250 - $600)");
  const [timeline, setTimeline] = useState("1 - 2 Weeks");
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setSubmitted(false);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen || !selectedService) return null;

  const budgetOptions = [
    { label: "Starter Budget", value: "₹15,000 - ₹30,000 ($200 - $400)", desc: "Ideal for basic setups & single landing pages" },
    { label: "Growth / Recommended", value: "₹30,000 - ₹60,000 ($400 - $800)", desc: "Full website redesign, SMM, or complete SEO audit" },
    { label: "Premium Enterprise", value: "₹60,000+ ($800+)", desc: "End-to-end multi-channel growth, ads & custom web app" },
  ];

  const timelineOptions = ["1 - 2 Weeks", "2 - 4 Weeks", "1 Month +", "Urgent / ASAP"];

  const handleNextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Build WhatsApp message URL
      const text = encodeURIComponent(
        `Hi Muhammed Hazil!\n\nI want to book *${selectedService.title}*.\n- Budget: ${budget}\n- Timeline: ${timeline}\n- Name: ${contactData.name}\n- Email: ${contactData.email}\n- Phone: ${contactData.phone}\n- Notes: ${contactData.notes}`
      );
      window.open(`https://wa.me/919539933265?text=${text}`, "_blank");
      onClose();
    }, 1200);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#05070B]/90 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative max-w-2xl w-full glass-card rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl overflow-hidden"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div>
              <span className="text-[11px] font-bold text-[#00BFFF] uppercase tracking-wider block">
                Multi-Step Inquiry Wizard (Step {step} of 3)
              </span>
              <h3 className="font-bebas text-3xl text-white tracking-wide">
                {selectedService.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#0D1117] text-gray-400 hover:text-white border border-white/10"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="w-full bg-[#0D1117] h-1.5 rounded-full overflow-hidden mb-8">
            <div
              className="bg-gradient-to-r from-[#0B6CFF] to-[#00BFFF] h-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>

          {/* STEP 1: Budget & Timeline Selection */}
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-[#00BFFF]" />
                  <span>Select Project Budget Range</span>
                </label>
                <div className="space-y-3">
                  {budgetOptions.map((opt, idx) => (
                    <div
                      key={idx}
                      onClick={() => setBudget(opt.value)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                        budget === opt.value
                          ? "bg-[#0B6CFF]/20 border-[#00BFFF] text-white shadow-glow"
                          : "bg-[#05070B] border-white/10 text-gray-300 hover:border-white/20"
                      }`}
                    >
                      <div>
                        <div className="text-sm font-bold text-white">{opt.label}</div>
                        <div className="text-xs text-gray-400">{opt.desc}</div>
                      </div>
                      <span className="text-xs font-semibold text-[#00BFFF]">{opt.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#00BFFF]" />
                  <span>Expected Project Timeline</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {timelineOptions.map((time, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setTimeline(time)}
                      className={`p-3 rounded-xl text-xs font-semibold border transition-all ${
                        timeline === time
                          ? "bg-[#00BFFF]/20 border-[#00BFFF] text-white shadow-glow"
                          : "bg-[#05070B] border-white/10 text-gray-400 hover:text-white"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleNextStep}
                className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-[#0B6CFF] to-[#00BFFF] shadow-glow flex items-center justify-center gap-2"
              >
                <span>Next: Deliverables & Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}

          {/* STEP 2: Service Deliverables & Custom Requirements */}
          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <div>
                <span className="text-xs font-bold text-gray-300 uppercase tracking-wider block mb-3">
                  Included Key Deliverables
                </span>
                <div className="space-y-2 bg-[#05070B] p-4 rounded-2xl border border-white/10">
                  {selectedService.deliverables ? (
                    selectedService.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-200">
                        <CheckCircle2 className="w-4 h-4 text-[#00BFFF]" />
                        <span>{item}</span>
                      </div>
                    ))
                  ) : (
                    <div className="text-xs text-gray-400">Standard professional deliverables included.</div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                  Additional Project Notes / Specific Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Existing website link, target audience, preferred colors, specific features..."
                  value={contactData.notes}
                  onChange={(e) => setContactData({ ...contactData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#05070B] border border-white/10 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-[#0B6CFF]"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="w-1/3 py-4 rounded-xl font-semibold text-gray-300 bg-[#0D1117] border border-white/10 flex items-center justify-center gap-2 text-xs"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="w-2/3 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-[#0B6CFF] to-[#00BFFF] shadow-glow flex items-center justify-center gap-2 text-xs"
                >
                  <span>Next: Contact Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: Contact Details & Submit */}
          {step === 3 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-bebas text-3xl text-white">INQUIRY PREPARED!</h4>
                  <p className="text-xs text-gray-300">
                    Redirecting to WhatsApp to send your budget & service details directly to Muhammed Hazil AV...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="bg-[#05070B] p-3 rounded-xl border border-white/10 text-xs text-gray-300 flex justify-between">
                    <span>Selected: <strong className="text-white">{selectedService.title}</strong></span>
                    <span className="text-[#00BFFF] font-bold">{budget}</span>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={contactData.name}
                      onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#05070B] border border-white/10 text-white text-xs focus:outline-none focus:border-[#0B6CFF]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={contactData.email}
                        onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#05070B] border border-white/10 text-white text-xs focus:outline-none focus:border-[#0B6CFF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={contactData.phone}
                        onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#05070B] border border-white/10 text-white text-xs focus:outline-none focus:border-[#0B6CFF]"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="w-1/3 py-4 rounded-xl font-semibold text-gray-300 bg-[#0D1117] border border-white/10 text-xs flex items-center justify-center gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-[#0B6CFF] to-[#00BFFF] shadow-glow text-xs flex items-center justify-center gap-2"
                    >
                      <span>Send Project Inquiry</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
