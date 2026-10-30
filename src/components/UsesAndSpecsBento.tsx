"use client";

import React, { useState } from "react";
import { USES_AND_SPECS } from "@/data/portfolioData";
import {
  Cpu,
  Zap,
  Terminal,
  Monitor,
  Keyboard,
  Mic,
  Languages,
  Clock,
  Sparkles,
  Flame,
} from "lucide-react";

export default function UsesAndSpecsBento() {
  const [activeSpeedTab, setActiveSpeedTab] = useState(false);

  return (
    <section id="uses" className="py-16 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="space-y-2 border-b border-[#1C1C21] pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>Setup, Specs & Bilişsel Hız</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F5F7]">
            Kullandığım Sistemler & Kişisel Disiplin
          </h2>
          <p className="text-sm sm:text-base text-[#86868B] max-w-2xl">
            Geliştirme iş istasyonum, Linux yapılandırmalarım, 10 parmak klavye hızım ve teknik iletişim disiplinim.
          </p>
        </div>

        {/* 2-Column Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* OS & Workstation Bento (6 cols) */}
          <div className="lg:col-span-6 rounded-3xl p-6 sm:p-8 bg-[#0A0A0C] border border-[#1C1C21] hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#1C1C21]">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-[#1C1C21] text-blue-400">
                    <Monitor className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#F5F5F7]">
                      OS & Geliştirme Ortamı
                    </h3>
                    <p className="text-xs font-mono text-[#86868B]">
                      CachyOS Linux & Tiling Masaüstü
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Daily Driver
                </span>
              </div>

              {/* Items List */}
              <div className="space-y-3">
                {USES_AND_SPECS[0].items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-black/50 border border-[#1C1C21] hover:border-zinc-700 transition-colors space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-zinc-500">
                        {item.label}
                      </span>
                      {item.tag && (
                        <span className="text-[10px] font-mono px-2 py-0.2 rounded bg-white/[0.04] text-zinc-400">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-bold font-mono text-[#F5F5F7]">
                      {item.value}
                    </div>
                    <p className="text-xs text-[#86868B] leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-[#1C1C21] flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span>Kernel: Linux x86-64-v3 Optimized</span>
              <span className="text-emerald-400 font-semibold">100% Wayland</span>
            </div>
          </div>

          {/* Discipline & Cognitive Skills Bento (6 cols) */}
          <div className="lg:col-span-6 rounded-3xl p-6 sm:p-8 bg-[#0A0A0C] border border-[#1C1C21] hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#1C1C21]">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-[#1C1C21] text-amber-400">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#F5F5F7]">
                      Kişisel Disiplin & Hız
                    </h3>
                    <p className="text-xs font-mono text-[#86868B]">
                      10 Parmak, Hitabet ve İletişim
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  Executive
                </span>
              </div>

              {/* Special Focus Card: 10-Finger Typing Speed */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-950/20 to-black border border-amber-900/30 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                    <Keyboard className="w-4 h-4" />
                    <span className="font-bold">10 Parmak Klavye Hızı</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold">
                    Adli Katip Standartı
                  </span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold font-mono text-[#F5F5F7]">
                    115+ WPM
                  </span>
                  <span className="text-xs font-mono text-emerald-400">
                    (%98.5+ Doğruluk)
                  </span>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  Düşünce akışını gecikmesiz koda ve dokümantasyona aktarma yeteneği. Terminal, IDE ve metin editörlerinde üst düzey navigasyon ve üretkenlik.
                </p>
              </div>

              {/* Other Skills */}
              <div className="space-y-3">
                {USES_AND_SPECS[1].items
                  .filter((i) => i.label !== "10 Parmak Klavye Hızı")
                  .map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-black/50 border border-[#1C1C21] hover:border-zinc-700 transition-colors space-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-zinc-500">
                          {item.label}
                        </span>
                        {item.tag && (
                          <span className="text-[10px] font-mono px-2 py-0.2 rounded bg-white/[0.04] text-zinc-400">
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <div className="text-sm font-bold font-mono text-[#F5F5F7]">
                        {item.value}
                      </div>
                      <p className="text-xs text-[#86868B] leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  ))}
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-[#1C1C21] flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span className="flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                Sürekli Öğrenme & Gelişim
              </span>
              <span className="text-blue-400">Deep Work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
