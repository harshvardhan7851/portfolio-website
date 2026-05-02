"use client";

import { motion } from "framer-motion";

export function Navbar() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 p-6"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center bg-white/70 backdrop-blur-md rounded-full px-8 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-white/50">
        <div className="flex items-center gap-4">
          <button 
            onClick={scrollToContact} 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact Me
          </button>
        </div>
        <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
          <span className="text-border">/</span>
          <a href="https://github.com/harshvardhan7851" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
        </div>
      </div>
    </motion.nav>
  );
}
