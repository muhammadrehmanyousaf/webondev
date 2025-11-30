"use client";

import React, { useEffect, useState } from "react";

interface ReadingProgressProps {
  targetSelector?: string;
  height?: number;
  className?: string;
}

// Reading progress bar that tracks scroll progress of a target element (defaults to document)
const ReadingProgress: React.FC<ReadingProgressProps> = ({
  targetSelector,
  height = 3,
  className,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const target: HTMLElement | Document = targetSelector
      ? (document.querySelector(targetSelector) as HTMLElement)
      : document;

    const getScrollMetrics = () => {
      const scrollElement = target instanceof Document ? document.documentElement : target;
      const scrollTop = target instanceof Document ? window.scrollY : scrollElement.scrollTop;
      const scrollHeight = scrollElement.scrollHeight - scrollElement.clientHeight;
      const pct = scrollHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100)) : 0;
      setProgress(pct);
    };

    getScrollMetrics();
    window.addEventListener("scroll", getScrollMetrics, { passive: true });
    window.addEventListener("resize", getScrollMetrics);

    return () => {
      window.removeEventListener("scroll", getScrollMetrics);
      window.removeEventListener("resize", getScrollMetrics);
    };
  }, [targetSelector]);

  return (
    <div
      aria-hidden="true"
      className={
        "fixed left-0 top-0 z-40 w-full bg-transparent" + (className ? ` ${className}` : "")
      }
    >
      <div
        style={{ width: `${progress}%`, height }}
        className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 transition-[width] duration-150 ease-out"
      />
    </div>
  );
};

export default ReadingProgress;


