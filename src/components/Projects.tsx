"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Map, AlertTriangle, ArrowUpRight, FolderLock } from "lucide-react";
import { GithubIcon } from "./Icons";

interface ProjectItem {
  title: string;
  category: string; // Used for filter mapping
  icon: React.ReactNode;
  tags: string[];
  features: string[];
  color: string;
  githubLink?: string;
}

// Project Card Sub-component
function ProjectCard({ project }: { project: ProjectItem }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <motion.div
      whileHover="hover"
      initial="initial"
      animate="animate"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      variants={{
        initial: { y: 0, scale: 1, borderColor: "rgba(255, 255, 255, 0.05)" },
        hover: { 
          y: -8, 
          scale: 1.015, 
          borderColor: "rgba(242, 197, 66, 0.45)",
          boxShadow: "0 12px 30px rgba(0,0,0,0.4), 0 0 25px rgba(242, 197, 66, 0.12)" 
        }
      }}
      transition={{ type: "spring", stiffness: 350, damping: 22 }}
      className="relative bg-[#222224]/30 border rounded-2xl p-5 md:p-6 flex flex-col justify-between overflow-hidden cursor-pointer h-full select-none transition-colors duration-300"
    >
      {/* Dynamic mouse glow spotlight */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, rgba(242, 197, 66, 0.08), transparent 80%)`
        }}
      />

      {/* Shine reflection overlay */}
      <motion.div
        variants={{
          initial: { left: "-100%", opacity: 0 },
          hover: { left: "100%", opacity: 0.15 }
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-0 bottom-0 w-[50%] pointer-events-none bg-gradient-to-r from-transparent via-white to-transparent -skew-x-20 z-10"
      />

      <div className="relative z-10">
        {/* Header Block */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <motion.div 
              variants={{
                initial: { scale: 1, rotate: 0, backgroundColor: "#2a2a2c", borderColor: "#353537" },
                hover: { 
                  scale: 1.1, 
                  rotate: 5,
                  backgroundColor: "rgba(242, 197, 66, 0.12)",
                  borderColor: "rgba(242, 197, 66, 0.4)"
                }
              }}
              className="p-2.5 border rounded-xl text-gold-300 shadow-sm shrink-0 transition-colors duration-300"
            >
              {project.icon}
            </motion.div>
            <div>
              <span className="text-[9px] tracking-[0.25em] font-semibold text-gold-300 uppercase">
                {project.category}
              </span>
              <h3 className="font-sans text-sm lg:text-base font-bold text-white tracking-wide mt-0.5">
                {project.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Bullet Points */}
        <ul className="space-y-2.5 mb-6 pl-1">
          {project.features.map((feature, fIdx) => (
            <li key={fIdx} className="flex items-start gap-2.5 font-sans text-[11px] lg:text-xs text-gray-400 leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-300 mt-1.5 flex-shrink-0 shadow-[0_0_4px_#f2c542]" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer tags & links */}
      <div className="space-y-4 mt-auto relative z-10">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag, tIdx) => (
            <span
              key={tIdx}
              className="font-sans text-[9px] lg:text-[10px] text-gray-300 bg-[#2d2d2f] border border-white/5 px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="h-[1px] bg-white/5 w-full" />

        {project.githubLink ? (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-center text-[10px] font-semibold text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <span className="flex items-center gap-1">
              <GithubIcon size={12} />
              <span>GitHub Repository</span>
            </span>
            <motion.span
              variants={{
                initial: { x: 0, y: 0 },
                hover: { x: 2, y: -2 }
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ArrowUpRight size={12} className="text-gold-300" />
            </motion.span>
          </a>
        ) : (
          <div className="flex justify-between items-center text-[10px] font-semibold text-gray-500">
            <span className="flex items-center gap-1">
              <GithubIcon size={12} />
              <span>Repository Offline</span>
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<string>("All");

  const filterTabs = ["All", "Web Development", "Data Science"];

  const projectsList: ProjectItem[] = [
    {
      title: "Real-Time Bus Tracking System",
      category: "Web Development",
      icon: <Map className="text-gold-300" size={20} />,
      color: "gold-300",
      tags: ["HTML", "CSS", "Flask", "Python", "GPS Simulation"],
      features: [
        "Developed a real-time web application for bus tracking and route monitoring in small cities.",
        "Implemented simulated GPS tracking to display live, responsive bus location updates.",
        "Designed and built intuitive, fluid responsive interfaces using HTML5 and CSS3.",
        "Engineered Flask backend server routing for data pipelines and coordination.",
      ],
      githubLink: "https://github.com/Nithyashreegopal/bus-tracking-system",
    },
    {
      title: "Predictive Machine Maintenance",
      category: "Data Science",
      icon: <AlertTriangle className="text-gold-300" size={20} />,
      color: "gold-300",
      tags: ["Python", "Data Science", "Sensor Data", "IoT Alerting"],
      features: [
        "Built an end-to-end monitoring system to predict machinery failures using sensor-based data streams.",
        "Generated real-time health dashboards to display diagnostic parameters and fault risk levels.",
        "Implemented automated predictive alerts to flag mechanical anomalies before failures occur.",
      ],
    },
    {
      title: "NoteVault",
      category: "Web Development",
      icon: <FolderLock className="text-gold-300" size={20} />,
      color: "gold-300",
      tags: ["HTML", "CSS", "Flask", "SQLite", "Python", "Encryption"],
      features: [
        "Developed NoteVault, a secure and responsive web-based personal notebook system.",
        "Integrated user accounts with robust sign-up and authentication controls for record privacy.",
        "Designed responsive workspaces with features for searching, sorting, and editing notes dynamically.",
        "Engineered Flask routes coordinated with a SQLite relational database backend.",
      ],
      githubLink: "https://github.com/Nithyashreegopal/NoteVault",
    },
  ];

  // Filter projects list dynamically
  const filteredProjects =
    filter === "All"
      ? projectsList
      : projectsList.filter((project) => project.category === filter);

  return (
    <div className="space-y-6 lg:space-y-8 select-none">
      
      {/* Title Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#2d2d2f] pb-6 mb-8">
        
        {/* Title */}
        <div className="space-y-4 relative">
          <h2 className="font-sans text-xl lg:text-3xl font-bold text-white tracking-wide">
            Projects
          </h2>
          <div className="w-10 h-1 bg-gold-gradient rounded-full shadow-[0_0_8px_#f2c542]" />
        </div>

        {/* Dynamic Project Filter tabs */}
        <nav className="flex overflow-x-auto whitespace-nowrap gap-2 text-xs justify-start md:justify-end no-scrollbar px-1.5 md:px-0 pb-1">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`py-1.5 px-3.5 rounded-lg border transition-all cursor-pointer ${
                filter === tab
                  ? "text-gold-300 border-gold-300 bg-gold-300/5 font-semibold"
                  : "text-gray-400 border-transparent hover:text-white hover:border-[#383838]"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Projects Display Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: index * 0.05 }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

    </div>
  );
}
