"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Backend & Databases",
    skills: ["Python", "Flask", "PostgreSQL", "SQL", "Redis", "Celery", "Java", "C++", "C"]
  },
  {
    title: "Frontend",
    skills: ["HTML/CSS", "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Tailwind CSS", "Bootstrap 5"]
  },
  {
    title: "AI & Data",
    skills: ["Machine Learning", "Statistical Modeling", "NLP", "Google Gemini API", "Data Preprocessing"]
  },
  {
    title: "DevOps & Tools",
    skills: ["Git/GitHub", "Docker", "AWS", "Vercel", "RESTful APIs"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-foreground/[0.02]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-foreground/20 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background border border-foreground/10 rounded-3xl p-8 hover:border-foreground/30 transition-colors duration-300"
            >
              <h3 className="text-xl font-bold mb-6 text-foreground">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm font-medium bg-foreground/5 hover:bg-foreground text-foreground hover:text-background rounded-xl border border-foreground/10 hover:border-transparent transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
