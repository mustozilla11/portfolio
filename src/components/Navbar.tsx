"use client";

import React, { useState, useEffect } from "react";
import { PERSONAL_DATA } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { FileText, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenResume: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    let isPast = false;

    const onScroll = () => {
      const past = window.scrollY > 30;
      if (past !== isPast) {
        isPast = past;
        setScrolled(past);
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Projeler", href: "#projects" },
    { label: "Yetkinlikler", href: "#tech-stack" },
    { label: "Eğitim", href: "#education" },
    { label: "Sertifikalar", href: "#certifications" },
    { label: "Kütüphane", href: "#library" },
    { label: "Setup", href: "#uses" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3.5 bg-[#0B0C10]/90 backdrop-blur-xl border-b border-white/[0.08]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="flex items-center gap-3.5 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-[#131419] border border-white/[0.1] flex items-center justify-center font-mono font-bold text-sm text-[#F5F5F7] group-hover:border-white/20 transition-all shadow-sm">
              MÖ
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-[#F5F5F7] group-hover:text-white transition-colors leading-tight">
                {PERSONAL_DATA.name}
              </span>
              <span className="text-xs font-mono text-zinc-400">
                Full-Stack & Systems
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-2 bg-[#131419]/90 border border-white/[0.08] rounded-full px-5 py-2 backdrop-blur-xl shadow-lg shadow-black/40">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] rounded-full transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Clean CV Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-4.5 py-2 rounded-xl bg-white text-black hover:bg-zinc-200 text-sm font-semibold tracking-tight transition-all shadow-sm active:scale-[0.98]"
            >
              <FileText className="w-4 h-4 text-zinc-700" />
              <span>Özgeçmiş (CV)</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="px-3.5 py-2 rounded-xl bg-white text-black text-xs font-bold"
            >
              CV
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#131419] border border-white/[0.1] text-zinc-300 hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 p-5 rounded-2xl bg-[#131419] border border-white/[0.1] shadow-2xl space-y-4 backdrop-blur-2xl">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium text-zinc-200 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
            <div className="flex gap-2">
              <a
                href={PERSONAL_DATA.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] text-zinc-200 hover:text-white"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_DATA.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] text-zinc-200 hover:text-white"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black text-sm font-semibold"
            >
              <FileText className="w-4 h-4" />
              <span>Özgeçmiş (CV)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
