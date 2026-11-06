import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PROJECTS_DATA, Project } from "@/data/portfolioData";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Code2,
  Cpu,
  Layers,
  Terminal,
  Server,
  Sparkles,
  CheckCircle2,
  FileText,
  Workflow,
  BookOpen,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import ScrollToTop from "@/components/ScrollToTop";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return PROJECTS_DATA.map((p) => ({
    id: p.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECTS_DATA.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Proje Bulunamadı | Mustafa Özlü",
    };
  }

  return {
    title: `${project.title} — Detaylı Teknik Doküman & Mimari | Mustafa Özlü`,
    description: `${project.title}: ${project.description}`,
    keywords: [project.title, ...project.stack, "Mustafa Özlü", "Yazılım Mimarisi", "Dokümantasyon"],
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = PROJECTS_DATA.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  // Find next and previous projects for navigation
  const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === id);
  const prevProject = currentIndex > 0 ? PROJECTS_DATA[currentIndex - 1] : null;
  const nextProject =
    currentIndex < PROJECTS_DATA.length - 1 ? PROJECTS_DATA[currentIndex + 1] : null;

  const doc = project.documentation;

  return (
    <div className="min-h-screen text-[#F5F5F7] selection:bg-indigo-500/30 selection:text-white py-12 sm:py-20 relative overflow-hidden">
      {/* Liquid Glass Dynamic Background Aurora & Mesh Engine */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top Horizon Accent Beams */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[45%] max-w-lg h-[2px] bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent blur-[1px]" />

        {/* Top Celestial Aurora Bloom */}
        <div className="absolute -top-[160px] left-1/2 -translate-x-1/2 w-[1100px] h-[550px] rounded-[100%] bg-gradient-to-b from-indigo-500/25 via-violet-600/18 to-transparent blur-[120px]" />

        {/* Living Chromatic Light Orbs */}
        <div className="absolute top-[10%] -left-[10%] w-[750px] h-[750px] rounded-full bg-gradient-to-br from-indigo-600/22 via-blue-600/16 to-transparent blur-[150px] animate-float-1" />
        <div className="absolute top-[45%] -right-[10%] w-[800px] h-[800px] rounded-full bg-gradient-to-bl from-violet-600/20 via-purple-600/14 to-transparent blur-[160px] animate-float-2" />
        <div className="absolute -bottom-[5%] left-[10%] w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-cyan-600/16 via-teal-600/10 to-transparent blur-[140px] animate-float-3" />

        {/* Architectural Dot Matrix Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_35%,#000_30%,transparent_100%)] opacity-80" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Breadcrumb Navigation */}
        <nav className="flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1.5">
              <ArrowLeft className="w-3.5 h-3.5" /> Ana Sayfa
            </Link>
            <span className="text-zinc-600">/</span>
            <Link href="/projects" className="hover:text-white transition-colors">
              Projeler
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-white font-medium">{project.title}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-zinc-300">
              {project.categoryLabel}
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              {project.status}
            </span>
          </div>
        </nav>

        {/* Project Header Banner */}
        <header className="space-y-6 border-b border-white/[0.08] pb-10">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-widest">
              <span>01 / Teknik Şartname & Mimari Döküman</span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {project.title}
            </h1>
            <p className="text-lg sm:text-2xl font-mono text-zinc-300">
              {project.subtitle}
            </p>
          </div>

          {/* Key Metrics Bar */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              {project.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="apple-card rounded-xl p-4 sm:p-5 border border-white/[0.08] space-y-1"
                >
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                    {m.label}
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Action Links & Tech Stack */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-[#131419] border border-white/[0.1] text-xs sm:text-sm font-mono text-zinc-200"
                >
                  {t}
                </span>
              ))}
            </div>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black hover:bg-zinc-200 font-semibold text-xs sm:text-sm transition-all shadow-sm"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Deposunu İncele</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-700" />
              </a>
            )}
          </div>
        </header>

        {/* Section 01: Overview & Motivation */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-white/[0.08] pb-3">
            <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08]">
              <BookOpen className="w-4 h-4 text-zinc-200" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              01. Genel Bakış & Çözülen Problem
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="apple-card rounded-2xl p-7 sm:p-8 space-y-3">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block font-semibold">
                Proje Kapsamı & Tanım
              </span>
              <p className="text-base text-zinc-200 leading-relaxed">
                {doc?.overview || project.description}
              </p>
            </div>

            <div className="apple-card rounded-2xl p-7 sm:p-8 space-y-3">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block font-semibold">
                Çıkış Noktası & Motivasyon
              </span>
              <p className="text-base text-zinc-200 leading-relaxed">
                {doc?.motivation || project.problemAndSolution}
              </p>
            </div>
          </div>
        </section>

        {/* Section 02: System Architecture & Workflow */}
        {doc?.architectureFlow && doc.architectureFlow.length > 0 && (
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/[0.08] pb-3">
              <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08]">
                <Workflow className="w-4 h-4 text-zinc-200" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                02. Sistem Mimarisi & Veri Akışı
              </h2>
            </div>

            <div className="apple-card rounded-2xl p-7 sm:p-8 space-y-6">
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                {doc.systemArchitecture}
              </p>

              <div className="space-y-4 pt-2">
                {doc.architectureFlow.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-xl bg-black/40 border border-white/[0.06] hover:border-white/20 transition-all"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/[0.08] border border-white/[0.1] flex items-center justify-center font-mono font-bold text-xs text-white shrink-0">
                      0{idx + 1}
                    </div>
                    <div className="text-sm sm:text-base text-zinc-200 leading-relaxed">
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Section 03: Technical Sections & Architecture Notes */}
        {doc?.sections && doc.sections.length > 0 && (
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/[0.08] pb-3">
              <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08]">
                <Code2 className="w-4 h-4 text-zinc-200" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                03. Teknik Başlıklar & Mimari Notlar
              </h2>
            </div>

            <div className="space-y-6">
              {doc.sections.map((section) => (
                <div
                  key={section.id}
                  className="apple-card rounded-2xl p-7 sm:p-9 space-y-5"
                >
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {section.title}
                    </h3>
                    <p className="text-base text-zinc-300 leading-relaxed">
                      {section.content}
                    </p>
                  </div>

                  {section.bulletPoints && section.bulletPoints.length > 0 && (
                    <ul className="space-y-2.5 pt-1">
                      {section.bulletPoints.map((bp, bpIdx) => (
                        <li key={bpIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-zinc-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                          <span>{bp}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section 04: API Endpoints (if available) */}
        {doc?.apiEndpoints && doc.apiEndpoints.length > 0 && (
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/[0.08] pb-3">
              <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08]">
                <Server className="w-4 h-4 text-zinc-200" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                04. API Sözleşmeleri & Uç Noktalar
              </h2>
            </div>

            <div className="apple-card rounded-2xl p-7 sm:p-8 divide-y divide-white/[0.08]">
              {doc.apiEndpoints.map((ep, idx) => (
                <div key={idx} className="py-4 first:pt-0 last:pb-0 space-y-1.5">
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-2.5 py-0.5 rounded text-xs font-mono font-bold ${
                        ep.method === "POST"
                          ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                          : ep.method === "GET"
                          ? "bg-sky-500/15 text-sky-400 border border-sky-500/30"
                          : "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                      }`}
                    >
                      {ep.method}
                    </span>
                    <span className="font-mono text-sm sm:text-base font-semibold text-white">
                      {ep.path}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 pl-1">
                    {ep.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section 05: Setup & Local Development */}
        {doc?.setupSteps && doc.setupSteps.length > 0 && (
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/[0.08] pb-3">
              <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08]">
                <Terminal className="w-4 h-4 text-zinc-200" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                05. Kurulum & Yerel Geliştirme Adımları
              </h2>
            </div>

            <div className="apple-card rounded-2xl p-7 sm:p-8 space-y-4">
              <div className="space-y-2.5">
                {doc.setupSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-black/40 border border-white/[0.08] font-mono text-xs sm:text-sm text-zinc-200 flex items-center justify-between gap-3"
                  >
                    <span className="text-zinc-400 shrink-0 select-none">$</span>
                    <span className="flex-1 overflow-x-auto">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Section 06: Future Roadmap */}
        {doc?.futureRoadmap && doc.futureRoadmap.length > 0 && (
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/[0.08] pb-3">
              <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08]">
                <Sparkles className="w-4 h-4 text-zinc-200" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                06. Gelecek Yol Haritası & İyileştirmeler
              </h2>
            </div>

            <div className="apple-card rounded-2xl p-7 sm:p-8">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {doc.futureRoadmap.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs sm:text-sm text-zinc-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* User Note Box for Extensibility */}
        <div className="apple-card rounded-2xl p-6 sm:p-7 border border-white/[0.1] bg-gradient-to-r from-[#131419] via-[#151722] to-[#131419] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
              <FileText className="w-4 h-4 text-emerald-400" />
              <span className="font-semibold text-white">Dokümantasyon & Şartname</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300">
              Bu projenin detaylı teknik dokümanları, mimari diyagramları ve şartnameleri hazırlanmaktadır.
            </p>
          </div>
          <Link
            href="/projects"
            className="px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-xs font-mono text-white transition-all shrink-0"
          >
            Tüm Proje Sayfaları →
          </Link>
        </div>

        {/* Project Navigation Footer (Prev / Next) */}
        <footer className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.id}`}
              className="flex items-center gap-3 p-4 rounded-xl bg-[#131419] border border-white/[0.08] hover:border-white/20 text-left transition-all w-full sm:w-auto"
            >
              <ArrowLeft className="w-4 h-4 text-zinc-400" />
              <div>
                <span className="text-[11px] font-mono text-zinc-500 uppercase block">Önceki Proje</span>
                <span className="text-sm font-bold text-white">{prevProject.title}</span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.id}`}
              className="flex items-center gap-3 p-4 rounded-xl bg-[#131419] border border-white/[0.08] hover:border-white/20 text-right transition-all w-full sm:w-auto"
            >
              <div>
                <span className="text-[11px] font-mono text-zinc-500 uppercase block">Sonraki Proje</span>
                <span className="text-sm font-bold text-white">{nextProject.title}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-zinc-400" />
            </Link>
          ) : (
            <div />
          )}
        </footer>
      </div>

      {/* Floating Scroll to Top */}
      <ScrollToTop />
    </div>
  );
}
