"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

const projects = [
  {
    title: "Hospital Management System",
    date: "Jan 2026 – Feb 2026",
    description: "A secure, Role-Based Access Control (RBAC) platform. Features asynchronous task queueing for improved response time and a Single Page Application interface with cached data requests.",
    tech: ["Vue 3", "Flask", "Redis", "Celery", "PostgreSQL", "Bootstrap 5"],
    github: "#",
    live: "#",
  },
  {
    title: "Vehicle Parking System",
    date: "May 2025 – Jul 2025",
    description: "An MVC web application tracking parking allocation, dynamic pricing, and revenue reports. Includes secure data handling routes and an interactive real-time administrative dashboard.",
    tech: ["Flask", "SQL", "JavaScript", "Chart.js", "HTML/CSS", "Werkzeug"],
    github: "#",
    live: "#",
  },
  {
    title: "Civic & Career AI Portals",
    date: "Apr 2026 – May 2026",
    description: "Two distinct web applications built within a strict 48-hour deadline using Google Gemini APIs for natural language processing, including a civic rights query system.",
    tech: ["Google Gemini API", "Python", "NLP", "Web APIs"],
    github: "#",
    live: "#",
  },
  {
    title: "GreenPath (MInt-Athon Hackathon)",
    date: "Sep 2025 – Oct 2025",
    description: "Web application tracking accident zones and pollution levels across 50+ simulated city nodes using Google Maps APIs, with a smart advertising module for sustainable solutions.",
    tech: ["Google Maps API", "JavaScript", "Web Tech"],
    github: "#",
    live: "#",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Selected Projects</h2>
          <div className="w-20 h-1 bg-foreground/20 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col bg-background border border-foreground/10 rounded-3xl overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.05)] hover:-translate-y-2 transition-all duration-300"
            >
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-foreground/40">{project.date}</p>
                  </div>
                  <div className="flex gap-3">
                    <a href={project.github} className="p-2 bg-foreground/5 rounded-full hover:bg-foreground/10 transition-colors text-foreground/70 hover:text-foreground">
                      <FaGithub size={20} />
                    </a>
                    <a href={project.live} className="p-2 bg-foreground/5 rounded-full hover:bg-foreground/10 transition-colors text-foreground/70 hover:text-foreground">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-foreground/70 leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs font-semibold bg-foreground/5 text-foreground/80 rounded-full border border-foreground/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
