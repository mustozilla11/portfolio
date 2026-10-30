"use client";

import React from "react";
import { USES_AND_SPECS } from "@/data/portfolioData";
import { Monitor, Zap } from "lucide-react";

export default function UsesAndSpecsBento() {
  return (
    <section id="uses" className="py-16 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="border-b border-white/[0.08] pb-6 space-y-2">
          <span className="text-xs sm:text-sm font-mono text-zinc-400 uppercase tracking-widest block font-medium">
            05 / Sistem & Disiplin
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Çalışma Ortamı & Beceriler
          </h2>
        </div>

        {/* 2-Column Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Column 1: OS & Environment */}
          <div className="apple-card rounded-2xl p-8 sm:p-9 space-y-6">
            <div className="flex items-center gap-3.5 pb-3.5 border-b border-white/[0.08]">
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                <Monitor className="w-5 h-5 text-zinc-200" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Geliştirme İstasyonu
              </h3>
            </div>

            <div className="space-y-5">
              {USES_AND_SPECS[0].items.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-mono">
                    <span className="text-zinc-400 uppercase tracking-wider font-medium">{item.label}</span>
                    <span className="text-white font-bold text-sm sm:text-base">{item.value}</span>
                  </div>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Cognitive & Communication Skills */}
          <div className="apple-card rounded-2xl p-8 sm:p-9 space-y-6">
            <div className="flex items-center gap-3.5 pb-3.5 border-b border-white/[0.08]">
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                <Zap className="w-5 h-5 text-zinc-200" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Kişisel Disiplin & Hız
              </h3>
            </div>

            <div className="space-y-5">
              {USES_AND_SPECS[1].items.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-mono">
                    <span className="text-zinc-400 uppercase tracking-wider font-medium">{item.label}</span>
                    <span className="text-white font-bold text-sm sm:text-base">{item.value}</span>
                  </div>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
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
