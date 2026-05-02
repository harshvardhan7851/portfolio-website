"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-background px-4 py-2 rounded-full mb-8 border border-border/50"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">About Me</span>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl md:text-2xl font-medium leading-relaxed text-justify text-muted-foreground"
        >
          Motivated Computer Science (Data Science) student with hands-on experience in machine learning, backend development, and real-world AI projects. Skilled in building scalable applications using FastAPI, PostgreSQL, and NLP techniques. Passionate about solving practical problems through AI-driven systems and SaaS-based solutions.
        </motion.p>
      </div>
    </section>
  );
}
