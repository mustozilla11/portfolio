"use client";

import React from "react";
import { EDUCATION_DATA } from "@/data/portfolioData";
import { GraduationCap, Award, CheckCircle2 } from "lucide-react";

export default function ExperienceEducationBento() {
  return (
    <section id="education" className="py-16 scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="border-b border-white/[0.08] pb-6 space-y-2">
          <span className="text-xs sm:text-sm font-mono text-zinc-400 uppercase tracking-widest block font-medium">
            03 / Akademik Eğitim
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Akademik Altyapı & Dereceler
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 max-w-3xl">
            Yönetim Bilişim Sistemleri ve Bilgisayar Programcılığı disiplinlerinde analitik sistem düşüncesi ve mühendislik temelleri.
          </p>
        </div>

        {/* 2-Column Academic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION_DATA.map((edu) => (
            <div
              key={edu.id}
              className="apple-card rounded-2xl p-8 sm:p-9 space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-5">
                {/* Degree & Badge */}
                <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-white">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                        {edu.degree} Derecesi
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {edu.field}
                      </h3>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.1] text-xs font-mono text-zinc-200 shrink-0 font-medium">
                    {edu.statusBadge}
                  </span>
                </div>

                {/* Institution & Period */}
                <div className="flex items-center justify-between text-sm sm:text-base font-mono">
                  <span className="text-zinc-200 font-semibold">{edu.institution}</span>
                  <span className="text-zinc-400 text-xs sm:text-sm">{edu.period}</span>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                  {edu.description}
                </p>
              </div>

              {/* Topics / Core Focus */}
              <div className="pt-4 border-t border-white/[0.08] space-y-2.5">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block font-medium">
                  Öne Çıkan Çalışma & Ders Başlıkları
                </span>
                <div className="flex flex-wrap gap-2">
                  {edu.topics.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs sm:text-sm font-mono px-3 py-1 rounded-lg bg-black/40 border border-white/[0.08] text-zinc-200 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
