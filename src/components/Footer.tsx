"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-foreground/10 bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Let's build something scalable.
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto mb-10">
            Currently open for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
          
          <a
            href="mailto:manavmishra.dev@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300"
          >
            Say Hello <ArrowRight size={20} />
          </a>
        </motion.div>

        <div className="w-full h-px bg-foreground/10 mb-12"></div>

        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6">
          <p className="text-foreground/50 font-medium text-sm">
            © {new Date().getFullYear()} Manav Mishra. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="https://github.com/MANAV-MISHRA-BYTES" className="text-foreground/50 hover:text-foreground transition-colors">
              <span className="sr-only">GitHub</span>
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/manav-mishra-dev" className="text-foreground/50 hover:text-foreground transition-colors">
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:manavmishra.dev@gmail.com" className="text-foreground/50 hover:text-foreground transition-colors">
              <span className="sr-only">Email</span>
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
