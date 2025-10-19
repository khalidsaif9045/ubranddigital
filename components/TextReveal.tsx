"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { FC, ReactNode, useRef } from "react";

interface TextRevealProps {
  children: string;
  className?: string;
  speed?: number; // <-- add speed control (default 1)
}

export const TextReveal: FC<TextRevealProps> = ({ children, className, speed = 1 }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const words = children.split(" ");

  return (
    <div ref={containerRef} className={`relative h-[150vh] ${className || ""}`}>
      <div className="sticky top-0 flex h-screen items-center justify-center px-4">
        <span className="flex flex-wrap max-w-4xl text-center text-2xl font-bold text-white/20 md:text-3xl lg:text-4xl xl:text-5xl">
          {words.map((word, i) => {
            const start = (i / words.length) * (1 / speed); // adjust speed
            const end = ((i + 1) / words.length) * (1 / speed);

            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </span>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const y = useTransform(progress, range, ["20px", "0px"]);

  return (
    <span className="relative mx-1">
      <span className="absolute opacity-30">{children}</span>
      <motion.span style={{ opacity, y }} className="text-white">
        {children}
      </motion.span>
    </span>
  );
};
