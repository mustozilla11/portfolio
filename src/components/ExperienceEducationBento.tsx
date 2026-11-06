"use client";

import React from "react";
import { EDUCATION_DATA } from "@/data/portfolioData";
import { GraduationCap, Award, CheckCircle2 } from "lucide-react";

export default function ExperienceEducationBento() {
  return (
    <section id="education" className="py-20 scroll-mt-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Clean Human Section Header */}
        <div className="border-b border-white/[0.08] pb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass-subtle text-xs font-mono text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            Eğitim & Temeller
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Akademik Altyapı & Dereceler
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 max-w-3xl leading-relaxed">
            Yönetim Bilişim Sistemleri ve Bilgisayar Programcılığı disiplinlerinde analitik sistem düşüncesi ve yazılım temelleri.
          </p>
        </div>

        {/* 2-Column Academic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION_DATA.map((edu) => (
            <div
              key={edu.id}
              className="liquid-glass rounded-3xl p-8 sm:p-10 space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Degree & Badge */}
                <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] pb-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl liquid-glass-subtle flex items-center justify-center text-white">
                      <GraduationCap className="w-6 h-6 text-indigo-400" />
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

                  <span className="px-3.5 py-1.5 rounded-full liquid-glass-subtle text-xs font-mono text-zinc-200 shrink-0 font-medium">
                    {edu.statusBadge}
                  </span>
                </div>

                {/* Institution & Period */}
                <div className="flex items-center justify-between text-sm sm:text-base font-mono">
                  <span className="text-white font-semibold">{edu.institution}</span>
                  <span className="text-zinc-400 text-xs sm:text-sm">{edu.period}</span>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                  {edu.description}
                </p>
              </div>

              {/* Topics / Core Focus */}
              <div className="pt-5 border-t border-white/[0.08] space-y-3">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block font-medium">
                  Öne Çıkan Çalışma & Ders Başlıkları
                </span>
                <div className="flex flex-wrap gap-2">
                  {edu.topics.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs sm:text-sm font-mono px-3.5 py-1.5 rounded-xl liquid-glass-subtle text-zinc-200 flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
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
