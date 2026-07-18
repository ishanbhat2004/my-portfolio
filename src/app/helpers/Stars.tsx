"use client";

import { useEffect, useState } from "react";

type Star = {
  id: number;
  top: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
};

/**
 * Animated starfield for the hero. Stars are generated on the client after
 * mount so the random positions never cause SSR hydration mismatches.
 */
const Stars = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setStars(
      Array.from({ length: 120 }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 3000,
        duration: Math.random() * 3000 + 2000,
      })),
    );
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            width: star.size,
            height: star.size,
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationName: "twinkle",
            animationDelay: `${star.delay}ms`,
            animationDuration: `${star.duration}ms`,
            animationIterationCount: "infinite",
            animationTimingFunction: "ease-in-out",
          }}
        />
      ))}
    </div>
  );
};

export default Stars;
