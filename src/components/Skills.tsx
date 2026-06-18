"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, ShieldCheck, CheckCircle } from "lucide-react";

// Official brand SVG logos

const CLogo = () => (
  <svg viewBox="0 0 128 128" className="w-10 h-10">
    <path d="M117.5 33.5l-51-29.5c-2.8-1.6-6.2-1.6-9 0l-51 29.5C3.7 35.1 1.9 38.2 1.9 41.4v59c0 3.2 1.8 6.3 4.6 7.9l51 29.5c1.4.8 3 1.2 4.5 1.2s3.1-.4 4.5-1.2l51-29.5c2.8-1.6 4.6-4.7 4.6-7.9v-59c0-3.2-1.8-6.3-4.6-7.9z" fill="#A8B9CC"/>
    <path d="M64 21.2c-23.6 0-42.8 19.2-42.8 42.8s19.2 42.8 42.8 42.8c13.7 0 25.8-6.4 33.7-16.5l-14.1-10.7c-5 6.6-12.8 10.8-21.6 10.8-14.6 0-26.4-11.8-26.4-26.4S47.4 37.6 62 37.6c9 0 17 4.5 21.9 11.3l14.1-10.7C90.2 27.9 78 21.2 64 21.2z" fill="#ffffff"/>
  </svg>
);

const JavaScriptLogo = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10 rounded-md overflow-hidden">
    <path d="M0 0h24v24H0z" fill="#F7DF1E"/>
    <path d="M19.92 18.52c-.6 1.25-1.75 2.22-3.5 2.22-2.19 0-3.52-1.25-4.3-2.71l2.46-1.49c.5.91 1.09 1.64 1.85 1.64.76 0 1.22-.37 1.22-.95 0-.64-.52-.88-1.73-1.4l-.88-.38c-2.3-.99-3.79-2.26-3.79-5.07 0-3.08 2.27-5.12 5.38-5.12 2.24 0 3.99 1.13 4.8 3.04l-2.3 1.49c-.46-.85-1-1.3-1.62-1.3-.61 0-1 .34-1 .8 0 .55.41.77 1.43 1.21l.95.41c2.87 1.22 4.14 2.38 4.14 5.26 0 2.28-.97 3.95-2.9 4.6zM10.87 18.25c-.41.25-.86.37-1.37.37-.87 0-1.53-.43-1.8-1.2l-2.73 1.63c.75 1.58 2.34 2.45 4.53 2.45 3.2 0 5.07-1.91 5.07-4.91V7.12h-3.7v11.13z" fill="#000000"/>
  </svg>
);

const HtmlLogo = () => (
  <svg viewBox="0 0 512 512" className="w-10 h-10">
    <path fill="#E34F26" d="M71.5 450.3L37.7 72h436.5l-33.8 378.1L256 480z"/>
    <path fill="#EF652A" d="M256 448.2l117.2-32.5 28.5-318.5H256z"/>
    <path fill="#EBEBEB" d="M256 226.3h-56.9l-3.9-43.2H256v-41.8H149.8l11.7 126.8H256zM256 329.1l-.2.1-51.2-13.8-3.3-36.7h-42.2l6.5 73 89.9 24.9.5-.1z"/>
    <path fill="#FFF" d="M256 226.3v41.8h54.3l-5.1 57.3-49.2 13.3v43.2l88.2-24.5 1.2-13.3 10-117.8zM256 141.3v41.8h112.5l2-22.3 1.7-19.5z"/>
  </svg>
);

const CssLogo = () => (
  <svg viewBox="0 0 512 512" className="w-10 h-10">
    <path fill="#1572B6" d="M71.5 450.3L37.7 72h436.5l-33.8 378.1L256 480z"/>
    <path fill="#33A9DC" d="M256 448.2l117.2-32.5 28.5-318.5H256z"/>
    <path fill="#EBEBEB" d="M256 141.3h-112.5l3.7 41.8H256v-41.8zM256 226.3h-80.4l3.7 41.8H256v-41.8zM256 329.1l-.2.1-51.2-13.8-3.3-36.7h-42.2l6.5 73 89.9 24.9.5-.1z"/>
    <path fill="#FFF" d="M256 141.3v41.8h88.6l-3.7 41.8H256v41.8h56.9l-5.3 59.5-51.6 13.9v43.2l90.3-24.4 1-11.7 13.7-164.2.8-19.5-.8-22.3z"/>
  </svg>
);


