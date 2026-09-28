import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: 'div' | 'li' | 'article';
}

const EASE = [0.22, 1, 0.36, 1] as const;

/** Slow, restrained section reveal: opacity 0→1, y 30→0. */
export default function Reveal({ children, className, delay = 0, y = 30, as = 'div' }: RevealProps) {
  // One element type is enough for the props we pass; the cast keeps JSX typing simple.
  const Tag = motion[as] as unknown as typeof motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </Tag>
  );
}
