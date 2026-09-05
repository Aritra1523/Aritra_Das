import React from "react";
import { Mail, Linkedin, Github, Phone } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import ContactForm from "./ContactForm";

const links = [
  {
    icon: Mail,
    label: "daritra385@gmail.com",
    href: "mailto:daritra385@gmail.com",
  },
  {
    icon: Phone,
    label: "+91 95934 43777",
    href: "tel:+919593443777",
  },
  {
    icon: Linkedin,
    label: "linkedin.com/in/aritra-das-web-developer",
    href: "https://www.linkedin.com/in/aritra-das-web-developer/",
  },
  {
    icon: Github,
    label: "github.com/Aritra1523",
    href: "https://github.com/Aritra1523",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white dark:bg-ink-950">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <SectionHeading
          kicker="Contact"
          title="Have a project or opportunity in mind?"
          description="Whether it's a full-time role, a freelance project, or just a technical question — I read every message."
        />

        <div className="mt-14 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 rounded-lg border border-ink-200 dark:border-ink-700 bg-ink-50/50 dark:bg-ink-900/50 px-4 py-3.5 text-sm text-ink-700 dark:text-ink-200 hover:border-signal-400 hover:text-signal-600 dark:hover:text-signal-400 transition-colors"
              >
                <link.icon size={18} className="shrink-0" />
                <span className="truncate">{link.label}</span>
              </a>
            ))}
          </div>

          <div className="lg:col-span-3 rounded-2xl border border-ink-200 dark:border-ink-700 bg-ink-50/30 dark:bg-ink-900/30 p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
