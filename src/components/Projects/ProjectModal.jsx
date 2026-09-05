import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";
import Badge from "../ui/Badge";

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-ink-950/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative w-full sm:max-w-2xl max-h-[90vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-700 p-6 sm:p-8"
      >
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-5 top-5 text-ink-400 hover:text-ink-950 dark:hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal-400 rounded"
        >
          <X size={20} />
        </button>

        <h3
          id="project-modal-title"
          className="text-2xl font-semibold text-ink-950 dark:text-white pr-8"
        >
          {project.title}
        </h3>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.category.map((c) => (
            <span
              key={c}
              className="text-xs font-medium px-2 py-1 rounded-full bg-signal-400/15 text-signal-600 dark:text-signal-400"
            >
              {c}
            </span>
          ))}
        </div>

        <div className="mt-6 space-y-5">
          <div>
            <h4 className="text-sm font-semibold text-ink-400 dark:text-ink-500 uppercase tracking-wide mb-1.5">
              The problem
            </h4>
            <p className="text-sm leading-relaxed text-ink-600 dark:text-ink-300">
              {project.problem}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-ink-400 dark:text-ink-500 uppercase tracking-wide mb-1.5">
              What it does
            </h4>
            <p className="text-sm leading-relaxed text-ink-600 dark:text-ink-300">
              {project.description}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-ink-400 dark:text-ink-500 uppercase tracking-wide mb-2">
              Key features
            </h4>
            <ul className="space-y-1.5">
              {project.features.map((f) => (
                <li
                  key={f}
                  className="text-sm text-ink-600 dark:text-ink-300 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-signal-500"
                >
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-ink-400 dark:text-ink-500 uppercase tracking-wide mb-2">
              Tech stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-ink-300/60 dark:border-ink-600 px-4 py-2 text-sm font-medium text-ink-900 dark:text-white hover:border-signal-400 hover:text-signal-600 dark:hover:text-signal-300 transition-colors"
            >
              <Github size={16} /> View code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-signal-400 text-ink-950 px-4 py-2 text-sm font-medium hover:bg-signal-300 transition-colors"
            >
              <ExternalLink size={16} /> Live demo
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}
