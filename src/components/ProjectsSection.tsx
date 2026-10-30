"use client";

import React, { useState } from "react";
import { PROJECTS_DATA, Project } from "@/data/portfolioData";
import { GithubIcon } from "@/components/Icons";
import {
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Layers,
  Sparkles,
  ArrowUpRight,
  Workflow,
  Cpu,
  Smartphone,
  TrendingUp,
} from "lucide-react";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>("oneiro");

  const filterOptions = [
    { key: "all", label: "Tüm Projeler", count: PROJECTS_DATA.length },
    { key: "mobile", label: "Mobil (Flutter & RN)", count: 2 },
    { key: "ai", label: "AI & LLM / RAG", count: 1 },
    { key: "fintech", label: "Fintech & Algoritmik", count: 1 },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  const toggleExpand = (id: string) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  return (
    <section id="projects" className="py-16 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#1C1C21] pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
              <Workflow className="w-3.5 h-3.5" />
              <span>Mühendislik & Ürün Vitrini</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F5F7]">
              Öne Çıkan Projeler & Uygulamalar
            </h2>
            <p className="text-sm sm:text-base text-[#86868B] max-w-2xl">
              Mobil platformlar, yapay zeka/LLM yönlendirme mimarileri ve yüksek performanslı backend sistemleri üzerine inşa edilmiş seçkin projelerim.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-[#0A0A0C] border border-[#1C1C21]">
            {filterOptions.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium font-mono transition-all duration-200 flex items-center gap-1.5 ${
                  activeFilter === f.key
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-[#86868B] hover:text-[#F5F5F7] hover:bg-white/[0.04]"
                }`}
              >
                <span>{f.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    activeFilter === f.key
                      ? "bg-blue-800 text-blue-200"
                      : "bg-[#1C1C21] text-zinc-400"
                  }`}
                >
                  {f.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => {
            const isExpanded = expandedProjectId === project.id;

            return (
              <div
                key={project.id}
                className="rounded-3xl p-6 sm:p-7 bg-[#0A0A0C] border border-[#1C1C21] hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Subtle Glow */}
                <div
                  className={`absolute -top-24 -right-24 w-52 h-52 bg-gradient-to-br ${project.accentColor} blur-[80px] rounded-full pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity`}
                />

                <div className="space-y-5 relative z-10">
                  {/* Status & Category Bar */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.03] border border-[#1C1C21] text-[#86868B]">
                      {project.categoryLabel}
                    </span>

                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            project.status === "Aktif Geliştirme"
                              ? "bg-emerald-500 animate-pulse"
                              : project.status === "Akademik R&D"
                              ? "bg-purple-500"
                              : "bg-blue-500"
                          }`}
                        />
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-[#F5F5F7] group-hover:text-blue-400 transition-colors flex items-center gap-2">
                      {project.title}
                      {project.featured && (
                        <span className="text-[10px] font-mono font-normal px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          Featured
                        </span>
                      )}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#86868B] font-mono mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#86868B] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded-lg bg-black/60 border border-[#1C1C21] text-[#F5F5F7] group-hover:border-zinc-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Metrics Row */}
                  {project.metrics && (
                    <div className="grid grid-cols-3 gap-2 py-2 px-3 rounded-xl bg-black/40 border border-[#1C1C21] text-[11px] font-mono">
                      {project.metrics.map((m, idx) => (
                        <div key={idx} className="flex flex-col">
                          <span className="text-zinc-500">{m.label}</span>
                          <span className="text-[#F5F5F7] font-semibold">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Expandable Architecture Highlights */}
                  <div>
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="w-full flex items-center justify-between py-2 text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <span className="flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5" />
                        <span>Mimari Detaylar & Teknik Çözümler</span>
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="mt-2 p-3.5 rounded-xl bg-black/70 border border-[#1C1C21] space-y-2 text-xs text-[#86868B] transition-all duration-300">
                        <p className="text-[11px] text-zinc-300 italic mb-2">
                          {project.detailedOverview}
                        </p>
                        <ul className="space-y-1.5">
                          {project.architectureHighlights.map((highlight, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2">
                              <span className="text-blue-400 font-mono text-sm leading-none mt-0.5">•</span>
                              <span className="text-zinc-400 leading-snug">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-5 mt-5 border-t border-[#1C1C21] flex items-center justify-between gap-3 relative z-10">
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-[#1C1C21] hover:border-zinc-700 text-xs font-mono text-[#F5F5F7] transition-all"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Kaynak Kod</span>
                      </a>
                    )}
                  </div>

                  <a
                    href={project.githubUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors group/link"
                  >
                    <span>Detayları İncele</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
