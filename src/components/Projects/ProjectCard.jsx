import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight, Folder } from "lucide-react";
import Badge from "../ui/Badge";

export default function ProjectCard({ project, onOpen }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35 }}
      whileHover={{ y: -6 }} // Lifts the whole card
      className={`group relative rounded-2xl border border-ink-200 dark:border-ink-700 bg-gradient-to-br from-white to-ink-50 dark:from-ink-900 dark:to-ink-950 p-6 flex flex-col overflow-hidden shadow-sm hover:shadow-xl hover:shadow-signal-400/10 dark:hover:shadow-signal-500/10 hover:border-signal-400 dark:hover:border-signal-500 transition-all duration-300 ${
        project.featured ? "md:col-span-1" : ""
      }`}
    >
      {/* 1. Top gradient line on hover */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-signal-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* 2. Subtle background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-signal-400/0 to-transparent group-hover:from-signal-400/5 dark:group-hover:from-signal-500/10 transition-all duration-500 pointer-events-none" />

      <div className="flex items-start justify-between gap-4 relative z-10">
        {/* 3. Project Folder Icon for hierarchy */}
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-ink-100 dark:bg-ink-800 text-ink-500 group-hover:bg-signal-400/10 group-hover:text-signal-500 dark:group-hover:text-signal-400 transition-colors duration-300">
            <Folder size={20} />
          </div>
          <h3 className="text-lg font-bold text-ink-950 dark:text-white group-hover:text-signal-600 dark:group-hover:text-signal-400 transition-colors duration-300">
            {project.title}
          </h3>
        </div>

        {/* 4. Enhanced Link Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="p-2 rounded-lg text-ink-400 hover:text-ink-950 dark:hover:text-white hover:bg-ink-100 dark:hover:bg-ink-800 transition-all duration-200"
            >
              <Github size={18} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="p-2 rounded-lg text-ink-400 hover:text-signal-500 dark:hover:text-signal-400 hover:bg-signal-400/10 dark:hover:bg-signal-500/10 transition-all duration-200"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* 5. Better Typography for description */}
      <p className="mt-4 text-sm leading-relaxed text-ink-500 dark:text-ink-300 relative z-10">
        {project.description}
      </p>

      {/* 6. Animated Tech Stagger */}
      <div className="mt-5 flex flex-wrap gap-2 relative z-10">
        {project.tech.slice(0, 5).map((t, i) => (
          <motion.div
            key={t}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            whileHover={{ scale: 1.1, y: -2 }}
          >
            <Badge>{t}</Badge>
          </motion.div>
        ))}
        {project.tech.length > 5 && (
          <Badge>+{project.tech.length - 5}</Badge>
        )}
      </div>

      {/* 7. Clickable Footer with Magic Arrow */}
      <button
        onClick={onOpen}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-700 dark:text-ink-200 hover:text-signal-600 dark:hover:text-signal-400 transition-colors self-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal-400 rounded relative z-10 group/btn"
      >
        View details 
        <ArrowUpRight 
          size={15} 
          className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" 
        />
      </button>
    </motion.article>
  );
}