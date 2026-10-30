"use client";

import React, { useState } from "react";
import { PERSONAL_DATA } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon, TerminalIcon } from "@/components/Icons";
import {
  Mail,
  FileDown,
  Check,
  ArrowDown,
  ArrowUpRight,
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
    <section className="pt-28 sm:pt-32 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {/* Main Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Main Hero Card (8 cols) - Large & Authoritative */}
          <div className="lg:col-span-8 apple-card rounded-2xl p-7 sm:p-10 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="font-medium tracking-tight">
                  {PERSONAL_DATA.statusBadge.text}
                </span>
              </div>

              {/* Bold Headline Typography */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                  {PERSONAL_DATA.name}
                </h1>
                <p className="text-lg sm:text-2xl font-medium text-zinc-300 tracking-tight leading-snug">
                  Full-Stack & Mobile Developer{" "}
                  <span className="text-zinc-500 block sm:inline font-normal text-base sm:text-xl">
                    / AI & LLM Araştırmacısı
                  </span>
                </p>
              </div>

              {/* Bio / Lead Paragraph - Bold, clear, senior tone */}
              <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl font-normal">
                {PERSONAL_DATA.bio}
              </p>
            </div>

            {/* Quick Actions & Socials */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                {/* Apple Pro White Primary Button */}
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-white hover:bg-zinc-100 text-black text-sm font-semibold tracking-tight transition-all shadow-md active:scale-[0.98]"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Özgeçmişi İncele (CV)</span>
                </button>

                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.15] text-zinc-200 text-sm font-medium transition-colors"
                >
                  <span>Projeler</span>
                  <ArrowDown className="w-3.5 h-3.5 text-zinc-400" />
                </a>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 text-zinc-300 hover:text-white transition-all"
                  title="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_DATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 text-zinc-300 hover:text-white transition-all"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 text-zinc-300 hover:text-white text-xs font-mono transition-all"
                  title="E-postayı Kopyala"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-sans font-medium">Kopyalandı</span>
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

          {/* Workstation & System Card (4 cols) */}
          <div className="lg:col-span-4 apple-card rounded-2xl p-7 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                  <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                  <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                  <TerminalIcon className="w-3.5 h-3.5" />
                  <span>cachyos-hyprland</span>
                </div>
              </div>

              {/* Terminal Specs - Crisp & High Contrast */}
              <div className="font-mono text-xs space-y-3">
                <div className="text-zinc-400 text-xs flex items-center gap-2">
                  <span className="text-emerald-400">$</span>
                  <span className="text-zinc-200">fastfetch --profile dev</span>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] space-y-2 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-500">OS:</span>
                    <span className="text-zinc-100 font-medium">CachyOS Linux (x86_64-v3)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-500">Kernel:</span>
                    <span className="text-zinc-200">Linux BORE Optimized</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-500">WM / Shell:</span>
                    <span className="text-zinc-200">Hyprland / Fish</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-500">Stack:</span>
                    <span className="text-zinc-100 font-semibold">Flutter • FastAPI • Rust</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-500">Tez / R&D:</span>
                    <span className="text-zinc-200">SAYZEK LLM & RAG</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>Muğla & Adana</span>
              <span className="text-zinc-300 font-medium">Senior MIS Student</span>
            </div>
          </div>
        </div>

        {/* Big Bold Stats Row (Authoritative Metrics) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          {PERSONAL_DATA.stats.map((stat, idx) => (
            <div
              key={idx}
              className="apple-card rounded-2xl p-5 sm:p-6 space-y-1.5"
            >
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-mono text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs text-zinc-400 font-sans">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
