"use client";

import React, { useEffect } from "react";
import {
  PERSONAL_DATA,
  EDUCATION_DATA,
  PROJECTS_DATA,
  CERTIFICATIONS_DATA,
  TECH_STACK_CATEGORIES,
} from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import {
  X,
  Printer,
  Download,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle,
  FileText,
} from "lucide-react";
import confetti from "canvas-confetti";

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
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
    });
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      {/* Modal Dialog Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-[#0A0A0C] border border-[#1C1C21] shadow-2xl overflow-hidden text-[#F5F5F7]">
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1C1C21] bg-black/40 backdrop-blur-sm print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-mono font-semibold text-[#F5F5F7]">
              Mustafa Özlü — Profesyonel Özgeçmiş (CV)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/mustafa-ozlu-cv.pdf"
              download="Mustafa_Ozlu_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-[#1C1C21] hover:border-zinc-700 text-[#F5F5F7] text-xs font-mono font-medium transition-colors"
              title="Doğrudan PDF İndir"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>İndir</span>
            </a>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-medium transition-colors shadow-sm"
              title="Yazdır veya PDF olarak kaydet"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Yazdır / PDF Kaydet</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-[#86868B] hover:text-[#F5F5F7] transition-colors"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable CV Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 font-sans print:p-0 print:bg-white print:text-black">
          {/* Header */}
          <div className="border-b border-[#1C1C21] pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-[#F5F5F7]">
                  {PERSONAL_DATA.name}
                </h1>
                <p className="text-sm font-mono text-blue-400 font-medium">
                  {PERSONAL_DATA.title}
                </p>
                <p className="text-xs font-mono text-[#86868B]">
                  {PERSONAL_DATA.subTitle}
                </p>
              </div>

              <div className="flex flex-col sm:items-end text-xs font-mono text-[#86868B] space-y-1">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-blue-400" />
                  {PERSONAL_DATA.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3 h-3 text-emerald-400" />
                  {PERSONAL_DATA.email}
                </span>
                <span className="text-zinc-500">
                  github.com/mustozilla11 • linkedin.com/in/mustafaozlu
                </span>
              </div>
            </div>

            {/* Profile Summary */}
            <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed pt-2">
              {PERSONAL_DATA.bio}
            </p>
          </div>

          {/* Education Section */}
          <div className="space-y-3">
            <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
              <span>01.</span> Akademik Eğitim
            </h2>
            <div className="space-y-4">
              {EDUCATION_DATA.map((edu) => (
                <div
                  key={edu.id}
                  className="p-4 rounded-2xl bg-black/40 border border-[#1C1C21] space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-[#F5F5F7]">
                      {edu.institution} — {edu.field}
                    </h3>
                    <span className="text-xs font-mono text-blue-400 font-semibold">
                      {edu.period} ({edu.statusBadge})
                    </span>
                  </div>
                  <p className="text-xs text-[#86868B]">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects Section */}
          <div className="space-y-3">
            <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <span>02.</span> Öne Çıkan Projeler & Teknik Mimari
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PROJECTS_DATA.map((proj) => (
                <div
                  key={proj.id}
                  className="p-4 rounded-2xl bg-black/40 border border-[#1C1C21] space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-[#F5F5F7]">
                      {proj.title}
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400">
                      {proj.status}
                    </span>
                  </div>
                  <p className="text-xs text-[#86868B] leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {proj.stack.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.03] text-zinc-300 border border-[#1C1C21]"
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
            <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-purple-400 flex items-center gap-2">
              <span>03.</span> Teknik Yetkinlikler
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {TECH_STACK_CATEGORIES.map((cat) => (
                <div
                  key={cat.id}
                  className="p-3.5 rounded-2xl bg-black/40 border border-[#1C1C21] space-y-1.5"
                >
                  <div className="font-bold text-[#F5F5F7] font-mono">
                    {cat.title}
                  </div>
                  <div className="text-xs text-[#86868B]">
                    {cat.skills.map((s) => s.name).join(", ")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Programs */}
          <div className="space-y-3">
            <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <span>04.</span> Sertifikalar & Başarılar
            </h2>
            <div className="space-y-2 text-xs">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div
                  key={cert.id}
                  className="p-3 rounded-xl bg-black/40 border border-[#1C1C21] flex items-center justify-between"
                >
                  <div>
                    <span className="font-bold text-[#F5F5F7]">
                      {cert.title}
                    </span>{" "}
                    <span className="text-[#86868B]">
                      — {cert.role} ({cert.organization})
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500 whitespace-nowrap ml-2">
                    {cert.period}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Special Discipline */}
          <div className="p-4 rounded-2xl bg-blue-950/20 border border-blue-900/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
            <div>
              <span className="text-[#F5F5F7] font-bold">Özel Yetkinlikler:</span>{" "}
              <span className="text-zinc-400">
                10 Parmak Klavye (115+ WPM Adli Standart) • CachyOS Linux (x86_64-v3) • Diksiyon & Hitabet • İngilizce (B2/C1)
              </span>
            </div>
            <span className="text-blue-400 whitespace-nowrap">
              Deep Work & High Performance
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
