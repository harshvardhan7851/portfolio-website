"use client";

import { motion } from "framer-motion";
import { Code2, Database, BrainCircuit, Layout } from "lucide-react";

const skillCategories = [
  {
    title: "Programming & Core",
    icon: <Code2 className="w-6 h-6 text-primary" />,
    skills: ["Python", "Java", "Data Structures", "Algorithms"]
  },
  {
    title: "Frontend & Backend",
    icon: <Layout className="w-6 h-6 text-primary" />,
    skills: ["React", "Next.js", "FastAPI", "Tailwind CSS", "HTML", "CSS"]
  },
  {
    title: "AI / ML & Deep Learning",
    icon: <BrainCircuit className="w-6 h-6 text-primary" />,
    skills: ["TensorFlow", "Keras", "NLP", "Scikit-learn", "CNN", "Computer Vision"]
  },
  {
    title: "Databases & Tools",
    icon: <Database className="w-6 h-6 text-primary" />,
    skills: ["PostgreSQL", "MySQL", "Pandas", "Git", "GitHub", "Power BI"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-16 px-6 max-w-7xl mx-auto border-t border-border/10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Technologies & Tools</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group flex flex-col bg-card/40 backdrop-blur-xl border border-border/50 rounded-[1.5rem] p-8 hover:border-border/80 transition-all duration-300"
          >
            <div className="mb-8 w-12 h-12 bg-background border border-border/50 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:text-primary-foreground transition-all duration-500">
              {category.icon}
            </div>

            <h3 className="text-xl font-bold mb-5 tracking-tight group-hover:text-primary transition-colors duration-300">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-secondary/50 border border-border/30 rounded-full text-xs font-semibold text-foreground/80 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
