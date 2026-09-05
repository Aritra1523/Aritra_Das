import React from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-400 disabled:opacity-50 disabled:cursor-not-allowed";

const variants = {
  primary:
    "bg-signal-400 text-ink-950 hover:bg-signal-300 shadow-card",
  secondary:
    "border border-ink-300/40 dark:border-ink-600 text-ink-900 dark:text-white hover:border-signal-400 hover:text-signal-600 dark:hover:text-signal-300",
  ghost:
    "text-ink-500 dark:text-ink-300 hover:text-ink-950 dark:hover:text-white",
};

const Button = React.forwardRef(
  ({ as: Comp = "button", variant = "primary", className = "", children, ...props }, ref) => {
    return (
      <Comp
        ref={ref}
        className={`${base} ${variants[variant] || variants.primary} ${className}`}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

export default Button;
