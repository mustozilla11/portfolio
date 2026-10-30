"use client";

import React from "react";
import { EDUCATION_DATA, CERTIFICATIONS_DATA } from "@/data/portfolioData";

export default function ExperienceEducationBento() {
  return (
    <section id="education" className="py-16 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="border-b border-white/[0.08] pb-6 space-y-2">
          <span className="text-xs sm:text-sm font-mono text-zinc-400 uppercase tracking-widest block font-medium">
            03 / Eğitim & Deneyim
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Akademik Yolculuk & Araştırmalar
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Column 1: Academic Degrees */}
          <div className="lg:col-span-6 apple-card rounded-2xl p-8 sm:p-9 space-y-6">
            <h3 className="text-sm sm:text-base font-mono text-zinc-200 uppercase tracking-wider font-semibold pb-3.5 border-b border-white/[0.08]">
              Akademik Dereceler
            </h3>

            <div className="divide-y divide-white/[0.08] space-y-5">
              {EDUCATION_DATA.map((edu) => (
                <div key={edu.id} className="pt-5 first:pt-0 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-bold text-white tracking-tight">
                        {edu.field}
                      </h4>
                      <p className="text-sm font-mono text-zinc-300">
                        {edu.institution} <span className="text-zinc-500">—</span> {edu.degree}
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-sm font-mono text-zinc-200 font-medium block">
                        {edu.period}
                      </span>
                      <span className="text-xs font-mono text-zinc-400">
                        {edu.statusBadge}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                    {edu.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {edu.topics.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-xs sm:text-sm font-mono px-3 py-1 rounded-md bg-black/40 border border-white/[0.08] text-zinc-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Certifications & Programs */}
          <div className="lg:col-span-6 apple-card rounded-2xl p-8 sm:p-9 space-y-6">
            <h3 className="text-sm sm:text-base font-mono text-zinc-200 uppercase tracking-wider font-semibold pb-3.5 border-b border-white/[0.08]">
              Araştırma & Yetkinlik Programları
            </h3>

            <div className="divide-y divide-white/[0.08] space-y-5">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div key={cert.id} className="pt-5 first:pt-0 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-bold text-white tracking-tight">
                        {cert.title}
                      </h4>
                      <p className="text-sm font-mono text-zinc-300">
                        {cert.organization} <span className="text-zinc-500">—</span> {cert.role}
                      </p>
                    </div>

                    <span className="text-sm font-mono text-zinc-400 shrink-0">
                      {cert.period}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {cert.skills.map((s, idx) => (
                      <span
                        key={idx}
                        className="text-xs sm:text-sm font-mono px-3 py-1 rounded-md bg-black/40 border border-white/[0.08] text-zinc-200"
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
