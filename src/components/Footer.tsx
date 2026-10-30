"use client";

import React, { useState, useEffect } from "react";
import { PERSONAL_DATA } from "@/data/portfolioData";
import {
  Mail,
  ArrowUp,
  Clock,
  Sparkles,
  Terminal,
} from "lucide-react";

interface FooterProps {
  onOpenResume: () => void;
}

export default function Footer({ onOpenResume }: FooterProps) {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("tr-TR", {
          timeZone: "Europe/Istanbul",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-20 border-t border-[#1C1C21] bg-black text-[#86868B] relative overflow-hidden">
      {/* Pre-footer Collaboration Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-[#0A0A0C] to-black border border-[#1C1C21] relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>İş Birliği & R&D</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F5F7]">
              Birlikte Geleceği İnşa Edelim
            </h3>
            <p className="text-sm text-[#86868B] leading-relaxed">
              Mobil uygulamalar, LLM tabanlı yapay zeka sistemleri veya yüksek performanslı backend mimarileri üzerine yeni bir proje veya araştırma için her zaman iletişime açığım.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${PERSONAL_DATA.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-lg shadow-blue-600/20 active:scale-95"
            >
              <Mail className="w-4 h-4" />
              <span>E-posta Gönder</span>
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-[#1C1C21] hover:border-zinc-700 text-[#F5F5F7] text-xs sm:text-sm font-medium transition-all"
            >
              <span>CV Görüntüle</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Bottom Footer Bar */}
      <div className="border-t border-[#1C1C21] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="text-[#F5F5F7] font-semibold">
              {PERSONAL_DATA.name}
            </span>
            <span>•</span>
            <span className="text-zinc-500">
              Muğla / Adana, TR
            </span>
            <span>•</span>
            <div className="flex items-center gap-1.5 text-zinc-400">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>{time || "22:56:00"} (TSİ)</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F5F5F7] transition-colors"
            >
              GitHub
            </a>
            <a
              href={PERSONAL_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F5F5F7] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${PERSONAL_DATA.email}`}
              className="hover:text-[#F5F5F7] transition-colors"
            >
              E-posta
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-[#1C1C21] text-[#86868B] hover:text-[#F5F5F7] transition-all ml-2"
              aria-label="Yukarı Çık"
              title="Başa Dön"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="text-center text-[11px] font-mono text-zinc-600 mt-4">
          Strictly Dark AMOLED (#000000) • Next.js & Tailwind CSS • Linear/Apple Bento Grid
        </div>
      </div>
    </footer>
  );
}
