"use client";
import React from "react";
import { motion } from "motion/react";

export function Reveal({
  as: Component = "div",
  children,
  className,
  y = 24,
  delay = 0,
  duration = 0.6,
  once = true,
  stagger = 0,
}) {
  const variants = {
    hidden: { opacity: 0, y },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
        when: stagger > 0 ? "beforeChildren" : undefined,
        staggerChildren: stagger > 0 ? stagger : undefined,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.3 }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, delay = 0, duration = 0.5 }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 14 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
