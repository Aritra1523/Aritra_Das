import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { journey } from "../../data/journey";
import Certifications from "../Certifications/Certifications";

export default function Journey() {
  return (
    <section id="journey" className="py-24 md:py-32 bg-ink-50/50 dark:bg-ink-900/30">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <SectionHeading
          kicker="Journey"
          title="How I got here."
          description="No fabricated job history — just the real path from coursework to shipped software."
        />

        <div className="mt-14 relative pl-8 sm:pl-10">
          <div
            className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-ink-200 dark:bg-ink-700"
            aria-hidden="true"
          />
          <ol className="space-y-10">
            {journey.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative"
              >
                <span
                  className="absolute -left-8 sm:-left-10 top-1 h-3.5 w-3.5 rounded-full border-2 border-signal-400 bg-white dark:bg-ink-950"
                  aria-hidden="true"
                />
                <p className="text-xs font-mono text-signal-600 dark:text-signal-400 mb-1">
                  {step.year}
                </p>
                <h3 className="text-lg font-semibold text-ink-950 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500 dark:text-ink-300 max-w-xl">
                  {step.detail}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>

        <Certifications />
      </div>
    </section>
  );
}
