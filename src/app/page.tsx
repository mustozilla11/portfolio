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
    <div className="relative min-h-screen bg-[#07080B] text-[#F5F5F7] selection:bg-indigo-500/30 selection:text-white overflow-x-hidden">
      {/* Liquid Glass Dynamic Background Mesh Engine */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft, living ambient light blobs */}
        <div className="absolute -top-[12%] left-[8%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-600/20 via-purple-600/12 to-transparent blur-[140px] animate-float-1" />
        <div className="absolute top-[32%] -right-[8%] w-[650px] h-[650px] rounded-full bg-gradient-to-bl from-blue-600/15 via-cyan-600/10 to-transparent blur-[150px] animate-float-2" />
        <div className="absolute top-[62%] -left-[10%] w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-violet-600/18 via-indigo-600/10 to-transparent blur-[150px] animate-float-3" />
        <div className="absolute -bottom-[8%] right-[12%] w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-emerald-600/12 via-teal-600/8 to-transparent blur-[140px] animate-float-1" />
        
        {/* Fine physical noise & grid texture */}
        <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
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
