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
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16"
        >
          Technologies & Tools
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 max-w-5xl mx-auto">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-start text-left group"
          >
            <div className="mb-6 bg-white p-4 rounded-2xl shadow-sm border border-border/30 group-hover:shadow-md group-hover:border-primary/20 group-hover:text-primary transition-all">
              {category.icon}
            </div>
            <h3 className="font-bold text-lg mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1.5 bg-white border border-border/50 rounded-full text-xs font-semibold text-foreground/80 shadow-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors cursor-default"
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
