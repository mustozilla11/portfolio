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
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Main Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Hero Card (8 cols) */}
          <div className="lg:col-span-8 relative group/hero">
            <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-indigo-500/25 via-violet-500/18 to-cyan-500/20 blur-2xl opacity-75 transition-opacity duration-500 group-hover/hero:opacity-100 -z-10" />
            <div className="liquid-glass rounded-3xl p-8 sm:p-12 flex flex-col justify-between space-y-8 h-full">
            <div className="space-y-6">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full liquid-pill text-xs sm:text-sm font-mono text-zinc-200">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="font-medium tracking-tight">
                  {PERSONAL_DATA.statusBadge.text}
                </span>
              </div>

              {/* Commanding Name & Profile Photo */}
              <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-6 pt-1">
                <div className="space-y-3">
                  <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.02]">
                    {PERSONAL_DATA.name}
                  </h1>
                  <p className="text-sm sm:text-lg font-mono text-zinc-300">
                    Full-Stack &amp; Mobile Developer <span className="text-zinc-500">•</span> LLM &amp; Systems Researcher
                  </p>
                  <p className="text-sm sm:text-base text-zinc-300/90 leading-relaxed max-w-2xl font-normal pt-1">
                    Modern mobil uygulamalar (Flutter, React Native), yüksek performanslı asenkron arka uç servisleri (Python, FastAPI, Rust) ve CachyOS Linux iş istasyonu üzerinde RAG tabanlı kurumsal karar destek mimarileri geliştiriyorum.
                  </p>
                </div>

                {/* Profile Photo Slot (Apple Liquid Glass Framed Avatar) */}
                <div className="relative group shrink-0">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-[#171920]/80 backdrop-blur-xl relative">
                    <img
                      src="/avatar.jpg"
                      alt={PERSONAL_DATA.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/avatar.svg";
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions & Socials */}
            <div className="pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                {/* Apple Liquid White Primary Button */}
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-white hover:bg-zinc-100 text-black text-sm sm:text-base font-semibold tracking-tight transition-all shadow-lg shadow-white/10 active:scale-[0.98] border border-white/40 cursor-pointer"
                >
                  <FileDown className="w-4 h-4 text-zinc-800" />
                  <span>Özgeçmişi İncele (CV)</span>
                </button>

                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl liquid-pill text-zinc-200 text-sm sm:text-base font-medium transition-all"
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
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#24292F]/90 hover:bg-[#1a1f24] text-white border border-white/20 font-sans font-semibold text-sm transition-all shadow-sm active:scale-95"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href={PERSONAL_DATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#0A66C2]/90 hover:bg-[#004182] text-white border border-[#0A66C2]/60 font-sans font-semibold text-sm transition-all shadow-md shadow-[#0A66C2]/20 active:scale-95"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 font-sans font-semibold text-sm transition-all active:scale-95 cursor-pointer"
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
          </div>

          {/* Workstation & System Card (4 cols) */}
          <div className="lg:col-span-4 relative group/workstation">
            <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-violet-500/20 via-cyan-500/15 to-indigo-500/20 blur-2xl opacity-65 transition-opacity duration-500 group-hover/workstation:opacity-95 -z-10" />
            <div className="liquid-glass rounded-3xl p-7 sm:p-8 flex flex-col justify-between space-y-6 h-full">
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
        </div>

        {/* Big Bold Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          {PERSONAL_DATA.stats.map((stat, idx) => (
            <div
              key={idx}
              className="liquid-glass rounded-3xl p-6 sm:p-7 space-y-2 hover:-translate-y-1 transition-all"
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
