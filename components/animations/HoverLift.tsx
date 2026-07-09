"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type HoverLiftProps = {
  children: ReactNode;
};

export default function HoverLift({
  children,
}: HoverLiftProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}