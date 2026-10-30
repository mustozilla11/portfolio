"use client";

import React, { useEffect } from "react";
import {
  PERSONAL_DATA,
  EDUCATION_DATA,
  PROJECTS_DATA,
  CERTIFICATIONS_DATA,
  TECH_STACK_CATEGORIES,
} from "@/data/portfolioData";
import {
  X,
  Printer,
  Download,
  Mail,
  MapPin,
  FileText,
} from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      {/* Modal Dialog Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-xl bg-[#0A0A0C] border border-[#1C1C21] shadow-2xl overflow-hidden text-[#F5F5F7]">
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1C1C21] bg-black/60 print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-zinc-400" />
            <span className="text-xs font-mono font-medium text-zinc-200">
              Mustafa Özlü — Özgeçmiş
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/mustafa-ozlu-cv.pdf"
              download="Mustafa_Ozlu_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-[#1C1C21] hover:border-zinc-700 text-zinc-300 text-xs font-mono transition-colors"
              title="PDF İndir"
            >
              <Download className="w-3.5 h-3.5" />
              <span>İndir</span>
            </a>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-black hover:bg-zinc-200 text-xs font-mono font-medium transition-colors"
              title="Yazdır"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Yazdır / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-colors ml-1"
              aria-label="Kapat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable CV Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-7 font-sans print:p-0 print:bg-white print:text-black">
          {/* Header */}
          <div className="border-b border-[#1C1C21] pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F5F7]">
                  {PERSONAL_DATA.name}
                </h1>
                <p className="text-xs font-mono text-zinc-400 mt-0.5">
                  {PERSONAL_DATA.title} — {PERSONAL_DATA.subTitle}
                </p>
              </div>

              <div className="flex flex-col sm:items-end text-xs font-mono text-zinc-400 space-y-0.5">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-zinc-500" />
                  {PERSONAL_DATA.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3 h-3 text-zinc-500" />
                  {PERSONAL_DATA.email}
                </span>
                <span className="text-zinc-500 text-[11px]">
                  github.com/mustozilla11
                </span>
              </div>
            </div>

            {/* Profile Summary */}
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed pt-1">
              {PERSONAL_DATA.bio}
            </p>
          </div>

          {/* Education Section */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300">
              01. Akademik Eğitim
            </h2>
            <div className="space-y-3">
              {EDUCATION_DATA.map((edu) => (
                <div
                  key={edu.id}
                  className="p-3.5 rounded-lg bg-black/40 border border-[#1C1C21] space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs sm:text-sm font-semibold text-[#F5F5F7]">
                      {edu.institution} — {edu.field}
                    </h3>
                    <span className="text-xs font-mono text-zinc-400">
                      {edu.period} ({edu.statusBadge})
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects Section */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300">
              02. Seçilmiş Projeler & Mimari
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {PROJECTS_DATA.map((proj) => (
                <div
                  key={proj.id}
                  className="p-3.5 rounded-lg bg-black/40 border border-[#1C1C21] space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs sm:text-sm font-semibold text-[#F5F5F7]">
                      {proj.title}
                    </h3>
                    <span className="text-[10px] font-mono text-zinc-500">
                      {proj.status}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {proj.stack.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.02] text-zinc-400 border border-[#1C1C21]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Categorized */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300">
              03. Teknik Yetkinlikler
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {TECH_STACK_CATEGORIES.map((cat) => (
                <div
                  key={cat.id}
                  className="p-3 rounded-lg bg-black/40 border border-[#1C1C21] space-y-1"
                >
                  <div className="font-semibold text-zinc-200 font-mono text-xs">
                    {cat.title}
                  </div>
                  <div className="text-xs text-zinc-400">
                    {cat.skills.join(", ")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Programs */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300">
              04. Araştırma Programları & Sertifikalar
            </h2>
            <div className="space-y-2 text-xs">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div
                  key={cert.id}
                  className="p-3 rounded-lg bg-black/40 border border-[#1C1C21] flex items-center justify-between"
                >
                  <div>
                    <span className="font-semibold text-[#F5F5F7]">
                      {cert.title}
                    </span>{" "}
                    <span className="text-zinc-400">
                      — {cert.role} ({cert.organization})
                    </span>
                  </div>
                  <span className="text-xs font-mono text-zinc-500 shrink-0 ml-2">
                    {cert.period}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Extra Notes */}
          <div className="p-3.5 rounded-lg bg-white/[0.02] border border-[#1C1C21] text-xs font-mono text-zinc-400">
            <span className="text-zinc-200 font-semibold">Ortam & Beceriler:</span>{" "}
            CachyOS Linux x86-64-v3, Hyprland, Kitty, Neovim • 115+ WPM 10 Parmak • İngilizce B2/C1
          </div>
        </div>
      </div>
    </div>
  );
}
