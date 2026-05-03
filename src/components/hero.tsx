"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 pt-32 pb-20 overflow-hidden">
      {/* Background Image & Glow Effects */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        {/* Replicating the elliptical glow centered around the button area from the reference image */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_60%,rgba(56,189,248,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(99,102,241,0.05),transparent_40%)]"></div>

        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-end justify-between relative z-10 gap-12 lg:px-12">

        <div className="flex flex-col items-start text-left max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            Harshvardhansinh <br className="hidden md:block" /> Vaghela
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl leading-relaxed"
          >
            AI/ML Developer building scalable applications, backend systems, and SaaS solutions.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:mb-2"
        >
          <Button
            onClick={scrollToContact}
            className="rounded-full px-8 py-6 text-lg font-semibold shadow-[0_0_40px_-12px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_-10px_rgba(255,255,255,0.15)] hover:scale-105 transition-all duration-300 active:scale-95"
          >
            Get in touch
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
