"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PROJECTS_DATA, Project } from "@/data/portfolioData";
import { GithubIcon } from "@/components/Icons";
import {
  ChevronDown,
  ChevronUp,
  ArrowUpRight,
  BookOpen,
  ArrowRight,
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
    <section id="projects" className="py-20 scroll-mt-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Human & Orderly Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass-subtle text-xs font-mono text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
              Mühendislik & Çözümler
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Seçilmiş Projeler & Sistem Mimarisi
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 max-w-3xl leading-relaxed">
              Üretim standartlarında mobil uygulamalar, RAG tabanlı kurumsal karar sistemleri ve yüksek hızlı konsol araçları.
            </p>
          </div>

          {/* Liquid Glass Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl liquid-glass-subtle">
            {filterOptions.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`liquid-pill text-xs sm:text-sm font-medium ${
                  activeFilter === f.key
                    ? "liquid-pill-active"
                    : "text-zinc-300 hover:text-white"
                }`}
              >
                {f.label} <span className="opacity-70 text-xs">({f.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Flagship Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const isExpanded = expandedProjectId === project.id;

            return (
              <div
                key={project.id}
                className="liquid-glass rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-8"
              >
                <div className="space-y-6">
                  {/* Top Bar: Category & Status */}
                  <div className="flex items-center justify-between text-xs sm:text-sm font-mono">
                    <span className="px-3.5 py-1.5 rounded-xl liquid-glass-subtle text-zinc-200">
                      {project.categoryLabel}
                    </span>
                    <span className="text-zinc-200 flex items-center gap-2 font-medium">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      {project.status}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm font-mono text-zinc-400">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description - Larger, High Readability */}
                  <p className="text-base text-zinc-300 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs sm:text-sm font-mono px-3.5 py-1.5 rounded-xl liquid-glass-subtle text-zinc-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Problem & Solution Accordion */}
                  <div className="pt-3 border-t border-white/[0.08]">
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="w-full flex items-center justify-between py-2 text-xs sm:text-sm font-mono text-zinc-200 hover:text-white transition-colors"
                    >
                      <span className="font-medium">Mimari Çözüm & Teknik Detaylar</span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-zinc-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-zinc-400" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="mt-3 p-6 rounded-2xl liquid-glass-subtle space-y-4 text-sm leading-relaxed border border-white/[0.08]">
                        <p className="text-zinc-200">
                          {project.problemAndSolution}
                        </p>
                        <div className="space-y-2 pt-1">
                          {project.architectureHighlights.map((highlight, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-2.5 text-zinc-300">
                              <span className="text-indigo-400 font-mono mt-0.5 font-bold">›</span>
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>

                        {/* Link to Full Documentation Page */}
                        <div className="pt-3 border-t border-white/[0.08]">
                          <Link
                            href={`/projects/${project.id}`}
                            className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-white group/link transition-colors"
                          >
                            <BookOpen className="w-3.5 h-3.5 text-indigo-400 group-hover/link:text-white" />
                            <span>Tüm sistem dökümantasyonu, API şemaları ve mimari akışı oku</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer with Action & Metrics */}
                <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-mono">
                  <div className="flex items-center gap-2.5">
                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black hover:bg-zinc-200 font-semibold text-xs sm:text-sm transition-all shadow-md group/btn"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Döküman</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl liquid-glass-subtle hover:bg-white/[0.1] text-white transition-all text-xs sm:text-sm"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                      </a>
                    )}
                  </div>

                  {project.metrics && project.metrics[0] && (
                    <div className="text-right">
                      <span className="text-zinc-400 block text-[11px] uppercase">
                        {project.metrics[0].label}
                      </span>
                      <span className="text-white font-bold text-xs sm:text-sm">
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
