"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Calendar, Heart, ChevronDown, ChevronUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const contactItems = [
    {
      icon: <Mail size={15} className="text-gold-300" />,
      label: "Email",
      value: "nithyashreegopal2006@gmail.com",
      link: "mailto:nithyashreegopal2006@gmail.com",
    },
    {
      icon: <Phone size={15} className="text-gold-300" />,
      label: "Phone",
      value: "+91 95666 83690",
      link: "tel:+919566683690",
    },
    {
      icon: <Calendar size={15} className="text-gold-300" />,
      label: "Birthday",
      value: "04 August 2006",
    },
    {
      icon: <MapPin size={15} className="text-gold-300" />,
      label: "Location",
      value: "Karur, Tamil Nadu",
    },
    {
      icon: <Heart size={15} className="text-gold-300" />,
      label: "Hobbies",
      value: "Chess, Poster Designing",
    },
  ];

  return (
    <aside className="glass-card p-6 lg:p-5 xl:p-7 rounded-3xl w-full lg:w-[300px] xl:w-[330px] lg:h-full flex flex-col items-center shrink-0 transition-all duration-350 z-20 lg:overflow-y-auto no-scrollbar">
      
      {/* Sidebar Header (Always Visible) */}
      <div className="flex flex-row lg:flex-col items-center lg:items-center justify-between lg:justify-center w-full gap-4">
        
        {/* Profile Circle with Modern Sweeping Glow Outline */}
        <div className="relative w-[90px] h-[90px] lg:w-[110px] lg:h-[110px] xl:w-[130px] xl:h-[130px] shrink-0 my-2 lg:my-3 select-none flex items-center justify-center">
          {/* Ambient background gold glow */}
          <div className="absolute inset-0 rounded-full bg-gold-400/5 blur-[15px] pointer-events-none" />
          
          {/* Outer Orbit (Clockwise sweeping gold glow line) */}
          <div className="absolute -inset-[4px] rounded-full bg-[conic-gradient(from_0deg,#dbbf94,transparent_50%)] animate-[spin_6s_linear_infinite] pointer-events-none" />

          {/* Inner Orbit (Counter-clockwise sweeping gold glow line) */}
          <div className="absolute -inset-[4px] rounded-full bg-[conic-gradient(from_180deg,#dbbf94,transparent_50%)] animate-[spin_8s_linear_infinite_reverse] pointer-events-none opacity-80" />

          {/* Image Container (solid background z-10 covers center of conic gradient, leaving a thin outer sweeping edge) */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-[2.5px] border-[#252526] bg-[#1e1e1f] z-10">
            <Image
              src="/profile.jpg"
              alt="Nithyashree G V"
              fill
              sizes="(max-width: 768px) 180px, 300px"
              quality={95}
              priority
              className="object-cover scale-105"
            />
          </div>
        </div>

        {/* Title Details */}
        <div className="text-left lg:text-center flex-grow lg:flex-grow-0 space-y-1.5 min-w-0">
          <h1 className="font-sans font-bold text-base lg:text-xl text-white tracking-wide truncate" title="Nithyashree G V">
            Nithyashree G V
          </h1>
          
          <div className="inline-block text-[9px] lg:text-[10px] font-medium tracking-wider text-gray-300 uppercase bg-[#2b2b2c] px-3 py-1.5 rounded-lg border border-border-card">
            AI & DS Student
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden flex p-2 rounded-xl bg-[#2b2b2c] border border-border-card text-gold-300 hover:bg-gold-300/10 transition-colors"
        >
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

      </div>

      {/* Collapsible Contacts Section */}
      <div
        className={`w-full transition-all duration-350 overflow-hidden lg:max-h-[1000px] ${
          isOpen ? "max-h-[600px] opacity-100 mt-5" : "max-h-0 opacity-0 lg:opacity-100 lg:max-h-[1000px] lg:mt-5"
        }`}
      >
        <div className="h-[1px] bg-border-card w-full mb-5" />

        {/* Contacts Grid */}
        <ul className="space-y-3 xl:space-y-3.5 w-full">
          {contactItems.map((item, index) => (
            <li key={index} className="flex items-center gap-3.5 text-left text-xs">
              <div className="p-2.5 icon-box-reference rounded-xl shrink-0">
                {item.icon}
              </div>
              <div className="min-w-0 flex-grow">
                <p className="text-[9px] text-gray-500 font-bold tracking-wider uppercase">{item.label}</p>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-gray-300 hover:text-gold-300 transition-colors font-medium block truncate"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-gray-300 font-medium truncate">{item.value}</p>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className="h-[1px] bg-border-card w-full my-5" />

        {/* Social Icons row */}
        <div className="flex justify-center gap-3 w-full">
          <a
            href="https://github.com/Nithyashreegopal"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-[#2b2b2c] hover:bg-gold-300/10 border border-border-card hover:border-gold-300/30 rounded-xl text-gray-400 hover:text-gold-300 transition-all"
            title="GitHub"
          >
            <GithubIcon size={14} />
          </a>
          <a
            href="https://linkedin.com/in/nithyashree-gv-42905b323"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-[#2b2b2c] hover:bg-gold-300/10 border border-border-card hover:border-gold-300/30 rounded-xl text-gray-400 hover:text-gold-300 transition-all"
            title="LinkedIn"
          >
            <LinkedinIcon size={14} />
          </a>
        </div>

      </div>

    </aside>
  );
}
