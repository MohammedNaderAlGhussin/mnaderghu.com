"use client";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative h-full w-full bg-slate-950 flex flex-col items-center justify-center overflow-hidden rounded-md",
        className,
      )}
    >
      <div className="absolute inset-0 w-full h-full bg-slate-950 z-0 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Beams />
      {children}
    </div>
  );
};

const Beams = () => {
  const beams = [
    {
      top: 10,
      left: 10,
      duration: 3,
      delay: 0,
    },
    {
      top: 20,
      left: 50,
      duration: 4,
      delay: 2,
    },
    {
      top: 40,
      left: 80,
      duration: 5,
      delay: 1,
    },
    {
      top: 60,
      left: 30,
      duration: 3,
      delay: 3,
    },
    {
      top: 80,
      left: 60,
      duration: 4,
      delay: 0,
    },
  ];
  return (
    <div className="absolute inset-0 w-full h-full">
      {beams.map((beam, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            scale: 0,
            x: 0,
            y: 0,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            x: [0, 100, 200],
            y: [0, -100, -200],
          }}
          transition={{
            duration: beam.duration,
            delay: beam.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            top: `${beam.top}%`,
            left: `${beam.left}%`,
          }}
          className="absolute h-1 w-1 rounded-full bg-primary/40 blur-[2px]"
        />
      ))}
    </div>
  );
};
