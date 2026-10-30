"use client";

import React, { useState, useEffect } from "react";
import { PERSONAL_DATA } from "@/data/portfolioData";
import {
  Mail,
  ArrowUp,
  Clock,
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
    <footer className="mt-16 border-t border-[#1C1C21] bg-black text-zinc-500">
      {/* Contact Banner */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-xl p-6 sm:p-8 bg-[#0A0A0C] border border-[#1C1C21] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F5F5F7]">
              İletişime Geçin
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Mobil uygulamalar, LLM/RAG tabanlı sistemler veya açık kaynak projeler üzerine görüşmek için her zaman e-posta gönderebilirsiniz.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={`mailto:${PERSONAL_DATA.email}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F5F5F7] hover:bg-white text-black text-xs sm:text-sm font-medium tracking-tight transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>E-posta Gönder</span>
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] border border-[#1C1C21] hover:border-zinc-700 text-zinc-300 text-xs sm:text-sm font-medium transition-colors"
            >
              <span>Özgeçmiş</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Bottom Footer Bar */}
      <div className="border-t border-[#1C1C21] py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="text-zinc-300">
              {PERSONAL_DATA.name}
            </span>
            <span>•</span>
            <span className="text-zinc-500">
              Muğla / Adana
            </span>
            <span>•</span>
            <div className="flex items-center gap-1.5 text-zinc-400">
              <Clock className="w-3.5 h-3.5 text-zinc-500" />
              <span>{time || "23:30:00"} TSİ</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              GitHub
            </a>
            <a
              href={PERSONAL_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${PERSONAL_DATA.email}`}
              className="hover:text-zinc-300 transition-colors"
            >
              E-posta
            </a>

            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] border border-[#1C1C21] text-zinc-400 hover:text-white transition-colors"
              aria-label="Yukarı Çık"
              title="Başa Dön"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
