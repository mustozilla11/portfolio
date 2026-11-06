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
        return <Smartphone className="w-5 h-5 text-zinc-200" />;
      case "backend-systems":
        return <Server className="w-5 h-5 text-zinc-200" />;
      case "ai-data":
        return <Cpu className="w-5 h-5 text-zinc-200" />;
      case "devops-os":
        return <Terminal className="w-5 h-5 text-zinc-200" />;
      default:
        return <Cpu className="w-5 h-5 text-zinc-200" />;
    }
  };

  return (
    <section id="tech-stack" className="py-20 scroll-mt-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Clean Human Section Header */}
        <div className="border-b border-white/[0.08] pb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass-subtle text-xs font-mono text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
            Yığın & Ekosistem
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Teknolojiler & Mühendislik Odakları
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 max-w-3xl leading-relaxed">
            Sistem seviyesinden kullanıcı arayüzüne kadar üretimde aktif olarak kullandığım diller, çerçeveler ve mimari araçlar.
          </p>
        </div>

        {/* 4-Box Liquid Glass Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {TECH_STACK_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="liquid-glass rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-2xl liquid-glass-subtle">
                    {getIcon(category.id)}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-zinc-400">
                      {category.subtitle}
                    </p>
                  </div>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2.5 pt-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-xl text-xs sm:text-sm font-mono liquid-glass-subtle text-zinc-200 hover:text-white hover:border-white/25 transition-all font-medium"
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
