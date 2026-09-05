import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Braces,
  FileCode2,
  Atom,
  Layers,
  Blocks,
  Boxes,
  Palette,
  Server,
  Network,
  ShieldCheck,
  KeyRound,
  Database,
  Table2,
  GitBranch,
  Github,
  Send,
  AppWindow,
  Cloud,
} from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { skillGroups } from "../../data/skills";

const iconMap = {
  HTML5: Code2,
  CSS3: Palette,
  JavaScript: Braces,
  React: Atom,
  "Next.js": Layers,
  TypeScript: FileCode2,
  "Tailwind CSS": Palette,
  "Redux Toolkit": Blocks,
  Zustand: Boxes,
  "Node.js": Server,
  "Express.js": Network,
  "REST APIs": Network,
  JWT: KeyRound,
  Authentication: ShieldCheck,
  MongoDB: Database,
  Mongoose: Database,
  MySQL: Table2,
  SQL: Table2,
  Git: GitBranch,
  GitHub: Github,
  Postman: Send,
  "VS Code": AppWindow,
  Vercel: Cloud,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-ink-50/50 dark:bg-ink-900/30">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <SectionHeading
          kicker="Skills"
          title="The stack I build with day to day."
          description="Tools I reach for consistently, grouped by where they sit in an application."
        />

        <div className="mt-14 space-y-10">
          {skillGroups.map((group) => (
            <div key={group.id}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-400 dark:text-ink-500 mb-4">
                {group.label}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {group.items.map((item, i) => {
                  const Icon = iconMap[item] || Code2;
                  return (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.35, delay: i * 0.03 }}
                      whileHover={{
                        scale: 1.05,
                        y: -4,
                        transition: { duration: 0.2 }
                      }}
                      className="group relative flex items-center gap-3 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-900 px-4 py-3.5 transition-all duration-300 hover:border-signal-400 dark:hover:border-signal-500 hover:shadow-lg hover:shadow-signal-400/10 dark:hover:shadow-signal-500/10 hover:bg-ink-50 dark:hover:bg-ink-800 cursor-pointer"
                    >
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-signal-400/5 to-transparent dark:from-signal-500/10" />
                      
                      <Icon
                        size={18}
                        className="text-ink-400 group-hover:text-white dark:group-hover:text-white transition-all duration-300 shrink-0 group-hover:scale-110 group-hover:rotate-6"
                      />
                      <span className="text-sm font-medium text-ink-800 dark:text-ink-200 group-hover:text-white transition-colors duration-300">
                        {item}
                      </span>
                      
                      {/* Decorative bottom border on hover */}
                      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-signal-400 dark:bg-signal-500 transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4" />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}