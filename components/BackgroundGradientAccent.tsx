"use client";

import { cn } from "@/lib/utils";

export const BackgroundGradientAccent = ({
  className,
  position = "top-left",
}: {
  className?: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}) => {
  const positions = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  };

  return (
    <div
      className={cn(
        "fixed pointer-events-none z-0",
        positions[position],
        className
      )}
    >
      <div className="w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />
    </div>
  );
};
