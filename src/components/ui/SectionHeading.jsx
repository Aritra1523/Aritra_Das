import React from "react";
import { motion } from "framer-motion";

export default function SectionHeading({ kicker, title, description, align = "left" }) {
  const isCenter = align === "center";
  return (
    <div className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}>
      {kicker && (
        <p className="text-sm font-medium text-signal-500 dark:text-signal-400 mb-3">
          {kicker}
        </p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-950 dark:text-white"
      >
        {title}
      </motion.h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-500 dark:text-ink-300">
          {description}
        </p>
      )}
    </div>
  );
}
