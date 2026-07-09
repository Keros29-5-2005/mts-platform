"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type StaggerContainerProps = {
  children: ReactNode;
};

const containerVariants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function StaggerContainer({
  children,
}: StaggerContainerProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
}