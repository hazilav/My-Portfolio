"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Layout,
  Search,
  Share2,
  RefreshCw,
  Palette,
  CheckCircle2,
  Wrench,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { services } from "@/data/resumeData";
import ServiceModal from "@/components/ServiceModal";

const iconMap = {
  Layout: Layout,
  Search: Search,
  Share2: Share2,
  RefreshCw: RefreshCw,
  Palette: Palette,
};

export default function Services() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);

  const handleSelectService = (service) => {
    setActiveService(service);
    setModalOpen(true);
  };

  return (
    <section id="services" className="py-24 relative bg-[#0A0B0E] overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Centered Alignment) */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">
            SPECIALIZED SERVICES & SOLUTIONS
          </span>
          <h2 className="font-bebas text-6xl sm:text-7xl text-white tracking-wider">
            SELECT SERVICE & <span className="text-gray-400">BUDGET RANGE</span>
          </h2>
          <p className="text-gray-400 max-w-xl text-xs sm:text-sm mt-3">
            Click any service card below to open the interactive project budget & scope wizard.
          </p>
        </div>

        {/* 5 Aligned Glassmorphic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Layout;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => handleSelectService(service)}
                className="group glass-card rounded-3xl p-8 border border-white/10 bg-[#12141C] hover:border-white/30 transition-all flex flex-col justify-between cursor-pointer shadow-xl"
              >
                <div>
                  {/* Top Bar: Icon + Step Index Pill */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-bebas text-3xl text-white tracking-wide mb-3 group-hover:text-gray-300 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 mb-8 border-t border-white/5 pt-4">
                    <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase block mb-2">
                      Key Deliverables:
                    </span>
                    {service.deliverables.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-center gap-2.5 text-xs text-gray-300">
                        <Sparkles className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action CTA Button */}
                <button
                  type="button"
                  onClick={() => handleSelectService(service)}
                  className="w-full py-3.5 rounded-xl bg-white/10 border border-white/15 text-xs font-bold text-white group-hover:bg-white group-hover:text-black transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wider shadow-sm"
                >
                  <span>Select Service & Budget</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Interactive Service Inquiry Modal */}
      <ServiceModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedService={activeService}
      />
    </section>
  );
}
