import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export const FloatIcon = ({ children }: { children: ReactNode }) => (
  <motion.div
    animate={{
      y: [0, -8, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: Math.random() * 1.5,
    }}
  >
    {children}
  </motion.div>
);
