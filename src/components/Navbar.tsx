"use client";

import React, { useState, useEffect } from "react";
import { PERSONAL_DATA } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { FileText, Mail, Menu, X } from "lucide-react";

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
    { label: "Okuma Listesi", href: "#library" },
    { label: "Sistem & Setup", href: "#uses" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? "py-3 bg-black/80 backdrop-blur-md border-b border-[#1C1C21]" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-[#0A0A0C] border border-[#1C1C21] flex items-center justify-center font-mono font-bold text-xs text-[#F5F5F7] group-hover:border-zinc-700 transition-colors">
              MÖ
            </div>
            <span className="font-semibold text-sm tracking-tight text-[#F5F5F7] group-hover:text-zinc-300 transition-colors">
              {PERSONAL_DATA.name}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0A0A0C] border border-[#1C1C21] rounded-full px-3.5 py-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1 text-xs text-[#86868B] hover:text-[#F5F5F7] hover:bg-white/[0.03] rounded-full transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Clean CV Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] border border-[#1C1C21] hover:border-zinc-700 text-[#F5F5F7] text-xs font-mono transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-zinc-400" />
              <span>Özgeçmiş</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="px-2.5 py-1 rounded-md bg-white/[0.06] text-white text-xs font-mono"
            >
              CV
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg bg-[#0A0A0C] border border-[#1C1C21] text-[#86868B] hover:text-[#F5F5F7]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 p-4 rounded-xl bg-[#0A0A0C] border border-[#1C1C21] shadow-2xl space-y-3">
          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs text-[#86868B] hover:text-[#F5F5F7] bg-white/[0.02] rounded-md transition-colors"
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
                className="p-2 rounded-md bg-white/[0.03] text-zinc-400 hover:text-white"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_DATA.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-md bg-white/[0.03] text-zinc-400 hover:text-white"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white text-black text-xs font-medium"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Özgeçmiş (CV)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
