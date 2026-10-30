"use client";

import React from "react";
import { PERSONAL_DATA } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import {
  Mail,
  ArrowUp,
} from "lucide-react";

interface FooterProps {
  onOpenResume: () => void;
}

export default function Footer({ onOpenResume }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-20 border-t border-white/[0.08] bg-[#08090C] text-zinc-400">
      {/* Contact Banner */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="apple-card rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Birlikte Çalışalım
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Mobil uygulamalar, LLM & RAG mimarileri veya açık kaynak sistem projeleri üzerine görüşmek için her zaman doğrudan e-posta gönderebilirsiniz.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${PERSONAL_DATA.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-zinc-100 text-black text-sm sm:text-base font-semibold tracking-tight transition-all shadow-md active:scale-[0.98]"
            >
              <Mail className="w-4 h-4" />
              <span>E-posta Gönder</span>
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 text-zinc-200 text-sm sm:text-base font-medium transition-all"
            >
              <span>Özgeçmiş (CV)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Bottom Footer Bar */}
      <div className="border-t border-white/[0.08] py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-sm font-mono">
          <div className="flex items-center gap-3">
            <span className="text-white font-bold text-base">
              {PERSONAL_DATA.name}
            </span>
            <span className="text-zinc-500">•</span>
            <span className="text-zinc-400">
              Full-Stack & Systems Developer
            </span>
          </div>

          {/* Prominent & Branded Social Channels */}
          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={PERSONAL_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#24292F] hover:bg-[#1a1f24] text-white border border-white/10 font-sans font-medium text-xs sm:text-sm transition-all shadow-sm active:scale-95"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href={PERSONAL_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white border border-[#0A66C2]/40 font-sans font-medium text-xs sm:text-sm transition-all shadow-md shadow-[#0A66C2]/20 active:scale-95"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${PERSONAL_DATA.email}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 font-sans font-medium text-xs sm:text-sm transition-all active:scale-95"
            >
              <Mail className="w-4 h-4" />
              <span>E-posta</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-zinc-300 hover:text-white transition-colors ml-2"
              aria-label="Yukarı Çık"
              title="Başa Dön"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
