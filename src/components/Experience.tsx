"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Calendar, Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "AI/ML Intern (Microsoft Elevate Program)",
    company: "AICTE",
    date: "Jan 2026 – Feb 2026",
    description: [
      "Completed an intensive 8-week work-based learning program focusing on Agile software development and programming fundamentals.",
      "Programmed a 'Mental Health Companion Chatbot' using Python and RESTful APIs, successfully processing and responding to over 100 simulated user queries with low latency."
    ]
  },
  {
    id: 2,
    role: "Machine Learning Intern (IBM SkillBuild)",
    company: "AICTE",
    date: "Dec 2025 – Jan 2026",
    description: [
      "Finished a 40-hour Artificial Intelligence and Machine Learning training track, learning foundational concepts in data modeling and statistics.",
      "Built and deployed a capstone machine learning model, applying data preprocessing techniques to clean and analyze datasets of over 1,000 records."
    ]
  }
];

export default function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-foreground/[0.02]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Experience & Training</h2>
          <div className="w-20 h-1 bg-foreground/20 rounded-full"></div>
        </motion.div>

        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-foreground/10 before:to-transparent">
          {experiences.map((exp, index) => {
            const isExpanded = expandedId === exp.id;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                {/* Timeline dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-foreground text-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <Briefcase size={16} />
                </div>

                {/* Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                  <div
                    onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                    className={`cursor-pointer bg-background p-6 rounded-2xl border transition-all duration-300 shadow-sm hover:shadow-md
                      ${isExpanded ? 'border-foreground/20' : 'border-foreground/5'}`}
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-foreground">{exp.role}</h3>
                        <p className="text-foreground/60 font-medium mt-1">{exp.company}</p>
                      </div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-2 bg-foreground/5 rounded-full shrink-0"
                      >
                        <ChevronDown size={16} className="text-foreground/70" />
                      </motion.div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-foreground/50 mt-3">
                      <Calendar size={14} />
                      <span>{exp.date}</span>
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <ul className="mt-5 space-y-3 pt-5 border-t border-foreground/10">
                            {exp.description.map((item, i) => (
                              <li key={i} className="text-foreground/80 leading-relaxed text-sm sm:text-base flex items-start">
                                <span className="mr-3 text-foreground/40 mt-1.5">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