const FlaskLogo = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10 text-white" fill="currentColor">
    <path d="M12 0a1 1 0 00-.7.3l-3 3a1 1 0 00-.3 1.1c.4 1.3 1.3 2.4 2.6 2.9v1.6C7.5 9.7 5 12.6 5 16c0 4.4 3.6 8 8 8s8-3.6 8-8c0-3.4-2.5-6.3-5.6-7.1V7.3c1.3-.5 2.2-1.6 2.6-2.9a1 1 0 00-.3-1.1l-3-3A1 1 0 0012 0zm0 22c-3.3 0-6-2.7-6-6 0-2.8 1.9-5.1 4.5-5.8v1.9c-1.4.6-2.5 1.9-2.5 3.4a4 4 0 108 0c0-1.5-1.1-2.8-2.5-3.4v-1.9c2.6.7 4.5 3 4.5 5.8 0 3.3-2.7 6-6 6zm1-13.7v2c1.7.4 3 1.9 3 3.7h2c0-2.8-2.1-5.1-5-5.7z"/>
  </svg>
);


const PowerBiLogo = () => (
  <svg viewBox="0 0 128 128" className="w-10 h-10">
    <path d="M96 28h16a4 4 0 0 1 4 4v92a4 4 0 0 1-4 4H96a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4z" fill="#F2C811"/>
    <path d="M56 60h16a4 4 0 0 1 4 4v60a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4z" fill="#E6AD12"/>
    <path d="M16 92h16a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V96a4 4 0 0 1 4-4z" fill="#D99212"/>
  </svg>
);

const GithubLogo = () => (
  <svg viewBox="0 0 128 128" className="w-10 h-10" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M64 8C33.1 8 8 33.1 8 64c0 24.7 16 45.7 38.3 53.1 2.8.5 3.8-1.2 3.8-2.7 0-1.3-.1-4.9-.1-9.6-15.6 3.4-18.9-7.5-18.9-7.5-2.5-6.5-6.2-8.2-6.2-8.2-5.1-3.5.4-3.4.4-3.4 5.6.4 8.6 5.8 8.6 5.8 5 8.6 13.2 6.1 16.4 4.7.5-3.6 2-6.1 3.5-7.5-12.4-1.4-25.5-6.2-25.5-27.7 0-6.1 2.2-11.1 5.8-15.1-.6-1.4-2.5-7.1.6-14.9 0 0 4.7-1.5 15.4 5.7a53.5 53.5 0 0 1 28 0c10.7-7.2 15.4-5.7 15.4-5.7 3.1 7.8 1.2 13.5.6 14.9 3.6 4 5.8 9 5.8 15.1 0 21.5-13.1 26.2-25.5 27.6 2 1.7 3.8 5.2 3.8 10.5 0 7.6-.1 13.7-.1 15.6 0 1.5 1 3.2 3.8 2.7C104 109.7 120 88.7 120 64c0-30.9-25.1-56-56-56z" fill="#FFFFFF"/>
  </svg>
);

