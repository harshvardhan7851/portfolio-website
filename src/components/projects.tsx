"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
    <section id="projects" className="py-20 px-6 bg-white rounded-[3rem] max-w-6xl mx-auto shadow-[0_8px_30px_rgb(0,0,0,0.02)] my-20 p-12 md:p-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Selected Works</h2>
        <p className="text-muted-foreground">Click on any project to see detailed information.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioData.projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer bg-background rounded-3xl p-8 border border-border/50 hover:border-border hover:shadow-md transition-all flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-6">
              <Badge variant="secondary" className="rounded-full bg-white">{project.category}</Badge>
            </div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.name}</h3>
            <p className="text-muted-foreground line-clamp-3 mb-6 flex-grow">{cleanText(project.description)}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.techStack.slice(0, 3).map(tech => (
                <span key={tech} className="text-xs font-medium text-muted-foreground bg-white px-3 py-1 rounded-full">{tech}</span>
              ))}
              {project.techStack.length > 3 && (
                <span className="text-xs font-medium text-muted-foreground bg-white px-3 py-1 rounded-full">+{project.techStack.length - 3}</span>
              )}
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
                      <Badge key={tech} variant="outline" className="rounded-full bg-white px-4 py-1.5 text-sm">{tech}</Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-6 mt-auto">
                  <Button disabled={!selectedProject.githubUrl} className="rounded-full flex-1 h-12 text-base shadow-sm">
                    <Code className="w-4 h-4 mr-2" /> Source
                  </Button>
                  <Button disabled={!selectedProject.liveUrl} variant="outline" className="rounded-full flex-1 h-12 text-base shadow-sm bg-white">
                    <ExternalLink className="w-4 h-4 mr-2" /> Live
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
