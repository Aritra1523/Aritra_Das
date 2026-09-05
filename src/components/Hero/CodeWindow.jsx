import React from "react";

const lines = [
  { n: 1, content: [["kw", "const"], ["pl", " developer "], ["op", "= "], ["pl", "{"]] },
  { n: 2, content: [["pl", "  name: "], ["str", "'Aritra Das'"], ["pl", ","]] },
  { n: 3, content: [["pl", "  role: "], ["str", "'Full Stack Developer'"], ["pl", ","]] },
  { n: 4, content: [["pl", "  stack: ["], ["str", "'React'"], ["pl", ", "], ["str", "'Next.js'"], ["pl", ","]] },
  { n: 5, content: [["pl", "    "], ["str", "'Node.js'"], ["pl", ", "], ["str", "'MongoDB'"], ["pl", "],"]] },
  { n: 6, content: [["pl", "  focus: "], ["str", "'clean architecture & UX'"]] },
  { n: 7, content: [["pl", "};"]] },
  { n: 8, content: [] },
  { n: 9, content: [["kw", "export default"], ["pl", " developer;"]] },
];

const tokenClass = {
  kw: "text-ember-500",
  str: "text-signal-500 dark:text-signal-400",
  op: "text-ink-400",
  pl: "text-ink-700 dark:text-ink-200",
};

export default function CodeWindow() {
  return (
    <div className="rounded-xl border border-ink-200 dark:border-ink-700 bg-ink-50 dark:bg-ink-900 shadow-card overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-ink-200 dark:border-ink-700 bg-ink-100/60 dark:bg-ink-800/60">
        <span className="h-3 w-3 rounded-full bg-ink-300 dark:bg-ink-600" />
        <span className="h-3 w-3 rounded-full bg-ink-300 dark:bg-ink-600" />
        <span className="h-3 w-3 rounded-full bg-ink-300 dark:bg-ink-600" />
        <span className="ml-3 text-xs font-mono text-ink-400 dark:text-ink-400">developer.js</span>
      </div>
      <pre className="p-5 font-mono text-[13px] leading-relaxed overflow-x-auto">
        <code>
          {lines.map((line) => (
            <div key={line.n} className="flex">
              <span className="select-none w-6 text-right pr-4 text-ink-300 dark:text-ink-600">
                {line.n}
              </span>
              <span>
                {line.content.length === 0 ? (
                  "\u00A0"
                ) : (
                  line.content.map(([type, text], i) => (
                    <span key={i} className={tokenClass[type]}>
                      {text}
                    </span>
                  ))
                )}
              </span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}
