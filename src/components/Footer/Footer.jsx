import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { navLinks } from "../../data/nav";

export default function Footer() {
  const handleClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-ink-200 dark:border-ink-800 bg-ink-50/50 dark:bg-ink-900/30">
      <div className="max-w-content mx-auto px-5 sm:px-8 py-12 grid sm:grid-cols-3 gap-8">
        <div>
          <p className="font-semibold text-ink-950 dark:text-white">Aritra Das</p>
          <p className="text-sm text-ink-500 dark:text-ink-400 mt-1">
            Full Stack Developer
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleClick(e, link.id)}
                  className="text-sm text-ink-500 dark:text-ink-400 hover:text-ink-950 dark:hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex sm:justify-end items-start gap-4">
          <a
            href="mailto:daritra385@gmail.com"
            aria-label="Email"
            className="text-ink-400 hover:text-ink-950 dark:hover:text-white transition-colors"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/aritra-das-web-developer/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-ink-400 hover:text-ink-950 dark:hover:text-white transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/Aritra1523"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-ink-400 hover:text-ink-950 dark:hover:text-white transition-colors"
          >
            <Github size={18} />
          </a>
        </div>
      </div>

      <div className="border-t border-ink-200 dark:border-ink-800">
        <p className="max-w-content mx-auto px-5 sm:px-8 py-5 text-xs text-ink-400 dark:text-ink-500">
          © 2026 Aritra Das. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
