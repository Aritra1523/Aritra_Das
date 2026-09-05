import React, { useState } from "react";
import { Menu, X, Moon, Sun, FileDown, Link } from "lucide-react";
import { navLinks } from "../../data/nav";
import { useActiveSection, useScrollProgress, useScrolled } from "../../hooks/useActiveSection";
import { useTheme } from "../../context/ThemeContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(20);
  const progress = useScrollProgress();
  const active = useActiveSection(navLinks.map((l) => l.id));
  const { theme, toggleTheme } = useTheme();

  const handleClick = (e, id) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div
        className="h-[2px] bg-signal-400 origin-left transition-transform duration-150"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
      <nav
        className={`transition-all duration-300 border-b ${
          scrolled
            ? "bg-white/80 dark:bg-ink-950/80 backdrop-blur-md border-ink-200/60 dark:border-ink-800/60 py-3"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="max-w-content mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Enhanced Logo Section */}
          <a
            href="#home"
            onClick={(e) => handleClick(e, "home")}
            className="group flex items-center gap-2.5 font-bold text-ink-950 dark:text-white text-lg tracking-tight"
          >
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-signal-400 to-signal-600 dark:from-signal-500 dark:to-signal-600 flex items-center justify-center text-white text-xl font-extrabold shadow-md shadow-signal-400/20 group-hover:shadow-signal-400/40 group-hover:scale-110 transition-all duration-300">
              A
            </div>
            <span className="relative">
              Aritra Das
              {/* Subtle underline animation */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-signal-400 dark:bg-signal-500 transition-all duration-300 group-hover:w-full" />
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.id} className="relative group">
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleClick(e, link.id)}
                  className={`relative text-sm font-medium transition-colors py-2 ${
                    active === link.id
                      ? "text-signal-500 dark:text-signal-400"
                      : "text-ink-500 dark:text-ink-300 hover:text-ink-950 dark:hover:text-white"
                  }`}
                  aria-current={active === link.id ? "true" : undefined}
                >
                  {link.label}
                  {/* Animated underline for links */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-signal-400 dark:bg-signal-500 transition-all duration-300 ${
                      active === link.id
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="p-2 rounded-md text-ink-500 dark:text-ink-300 hover:text-ink-950 dark:hover:text-white hover:bg-ink-100 dark:hover:bg-ink-800 transition-all duration-200 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal-400"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href="/Aritra Das CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg border border-ink-300/50 dark:border-ink-600 px-4 py-2 text-sm font-medium text-ink-900 dark:text-white hover:bg-signal-400 hover:text-white dark:hover:bg-signal-500 dark:hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-signal-400/30 transition-all duration-300"
            >
              <FileDown size={16} className="group-hover:translate-y-0.5 transition-transform" /> Resume
            </a>
          </div>

          <button
            className="md:hidden p-2 text-ink-900 dark:text-white"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-4 px-5 pb-5 border-t border-ink-200/60 dark:border-ink-800/60 bg-white/95 dark:bg-ink-950/95">
            <ul className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleClick(e, link.id)}
                    className={`block py-3 text-base font-medium ${
                      active === link.id
                        ? "text-signal-500 dark:text-signal-400"
                        : "text-ink-700 dark:text-ink-200"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3 mt-3">
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 text-sm font-medium text-ink-600 dark:text-ink-300 py-2"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                {theme === "dark" ? "Light mode" : "Dark mode"}
              </button>
              <a
                href="/Aritra Das CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-signal-600 dark:text-signal-400 py-2"
              >
                <FileDown size={16} /> Resume
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}