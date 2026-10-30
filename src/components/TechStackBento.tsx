"use client";

import React from "react";
import { TECH_STACK_CATEGORIES } from "@/data/portfolioData";
import {
  Smartphone,
  Server,
  Cpu,
  Terminal,
} from "lucide-react";

export default function TechStackBento() {
  const getIcon = (id: string) => {
    switch (id) {
      case "mobile-frontend":
        return <Smartphone className="w-5 h-5 text-zinc-300" />;
      case "backend-systems":
        return <Server className="w-5 h-5 text-zinc-300" />;
      case "ai-data":
        return <Cpu className="w-5 h-5 text-zinc-300" />;
      case "devops-os":
        return <Terminal className="w-5 h-5 text-zinc-300" />;
      default:
        return <Cpu className="w-5 h-5 text-zinc-300" />;
    }
  };

  return (
    <section id="tech-stack" className="py-16 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="border-b border-white/[0.08] pb-6 space-y-2">
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block font-medium">
            02 / Yetkinlikler & Yığın
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Teknolojiler & Mühendislik Odakları
          </h2>
          <p className="text-base text-zinc-400 max-w-2xl">
            Sistem seviyesinden kullanıcı arayüzüne kadar üretimde aktif olarak kullandığım diller, çerçeveler ve araçlar.
          </p>
        </div>

        {/* 4-Box Grid with Apple Pro Card styling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {TECH_STACK_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="apple-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                    {getIcon(category.id)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-xs font-mono text-zinc-400">
                      {category.subtitle}
                    </p>
                  </div>
                </div>

                {/* Skills Badges - Bold, High-Contrast */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono bg-black/40 border border-white/[0.08] text-zinc-200 hover:text-white hover:border-white/20 transition-all font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
