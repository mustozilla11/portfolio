"use client";

import React, { useState } from "react";
import { PROJECTS_DATA, Project } from "@/data/portfolioData";
import { GithubIcon } from "@/components/Icons";
import {
  ChevronDown,
  ChevronUp,
  ArrowUpRight,
} from "lucide-react";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>("sayzek-llm-dss");

  const filterOptions = [
    { key: "all", label: "Tüm Projeler", count: PROJECTS_DATA.length },
    { key: "ai", label: "AI & RAG", count: 1 },
    { key: "mobile", label: "Mobil (Flutter & RN)", count: 2 },
    { key: "fintech", label: "Kantitatif & CLI", count: 1 },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  const toggleExpand = (id: string) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  return (
    <section id="projects" className="py-16 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Confident Apple-Style Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-6">
          <div className="space-y-2">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block font-medium">
              01 / Projeler & Mimari
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Seçilmiş Mühendislik Çalışmaları
            </h2>
            <p className="text-base text-zinc-400 max-w-2xl">
              Üretim standartlarında mobil uygulamalar, RAG tabanlı kurumsal karar sistemleri ve yüksek hızlı konsol araçları.
            </p>
          </div>

          {/* Clean Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-[#131419] border border-white/[0.08]">
            {filterOptions.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  activeFilter === f.key
                    ? "bg-white text-black shadow-sm"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {f.label} <span className="text-[11px] opacity-70">({f.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Flagship Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => {
            const isExpanded = expandedProjectId === project.id;

            return (
              <div
                key={project.id}
                className="apple-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-5">
                  {/* Top Bar: Category & Status */}
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-zinc-300">
                      {project.categoryLabel}
                    </span>
                    <span className="text-zinc-300 flex items-center gap-2 font-medium">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      {project.status}
                    </span>
                  </div>

                  {/* Title & Subtitle - Large & Punchy */}
                  <div className="space-y-1">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 font-mono">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-3 py-1 rounded-lg bg-black/40 border border-white/[0.08] text-zinc-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Problem & Solution Accordion */}
                  <div className="pt-3 border-t border-white/[0.08]">
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="w-full flex items-center justify-between py-1.5 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
                    >
                      <span className="font-medium">Mimari Çözüm & Teknik Detaylar</span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-zinc-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-zinc-400" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="mt-3 p-4 rounded-xl bg-black/50 border border-white/[0.06] space-y-3 text-xs leading-relaxed">
                        <p className="text-zinc-300">
                          {project.problemAndSolution}
                        </p>
                        <div className="space-y-1.5 pt-1">
                          {project.architectureHighlights.map((highlight, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-2 text-zinc-400">
                              <span className="text-zinc-500 font-mono mt-0.5">•</span>
                              <span className="text-zinc-300">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer with Action & Metrics */}
                <div className="pt-5 border-t border-white/[0.08] flex items-center justify-between gap-4 text-xs font-mono">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-white hover:border-white/20 transition-all"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>github/{project.githubUrl.split("/").pop()}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                    </a>
                  ) : (
                    <span className="text-zinc-500">Özel Kod Tabanı</span>
                  )}

                  {project.metrics && project.metrics[0] && (
                    <div className="text-right">
                      <span className="text-zinc-500 block text-[10px] uppercase">
                        {project.metrics[0].label}
                      </span>
                      <span className="text-zinc-100 font-bold text-xs sm:text-sm">
                        {project.metrics[0].value}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
