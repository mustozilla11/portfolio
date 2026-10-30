"use client";

import React, { useState } from "react";
import { EDUCATION_DATA, CERTIFICATIONS_DATA } from "@/data/portfolioData";
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  ExternalLink,
  ShieldCheck,
  CheckCircle,
  FileCheck2,
  Sparkles,
} from "lucide-react";

export default function ExperienceEducationBento() {
  const [activeTab, setActiveTab] = useState<"all" | "academic" | "certifications">("all");

  return (
    <section id="education" className="py-16 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#1C1C21] pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-400">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Akademik Yolculuk & Uzmanlık</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F5F7]">
              Eğitim & Yetkinlik Programları
            </h2>
            <p className="text-sm sm:text-base text-[#86868B] max-w-2xl">
              Yönetim Bilişim Sistemleri (MIS) lisans ve Bilgisayar Programcılığı temelleri ile SAYZEK ve Siber Vatan gibi seçkin araştırma/eğitim programlarındaki liderlik rollerim.
            </p>
          </div>

          {/* Tab Filter */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-[#0A0A0C] border border-[#1C1C21]">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium font-mono transition-colors ${
                activeTab === "all"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-[#86868B] hover:text-[#F5F5F7]"
              }`}
            >
              Tümü
            </button>
            <button
              onClick={() => setActiveTab("academic")}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium font-mono transition-colors ${
                activeTab === "academic"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-[#86868B] hover:text-[#F5F5F7]"
              }`}
            >
              Akademik Dereceler
            </button>
            <button
              onClick={() => setActiveTab("certifications")}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium font-mono transition-colors ${
                activeTab === "certifications"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-[#86868B] hover:text-[#F5F5F7]"
              }`}
            >
              Sertifikalar ({CERTIFICATIONS_DATA.length})
            </button>
          </div>
        </div>

        {/* 2-Column Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Column 1: Academic Degrees (Timeline) */}
          {(activeTab === "all" || activeTab === "academic") && (
            <div
              className={`${
                activeTab === "academic" ? "lg:col-span-12" : "lg:col-span-6"
              } space-y-4`}
            >
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="w-4 h-4 text-purple-400" />
                <h3 className="text-lg font-bold font-mono text-[#F5F5F7]">
                  Akademik Geçmiş
                </h3>
              </div>

              <div className="space-y-4">
                {EDUCATION_DATA.map((edu) => (
                  <div
                    key={edu.id}
                    className="rounded-3xl p-6 bg-[#0A0A0C] border border-[#1C1C21] hover:border-zinc-700 transition-all duration-300 relative group"
                  >
                    {/* Period and Status */}
                    <div className="flex items-center justify-between text-xs font-mono mb-3">
                      <span className="flex items-center gap-1.5 text-zinc-400">
                        <Calendar className="w-3.5 h-3.5 text-blue-400" />
                        {edu.period}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold text-[11px]">
                        {edu.statusBadge}
                      </span>
                    </div>

                    {/* Degree & Field */}
                    <h4 className="text-xl font-bold text-[#F5F5F7] group-hover:text-blue-400 transition-colors">
                      {edu.field}
                    </h4>
                    <p className="text-xs font-mono text-[#86868B] mt-0.5">
                      {edu.degree}
                    </p>

                    {/* Institution & Location */}
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mt-2 pb-3 border-b border-[#1C1C21]">
                      <span className="text-[#F5F5F7] font-medium">
                        {edu.institution}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-zinc-500">
                        <MapPin className="w-3 h-3" />
                        {edu.location}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#86868B] mt-3 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Highlights bullet points */}
                    <div className="mt-4 pt-3 border-t border-[#1C1C21] space-y-1.5">
                      <span className="text-[11px] font-mono text-zinc-500 block uppercase tracking-wider">
                        Öne Çıkan Çalışmalar:
                      </span>
                      {edu.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-zinc-400">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Column 2: Certifications & Programs */}
          {(activeTab === "all" || activeTab === "certifications") && (
            <div
              id="certifications"
              className={`${
                activeTab === "certifications" ? "lg:col-span-12" : "lg:col-span-6"
              } space-y-4`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-4 h-4 text-emerald-400" />
                <h3 className="text-lg font-bold font-mono text-[#F5F5F7]">
                  Sertifikalar & Araştırma Programları
                </h3>
              </div>

              <div className="space-y-4">
                {CERTIFICATIONS_DATA.map((cert) => (
                  <div
                    key={cert.id}
                    className="rounded-3xl p-6 bg-[#0A0A0C] border border-[#1C1C21] hover:border-zinc-700 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-lg font-bold text-[#F5F5F7] group-hover:text-emerald-400 transition-colors">
                            {cert.title}
                          </h4>
                        </div>
                        <p className="text-xs font-mono text-blue-400 mt-0.5">
                          {cert.role}
                        </p>
                        <p className="text-xs font-mono text-[#86868B] mt-0.5">
                          {cert.organization} • {cert.period}
                        </p>
                      </div>

                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 whitespace-nowrap">
                        {cert.badge}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#86868B] mt-3 leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Skills Tag Pills */}
                    <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-[#1C1C21]">
                      {cert.skillsAcquired.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/[0.03] border border-[#1C1C21] text-zinc-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
