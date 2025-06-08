"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";

interface AnimatedWrapperProps {
  children: ReactNode;
}

export default function AnimatedWrapper({ children }: AnimatedWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
