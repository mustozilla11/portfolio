"use client";

import React from "react";
import { EDUCATION_DATA, CERTIFICATIONS_DATA } from "@/data/portfolioData";
import { Calendar, MapPin } from "lucide-react";

export default function ExperienceEducationBento() {
  return (
    <section id="education" className="py-14 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="border-b border-[#1C1C21] pb-5 space-y-1.5">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block">
            03 / Eğitim & Deneyim
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F5F7]">
            Akademik Geçmiş & Araştırma Programları
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Column 1: Academic Degrees (Editorial List) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-wider pb-2 border-b border-[#1C1C21]">
              Akademik Dereceler
            </h3>

            <div className="divide-y divide-[#1C1C21]">
              {EDUCATION_DATA.map((edu) => (
                <div key={edu.id} className="py-5 first:pt-0 last:pb-0 space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-base font-semibold text-[#F5F5F7]">
                        {edu.field}
                      </h4>
                      <p className="text-xs font-mono text-zinc-400">
                        {edu.institution} <span className="text-zinc-600">—</span> {edu.degree}
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-xs font-mono text-zinc-400 block">
                        {edu.period}
                      </span>
                      <span className="text-[11px] font-mono text-zinc-500">
                        {edu.statusBadge}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                    {edu.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {edu.topics.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.02] border border-[#1C1C21] text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Certifications & Programs (Editorial List) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-wider pb-2 border-b border-[#1C1C21]">
              Araştırma & Yetkinlik Programları
            </h3>

            <div className="divide-y divide-[#1C1C21]">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div key={cert.id} className="py-5 first:pt-0 last:pb-0 space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-base font-semibold text-[#F5F5F7]">
                        {cert.title}
                      </h4>
                      <p className="text-xs font-mono text-zinc-400">
                        {cert.organization} <span className="text-zinc-600">—</span> {cert.role}
                      </p>
                    </div>

                    <span className="text-xs font-mono text-zinc-500 shrink-0">
                      {cert.period}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cert.skills.map((s, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.02] border border-[#1C1C21] text-zinc-400"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