const ColabLogo = () => (
  <svg viewBox="0 0 128 128" className="w-10 h-10">
    <path d="M72.4 48.7c-9.1 0-16.5 7.4-16.5 16.5s7.4 16.5 16.5 16.5 16.5-7.4 16.5-16.5-7.4-16.5-16.5-16.5zm-22.1.2c-9.1 0-16.5 7.4-16.5 16.5s7.4 16.5 16.5 16.5c9.1 0 16.5-7.4 16.5-16.5s-7.4-16.5-16.5-16.5z" fill="none" stroke="#F9AB00" strokeWidth="10" strokeMiterlimit="10"/>
    <path d="M50.3 35.8C34.7 35.8 22 48.5 22 64.1s12.7 28.3 28.3 28.3c8.9 0 16.9-4.1 22.1-10.6-5.2-6.5-13.2-10.6-22.1-10.6-9.1 0-16.5-7.4-16.5-16.5s7.4-16.5 16.5-16.5c8.9 0 16.9 4.1 22.1 10.6-5.2-6.5-13.2-10.6-22.1-10.6z" fill="#F9AB00"/>
    <path d="M77.7 92.4c15.6 0 28.3-12.7 28.3-28.3S93.3 35.8 77.7 35.8c-8.9 0-16.9 4.1-22.1 10.6 5.2 6.5 13.2 10.6 22.1 10.6 9.1 0 16.5 7.4 16.5 16.5s-7.4 16.5-16.5 16.5c-8.9 0-16.9-4.1-22.1-10.6 5.2 6.5 13.2 10.6 22.1 10.6z" fill="#E37400"/>
  </svg>
);


const DataAnalysisLogo = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10 text-gold-300" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
    <path d="M3 20h18" />
  </svg>
);


interface CertificateItem {
  title: string;
  issuer: string;
  description: string;
}

interface Technology {
  name: string;
  logo: React.ReactNode;
}

