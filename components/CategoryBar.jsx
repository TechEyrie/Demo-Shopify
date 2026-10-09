"use client";

import { useState } from "react";
import { categories } from "@/lib/content";

/**
 * Faithful port: the pills only toggle their own active styling. They never
 * filtered the 8-card grid in main.html either, and the pill counts (24 total)
 * describe the wider catalog, not the featured eight.
 */
export default function CategoryBar() {
  const [active, setActive] = useState("all");

  return (
    <section className="sticky top-20 z-40 w-full bg-surface-canvas/95 py-3 shadow-[0_2px_12px_rgba(0,0,0,0.03)] backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-margin-mobile md:px-gutter">
        <div
          role="group"
          aria-label="Shop categories"
          className="flex items-center gap-2.5 overflow-x-auto py-1"
        >
          {categories.map((category) => {
            const isActive = category.id === active;
            return (
              <button
                key={category.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActive(category.id)}
                className={`shrink-0 rounded-full transition-all ${
                  isActive
                    ? "bg-text-primary px-5 py-2 font-bold text-on-secondary shadow-sm"
                    : "bg-surface-muted px-4 py-2 font-semibold text-text-secondary hover:bg-surface-container hover:text-text-primary"
                } text-label-md`}
              >
                {category.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
