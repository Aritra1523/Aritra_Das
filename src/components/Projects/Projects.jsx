import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects, filterCategories } from "../../data/projects";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.category.includes(filter));
  }, [filter]);

  return (
    <section id="projects" className="py-24 md:py-32 bg-white dark:bg-ink-950">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <SectionHeading
          kicker="Projects"
          title="Things I've built end to end."
          description="Each one solves a real problem, with authentication, data, and UI wired together — not just a landing page."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium border transition-colors ${
                filter === cat
                  ? "bg-ink-950 text-white border-ink-950 dark:bg-signal-400 dark:text-ink-950 dark:border-signal-400"
                  : "border-ink-200 dark:border-ink-700 text-ink-500 dark:text-ink-300 hover:border-ink-400 dark:hover:border-ink-500"
              }`}
              aria-pressed={filter === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={() => setActiveProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-ink-400">
            No projects in this category yet.
          </p>
        )}
      </div>

      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
