"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const variants = {
  primary:
    "bg-accent text-white hover:bg-accent/90 border-transparent",
  secondary:
    "bg-background-secondary text-text-primary hover:bg-background-secondary/80 border-transparent",
  outline:
    "bg-transparent text-text-primary border-text-primary/30 hover:border-accent hover:text-accent",
  ghost:
    "bg-transparent text-text-primary hover:text-accent border-transparent",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  href,
  className = "",
  disabled = false,
  type = "button",
}: ButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center
    font-medium tracking-wide uppercase
    border rounded-sm
    transition-all duration-300 ease-out
    disabled:opacity-50 disabled:cursor-not-allowed
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `;

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={baseClasses}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={baseClasses}
    >
      {children}
    </motion.button>
  );
}
