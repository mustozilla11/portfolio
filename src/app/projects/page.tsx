import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { PROJECTS_DATA } from "@/data/portfolioData";
import { ArrowLeft, ArrowRight, BookOpen, Layers, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Projeler & Teknik Dokümantasyon | Mustafa Özlü",
  description:
    "Mustafa Özlü'nün geliştirdiği yapay zeka, mobil uygulama ve sistem mimarisi projelerinin detaylı teknik dokümanları, RAG boru hatları ve API şartnameleri.",
};

export default function ProjectsIndexPage() {
  return (
    <div className="min-h-screen bg-[#07080a] text-[#F5F5F7] selection:bg-white/20 selection:text-white py-12 sm:py-20 relative overflow-hidden">
      {/* Ambient Liquid Glass Mesh Engine */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[15%] left-[20%] w-[550px] h-[550px] rounded-full bg-gradient-to-br from-indigo-600/15 via-blue-600/10 to-transparent blur-[130px] animate-liquidSlow1" />
        <div className="absolute top-[40%] -right-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-violet-600/15 via-purple-600/10 to-transparent blur-[140px] animate-liquidSlow2" />
        <div className="absolute bottom-[10%] -left-[10%] w-[450px] h-[450px] rounded-full bg-gradient-to-br from-emerald-600/12 via-teal-600/8 to-transparent blur-[120px] animate-liquidSlow3" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Back Link */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Ana Sayfaya Dön</span>
          </Link>

          <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-zinc-300">
            {PROJECTS_DATA.length} Aktif Mühendislik Projesi
          </span>
        </div>

        {/* Header */}
        <div className="border-b border-white/[0.08] pb-8 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-mono text-zinc-400 uppercase tracking-widest block font-medium">
              Mühendislik Arşivi & Teknik Şartnameler
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-400 font-medium">
              <Sparkles className="w-3 h-3" /> Canlı Dokümantasyon
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Projeler & Teknik Dokümanlar
          </h1>
          <p className="text-base sm:text-xl text-zinc-300 max-w-3xl leading-relaxed">
            Geliştirdiğim yapay zeka (LLM & RAG), mobil platformlar (Flutter, React Native) ve kantitatif finans motorlarına ait detaylı mimari kararlar, sistem akışları ve API dökümanları.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              className="apple-card rounded-2xl p-8 sm:p-9 space-y-6 flex flex-col justify-between hover:border-white/20 transition-all duration-300 group"
            >
              <div className="space-y-5">
                {/* Category & Status */}
                <div className="flex items-center justify-between text-xs sm:text-sm font-mono">
                  <span className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-zinc-200">
                    {project.categoryLabel}
                  </span>
                  <span className="text-zinc-200 flex items-center gap-2 font-medium">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <div className="space-y-1.5">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-zinc-100">
                    {project.title}
                  </h2>
                  <p className="text-sm font-mono text-zinc-400">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-base text-zinc-300 leading-relaxed font-normal">
                  {project.description}
                </p>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-3 py-1 rounded-md bg-black/40 border border-white/[0.08] text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between gap-4">
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl bg-white text-black hover:bg-zinc-200 text-sm font-semibold tracking-tight transition-all shadow-sm group/btn"
                >
                  <BookOpen className="w-4 h-4 text-zinc-800" />
                  <span>Teknik Dokümanı İncele</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-zinc-300 hover:text-white transition-colors"
                    aria-label="GitHub Kod Tabanı"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
