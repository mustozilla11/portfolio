"use client";

import React, { useState } from "react";
import { CERTIFICATIONS_DATA, CertificationItem } from "@/data/portfolioData";
import {
  Award,
  ShieldCheck,
  Cpu,
  Smartphone,
  Server,
  CheckCircle2,
  FileCheck,
  Sparkles,
} from "lucide-react";

export default function CertificationsSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const getCertIcon = (type?: string) => {
    switch (type) {
      case "ai":
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case "security":
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case "mobile":
        return <Smartphone className="w-5 h-5 text-sky-400" />;
      case "backend":
        return <Server className="w-5 h-5 text-amber-400" />;
      default:
        return <Award className="w-5 h-5 text-zinc-200" />;
    }
  };

  const filters = [
    { key: "all", label: "Tüm Sertifikalar" },
    { key: "ai", label: "Yapay Zeka & LLM" },
    { key: "security", label: "Siber Güvenlik" },
    { key: "mobile", label: "Mobil Mimari" },
    { key: "backend", label: "Backend & Sistem" },
  ];

  const filteredCerts =
    selectedFilter === "all"
      ? CERTIFICATIONS_DATA
      : CERTIFICATIONS_DATA.filter((c) => c.type === selectedFilter);

  return (
    <section id="certifications" className="py-20 scroll-mt-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Clean Human Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass-subtle text-xs font-mono text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Akreditasyonlar & Başarılar
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Sertifikalar & Yetkinlik Belgeleri
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 max-w-3xl leading-relaxed">
              Yapay zeka, siber güvenlik, cross-platform mobil mimari ve yüksek performanslı backend sistemlerinde tamamlanmış resmi programlar.
            </p>
          </div>

          {/* Quick Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl liquid-glass-subtle">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setSelectedFilter(f.key)}
                className={`liquid-pill text-xs font-medium ${
                  selectedFilter === f.key
                    ? "liquid-pill-active"
                    : "text-zinc-300 hover:text-white"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Highlight Banner */}
        <div className="liquid-glass rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl liquid-glass-subtle flex items-center justify-center text-white shrink-0">
              <Award className="w-7 h-7 text-indigo-400" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Akredite Teknik Mühendislik Portföyü
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 mt-1">
                SAYZEK Tez Liderliği, T.C. Sanayi ve Teknoloji Bakanlığı Siber Vatan Bursu ve YÖK Dijital Dönüşüm Programı dahil resmi akreditasyonlar.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-200 liquid-glass-subtle px-4 py-2.5 rounded-2xl shrink-0">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>5 / 5 Tamamlandı</span>
          </div>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="liquid-glass rounded-3xl p-7 sm:p-8 space-y-6 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Top Badge & Date */}
                <div className="flex items-start justify-between gap-3">
                  <div className="w-12 h-12 rounded-2xl liquid-glass-subtle flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {getCertIcon(cert.type)}
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono text-zinc-300 font-semibold block">
                      {cert.period}
                    </span>
                    {cert.badge && (
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full liquid-glass-subtle text-zinc-300">
                        {cert.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Title & Organization */}
                <div className="space-y-1.5">
                  <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                    {cert.title}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-zinc-300">
                    <span>{cert.organization}</span>
                  </div>
                  <div className="text-xs font-mono text-emerald-400/90 pt-0.5">
                    Rol / Kapsam: <span className="text-white font-medium">{cert.role}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                  {cert.description}
                </p>
              </div>

              {/* Bottom: Skills & Credential Id */}
              <div className="pt-4 border-t border-white/[0.08] space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((s, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] sm:text-xs font-mono px-3 py-1 rounded-xl liquid-glass-subtle text-zinc-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {cert.credentialId && (
                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 pt-1">
                    <span className="flex items-center gap-1.5 text-zinc-400">
                      <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
                      ID: {cert.credentialId}
                    </span>
                    <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors">
                      Doğrulanmış
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
