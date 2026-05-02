"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Send } from "lucide-react";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert("Thanks for reaching out! I will get back to you soon.");
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="bg-white rounded-[3rem] w-full p-10 md:p-16 lg:p-24 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column - Text and Direct Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start text-left"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
              Let&apos;s build something great together.
            </h2>
            
            <p className="text-lg text-muted-foreground mb-12 max-w-md leading-relaxed">
              Have an idea for a project or just want to say hi? Fill out the form or reach out directly via email or WhatsApp.
            </p>

            <div className="flex flex-col gap-4 w-full sm:w-auto">
              <Button 
                variant="outline" 
                className="rounded-lg px-8 py-6 text-base w-full sm:w-auto bg-background shadow-sm"
                onClick={() => window.open("https://wa.me/919725886699", "_blank")}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full bg-background rounded-xl p-8 border border-border/50 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold ml-1">Your Name</label>
                <Input 
                  id="name" 
                  required 
                  className="rounded-lg bg-white px-5 py-6 text-base border-border/50 focus-visible:ring-primary/20"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold ml-1">Email Address</label>
                <Input 
                  id="email" 
                  type="email" 
                  required 
                  className="rounded-lg bg-white px-5 py-6 text-base border-border/50 focus-visible:ring-primary/20"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold ml-1">Project Details</label>
                <Textarea 
                  id="message" 
                  required 
                  className="rounded-lg bg-white px-5 py-5 min-h-[150px] text-base resize-none border-border/50 focus-visible:ring-primary/20"
                />
              </div>

              <Button type="submit" className="w-full rounded-lg py-6 text-base shadow-sm">
                <Send className="w-4 h-4 mr-2" /> Send Message
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-20 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground px-8">
        <p>© {new Date().getFullYear()} Harshvardhansinh Vaghela. All rights reserved.</p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
          <span>/</span>
          <a href="https://github.com/harshvardhan7851" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
        </div>
      </div>
    </section>
  );
}
