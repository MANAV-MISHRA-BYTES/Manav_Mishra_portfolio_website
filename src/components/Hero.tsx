"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
              Hi, I'm Manav.
              <br />
              <span className="text-foreground/60">
                I build high-performance backend systems and AI architectures.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl leading-relaxed">
              Results-driven Full Stack Developer and dual-degree student (IIT Madras & IGNOU). 
              Specializing in scalable web applications, asynchronous database architecture, and statistical modeling.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="https://github.com/MANAV-MISHRA-BYTES"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background hover:scale-105 transition-transform duration-300 font-medium"
            >
              <FaGithub size={20} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/manav-mishra-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-foreground/20 hover:border-foreground/50 hover:bg-foreground/5 transition-all duration-300 font-medium"
            >
              <FaLinkedin size={20} />
              LinkedIn
            </a>
            <a
              href="mailto:manavmishra.dev@gmail.com"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-foreground/20 hover:border-foreground/50 hover:bg-foreground/5 transition-all duration-300 font-medium"
            >
              <Mail size={20} />
              Email
            </a>
          </div>
        </motion.div>

        {/* Right Content - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Subtle floating animation via framer-motion */}
          <motion.div
            animate={{ 
              y: [0, -15, 0],
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative w-72 h-72 sm:w-96 sm:h-96"
          >
            {/* Background blur/glow effect */}
            <div className="absolute inset-0 bg-foreground/5 rounded-full blur-3xl scale-110"></div>
            
            <div className="relative w-full h-full rounded-full overflow-hidden border border-foreground/10 shadow-2xl bg-foreground/5">
              {/* Using a placeholder gradient if no image is available. We can swap this for next/image when a real photo is ready. */}
              <div className="absolute inset-0 bg-gradient-to-tr from-foreground/10 to-transparent flex items-center justify-center">
                <span className="text-foreground/40 font-semibold text-2xl tracking-widest">PHOTO</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
