"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollY / totalHeight) * 100));
        setScrollProgress(progress);
      }

      // Show after scrolling 350px
      setIsVisible(scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // SVG circular progress calculation
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 print:hidden transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        aria-label="En Başa Dön"
        title="En Başa Dön"
        className="relative group w-13 h-13 sm:w-15 sm:h-15 rounded-2xl bg-[#131419]/90 hover:bg-white text-zinc-300 hover:text-black border border-white/[0.15] hover:border-white shadow-2xl shadow-black/80 backdrop-blur-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
      >
        {/* Circular Progress Ring */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 p-1 pointer-events-none"
          viewBox="0 0 60 60"
        >
          {/* Background circle */}
          <circle
            cx="30"
            cy="30"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="text-white/10"
          />
          {/* Active progress circle */}
          <circle
            cx="30"
            cy="30"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="text-white group-hover:text-black transition-all duration-150"
          />
        </svg>

        {/* Large Prominent Arrow */}
        <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5] relative z-10 group-hover:-translate-y-0.5 transition-transform duration-200" />

        {/* Tooltip on Hover */}
        <span className="absolute right-full mr-3 px-2.5 py-1 rounded-lg bg-[#131419] border border-white/15 text-white text-xs font-mono font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
          En Başa Dön
        </span>
      </button>
    </div>
  );
}
