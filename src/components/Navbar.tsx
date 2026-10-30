"use client";

import React, { useState, useEffect } from "react";
import { PERSONAL_DATA } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { FileText, Mail, Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenResume: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Projeler", href: "#projects" },
    { label: "Yetkinlikler", href: "#tech-stack" },
    { label: "Eğitim", href: "#education" },
    { label: "Sertifikalar", href: "#certifications" },
    { label: "Kütüphane", href: "#library" },
    { label: "Setup & Beceriler", href: "#uses" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 bg-black/75 backdrop-blur-md border-b border-[#1C1C21]" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-[#0A0A0C] border border-[#1C1C21] flex items-center justify-center font-mono font-bold text-sm text-[#F5F5F7] group-hover:border-blue-500/50 group-hover:text-blue-400 transition-all duration-300">
              MÖ
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-[#F5F5F7] group-hover:text-blue-400 transition-colors">
                {PERSONAL_DATA.name}
              </span>
              <span className="text-[11px] font-mono text-[#86868B]">
                ~/developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0A0A0C]/90 border border-[#1C1C21] rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-xs text-[#86868B] hover:text-[#F5F5F7] hover:bg-white/[0.04] rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Status Pill & CV Button */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0A0C] border border-[#1C1C21] text-[11px] font-mono text-[#86868B]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>R&D / Available</span>
            </div>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium tracking-wide transition-all duration-200 shadow-sm hover:shadow-blue-500/20 active:scale-95"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>CV Görüntüle / İndir</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/90 text-white text-xs font-medium"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>CV</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#0A0A0C] border border-[#1C1C21] text-[#86868B] hover:text-[#F5F5F7]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 p-4 rounded-2xl bg-[#0A0A0C] border border-[#1C1C21] shadow-2xl space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-[#1C1C21]">
            <span className="text-xs font-mono text-[#86868B]">Navigasyon</span>
            <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Aktif
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs text-[#86868B] hover:text-[#F5F5F7] bg-white/[0.02] hover:bg-white/[0.06] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-[#1C1C21] flex items-center justify-between">
            <div className="flex gap-2">
              <a
                href={PERSONAL_DATA.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/[0.03] text-[#86868B] hover:text-white"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_DATA.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/[0.03] text-[#86868B] hover:text-white"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_DATA.email}`}
                className="p-2 rounded-lg bg-white/[0.03] text-[#86868B] hover:text-white"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-medium"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Tam CV</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
