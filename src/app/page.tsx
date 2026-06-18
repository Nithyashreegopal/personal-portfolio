"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SmoothScroll from "@/components/SmoothScroll";
import HeroThree from "@/components/HeroThree";
import Sidebar from "@/components/Sidebar";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

type TabId = "about" | "resume" | "skills" | "projects" | "contact";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>("about");

  const tabs = [
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const renderActiveView = () => {
    switch (activeTab) {
      case "about":
        return <About />;
      case "resume":
        return <Resume />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <SmoothScroll>
      <div className="relative min-h-screen lg:h-screen lg:overflow-hidden bg-bg-dark text-foreground flex flex-col justify-between select-none pb-20 lg:pb-0">
        
        {/* Background 3D Interactive wave grid */}
        <HeroThree />

        {/* Global Grid Accent lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        {/* Global ambient top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-gradient-to-b from-gold-300/5 to-transparent blur-[120px] pointer-events-none" />

        {/* Floating Ambient Glowing Blobs */}
        <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-gold-400/10 blur-[100px] pointer-events-none animate-blob-1" />
        <div className="absolute bottom-[30%] right-[10%] w-[400px] h-[400px] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none animate-blob-2" />

        {/* Main Content Workspace Layout */}
        <div className="relative max-w-7xl lg:max-w-[1400px] w-full mx-auto px-4 md:px-8 py-8 lg:py-6 flex flex-col lg:flex-row gap-6 lg:gap-8 lg:items-stretch z-10 flex-grow lg:h-0 lg:min-h-0">
          
          {/* Left Side: Dynamic Profile Sidebar */}
          <Sidebar />

          {/* Right Side: Tab Panel Container */}
          <div className="flex-grow w-full lg:min-w-0 relative lg:h-full lg:flex lg:flex-col lg:overflow-hidden">
            
            {/* Navigation Tab Bar (Sticky Bottom on Mobile, Absolute Top-Right on Desktop) */}
            <nav className="fixed bottom-0 left-0 w-full z-40 bg-[#1e1e1f]/95 backdrop-blur-md border-t border-[#383838] rounded-t-2xl px-4 py-3.5 overflow-x-auto no-scrollbar lg:overflow-visible lg:absolute lg:bottom-auto lg:top-[-1px] lg:right-[-1px] lg:left-auto lg:w-auto lg:border-t-0 lg:border-b lg:border-l lg:border-[#383838] lg:rounded-t-none lg:rounded-bl-2xl lg:rounded-tr-3xl lg:px-8 lg:py-4.5 shadow-lg lg:shadow-none">
              <ul className="flex flex-row flex-nowrap justify-start lg:justify-end gap-1.5 md:gap-3 text-[10px] sm:text-[11px] lg:text-xs font-semibold text-gray-400 min-w-max lg:min-w-0">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <li key={tab.id} className="relative shrink-0">
                      <button
                        onClick={() => setActiveTab(tab.id as TabId)}
                        className={`relative py-1.5 px-3 rounded-lg transition-all duration-300 cursor-pointer z-10 whitespace-nowrap ${
                          isActive ? "text-gold-300 font-bold" : "hover:text-white"
                        }`}
                      >
                        {tab.label}
 
                        {/* Sliding Spring background bubble bubble */}
                        {isActive && (
                          <motion.div
                            layoutId="activeTabBubble"
                            className="absolute inset-0 bg-[#2b2b2c]/80 rounded-lg -z-10 border border-[#383838]/50"
                            transition={{ type: "spring", stiffness: 350, damping: 25 }}
                          />
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Active Content panel viewport */}
            <main className="glass-card p-6 md:p-8 lg:p-10 lg:pt-20 rounded-3xl min-h-[460px] bg-[#1e1e1f]/85 backdrop-blur-sm lg:h-full lg:flex-grow lg:overflow-y-auto card-scrollbar">
              <div className="scroll-content-wrapper w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: -15, scale: 0.99 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 15, scale: 0.99 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="h-full w-full"
                  >
                    {renderActiveView()}
                  </motion.div>
                </AnimatePresence>
              </div>
            </main>

          </div>

        </div>

      </div>
    </SmoothScroll>
  );
}


