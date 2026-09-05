import React from "react";
import { motion } from "framer-motion";
import { Layers, ArrowUpRight } from "lucide-react"; // Added icons for visual flair
import SectionHeading from "../ui/SectionHeading";
import { skillGroups } from "../../data/skills";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white dark:bg-ink-950 relative overflow-hidden">
      {/* Background decorative glow (Optional, adds depth) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-signal-400/5 dark:bg-signal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-content mx-auto px-5 sm:px-8 relative z-10">
        <SectionHeading
          kicker="About"
          title="A developer who ships, not just learns."
          description="I focus on turning ideas into working software — from the database schema up to the pixel on screen."
        />

        <div className="mt-14 grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-5 text-ink-600 dark:text-ink-300 leading-relaxed"
          >
            <p className="text-lg font-medium text-ink-800 dark:text-ink-100">
              I'm a full stack web developer with a Computer Science & Engineering background, currently building production-style applications across the MERN stack and Next.js.
            </p>
            <p>
              I specialize in taking a feature from requirement to deployment — designing the data model, building the API, and shipping a frontend that feels considered rather than assembled.
            </p>
            <p>
              Right now I'm deepening my backend and system-design skills while exploring how AI-assisted tooling fits into everyday development workflows.
            </p>
            <p>
              I'm looking for full-stack or frontend developer roles, and freelance projects, where I can own real features end to end.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 grid sm:grid-cols-2 gap-5"
          >
            {skillGroups.map((group, groupIndex) => (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                whileHover={{ y: -6 }} // Lifts the whole card up
                className="group relative rounded-2xl border border-ink-200 dark:border-ink-700 bg-gradient-to-br from-white to-ink-50 dark:from-ink-900 dark:to-ink-950 p-6 shadow-sm hover:shadow-xl hover:shadow-signal-400/10 dark:hover:shadow-signal-500/10 hover:border-signal-400 dark:hover:border-signal-500 transition-all duration-300 cursor-default overflow-hidden"
              >
                {/* Top gradient line on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-signal-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Floating Icon */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-ink-100 dark:bg-ink-800 text-ink-500 group-hover:bg-signal-400/10 group-hover:text-signal-500 dark:group-hover:text-signal-400 transition-colors duration-300">
                    <Layers size={20} />
                  </div>
                  <ArrowUpRight 
                    size={18} 
                    className="text-ink-300 dark:text-ink-600 opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 group-hover:text-signal-500 dark:group-hover:text-signal-400" 
                  />
                </div>

                <h3 className="font-bold text-ink-950 dark:text-white mb-1.5 text-lg">
                  {group.label}
                </h3>
                <p className="text-sm text-ink-500 dark:text-ink-400 mb-5 leading-relaxed">
                  {group.blurb}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, itemIndex) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 + (itemIndex * 0.05) }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="text-xs font-mono px-2.5 py-1.5 rounded-md border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-900 text-ink-600 dark:text-ink-300 hover:bg-signal-400/10 hover:border-signal-400/50 hover:text-signal-600 dark:hover:text-signal-400 transition-all duration-200 cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}