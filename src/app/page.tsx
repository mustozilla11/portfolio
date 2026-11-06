"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroBento from "@/components/HeroBento";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackBento from "@/components/TechStackBento";
import ExperienceEducationBento from "@/components/ExperienceEducationBento";
import CertificationsSection from "@/components/CertificationsSection";
import LibraryBento from "@/components/LibraryBento";
import UsesAndSpecsBento from "@/components/UsesAndSpecsBento";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen text-[#F5F5F7] selection:bg-indigo-500/30 selection:text-white overflow-x-hidden">
      {/* Liquid Glass Dynamic Background Aurora & Mesh Engine */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top Horizon Accent Beams (Linear / Raycast Style) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[45%] max-w-lg h-[2px] bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent blur-[1px]" />

        {/* Top Celestial Aurora Bloom */}
        <div className="absolute -top-[160px] left-1/2 -translate-x-1/2 w-[1100px] h-[550px] rounded-[100%] bg-gradient-to-b from-indigo-500/25 via-violet-600/18 to-transparent blur-[120px]" />

        {/* Living, Moving Chromatic Light Orbs (Deep Cosmic Atmosphere) */}
        <div className="absolute top-[8%] -left-[10%] w-[750px] h-[750px] rounded-full bg-gradient-to-br from-indigo-600/22 via-blue-600/16 to-transparent blur-[150px] animate-float-1" />
        <div className="absolute top-[38%] -right-[10%] w-[800px] h-[800px] rounded-full bg-gradient-to-bl from-violet-600/20 via-purple-600/14 to-transparent blur-[160px] animate-float-2" />
        <div className="absolute top-[68%] -left-[10%] w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-cyan-600/16 via-blue-600/12 to-transparent blur-[150px] animate-float-3" />
        <div className="absolute -bottom-[5%] right-[5%] w-[700px] h-[700px] rounded-full bg-gradient-to-tl from-indigo-600/18 via-teal-600/10 to-transparent blur-[140px] animate-float-1" />
        
        {/* Architectural Dot Matrix Texture with Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_35%,#000_30%,transparent_100%)] opacity-80" />

        {/* Subtle Tech Blueprint Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_25%,#000_50%,transparent_100%)] opacity-40" />
      </div>

      {/* Floating Pill Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-16 sm:space-y-24">
        <HeroBento onOpenResume={() => setIsResumeOpen(true)} />
        <ProjectsSection />
        <TechStackBento />
        <ExperienceEducationBento />
        <CertificationsSection />
        <LibraryBento />
        <UsesAndSpecsBento />
      </main>

      {/* Footer with Collaboration CTA */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Printable Interactive CV / Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Floating Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
