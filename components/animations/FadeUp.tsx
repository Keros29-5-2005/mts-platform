"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type FadeUpProps = {
  children: ReactNode;
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function FadeUp({
  children,
}: FadeUpProps) {
  return (
    <motion.div variants={itemVariants}>
      {children}
    </motion.div>
  );
}