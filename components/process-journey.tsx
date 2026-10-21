"use client";

import { useEffect, useRef, type ReactNode } from "react";
import "./process-journey.css";

export function ProcessJourney({ children }: { children: ReactNode }) {
  const journeyRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const journey = journeyRef.current;
    if (!journey || !window.IntersectionObserver || !Element.prototype.animate) {
      return;
    }

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const steps = Array.from(journey.querySelectorAll<HTMLElement>("[data-process-step]"));
    const revealed = new Set<Element>();
    const animations = new Set<Animation>();
    let observer: IntersectionObserver | undefined;

    function watchSteps() {
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();

      if (motionPreference.matches) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting || revealed.has(entry.target)) return;

            revealed.add(entry.target);
            observer?.unobserve(entry.target);

            const index = steps.indexOf(entry.target as HTMLElement);
            const animation = entry.target.animate(
              [
                { opacity: 0.35, transform: "translateY(12px)" },
                { opacity: 1, transform: "translateY(0)" },
              ],
              {
                duration: 620,
                delay: index * 65,
                easing: "cubic-bezier(0.22, 1, 0.36, 1)",
                fill: "backwards",
              },
            );

            animations.add(animation);
            animation.onfinish = () => animations.delete(animation);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -20px 0px" },
      );

      steps.forEach((step) => {
        if (!revealed.has(step)) observer?.observe(step);
      });
    }

    // Content is visible by default; motion is only added once it enters view.
    watchSteps();
    motionPreference.addEventListener("change", watchSteps);

    return () => {
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
      motionPreference.removeEventListener("change", watchSteps);
    };
  }, []);

  return (
    <ol className="process-grid process-journey" role="list" ref={journeyRef}>
      {children}
    </ol>
  );
}
