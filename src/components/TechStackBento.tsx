"use client";

import React, { useState } from "react";
import { TECH_STACK_CATEGORIES } from "@/data/portfolioData";
import {
  Smartphone,
  Server,
  BrainCircuit,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function TechStackBento() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Smartphone":
        return <Smartphone className="w-5 h-5 text-blue-400" />;
      case "Server":
        return <Server className="w-5 h-5 text-emerald-400" />;
      case "BrainCircuit":
        return <BrainCircuit className="w-5 h-5 text-purple-400" />;
      case "Terminal":
        return <Terminal className="w-5 h-5 text-amber-400" />;
      default:
        return <Cpu className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="tech-stack" className="py-16 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="space-y-2 border-b border-[#1C1C21] pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>Mühendislik Yığını</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F5F7]">
            Teknik Yetkinlikler & Mimari Yığın
          </h2>
          <p className="text-sm sm:text-base text-[#86868B] max-w-2xl">
            Modern mobil mimarilerden düşük gecikmeli sistem programlamaya, büyük dil modellerinden Linux çekirdek ortamlarına kadar uzmanlaştığım teknolojiler.
          </p>
        </div>

        {/* Bento Grid 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TECH_STACK_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="rounded-3xl p-6 sm:p-8 bg-[#0A0A0C] border border-[#1C1C21] hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Row: Icon, Title & Badge */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-white/[0.03] border border-[#1C1C21] group-hover:border-zinc-700 transition-colors">
                      {getIcon(category.icon)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#F5F5F7] group-hover:text-blue-400 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-xs font-mono text-[#86868B]">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/[0.03] border border-[#1C1C21] text-zinc-400">
                    {category.badge}
                  </span>
                </div>

                {/* Skills Badges Grid */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => {
                    const isHovered = hoveredSkill === skill.name;
                    return (
                      <div
                        key={skill.name}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className={`group/skill relative px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 cursor-default flex items-center gap-2 ${
                          skill.highlight
                            ? "bg-[#111115] border border-blue-500/30 text-[#F5F5F7] shadow-sm hover:border-blue-400"
                            : "bg-black/50 border border-[#1C1C21] text-zinc-400 hover:text-[#F5F5F7] hover:border-zinc-700"
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60 group-hover/skill:bg-blue-400 transition-colors"></span>
                        <span>{skill.name}</span>
                        {skill.badge && (
                          <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-white/[0.06] text-blue-300 font-semibold">
                            {skill.badge}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="pt-6 mt-6 border-t border-[#1C1C21] flex items-center justify-between text-[11px] font-mono text-[#86868B]">
                <span className="flex items-center gap-1.5 text-zinc-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  Üretim Odaklı & Ölçeklenebilir
                </span>
                <span className="text-zinc-600">Strict Quality</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
