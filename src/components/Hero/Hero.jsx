import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, FileDown } from "lucide-react";
import RoleRotator from "./RoleRotator";
import CodeWindow from "./CodeWindow";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-white dark:bg-ink-950"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4] dark:opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          color: "rgb(148 163 184 / 0.25)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[420px] w-[420px] rounded-full bg-signal-400/20 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative max-w-content mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-ink-200 dark:border-ink-700 bg-ink-50/80 dark:bg-ink-900/80 px-3 py-1.5 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-signal-500" />
            </span>
            <span className="text-xs font-medium text-ink-600 dark:text-ink-300">
              Available for full-time roles & freelance work
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold tracking-tight leading-[1.1] text-ink-950 dark:text-white"
          >
            Aritra Das builds scalable, modern web experiences.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg font-medium text-signal-600 dark:text-signal-400 h-8"
          >
            <RoleRotator
              roles={[
                "Full Stack Developer",
                "React Developer",
                "MERN Stack Developer",
                "Frontend Engineer",
              ]}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 text-base leading-relaxed text-ink-500 dark:text-ink-300 max-w-lg"
          >
            I build responsive, scalable web applications with React,
            Next.js, Node.js, Express and MongoDB — focused on clean
            architecture, performance, and interfaces people enjoy using.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-lg bg-signal-400 text-ink-950 px-5 py-2.5 text-sm font-medium hover:bg-signal-300 transition-colors shadow-card"
            >
              View My Work <ArrowRight size={16} />
            </a>
            <a
              href="/Aritra Das CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-ink-300/60 dark:border-ink-600 px-5 py-2.5 text-sm font-medium text-ink-900 dark:text-white hover:border-signal-400 hover:text-signal-600 dark:hover:text-signal-300 transition-colors"
            >
              <FileDown size={16} /> Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex items-center gap-5"
          >
            <a
              href="https://github.com/Aritra1523"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-ink-400 hover:text-ink-950 dark:hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/aritra-das-web-developer/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-ink-400 hover:text-ink-950 dark:hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:daritra385@gmail.com"
              aria-label="Send an email"
              className="text-ink-400 hover:text-ink-950 dark:hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="hidden md:block"
        >
          <CodeWindow />
        </motion.div>
      </div>
    </section>
  );
}