export default function Skills() {
  const technologies: Technology[] = [
    { name: "Python", logo: <Image src="/python.png" alt="Python" width={56} height={56} className="object-contain w-14 h-14" /> },
    { name: "C Language", logo: <CLogo /> },
    { name: "Java", logo: <Image src="/java.png" alt="Java" width={64} height={42} className="object-contain w-16 h-11" /> },
    { name: "JavaScript", logo: <JavaScriptLogo /> },
    { name: "HTML5", logo: <HtmlLogo /> },
    { name: "CSS3", logo: <CssLogo /> },
    { name: "PHP", logo: <Image src="/php-elephant.png" alt="PHP" width={42} height={42} className="object-contain w-11 h-11" /> },
    { name: "Flask", logo: <FlaskLogo /> },
    { name: "MySQL", logo: <Image src="/mysql.png" alt="MySQL" width={64} height={40} className="object-contain w-14 h-10" /> },
    { name: "Power BI", logo: <PowerBiLogo /> },
    { name: "GitHub", logo: <GithubLogo /> },
    { name: "Google Colab", logo: <ColabLogo /> },
    { name: "VS Code", logo: <Image src="/vscode.png" alt="VS Code" width={40} height={40} className="object-contain w-10 h-10" /> },
    { name: "Data Analysis", logo: <DataAnalysisLogo /> },
    { name: "Problem Solving", logo: <Image src="/problem-solving.png" alt="Problem Solving" width={42} height={42} className="object-contain w-11 h-11" /> },
  ];

  const certificates: CertificateItem[] = [
    {
      title: "Artificial Intelligence Fundamentals",
      issuer: "IBM SkillsBuild",
      description: "Mastered core artificial intelligence concepts, neural networks, machine learning algorithms, and AI ethics workflows (Issued Jan 2026).",
    },
    {
      title: "Introduction to Generative AI",
      issuer: "AWS Educate",
      description: "Gained foundational knowledge of Generative AI principles, Large Language Models (LLMs), real-world AI applications, and how AWS cloud infrastructure powers AI solutions.",
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL & IIT Kharagpur (SWAYAM)",
      description: "Earned an Elite certification (78% score) covering virtualization, cloud architecture models, resource provisioning, and security management frameworks.",
    },
    {
      title: "Introduction to Copilot for Startups",
      issuer: "Microsoft & Simplilearn",
      description: "Explored generative AI assistance models, prompting, and operational integration for startups.",
    },
    {
      title: "Python 101 for Data Science",
      issuer: "IBM Developer Skills Network",
      description: "Covered foundational Python syntax, modules, file handling, and introductory analysis structures.",
    },
    {
      title: "Power BI AI Tools",
      issuer: "Simplilearn",
      description: "Applied generative AI utilities and smart narratives inside Microsoft Power BI systems.",
    },
    {
      title: "Introduction to Internet of Things (IoT)",
      issuer: "NPTEL",
      description: "Studied sensor networks, communication protocols, cloud interfaces, and predictive analytics logic.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  } as const;

  return (
    <div className="relative py-2 px-1">
      {/* Background visual accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-gold-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="space-y-4 relative mb-8">
          <h2 className="font-sans text-xl lg:text-3xl font-bold text-white tracking-wide">
            My Skills
          </h2>
          <div className="w-10 h-1 bg-gold-gradient rounded-full shadow-[0_0_8px_#f2c542]" />
        </div>

        {/* Technologies Icon Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 20px rgba(242, 197, 66, 0.08)",
                borderColor: "rgba(242, 197, 66, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-black border border-white/5 p-5 rounded-2xl flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-black transition-all duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center">
                {tech.logo}
              </div>
              <span className="font-sans font-bold text-xs text-gray-300 text-center tracking-wide">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Progress Skill Bars Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6 pt-12"
        >
          <h3 className="font-sans text-lg lg:text-xl font-bold text-white tracking-wide text-center md:text-left">
            Proficiency Levels
          </h3>

          <div className="bg-[#222224]/50 border border-[#2d2d2f] p-6 rounded-3xl space-y-5 shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
            {[
              { name: "Python, C & Java Programming", value: 85 },
              { name: "Web (HTML, CSS, Flask)", value: 80 },
              { name: "Database (MySQL)", value: 75 },
              { name: "Data Analytics (Power BI)", value: 90 },
              { name: "Communication & Teamwork", value: 95 },
            ].map((skill, index) => (
              <div key={index} className="space-y-1.5">
                <div className="flex justify-between text-xs md:text-sm font-semibold text-gray-300">
                  <span>{skill.name}</span>
                  <span className="text-gold-300">{skill.value}%</span>
                </div>
                <div className="w-full h-1.5 bg-[#2d2d2f] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gold-gradient shadow-[0_0_8px_#f2c542]"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.value}%` }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.12 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-6 pt-12"
        >
          <h3 className="font-sans text-lg lg:text-xl font-bold text-white tracking-wide text-center md:text-left">
            Certifications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {certificates.map((cert, index) => {
              const floatDuration = 4 + (index % 3) * 1.5;
              const floatDelay = index * 0.15;

              return (
                <motion.div
                  key={index}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: floatDuration,
                    delay: floatDelay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    scale: 1.02,
                    y: -10,
                    transition: { duration: 0.15 },
                  }}
                  className="bg-[#222224] border border-[#2d2d2f] p-5 rounded-2xl flex flex-col justify-between group h-full shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:border-gold-300"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2.5 bg-[#2a2a2c] border border-[#353537] rounded-xl text-gold-300 shadow-sm shrink-0">
                        <Award size={18} />
                      </div>
                      <div className="flex items-center gap-1 text-[9px] text-gold-300 font-semibold tracking-wider bg-gold-950/20 px-2 py-0.5 rounded-md border border-gold-900/20">
                        <ShieldCheck size={9} />
                        <span>VERIFIED</span>
                      </div>
                    </div>

                    <span className="text-[9px] tracking-wider font-semibold text-gray-500 uppercase">
                      {cert.issuer}
                    </span>
                    
                    <h3 className="font-sans font-bold text-xs lg:text-sm text-white mt-0.5 mb-2 group-hover:text-gold-300 transition-colors">
                      {cert.title}
                    </h3>
                    
                    <p className="font-sans text-[11px] text-gray-400 leading-relaxed mb-4">
                      {cert.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500 group-hover:text-gray-300 transition-colors">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle size={11} className="text-gold-300" />
                      <span>Completion Badge</span>
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
