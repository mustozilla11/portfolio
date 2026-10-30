"use client";

import React, { useState } from "react";
import { PERSONAL_DATA } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon, TerminalIcon } from "@/components/Icons";
import {
  Mail,
  FileDown,
  Check,
  Copy,
  Sparkles,
  ArrowDown,
  Code2,
  Cpu,
  Layers,
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
    <section className="pt-28 pb-12 relative overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-emerald-600/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Main Hero Card (8 cols) */}
          <div className="lg:col-span-8 rounded-3xl p-6 sm:p-8 md:p-10 bg-[#0A0A0C] border border-[#1C1C21] hover:border-zinc-700 transition-all duration-300 relative flex flex-col justify-between group">
            <div className="space-y-6">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-[#1C1C21] text-xs font-mono text-[#86868B] backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-[#F5F5F7] font-medium tracking-wide">
                  {PERSONAL_DATA.statusBadge.text}
                </span>
              </div>

              {/* Identity & Main Title */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F5F7]">
                    {PERSONAL_DATA.name}
                  </h1>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    v2026.1
                  </span>
                </div>
                <p className="text-base sm:text-lg font-medium text-blue-400 font-mono tracking-tight">
                  {PERSONAL_DATA.title}
                </p>
                <p className="text-sm text-[#86868B] font-mono">
                  {PERSONAL_DATA.subTitle}
                </p>
              </div>

              {/* Bio / Summary */}
              <p className="text-sm sm:text-base text-[#86868B] leading-relaxed max-w-2xl">
                {PERSONAL_DATA.bio}
              </p>
            </div>

            {/* Quick Actions & Socials */}
            <div className="pt-8 mt-6 border-t border-[#1C1C21] flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                {/* CV Button */}
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 shadow-lg shadow-blue-600/20 active:scale-95 group/btn"
                >
                  <FileDown className="w-4 h-4 transition-transform group-hover/btn:-translate-y-0.5" />
                  <span>CV İndir / İncele (PDF)</span>
                </button>

                {/* Explore Projects Button */}
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-[#1C1C21] hover:border-zinc-700 text-[#F5F5F7] text-xs sm:text-sm font-medium transition-all duration-200"
                >
                  <span>Projeler</span>
                  <ArrowDown className="w-3.5 h-3.5 text-[#86868B]" />
                </a>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-[#1C1C21] hover:border-zinc-700 text-[#86868B] hover:text-[#F5F5F7] transition-all"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_DATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-[#1C1C21] hover:border-zinc-700 text-[#86868B] hover:text-[#F5F5F7] transition-all"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                {/* Copy Email Button */}
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-[#1C1C21] hover:border-zinc-700 text-[#86868B] hover:text-[#F5F5F7] text-xs font-mono transition-all"
                  title="E-postayı Kopyala"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Kopyalandı!</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">E-posta</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Interactive CachyOS & System Side Card (4 cols) */}
          <div className="lg:col-span-4 rounded-3xl p-6 bg-[#0A0A0C] border border-[#1C1C21] hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between">
            {/* Terminal Header */}
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#1C1C21]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#86868B]">
                  <TerminalIcon className="w-3.5 h-3.5 text-blue-400" />
                  <span>kitty@cachyos</span>
                </div>
              </div>

              {/* Terminal Session Content */}
              <div className="font-mono text-xs space-y-2 text-[#86868B]">
                <div className="text-[#F5F5F7] flex items-center gap-1.5">
                  <span className="text-emerald-400">mustafa@cachyos</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-zinc-500">$</span>
                  <span className="text-zinc-300">neofetch --arch-cachy</span>
                </div>

                <div className="p-3 rounded-xl bg-black/60 border border-[#1C1C21] space-y-1.5 text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">OS:</span>
                    <span className="text-[#F5F5F7] font-medium">CachyOS Linux (x86_64-v3)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">WM:</span>
                    <span className="text-blue-400">Hyprland (Wayland)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Shell:</span>
                    <span className="text-zinc-300">fish + starship</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Core Stack:</span>
                    <span className="text-emerald-400">Flutter • FastAPI • Rust</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Focus:</span>
                    <span className="text-purple-400">LLM R&D & Systems</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Typing Speed:</span>
                    <span className="text-amber-400">115+ WPM (Adli Standart)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Status / Micro-Badge */}
            <div className="pt-4 mt-4 border-t border-[#1C1C21] flex items-center justify-between text-[11px] font-mono">
              <span className="text-zinc-500">Uptime: 24/7 Deep Work</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                ONLINE
              </span>
            </div>
          </div>
        </div>

        {/* Quick Stats Bento Row (4 Cards) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {PERSONAL_DATA.stats.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-4 sm:p-5 bg-[#0A0A0C] border border-[#1C1C21] hover:border-zinc-700 transition-all duration-200 group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-[#86868B] group-hover:text-blue-400 transition-colors">
                  {stat.label}
                </span>
                {idx === 0 && <Cpu className="w-3.5 h-3.5 text-blue-400" />}
                {idx === 1 && <Layers className="w-3.5 h-3.5 text-purple-400" />}
                {idx === 2 && <Code2 className="w-3.5 h-3.5 text-emerald-400" />}
                {idx === 3 && <Sparkles className="w-3.5 h-3.5 text-amber-400" />}
              </div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-[#F5F5F7] tracking-tight">
                {stat.value}
              </div>
              <div className="text-[11px] text-[#86868B] mt-1 font-mono">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
