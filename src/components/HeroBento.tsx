"use client";

import React, { useState } from "react";
import { PERSONAL_DATA } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon, TerminalIcon } from "@/components/Icons";
import {
  Mail,
  FileDown,
  Check,
  ArrowDown,
} from "lucide-react";

interface HeroBentoProps {
  onOpenResume: () => void;
}

export default function HeroBento({ onOpenResume }: HeroBentoProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="pt-28 sm:pt-36 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Main Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Main Hero Card (8 cols) - Pure Name & Presence (No pigeonhole definition) */}
          <div className="lg:col-span-8 apple-card rounded-2xl p-8 sm:p-12 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.09] text-xs sm:text-sm font-mono text-zinc-200">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="font-medium tracking-tight">
                  {PERSONAL_DATA.statusBadge.text}
                </span>
              </div>

              {/* Commanding Name & Profile Photo (No restrictive narrow definition) */}
              <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-6 pt-2">
                <div className="space-y-3">
                  <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.02]">
                    {PERSONAL_DATA.name}
                  </h1>
                </div>

                {/* Profile Photo Slot (Apple Style Framed Avatar) */}
                <div className="relative group shrink-0">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-[#171920] relative">
                    <img
                      src="/avatar.jpg"
                      alt={PERSONAL_DATA.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/avatar.svg";
                      }}
                    />
                  </div>
                  <span className="absolute -bottom-2 right-0 px-2.5 py-1 rounded-md bg-[#131419] border border-white/10 text-xs font-mono text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none">
                    avatar.jpg
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Actions & Socials */}
            <div className="pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                {/* Apple Pro White Primary Button */}
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-white hover:bg-zinc-100 text-black text-sm sm:text-base font-semibold tracking-tight transition-all shadow-md active:scale-[0.98]"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Özgeçmişi İncele (CV)</span>
                </button>

                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.15] text-zinc-200 text-sm sm:text-base font-medium transition-colors"
                >
                  <span>Projeler</span>
                  <ArrowDown className="w-4 h-4 text-zinc-400" />
                </a>
              </div>

              {/* Prominent & Vivid Social Buttons */}
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={PERSONAL_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#24292F] hover:bg-[#1a1f24] text-white border border-white/20 font-sans font-semibold text-sm transition-all shadow-sm active:scale-95"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href={PERSONAL_DATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white border border-[#0A66C2]/50 font-sans font-semibold text-sm transition-all shadow-md shadow-[#0A66C2]/20 active:scale-95"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 font-sans font-semibold text-sm transition-all active:scale-95"
                  title="E-postayı Kopyala"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-sans font-medium">Kopyalandı</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4" />
                      <span>E-posta</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Workstation & System Card (4 cols) */}
          <div className="lg:col-span-4 apple-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-zinc-600"></div>
                  <div className="w-3 h-3 rounded-full bg-zinc-600"></div>
                  <div className="w-3 h-3 rounded-full bg-zinc-600"></div>
                </div>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-zinc-300">
                  <TerminalIcon className="w-4 h-4" />
                  <span>cachyos-hyprland</span>
                </div>
              </div>

              {/* Terminal Specs */}
              <div className="font-mono text-xs sm:text-sm space-y-3">
                <div className="text-zinc-400 text-xs sm:text-sm flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">$</span>
                  <span className="text-zinc-100">fastfetch --profile dev</span>
                </div>

                <div className="p-4 sm:p-5 rounded-xl bg-black/45 border border-white/[0.06] space-y-2.5 text-xs sm:text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">OS:</span>
                    <span className="text-white font-medium">CachyOS Linux</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Kernel:</span>
                    <span className="text-zinc-200">BORE Optimized</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">WM / Shell:</span>
                    <span className="text-zinc-200">Hyprland / Fish</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Stack:</span>
                    <span className="text-white font-semibold">Flutter • FastAPI • Rust</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Tez / R&D:</span>
                    <span className="text-zinc-200">SAYZEK LLM & RAG</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-xs sm:text-sm font-mono text-zinc-400">
              <span className="text-zinc-300">Daily Driver Workstation</span>
              <span className="text-zinc-200 font-medium">Senior MIS Student</span>
            </div>
          </div>
        </div>

        {/* Big Bold Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          {PERSONAL_DATA.stats.map((stat, idx) => (
            <div
              key={idx}
              className="apple-card rounded-2xl p-6 sm:p-7 space-y-2"
            >
              <div className="text-xs sm:text-sm font-mono text-zinc-400 uppercase tracking-wider font-medium">
                {stat.label}
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-mono text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-zinc-300 font-sans">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
