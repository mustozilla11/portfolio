"use client";

import React, { useState } from "react";
import { BOOKS_DATA, BookItem } from "@/data/portfolioData";

export default function LibraryBento() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { key: "all", label: "Tüm Eserler" },
    { key: "systems", label: "Sistem & Dağıtık Mimari" },
    { key: "psychology", label: "Psikoloji & Hermeneutik" },
    { key: "classics", label: "Fikir & Felsefe" },
  ];

  const filteredBooks =
    activeCategory === "all"
      ? BOOKS_DATA
      : BOOKS_DATA.filter((b) => b.category === activeCategory);

  return (
    <section id="library" className="py-20 scroll-mt-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Clean Human Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass-subtle text-xs font-mono text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              Kütüphane & Vizyon
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Entelektüel & Teknik Referanslar
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 max-w-3xl leading-relaxed">
              Yazılım mimarimi, psikanalitik rüya algoritmalarımı ve sistem anlayışımı şekillendiren başucu kaynaklarım.
            </p>
          </div>

          {/* Liquid Glass Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl liquid-glass-subtle">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`liquid-pill text-xs sm:text-sm font-medium ${
                  activeCategory === cat.key
                    ? "liquid-pill-active"
                    : "text-zinc-300 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Reading Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="liquid-glass rounded-3xl p-8 sm:p-9 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs sm:text-sm font-mono">
                  <span className="px-3.5 py-1.5 rounded-xl liquid-glass-subtle text-zinc-200">
                    {book.categoryLabel}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {book.title}
                  </h3>
                  <p className="text-sm font-mono text-zinc-400 mt-1">
                    {book.author}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal pt-1">
                  &ldquo;{book.note}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
