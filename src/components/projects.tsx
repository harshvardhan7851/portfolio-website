"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Code, ExternalLink } from "lucide-react";
import portfolioData from "@/data/portfolio_data.json";

const cleanText = (text: string) => {
  if (!text) return text;
  // Remove markdown bolding
  let cleaned = text.replace(/\*\*/g, "");
  // Remove emojis
  cleaned = cleaned.replace(/\p{Extended_Pictographic}/gu, "");
  // Clean up any weird leading spaces or dashes left behind
  return cleaned.replace(/^[\s\-\—]+/, "").trim();
};

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
        <div className="text-left">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">Selected Works</h2>
          <p className="text-xl text-muted-foreground max-w-xl">
            A collection of AI/ML models, scalable backends, and full-stack applications.
          </p>
        </div>
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest hidden md:block">
          Click to explore details
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {portfolioData.projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => setSelectedProject(project)}
            className="group relative cursor-pointer"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/10 to-primary/5 rounded-[2.5rem] blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative flex flex-col h-full bg-card/40 backdrop-blur-xl border border-border/50 rounded-[2.5rem] p-10 hover:border-border/80 transition-all duration-300">
              <div className="flex justify-between items-start mb-10">
                {/* <span className="px-4 py-1.5 rounded-full bg-secondary/80 border border-border/50 text-xs font-semibold tracking-wide uppercase text-muted-foreground">
                  {project.category}
                </span> */}
                {/* <div className="w-10 h-10 rounded-full bg-background border border-border/50 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <ExternalLink className="w-4 h-4" />
                </div> */}
              </div>

              <h3 className="text-3xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
                {project.name}
              </h3>

              <p className="text-lg text-muted-foreground leading-relaxed mb-10 flex-grow">
                {cleanText(project.description)}
              </p>

              <div className="flex flex-wrap gap-2.5">
                {project.techStack.slice(0, 4).map(tech => (
                  <span key={tech} className="text-xs font-semibold px-4 py-1.5 rounded-full bg-background/50 border border-border/30 text-foreground/80">
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-background/50 border border-border/30 text-muted-foreground">
                    +{project.techStack.length - 4}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="sm:max-w-5xl w-[95vw] rounded-[2rem] p-8 md:p-12 overflow-y-auto max-h-[90vh]">
          {selectedProject && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4">
              <div className="flex flex-col">
                <DialogHeader className="text-left">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="secondary" className="rounded-full bg-background border">{selectedProject.category}</Badge>
                  </div>
                  <DialogTitle className="text-4xl md:text-5xl font-bold leading-[1.1] mb-6">{selectedProject.name}</DialogTitle>
                  <DialogDescription className="text-lg text-foreground/70 leading-relaxed text-balance">
                    {cleanText(selectedProject.longDescription)}
                  </DialogDescription>
                </DialogHeader>
              </div>

              <div className="flex flex-col space-y-8 bg-background/50 rounded-3xl p-6 md:p-8 border border-border/50">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Key Features</h4>
                  <ul className="space-y-3">
                    {selectedProject.features.map((feature: string, i: number) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="text-primary mt-2 w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                        <span className="text-foreground/90 text-lg leading-relaxed">{cleanText(feature)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech: string) => (
                      <Badge key={tech} variant="outline" className="rounded-full bg-secondary text-foreground px-4 py-1.5 text-sm border-border/50">{tech}</Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-6 mt-auto">
                  {selectedProject.githubUrl ? (
                    <a 
                      href={selectedProject.githubUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className={cn(
                        buttonVariants({ variant: "default" }),
                        "rounded-full flex-1 h-12 text-base shadow-sm cursor-pointer flex items-center justify-center"
                      )}
                    >
                      <Code className="w-4 h-4 mr-2" /> Source
                    </a>
                  ) : (
                    <Button disabled className="rounded-full flex-1 h-12 text-base shadow-sm">
                      <Code className="w-4 h-4 mr-2" /> Source
                    </Button>
                  )}

                  {selectedProject.liveUrl ? (
                    <a 
                      href={selectedProject.liveUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className={cn(
                        buttonVariants({ variant: "outline" }),
                        "rounded-full flex-1 h-12 text-base shadow-sm bg-secondary border-border/50 hover:bg-secondary/80 cursor-pointer flex items-center justify-center"
                      )}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" /> Live
                    </a>
                  ) : (
                    <Button disabled variant="outline" className="rounded-full flex-1 h-12 text-base shadow-sm bg-secondary border-border/50">
                      <ExternalLink className="w-4 h-4 mr-2" /> Live
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
