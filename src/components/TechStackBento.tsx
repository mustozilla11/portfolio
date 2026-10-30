"use client";

import React from "react";
import { TECH_STACK_CATEGORIES } from "@/data/portfolioData";
import {
  Smartphone,
  Server,
  Cpu,
  Terminal,
} from "lucide-react";

export default function TechStackBento() {
  const getIcon = (id: string) => {
    switch (id) {
      case "mobile-frontend":
        return <Smartphone className="w-4 h-4 text-zinc-400" />;
      case "backend-systems":
        return <Server className="w-4 h-4 text-zinc-400" />;
      case "ai-data":
        return <Cpu className="w-4 h-4 text-zinc-400" />;
      case "devops-os":
        return <Terminal className="w-4 h-4 text-zinc-400" />;
      default:
        return <Cpu className="w-4 h-4 text-zinc-400" />;
    }
  };

  return (
    <section id="tech-stack" className="py-14 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="border-b border-[#1C1C21] pb-5 space-y-1.5">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block">
            02 / Yetkinlikler
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F5F7]">
            Teknolojiler & Çalışma Ortamı
          </h2>
        </div>

        {/* Quiet Monochrome 4-Box Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TECH_STACK_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="rounded-xl p-5 sm:p-6 bg-[#0A0A0C] border border-[#1C1C21] hover:border-zinc-800 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-[#1C1C21]">
                    {getIcon(category.id)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#F5F5F7]">
                      {category.title}
                    </h3>
                    <p className="text-xs font-mono text-zinc-500">
                      {category.subtitle}
                    </p>
                  </div>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-black/40 border border-[#1C1C21] text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
