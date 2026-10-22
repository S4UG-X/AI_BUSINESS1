"use client";

import {
  Camera, MessageSquareText, PenLine, Phone, Repeat2, Search, Star,
  Users, Video, Workflow, type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import type { Service } from "@/lib/site-config";
import { ServiceScene } from "@/components/service-scenes";

const serviceIcons: Record<string, LucideIcon> = {
  phone: Phone, workflow: Workflow, star: Star, message: MessageSquareText,
  repeat: Repeat2, pen: PenLine, search: Search, camera: Camera, video: Video, users: Users,
};
type Phase = "idle" | "preview" | "complete";

export function ServiceCard({ service }: { service: Service }) {
  const cardRef = useRef<HTMLLIElement>(null);
  const hoveredRef = useRef(false);
  const motionRef = useRef({ reduce: true, finePointer: false });
  const frameRef = useRef<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [phase, setPhase] = useState<Phase>("idle");
  const [playback, setPlayback] = useState(0);
  const [activated, setActivated] = useState(false);
  const Icon = serviceIcons[service.icon] ?? Workflow;

  function cancelTimer() {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }

  function resetTilt() {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
    cardRef.current?.style.removeProperty("--service-tilt-x");
    cardRef.current?.style.removeProperty("--service-tilt-y");
    cardRef.current?.style.removeProperty("--service-parallax-x");
    cardRef.current?.style.removeProperty("--service-parallax-y");
  }

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    function syncPreferences() {
      motionRef.current = { reduce: reduced.matches, finePointer: pointer.matches };
      if (reduced.matches || !pointer.matches) resetTilt();
      if (reduced.matches) {
        cancelTimer();
        setPhase((current) => current === "idle" ? "idle" : "complete");
      }
    }
    syncPreferences();
    reduced.addEventListener("change", syncPreferences);
    pointer.addEventListener("change", syncPreferences);
    return () => {
      reduced.removeEventListener("change", syncPreferences);
      pointer.removeEventListener("change", syncPreferences);
      cancelTimer();
      resetTilt();
    };
  }, []);

  function preview() {
    cancelTimer();
    setActivated(false);
    setPlayback((value) => value + 1);
    setPhase(motionRef.current.reduce ? "complete" : "preview");
    if (!motionRef.current.reduce) {
      timerRef.current = setTimeout(() => {
        setPhase("complete");
        timerRef.current = null;
      }, 2400);
    }
  }

  function movePointer(event: PointerEvent<HTMLLIElement>) {
    if (motionRef.current.reduce || !motionRef.current.finePointer || event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = Math.max(-1, Math.min(1, ((event.clientX - bounds.left) / bounds.width - 0.5) * 2));
    const y = Math.max(-1, Math.min(1, ((event.clientY - bounds.top) / bounds.height - 0.5) * 2));
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      const style = cardRef.current?.style;
      style?.setProperty("--service-tilt-x", `${-y * 3}deg`);
      style?.setProperty("--service-tilt-y", `${x * 3}deg`);
      style?.setProperty("--service-parallax-x", `${x * 3}px`);
      style?.setProperty("--service-parallax-y", `${y * 3}px`);
      frameRef.current = null;
    });
  }

  return (
    <li
      className={`service-card service-card--interactive service-card--${service.id}`}
      id={service.id}
      ref={cardRef}
      data-phase={phase}
      data-activated={activated}
      onPointerEnter={(event) => {
        if (event.pointerType === "touch" || !motionRef.current.finePointer) return;
        hoveredRef.current = true;
        preview();
      }}
      onPointerMove={movePointer}
      onPointerLeave={() => {
        hoveredRef.current = false;
        resetTilt();
        if (!cardRef.current?.contains(document.activeElement)) {
          cancelTimer();
          setPhase("idle");
        }
      }}
      onPointerCancel={() => {
        hoveredRef.current = false;
        cancelTimer();
        resetTilt();
        setPhase("idle");
      }}
    >
      <button
        type="button"
        className="service-card-image service-card-media"
        aria-label={`Play the ${service.title} visual demonstration`}
        onFocus={(event) => {
          // Pointer entry already starts the preview. Keep pointer focus from
          // replacing scene nodes between the press and its native click.
          if (!hoveredRef.current || event.currentTarget.matches(":focus-visible")) preview();
        }}
        onBlur={() => {
          if (!hoveredRef.current) {
            cancelTimer();
            setPhase("idle");
          }
        }}
        onClick={() => {
          cancelTimer();
          setActivated(true);
          setPlayback((value) => value + 1);
          setPhase("complete");
        }}
      >
        <span className="service-scene-parallax" aria-hidden="true">
          <span className="service-scene-flip" key={playback}>
            <span className="service-scene-face service-scene-face--front"><ServiceScene serviceId={service.id} /></span>
            <span className="service-scene-face service-scene-face--back"><ServiceScene serviceId={service.id} complete /></span>
          </span>
        </span>
        <span className="service-card-icon" aria-hidden="true"><Icon size={21} strokeWidth={1.6} /></span>
      </button>
      <div className="service-card-body">
        <h4>{service.title}</h4>
        <p>{service.description}</p>
        <div className="service-card-pricing">
          {service.pricing.map((price) => (
            <small key={price}>{price}</small>
          ))}
        </div>
      </div>
    </li>
  );
}
