"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, GraduationCap, Trophy } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
}

export default function Resume() {
  const educationTimeline: TimelineItem[] = [
    {
      year: "2024 – 2028",
      title: "B.Tech in Artificial Intelligence & Data Science",
      subtitle: "M. Kumarasamy College of Engineering, Karur",
      description: "Currently pursuing. Maintained a strong academic record with an 8.0 CGPA. Learning neural networks, big data analysis, database systems, and web frameworks.",
    },
    {
      year: "2023 – 2024",
      title: "Higher Secondary Certificate (HSC)",
      subtitle: "St. Theresa’s Girls Higher Secondary School, Karur",
      description: "Graduated with a stellar 91% score. Focused on Advanced Mathematics and Computer Science basics.",
    },
    {
      year: "2021 – 2022",
      title: "Secondary School Leaving Certificate (SSLC)",
      subtitle: "St. Theresa’s Girls Higher Secondary School, Karur",
      description: "Graduated with 85% aggregate score in general studies.",
    },
  ];

  const achievementTimeline: TimelineItem[] = [
    {      year: "2026",
      title: "Internsala Student Partner",
      subtitle: "Partnership & Recognition",
      description: "Recognized as a Student Partner with Internsala, contributing to internship and opportunities community for students.",
    },
    {      year: "2025",
      title: "Gencraft’25 Technical Event - 3rd Prize",
      subtitle: "Academic Competition",
      description: "Recognized for prototyping technical innovations and presenting under pressure in a regional collegiate hackathon/event.",
    },
    {
      year: "2025",
      title: "APPRADIX Technical Event - Participant",
      subtitle: "Tech Presentation",
      description: "Engaged in competitive app/web development presentation, discussing architectures and algorithms.",
    },
    {
      year: "2023",
      title: "Poster Creation Competition - 2nd Prize",
      subtitle: "Creative Design",
      description: "Showcased graphic design and information visual layout skills, presenting complex tech narratives in poster sheets.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 85,
        damping: 15,
      },
    },
  } as const;

  return (
    <div className="space-y-6 lg:space-y-8 select-none">
      
      {/* Title Header */}
      <div className="flex items-center justify-between gap-4 relative">
        <div className="space-y-4">
          <h2 className="font-sans text-xl lg:text-3xl font-bold text-white tracking-wide">
            Resume
          </h2>
          <div className="w-10 h-1 bg-gold-gradient rounded-full shadow-[0_0_8px_#f2c542]" />
        </div>
      </div>

      {/* Stack containing Education & Achievements Timelines vertically */}
      <div className="flex flex-col gap-10 pt-2">
        
        {/* Education Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-gold-300 shadow-sm">
              <GraduationCap size={18} />
            </div>
            <h3 className="font-sans font-bold text-lg lg:text-xl text-white">Education</h3>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="relative border-l border-border-card/60 ml-6 pl-6 space-y-5"
          >
            {educationTimeline.map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="relative pl-0.5">
                {/* Timeline circular dot */}
                <div className="absolute -left-[30px] top-4 w-3 h-3 rounded-full bg-[#1e1e1f] border-[2px] border-gold-300 shadow-[0_0_5px_#f2c542]" />
                
                <motion.div 
                  whileHover={{ x: 4 }} 
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="bg-[#222224]/30 border border-white/5 p-4 rounded-xl space-y-1.5 cursor-pointer hover:border-gold-300/40 hover:bg-[#2b2b2c]/40 transition-colors duration-300"
                >
                  <h4 className="font-sans font-bold text-sm text-white tracking-wide">{item.title}</h4>
                  <div className="flex items-center gap-1.5 text-[10px] text-gold-300 font-semibold tracking-wider uppercase">
                    <Calendar size={11} />
                    <span>{item.year}</span>
                  </div>
                  <p className="font-sans text-[11px] text-gray-500 font-medium">{item.subtitle}</p>
                  <p className="font-sans text-xs text-gray-400 leading-relaxed pt-0.5">{item.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
 
        {/* Achievements Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-gold-300 shadow-sm">
              <Trophy size={17} />
            </div>
            <h3 className="font-sans font-bold text-lg lg:text-xl text-white">Achievements</h3>
          </div>
 
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="relative border-l border-border-card/60 ml-6 pl-6 space-y-5"
          >
            {achievementTimeline.map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="relative pl-0.5">
                {/* Timeline circular dot */}
                <div className="absolute -left-[30px] top-4 w-3 h-3 rounded-full bg-[#1e1e1f] border-[2px] border-gold-300 shadow-[0_0_5px_#f2c542]" />
                
                <motion.div 
                  whileHover={{ x: 4 }} 
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="bg-[#222224]/30 border border-white/5 p-4 rounded-xl space-y-1.5 cursor-pointer hover:border-gold-300/40 hover:bg-[#2b2b2c]/40 transition-colors duration-300"
                >
                  <h4 className="font-sans font-bold text-sm text-white tracking-wide">{item.title}</h4>
                  <div className="flex items-center gap-1.5 text-[10px] text-gold-300 font-semibold tracking-wider uppercase">
                    <Calendar size={11} />
                    <span>{item.year}</span>
                  </div>
                  <p className="font-sans text-[11px] text-gray-500 font-medium">{item.subtitle}</p>
                  <p className="font-sans text-xs text-gray-400 leading-relaxed pt-0.5">{item.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>

    </div>
  );
}
