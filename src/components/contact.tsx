"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from "lucide-react";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export function Contact() {
  const [status, setStatus] = React.useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    // Replace 'YOUR_ACCESS_KEY_HERE' with your actual Web3Forms access key
    formData.append("access_key", "0f295228-bbf8-4c24-a071-1f34d62fb19e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-6xl mx-auto border-t border-border/10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="text-left">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Let&apos;s Connect</h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

        {/* Left Column - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full bg-card/40 backdrop-blur-xl rounded-[2.5rem] p-10 md:p-14 border border-border/50 shadow-2xl shadow-primary/5"
        >
          <h3 className="text-2xl font-bold mb-10 tracking-tight">Send a message</h3>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-5">
                <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Your Name</label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="rounded-2xl bg-background/50 px-6 py-7 text-lg border-border/50 focus-visible:ring-primary/20 transition-all duration-300"
                />
              </div>

              <div className="space-y-5">
                <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Your Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="rounded-2xl bg-background/50 px-6 py-7 text-lg border-border/50 focus-visible:ring-primary/20 transition-all duration-300"
                />
              </div>
            </div>

            <div className="space-y-5">
              <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Message</label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                required
                className="rounded-2xl bg-background/50 px-6 py-5 min-h-[200px] text-lg resize-none border-border/50 focus-visible:ring-primary/20 transition-all duration-300"
              />
            </div>

            <Button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-2xl py-8 text-lg font-bold shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              {status === "sending" ? "Sending..." : status === "success" ? "Message Sent!" : <><Send className="w-5 h-5 mr-3" /> Send Message</>}
            </Button>

            {status === "error" && (
              <p className="text-destructive text-center font-medium mt-4">Something went wrong. Please try again.</p>
            )}
            {status === "success" && (
              <p className="text-primary text-center font-medium mt-4">Thanks for reaching out! I&apos;ll get back to you soon.</p>
            )}
          </form>
        </motion.div>

        {/* Right Column - Info and Socials */}
        <div className="flex flex-col gap-10">
          {/* Info Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full bg-card/40 backdrop-blur-xl rounded-[2.5rem] p-10 md:p-14 border border-border/50 flex-grow flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold mb-8 tracking-tight">Collaboration Areas</h3>
            <p className="text-muted-foreground text-xl leading-relaxed mb-10">
              I specialize in building intelligent, data-driven applications that solve real-world problems. Let&apos;s build something extraordinary together.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "AI/ML System Architecture",
                "Full-stack Web Ecosystems",
                "Scalable Backend Services",
                "SaaS Product Strategy"
              ].map((item) => (
                <div key={item} className="flex items-center gap-4 group">
                  <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors duration-300" />
                  <span className="text-foreground/80 font-medium text-lg">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Socials Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full bg-card/40 backdrop-blur-xl rounded-[2.5rem] p-10 border border-border/50"
          >
            <h3 className="text-xl font-bold mb-8 tracking-tight uppercase tracking-widest text-muted-foreground opacity-50">Find me on</h3>
            <div className="flex flex-wrap gap-5 items-center">
              {[
                { icon: <InstagramIcon className="w-7 h-7" />, href: "https://instagram.com" },
                { icon: <Mail className="w-7 h-7" />, href: "mailto:vaghelaharsh.7851@gmail.com" },
                { icon: <XIcon className="w-6 h-6" />, href: "https://x.com/hey_harsshh" },
                { icon: <LinkedinIcon className="w-7 h-7" />, href: "https://www.linkedin.com/in/harshvardhansinh-vaghela-7932672a8/" },
                { icon: <WhatsappIcon className="w-7 h-7" />, href: "https://wa.me/9725886699" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  className="p-4 bg-background/50 border border-border/30 rounded-2xl hover:bg-primary hover:text-primary-foreground hover:border-primary hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-border/10 flex flex-col sm:flex-row justify-between items-center text-base text-muted-foreground">
        <p>© {new Date().getFullYear()} Harshvardhansinh Vaghela. All rights reserved.</p>
        <div className="flex gap-8 mt-6 sm:mt-0">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors duration-300 font-medium">LinkedIn</a>
          <a href="https://github.com/harshvardhan7851" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors duration-300 font-medium">GitHub</a>
        </div>
      </div>
    </section>
  );
}
