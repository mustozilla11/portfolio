"use client";

import React, { useState } from "react";
import { BOOKS_DATA, BookItem } from "@/data/portfolioData";
import { BookOpen } from "lucide-react";

export default function LibraryBento() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { key: "all", label: "Tüm Liste" },
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
    <section id="library" className="py-14 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#1C1C21] pb-5">
          <div className="space-y-1.5">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block">
              04 / Kütüphane & Okuma Listesi
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F5F7]">
              Entelektüel & Teknik Referanslar
            </h2>
          </div>

          {/* Minimalist Tabs */}
          <div className="flex flex-wrap items-center gap-1 p-1 rounded-xl bg-[#0A0A0C] border border-[#1C1C21]">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
                  activeCategory === cat.key
                    ? "bg-white/[0.08] text-white"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Reading Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="rounded-xl p-5 bg-[#0A0A0C] border border-[#1C1C21] hover:border-zinc-800 transition-colors flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-500">{book.categoryLabel}</span>
                  <span
                    className={`text-[11px] flex items-center gap-1.5 ${
                      book.status === "Okunuyor" ? "text-emerald-400" : "text-zinc-500"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        book.status === "Okunuyor" ? "bg-emerald-400" : "bg-zinc-600"
                      }`}
                    ></span>
                    {book.status}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-[#F5F5F7]">
                    {book.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400">
                    {book.author}
                  </p>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed pt-1">
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
