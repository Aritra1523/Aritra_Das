import React, { useEffect, useState } from "react";

const TYPING_SPEED = 80;
const DELETING_SPEED = 40;
const PAUSE_AFTER_TYPE = 1400;
const PAUSE_AFTER_DELETE = 300;

export default function RoleRotator({ roles }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState("typing"); // typing | pausing | deleting
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setText(roles[roleIndex]);
      return;
    }

    const currentWord = roles[roleIndex];
    let timeout;

    if (phase === "typing") {
      if (text.length < currentWord.length) {
        timeout = setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1));
        }, TYPING_SPEED);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), PAUSE_AFTER_TYPE);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), 0);
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(currentWord.slice(0, text.length - 1));
        }, DELETING_SPEED);
      } else {
        timeout = setTimeout(() => {
          setRoleIndex((i) => (i + 1) % roles.length);
          setPhase("typing");
        }, PAUSE_AFTER_DELETE);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, roleIndex, roles, reduceMotion]);

  return (
    <span className="inline-flex items-center" aria-live="polite">
      <span>{text}</span>
      <span
        className="ml-0.5 w-[2px] h-5 bg-signal-500 dark:bg-signal-400 animate-blink"
        aria-hidden="true"
      />
    </span>
  );
}
