"use client";

import React, { useEffect } from "react";
import {
  PERSONAL_DATA,
  EDUCATION_DATA,
  PROJECTS_DATA,
  CERTIFICATIONS_DATA,
  TECH_STACK_CATEGORIES,
} from "@/data/portfolioData";
import {
  X,
  Printer,
  Download,
  Mail,
  FileText,
} from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-modal-overlay fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      {/* Modal Dialog Container */}
      <div className="resume-modal-content relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-2xl bg-[#131419] border border-white/[0.1] shadow-2xl overflow-hidden text-[#F5F5F7]">
        {/* Modal Top Control Bar (Hidden on print) */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-black/60 print:hidden">
          <div className="flex items-center gap-2.5">
            <FileText className="w-4 h-4 text-zinc-300" />
            <span className="text-sm font-mono font-medium text-white">
              Mustafa Özlü — Profesyonel Özgeçmiş (CV)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/mustafa-ozlu-cv.pdf"
              download="Mustafa_Ozlu_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-white text-xs sm:text-sm font-mono transition-colors"
              title="PDF İndir"
            >
              <Download className="w-4 h-4" />
              <span>İndir</span>
            </a>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-white text-black hover:bg-zinc-200 text-xs sm:text-sm font-mono font-semibold transition-colors"
              title="Yazdır"
            >
              <Printer className="w-4 h-4" />
              <span>Yazdır / PDF Kaydet</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-colors ml-1"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* High-Impact Executive CV Sheet */}
        <div className="resume-printable-sheet p-8 sm:p-12 overflow-y-auto space-y-8 font-sans">
          {/* Header */}
          <div className="border-b-2 border-white/[0.15] pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
              <div>
                <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                  {PERSONAL_DATA.name}
                </h1>
                <p className="text-sm sm:text-base font-mono text-zinc-300 mt-1">
                  Full-Stack, Mobil & Sistem Mühendisliği / AI & RAG Araştırmacısı
                </p>
              </div>

              <div className="flex flex-col sm:items-end text-xs sm:text-sm font-mono text-zinc-300 space-y-1">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-zinc-400" />
                  {PERSONAL_DATA.email}
                </span>
                <span className="text-zinc-400">
                  github.com/mustozilla11 • linkedin.com/in/mustafaozlu
                </span>
              </div>
            </div>

            {/* Profile Overview */}
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed pt-2">
              Mobil platformlar (Flutter, React Native), yüksek performanslı asenkron arka uç servisleri (Python, FastAPI, Rust), Büyük Dil Modelleri (LLM & RAG karar destek boru hatları), algoritmik ticaret motorları ve optimize Linux (CachyOS) iş istasyonu üzerinde uçtan uca dijital mimariler geliştiren çok yönlü yazılım mühendisi.
            </p>
          </div>

          {/* Featured Projects & Architecture */}
          <div className="space-y-4">
            <h2 className="text-sm sm:text-base font-mono font-bold uppercase tracking-wider text-white border-b border-white/[0.1] pb-1.5">
              01. Öne Çıkan Projeler & Teknik Liderlik
            </h2>

            <div className="space-y-5">
              {/* Project 1 */}
              <div className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    LLM Karar Destek Sistemi (SAYZEK Akademik Tez Projesi)
                  </h3>
                  <span className="text-xs font-mono text-emerald-400 font-semibold">
                    Teknik Lider (Tech Lead)
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Heterojen açık kaynak metin yığınlarından (haberler, raporlar, resmi mevzuat) stratejik karar vericiler için RAG (Retrieval-Augmented Generation) mimarisiyle otomatik brifing ve analiz üreten karar destek sistemi.
                </p>
                <div className="text-xs sm:text-sm text-zinc-400 space-y-1 pt-1">
                  <div>• Vektör veritabanı (FAISS / Chroma) indeksleme boru hattı ve anlamsal erişim optimizasyonu.</div>
                  <div>• Çıktıların kaynak metinlerle çapraz doğrulandığı halüsinasyon denetim katmanı (%94+ RAG kesinliği).</div>
                  <div>• Gerçek zamanlı duyarlılık ve risk haritaları sunan modern yönetici analitik arayüzü.</div>
                </div>
                <div className="text-xs font-mono text-zinc-400 pt-1">
                  Stack: Python, FastAPI, Vector DB, RAG Pipeline, TypeScript, React
                </div>
              </div>

              {/* Project 2 */}
              <div className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Oneiro (AI-Powered Dream Interpretation & Psychological Analytics)
                  </h3>
                  <span className="text-xs font-mono text-zinc-300">
                    Mobil & AI
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Geleneksel İslami rüya külliyatı (İbn Şirin, Nablusi) ile modern Jungiyen bilinçdışı arketiplerini hibrit bir prompt zinciriyle birleştiren mobil sembol analitiği uygulaması.
                </p>
                <div className="text-xs sm:text-sm text-zinc-400 space-y-1 pt-1">
                  <div>• FastAPI ve Server-Sent Events (SSE) ile düşük gecikmeli (&lt;1.2s) asenkron akış mimarisi.</div>
                  <div>• 3.500+ sembol veritabanı ve yerel SQLite çevrimdışı senkronizasyon desteği.</div>
                </div>
                <div className="text-xs font-mono text-zinc-400 pt-1">
                  Stack: Flutter, Dart, FastAPI, Python, DeepSeek API, SQLite
                </div>
              </div>

              {/* Project 3 */}
              <div className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Çiftçiden (Tarımsal E-Ticaret & Doğrudan Üretici Ağı)
                  </h3>
                  <span className="text-xs font-mono text-zinc-300">
                    Mobil Pazaryeri
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Tarımsal üreticilerle tüketicileri aracısız buluşturan, coğrafi filtreleme ve anlık mesajlaşma destekli çapraz platform mobil pazar yeri uygulaması.
                </p>
                <div className="text-xs font-mono text-zinc-400 pt-1">
                  Stack: React Native, Expo, TypeScript, Tailwind CSS (NativeWind), Firebase Firestore
                </div>
              </div>

              {/* Project 4 */}
              <div className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Terminal-Based Automated Trading Bot
                  </h3>
                  <span className="text-xs font-mono text-zinc-300">
                    Sayısal Finans & CLI
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Teknik analiz göstergeleri (RSI, EMA, Bollinger), metin madenciliğiyle piyasa haberlerinden duygu analizi ve simüle edilmiş risk yönetimi (Trailing Stop, ATR) içeren CLI ticaret motoru.
                </p>
                <div className="text-xs font-mono text-zinc-400 pt-1">
                  Stack: Python, Rich TUI, Pandas, NumPy, CCXT, Quantitative Indicators
                </div>
              </div>
            </div>
          </div>

          {/* Technical Competencies */}
          <div className="space-y-3">
            <h2 className="text-sm sm:text-base font-mono font-bold uppercase tracking-wider text-white border-b border-white/[0.1] pb-1.5">
              02. Teknik Yetkinlikler & Ekosistem
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="space-y-1">
                <div className="font-bold text-white font-mono">Diller & Sistem:</div>
                <div className="text-zinc-300">Python, Dart, TypeScript, Rust, SQL, Bash & Fish Shell</div>
              </div>

              <div className="space-y-1">
                <div className="font-bold text-white font-mono">Mobil & Web:</div>
                <div className="text-zinc-300">Flutter, React Native, Expo, Next.js, Tailwind CSS, RESTful APIs</div>
              </div>

              <div className="space-y-1">
                <div className="font-bold text-white font-mono">Yapay Zeka & Veri:</div>
                <div className="text-zinc-300">Büyük Dil Modelleri (LLM), RAG Pipeline, Vektör DB (FAISS/Chroma), Metin Madenciliği, NLP</div>
              </div>

              <div className="space-y-1">
                <div className="font-bold text-white font-mono">İş İstasyonu & Araçlar:</div>
                <div className="text-zinc-300">CachyOS Linux (x86_64-v3, Hyprland), Docker, Git/GitHub CI, Kitty, Neovim</div>
              </div>
            </div>
          </div>

          {/* Education & Academic Credentials */}
          <div className="space-y-3">
            <h2 className="text-sm sm:text-base font-mono font-bold uppercase tracking-wider text-white border-b border-white/[0.1] pb-1.5">
              03. Akademik Eğitim
            </h2>

            <div className="space-y-3 text-xs sm:text-sm">
              {EDUCATION_DATA.map((edu) => (
                <div key={edu.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="font-bold text-white text-sm sm:text-base">
                      {edu.institution} — {edu.field} ({edu.degree})
                    </span>
                    <span className="font-mono text-zinc-300">
                      {edu.period} ({edu.statusBadge})
                    </span>
                  </div>
                  <p className="text-zinc-300">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Programs & Achievements */}
          <div className="space-y-3">
            <h2 className="text-sm sm:text-base font-mono font-bold uppercase tracking-wider text-white border-b border-white/[0.1] pb-1.5">
              04. Araştırma Programları & Sertifikalar
            </h2>

            <div className="space-y-3 text-xs sm:text-sm">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div key={cert.id} className="space-y-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="font-bold text-white">
                      {cert.title} — {cert.role} ({cert.organization})
                    </span>
                    <span className="font-mono text-zinc-400">
                      {cert.period}
                    </span>
                  </div>
                  <p className="text-zinc-300">{cert.description}</p>
                  <div className="text-[11px] font-mono text-zinc-400 pt-0.5">
                    Yetkinlikler: {cert.skills.join(" • ")} {cert.credentialId ? `(ID: ${cert.credentialId})` : ""}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Disciplines */}
          <div className="space-y-2 pt-2 border-t border-white/[0.1] text-xs sm:text-sm font-mono text-zinc-300">
            <div>
              <span className="text-white font-bold">Özel Yetkinlikler:</span>{" "}
              10 Parmak Klavye (115+ WPM Net Hız & Yüksek Doğruluk) • Diksiyon & Teknik Hitabet • İngilizce (B2/C1 Teknik Seviye)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
