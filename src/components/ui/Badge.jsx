import React from "react";

export default function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-md border border-ink-300/40 dark:border-ink-600 bg-ink-50/60 dark:bg-ink-800/60 px-2.5 py-1 text-xs font-mono text-ink-600 dark:text-ink-300 ${className}`}
    >
      {children}
    </span>
  );
}
