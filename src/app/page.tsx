"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroBento from "@/components/HeroBento";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackBento from "@/components/TechStackBento";
import ExperienceEducationBento from "@/components/ExperienceEducationBento";
import LibraryBento from "@/components/LibraryBento";
import UsesAndSpecsBento from "@/components/UsesAndSpecsBento";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-[#F5F5F7] selection:bg-blue-600/30 selection:text-white">
      {/* Subtle Dot Grid Background */}
      <div className="fixed inset-0 bg-[radial-gradient(#1c1c21_1px,transparent_1px)] [background-size:28px_28px] opacity-25 pointer-events-none" />

      {/* Floating Pill Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroBento onOpenResume={() => setIsResumeOpen(true)} />
        <ProjectsSection />
        <TechStackBento />
        <ExperienceEducationBento />
        <LibraryBento />
        <UsesAndSpecsBento />
      </main>

      {/* Footer with Collaboration CTA & Live Time */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Printable Interactive CV / Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
