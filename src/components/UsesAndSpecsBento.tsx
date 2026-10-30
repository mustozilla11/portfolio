"use client";

import React from "react";
import { USES_AND_SPECS } from "@/data/portfolioData";
import { Monitor, Zap } from "lucide-react";

export default function UsesAndSpecsBento() {
  return (
    <section id="uses" className="py-14 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="border-b border-[#1C1C21] pb-5 space-y-1.5">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block">
            05 / Sistem & Beceriler
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F5F7]">
            Çalışma Ortamı & Kişisel Disiplin
          </h2>
        </div>

        {/* 2-Column Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Column 1: OS & Environment */}
          <div className="rounded-xl p-5 sm:p-6 bg-[#0A0A0C] border border-[#1C1C21] hover:border-zinc-800 transition-colors space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#1C1C21]">
              <Monitor className="w-4 h-4 text-zinc-400" />
              <h3 className="text-base font-semibold text-[#F5F5F7]">
                Geliştirme Ortamı
              </h3>
            </div>

            <div className="space-y-3">
              {USES_AND_SPECS[0].items.map((item, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-500">{item.label}</span>
                    <span className="text-zinc-300 font-semibold">{item.value}</span>
                  </div>
                  <p className="text-xs text-zinc-400">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Cognitive & Communication Skills */}
          <div className="rounded-xl p-5 sm:p-6 bg-[#0A0A0C] border border-[#1C1C21] hover:border-zinc-800 transition-colors space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#1C1C21]">
              <Zap className="w-4 h-4 text-zinc-400" />
              <h3 className="text-base font-semibold text-[#F5F5F7]">
                Beceriler & Diller
              </h3>
            </div>

            <div className="space-y-3">
              {USES_AND_SPECS[1].items.map((item, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-500">{item.label}</span>
                    <span className="text-zinc-300 font-semibold">{item.value}</span>
                  </div>
                  <p className="text-xs text-zinc-400">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
