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
    { key: "all", label: "Tümü", count: PROJECTS_DATA.length },
    { key: "ai", label: "AI & RAG", count: 1 },
    { key: "mobile", label: "Mobil (Flutter & RN)", count: 2 },
    { key: "fintech", label: "Sayısal Finans & CLI", count: 1 },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  const toggleExpand = (id: string) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  return (
    <section id="projects" className="py-14 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#1C1C21] pb-5">
          <div className="space-y-1.5">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block">
              01 / Projeler
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F5F7]">
              Seçilmiş Çalışmalar & Mimari
            </h2>
          </div>

          {/* Minimalist Filter Pills */}
          <div className="flex flex-wrap items-center gap-1 p-1 rounded-xl bg-[#0A0A0C] border border-[#1C1C21]">
            {filterOptions.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
                  activeFilter === f.key
                    ? "bg-white/[0.08] text-white"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {f.label} <span className="text-[10px] text-zinc-600">({f.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Clean Modern 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredProjects.map((project) => {
            const isExpanded = expandedProjectId === project.id;

            return (
              <div
                key={project.id}
                className="rounded-xl p-5 sm:p-6 bg-[#0A0A0C] border border-[#1C1C21] hover:border-zinc-800 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Bar: Category & Status */}
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-500">{project.categoryLabel}</span>
                    <span className="text-zinc-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
                      {project.status}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl font-bold text-[#F5F5F7] tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs text-zinc-500 font-mono mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.02] border border-[#1C1C21] text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Technical Highlights Toggle */}
                  <div className="pt-2 border-t border-[#1C1C21]">
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="w-full flex items-center justify-between py-1 text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-colors"
                    >
                      <span>Mimari Çözüm & Detaylar</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="mt-2.5 p-3 rounded-lg bg-black/50 border border-[#1C1C21] space-y-2 text-xs">
                        <p className="text-zinc-400 text-[11px] leading-relaxed">
                          {project.problemAndSolution}
                        </p>
                        <ul className="space-y-1 text-zinc-500 text-[11px]">
                          {project.architectureHighlights.map((highlight, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-1.5">
                              <span className="text-zinc-400 mt-0.5">—</span>
                              <span className="text-zinc-300">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer with Action */}
                <div className="pt-4 mt-4 border-t border-[#1C1C21] flex items-center justify-between text-xs font-mono">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>github/{project.githubUrl.split("/").pop()}</span>
                      <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                    </a>
                  ) : (
                    <span className="text-zinc-600">Özel Kod Tabanı</span>
                  )}

                  {project.metrics && project.metrics[0] && (
                    <span className="text-zinc-500 text-[11px]">
                      {project.metrics[0].label}: <strong className="text-zinc-300">{project.metrics[0].value}</strong>
                    </span>
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
