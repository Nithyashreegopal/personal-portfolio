"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, BarChart3, Brain, TrendingUp } from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: <Brain className="text-gold-300" size={24} />,
      title: "AI & Machine Learning",
      description: "Developing intelligent systems and predictive models using AI and machine learning.",
    },
    {
      icon: <BarChart3 className="text-gold-300" size={24} />,
      title: "Data Analytics",
      description: "Analyzing complex datasets to uncover insights and support data-driven decisions.",
    },
    {
      icon: <TrendingUp className="text-gold-300" size={24} />,
      title: "Power BI Dashboarding",
      description: "Creating dynamic dashboards and visual reports for effective business intelligence.",
    },
    {
      icon: <Globe className="text-gold-300" size={24} />,
      title: "Full Stack Development",
      description: "Building responsive and scalable web applications with modern development technologies.",
    },
  ];

  return (
    <div className="space-y-6 lg:space-y-8 select-none">
      
      {/* Intro Summary Header */}
      <div className="space-y-4 relative">
        <h2 className="font-sans text-xl lg:text-3xl font-bold text-white tracking-wide">
          About Me
        </h2>
        <div className="w-10 h-1 bg-gold-gradient rounded-full shadow-[0_0_8px_#f2c542]" />
        
        <p className="font-sans text-xs lg:text-sm text-gray-400 leading-relaxed pt-2 max-w-4xl">
          I am an Artificial Intelligence and Data Science undergraduate at{" "}
          <span className="text-white font-medium">M. Kumarasamy College of Engineering</span>, Karur. 
          I specialize in writing Python algorithms, creating interactive dashboard visualizations in Power BI, 
          and building simulated IoT platforms like real-time transit telemetry systems. I am passionate about 
          bridging software engineering and advanced data analysis to build predictive systems for real-world projects.
        </p>
      </div>

      {/* Pillars Section */}
      <div className="space-y-6 pt-2">
        <h3 className="font-sans text-lg lg:text-xl font-bold text-white tracking-wide">
          What I&apos;m Doing
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -3, transition: { duration: 0.15 } }}
              className="bg-[#222224] border border-[#2d2d2f] p-5 rounded-2xl flex gap-4 items-start shadow-[0_4px_15px_rgba(0,0,0,0.1)]"
            >
              <div className="p-3 bg-[#2a2a2c] border border-[#353537] rounded-xl text-gold-300 shrink-0 mt-0.5 shadow-sm">
                {pillar.icon}
              </div>
              <div className="space-y-1">
                <h4 className="font-sans font-bold text-sm text-white">
                  {pillar.title}
                </h4>
                <p className="font-sans text-[11px] lg:text-xs text-gray-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}
