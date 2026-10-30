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
    <div className="min-h-screen bg-[#0B0C10] text-[#F5F5F7] selection:bg-white/20 selection:text-white">
      {/* Floating Pill Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-12 sm:space-y-16">
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
