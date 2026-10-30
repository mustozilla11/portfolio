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
    <section className="pt-28 pb-10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Main Hero Card (8 cols) */}
          <div className="lg:col-span-8 rounded-2xl p-6 sm:p-8 bg-[#0A0A0C] border border-[#1C1C21] hover:border-zinc-800 transition-colors flex flex-col justify-between">
            <div className="space-y-6">
              {/* Status Indicator */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.03] border border-[#1C1C21] text-xs font-mono text-[#86868B]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[#F5F5F7]">
                  {PERSONAL_DATA.statusBadge.text}
                </span>
              </div>

              {/* Identity & Main Title */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F7]">
                  {PERSONAL_DATA.name}
                </h1>
                <p className="text-sm sm:text-base font-mono text-[#86868B]">
                  {PERSONAL_DATA.title} <span className="text-zinc-600">—</span> {PERSONAL_DATA.subTitle}
                </p>
              </div>

              {/* Bio / Summary (First person, real tone) */}
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl font-sans">
                {PERSONAL_DATA.bio}
              </p>
            </div>

            {/* Quick Actions & Socials */}
            <div className="pt-6 mt-6 border-t border-[#1C1C21] flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2.5">
                {/* Clean Apple/Linear High-Contrast Primary Button */}
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F5F5F7] hover:bg-white text-black text-xs sm:text-sm font-medium tracking-tight transition-all active:scale-[0.98]"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>Özgeçmiş (CV)</span>
                </button>

                <a
                  href="#projects"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] border border-[#1C1C21] hover:border-zinc-800 text-zinc-300 text-xs sm:text-sm font-medium transition-colors"
                >
                  <span>Projeler</span>
                  <ArrowDown className="w-3 h-3 text-zinc-500" />
                </a>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-1.5">
                <a
                  href={PERSONAL_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] border border-[#1C1C21] hover:border-zinc-800 text-zinc-400 hover:text-[#F5F5F7] transition-colors"
                  title="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_DATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] border border-[#1C1C21] hover:border-zinc-800 text-zinc-400 hover:text-[#F5F5F7] transition-colors"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] border border-[#1C1C21] hover:border-zinc-800 text-zinc-400 hover:text-[#F5F5F7] text-xs font-mono transition-colors"
                  title="E-postayı Kopyala"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Kopyalandı</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-3.5 h-3.5" />
                      <span>E-posta</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* CachyOS Workstation Card (4 cols) */}
          <div className="lg:col-span-4 rounded-2xl p-6 bg-[#0A0A0C] border border-[#1C1C21] hover:border-zinc-800 transition-colors flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#1C1C21]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-500">
                  <TerminalIcon className="w-3.5 h-3.5" />
                  <span>cachyos: kitty</span>
                </div>
              </div>

              {/* Minimal Terminal Specs */}
              <div className="font-mono text-xs space-y-2">
                <div className="text-zinc-500 text-[11px]">
                  <span className="text-zinc-400">$</span> uname -srmo
                </div>
                <div className="text-zinc-300 text-[11px] pb-1">
                  Linux 6.x x86_64-v3 GNU/Linux
                </div>

                <div className="p-3 rounded-lg bg-black/40 border border-[#1C1C21] space-y-1.5 text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">OS:</span>
                    <span className="text-zinc-200">CachyOS Linux</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">WM:</span>
                    <span className="text-zinc-200">Hyprland (Wayland)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Shell:</span>
                    <span className="text-zinc-300">fish + starship</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Ana Odak:</span>
                    <span className="text-zinc-200">Flutter • FastAPI • Rust</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Araştırma:</span>
                    <span className="text-zinc-200">SAYZEK LLM & RAG</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 mt-4 border-t border-[#1C1C21] flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span>x86-64-v3 BORE kernel</span>
              <span className="text-zinc-400">Adana / Muğla</span>
            </div>
          </div>
        </div>

        {/* Quiet Key Figures Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
          {PERSONAL_DATA.stats.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-xl p-4 bg-[#0A0A0C] border border-[#1C1C21] hover:border-zinc-800 transition-colors"
            >
              <div className="text-xs font-mono text-zinc-500 mb-1">
                {stat.label}
              </div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-[#F5F5F7] tracking-tight">
                {stat.value}
              </div>
              <div className="text-[11px] text-zinc-500 font-mono mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
