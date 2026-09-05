import React from "react";
import { motion } from "framer-motion";
import { Award, ArrowUpRight, FileBadge } from "lucide-react";
import { certifications } from "../../data/certifications";

export default function Certifications() {
  return (
    <div className="mt-24">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-400 dark:text-ink-500 mb-6">
        Certifications
      </h3>
      <div className="grid sm:grid-cols-2 gap-5">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            whileHover={{ y: -4 }} // Lift the whole card
            className="group relative rounded-xl border border-ink-200 dark:border-ink-700 bg-gradient-to-br from-white to-ink-50 dark:from-ink-900 dark:to-ink-950 p-5 shadow-sm hover:shadow-xl hover:shadow-signal-400/10 dark:hover:shadow-signal-500/10 hover:border-signal-400 dark:hover:border-signal-500 transition-all duration-300 overflow-hidden cursor-default"
          >
            {/* Top gradient line on hover */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-signal-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Subtle background glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-signal-400/0 to-transparent group-hover:from-signal-400/5 dark:group-hover:from-signal-500/10 transition-all duration-500 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-start justify-between gap-4">
                {/* Icon with dynamic color fill */}
                <div className="shrink-0 h-10 w-10 rounded-lg bg-ink-100 dark:bg-ink-800 flex items-center justify-center text-ink-500 group-hover:bg-signal-400/10 group-hover:text-signal-500 dark:group-hover:bg-signal-500/10 dark:group-hover:text-signal-400 transition-colors duration-300">
                  <Award size={20} />
                </div>

                {/* Added decorative FileBadge icon that appears on hover */}
                <FileBadge 
                  size={18} 
                  className="text-ink-300 dark:text-ink-600 opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 group-hover:text-signal-500 dark:group-hover:text-signal-400" 
                />
              </div>

              <div className="min-w-0 mt-4">
                <h4 className="font-bold text-ink-950 dark:text-white text-sm group-hover:text-signal-600 dark:group-hover:text-signal-400 transition-colors duration-300">
                  {cert.title}
                </h4>
                <p className="text-xs text-ink-400 dark:text-ink-500 mt-0.5">
                  {cert.issuer}
                </p>
              </div>

              <p className="mt-3 text-sm text-ink-500 dark:text-ink-300 leading-relaxed">
                {cert.description}
              </p>

              {/* Animated Link with moving arrow */}
              <a
                href={encodeURI(cert.file)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-signal-600 dark:text-signal-400 hover:text-signal-700 dark:hover:text-signal-300 group/link transition-colors"
              >
                View certificate 
                <ArrowUpRight 
                  size={15} 
                  className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" 
                />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}