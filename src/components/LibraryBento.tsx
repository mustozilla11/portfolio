"use client";

import React, { useState } from "react";
import { BOOKS_DATA, BookItem } from "@/data/portfolioData";
import {
  BookOpen,
  Bookmark,
  Quote,
  Sparkles,
  CheckCircle2,
  BookMarked,
  Layers,
} from "lucide-react";

export default function LibraryBento() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { key: "all", label: "Tüm Eserler", count: BOOKS_DATA.length },
    { key: "reading", label: "Şu an Okuduklarım", count: BOOKS_DATA.filter((b) => b.category === "reading").length },
    { key: "psychology", label: "Psikoloji & Bilinçaltı", count: BOOKS_DATA.filter((b) => b.category === "psychology").length },
    { key: "classics", label: "Klasikler & Distopya", count: BOOKS_DATA.filter((b) => b.category === "classics").length },
    { key: "systems", label: "Yazılım & Sistem", count: BOOKS_DATA.filter((b) => b.category === "systems").length },
  ];

  const filteredBooks =
    activeCategory === "all"
      ? BOOKS_DATA
      : BOOKS_DATA.filter((book) => book.category === activeCategory);

  return (
    <section id="library" className="py-16 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#1C1C21] pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Entelektüel Birikim Köşesi</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F5F7]">
              Kütüphanem & Edebi Referanslar
            </h2>
            <p className="text-sm sm:text-base text-[#86868B] max-w-2xl">
              Yazılım mimarimi, rüya/bilinçaltı algoritmalarımı ve sistem felsefemi besleyen psikolojik, distopik ve teknik başucu kitapları.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-[#0A0A0C] border border-[#1C1C21]">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  activeCategory === cat.key
                    ? "bg-amber-600/90 text-white shadow-sm"
                    : "text-[#86868B] hover:text-[#F5F5F7] hover:bg-white/[0.04]"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    activeCategory === cat.key
                      ? "bg-amber-800 text-amber-100"
                      : "bg-[#1C1C21] text-zinc-400"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="rounded-3xl p-6 bg-[#0A0A0C] border border-[#1C1C21] hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-4">
                {/* Book Spine Simulation & Category Tag */}
                <div className="flex items-start justify-between gap-3">
                  {/* Minimalist Typographic Book Spine */}
                  <div
                    className={`w-14 h-20 rounded-xl border p-2 flex flex-col justify-between shadow-lg relative shrink-0 transition-transform group-hover:scale-105 ${book.spineColor}`}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                    <div className="text-[8px] font-mono font-bold text-white/90 leading-tight uppercase tracking-wider rotate-180 [writing-mode:vertical-rl] truncate max-h-12">
                      {book.title.slice(0, 14)}
                    </div>
                    <div className="w-full h-0.5 bg-white/20"></div>
                  </div>

                  <div className="flex flex-col items-end gap-1.5">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] border border-[#1C1C21] text-zinc-400">
                      {book.categoryLabel}
                    </span>
                    <span
                      className={`text-[10px] font-mono flex items-center gap-1 ${
                        book.status === "Şu an Okunuyor"
                          ? "text-amber-400"
                          : "text-emerald-400"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          book.status === "Şu an Okunuyor"
                            ? "bg-amber-400 animate-pulse"
                            : "bg-emerald-400"
                        }`}
                      ></span>
                      {book.status}
                    </span>
                  </div>
                </div>

                {/* Title & Author */}
                <div>
                  <h3 className="text-lg font-bold text-[#F5F5F7] group-hover:text-amber-400 transition-colors line-clamp-1">
                    {book.title}
                  </h3>
                  <p className="text-xs font-mono text-[#86868B] mt-0.5">
                    {book.author}
                  </p>
                </div>

                {/* Personal Note */}
                <div className="p-3.5 rounded-2xl bg-black/50 border border-[#1C1C21] relative space-y-1.5">
                  <Quote className="w-3.5 h-3.5 text-amber-500/60 mb-1" />
                  <p className="text-xs text-zinc-300 italic leading-relaxed">
                    &ldquo;{book.note}&rdquo;
                  </p>
                </div>

                {/* Key Takeaway */}
                {book.keyTakeaway && (
                  <div className="flex items-start gap-1.5 text-[11px] font-mono text-zinc-400 pt-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{book.keyTakeaway}</span>
                  </div>
                )}
              </div>

              {/* Bottom Subtle Bar */}
              <div className="pt-4 mt-4 border-t border-[#1C1C21] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>{book.badge} Eksenli</span>
                <span className="text-zinc-600">Entelektüel Not</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
