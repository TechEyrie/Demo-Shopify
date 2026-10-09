"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Icon from "./Icon";
import { HERO_IMAGE_SRC } from "@/lib/content";

/**
 * Owns both the trigger button and the dialog, so the Hero can stay a Server
 * Component. Escape closes it and focus returns to the trigger.
 */
export default function VideoModal() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-full bg-surface-muted px-6 py-3.5 text-label-lg font-bold text-text-primary shadow-sm transition-all hover:bg-surface-container active:scale-95"
      >
        <Icon name="play_circle" className="text-[20px] text-primary" />
        <span>Watch Articulated Motion</span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-inverse-surface/80 p-4 backdrop-blur-md"
        >
          <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-surface-canvas p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4">
              <h3 id="video-modal-title" className="text-title-md font-bold text-text-primary">
                Articulated Motion Demo
              </h3>
              <button
                type="button"
                onClick={close}
                aria-label="Close video"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-muted text-text-secondary hover:bg-surface-container"
              >
                <Icon name="close" className="text-[20px]" />
              </button>
            </div>
            <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl bg-surface-muted">
              <Image
                src={HERO_IMAGE_SRC}
                alt="Articulated motion demo screenshot"
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-center text-white">
                <Icon name="play_circle" className="text-[56px] text-badge-sale" />
                <p className="mt-2 text-title-md font-bold">Fluid 38-Joint Spine Motion</p>
                <p className="text-body-sm opacity-80">Smooth 60 FPS print-in-place tolerances</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
