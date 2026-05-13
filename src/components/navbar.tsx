"use client";

import { motion } from "framer-motion";

export function Navbar() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 p-4 sm:p-6"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center bg-background/80 backdrop-blur-md rounded-full px-4 sm:px-8 py-2 sm:py-4 shadow-[0_4px_30px_rgba(0,0,0,0.2)] border border-border/50">
        <div className="flex items-center gap-3 sm:gap-6">
          <button
            onClick={scrollToAbout}
            className="text-[10px] sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </button>
          <button
            onClick={scrollToProjects}
            className="text-[10px] sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Projects
          </button>
          <button
            onClick={scrollToContact}
            className="text-[10px] sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
          >
            Contact Me
          </button>
        </div>
        <div className="flex items-center gap-3 sm:gap-6 text-[10px] sm:text-sm font-medium text-muted-foreground">
          <a href="https://www.linkedin.com/in/harshvardhansinh-vaghela-7932672a8/" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
          <span className="text-border">/</span>
          <a href="https://github.com/harshvardhan7851" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
        </div>
      </div>
    </motion.nav>
  );
}
