"use client";

/**
 * useIntersectionObserver.ts
 *
 * Replaces scroll event listeners (which fire on every frame and block main thread)
 * with the IntersectionObserver API — fires only when element enters/leaves viewport.
 *
 * Used for:
 * - Lazy loading sections (content-visibility optimization)
 * - Triggering Framer Motion animations when in view
 * - Loading images only when near viewport
 */

import { useEffect, useRef, useState, RefObject } from "react";

interface Options {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;   // true = animate in once, don't reverse
}

export function useIntersectionObserver<T extends Element>(
  options: Options = {}
): [RefObject<T>, boolean] {
  const { threshold = 0.1, rootMargin = "0px 0px -50px 0px", triggerOnce = true } = options;

  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Skip if IntersectionObserver not supported (SSR / old browsers)
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // If triggerOnce, unobserve after first intersection
          if (triggerOnce) {
            observer.unobserve(el);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isVisible];
}
