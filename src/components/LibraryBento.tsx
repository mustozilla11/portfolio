"use client";

import React, { useState } from "react";
import { BOOKS_DATA, BookItem } from "@/data/portfolioData";

export default function LibraryBento() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { key: "all", label: "Tüm Eserler" },
    { key: "reading", label: "Şu an Okuduklarım" },
    { key: "psychology", label: "Psikoloji & Bilinçaltı" },
    { key: "classics", label: "Distopya & Fikir" },
    { key: "systems", label: "Sistem & Mimari" },
  ];

  const filteredBooks =
    activeCategory === "all"
      ? BOOKS_DATA
      : BOOKS_DATA.filter((b) => b.category === activeCategory);

  return (
    <section id="library" className="py-16 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/[0.08] pb-6">
          <div className="space-y-2">
            <span className="text-xs sm:text-sm font-mono text-zinc-400 uppercase tracking-widest block font-medium">
              05 / Kütüphane & Okuma Listesi
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Entelektüel & Teknik Referanslar
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl">
              Yazılım mimarimi, psikanalitik rüya algoritmalarımı ve sistem anlayışımı şekillendiren başucu kaynaklarım.
            </p>
          </div>

          {/* Minimalist Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-[#131419] border border-white/[0.08]">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-mono font-medium transition-all ${
                  activeCategory === cat.key
                    ? "bg-white text-black shadow-sm"
                    : "text-zinc-300 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Reading Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="apple-card rounded-2xl p-8 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between text-xs sm:text-sm font-mono">
                  <span className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-zinc-200">
                    {book.categoryLabel}
                  </span>
                  <span
                    className={`text-xs sm:text-sm flex items-center gap-2 font-medium ${
                      book.status === "Okunuyor" ? "text-emerald-400" : "text-zinc-400"
                    }`}
                  >
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        book.status === "Okunuyor" ? "bg-emerald-400 animate-pulse" : "bg-zinc-500"
                      }`}
                    ></span>
                    {book.status}
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
