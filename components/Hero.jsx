import Image from "next/image";
import Icon from "./Icon";
import VideoModal from "./VideoModal";
import { HERO_IMAGE_ALT, HERO_IMAGE_SRC } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-surface-canvas pb-space-2xl pt-space-md lg:pt-space-lg">
      {/* Ambient tech glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-[56rem] -translate-x-1/2 rounded-full bg-linear-to-tr from-badge-sale/10 via-primary-fixed/30 to-tertiary-fixed/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-margin-mobile md:px-gutter">
        <div className="grid grid-cols-1 items-center gap-space-xl lg:grid-cols-12 lg:gap-gutter">
          {/* Left column: copy & conversions */}
          <div className="flex flex-col items-start lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-surface-muted px-3.5 py-1.5 shadow-sm transition-all hover:bg-surface-container">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-badge-sale opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-badge-sale" />
              </span>
              <span className="text-label-md font-bold uppercase tracking-wide text-text-primary">
                🔥 Season 4 Drops Are Live
              </span>
              <span className="text-text-tertiary">•</span>
              <span className="text-label-sm font-semibold text-text-secondary">Limited Batch</span>
            </div>

            <h1 className="mt-space-md text-display-hero-mobile lg:text-display-hero font-extrabold tracking-tight text-text-primary">
              Engineered for Play. <br className="hidden sm:inline" />
              <span className="text-primary">Crafted for</span> Collectors.
            </h1>

            <p className="mt-space-md max-w-xl text-body-lg text-text-secondary">
              Precision multi-color 3D printed articulated toys made from 100% non-toxic,
              eco-friendly filaments. Ultra-smooth kinetic action with zero loose parts or
              assembly required.
            </p>

            <div className="mt-space-lg flex flex-wrap items-center gap-space-md">
              <a
                href="#featured-collection"
                className="group inline-flex items-center gap-2 rounded-full bg-badge-sale px-7 py-3.5 text-label-lg font-bold text-on-primary shadow-md transition-all hover:bg-primary hover:shadow-[0_4px_18px_rgba(235,28,36,0.35)] active:scale-95"
              >
                <span>Shop Best Sellers</span>
                <Icon
                  name="arrow_forward"
                  className="text-[18px] transition-transform group-hover:translate-x-1"
                />
              </a>
              <VideoModal />
            </div>

            <div className="mt-space-xl flex flex-wrap items-center gap-x-6 gap-y-3 pt-space-xs text-text-secondary">
              <div className="flex items-center gap-1.5 text-label-md">
                <span className="flex text-amber-500">
                  <Icon
                    name="star"
                    className="text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  />
                </span>
                <span className="font-bold text-text-primary">4.9/5</span>
                <span className="text-text-tertiary">(1,200+ Happy Parents)</span>
              </div>
              <div className="hidden sm:inline-block h-3.5 w-[1px] bg-surface-border" />
              <div className="flex items-center gap-1.5 text-label-md">
                <Icon name="eco" className="text-[18px] text-tertiary" />
                <span className="text-text-secondary">100% Non-Toxic Corn PLA</span>
              </div>
              <div className="hidden sm:inline-block h-3.5 w-[1px] bg-surface-border" />
              <div className="flex items-center gap-1.5 text-label-md">
                <Icon name="bolt" className="text-[18px] text-text-primary" />
                <span className="text-text-secondary">48h Dispatch</span>
              </div>
            </div>
          </div>

          {/* Right column: featured visual */}
          <div className="relative lg:col-span-6">
            <div className="absolute -left-4 top-6 z-20 hidden rounded-2xl bg-surface-canvas/90 p-3.5 shadow-xl backdrop-blur-md sm:flex sm:items-center sm:gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-badge-sale text-on-primary">
                <Icon name="view_in_ar" className="text-[22px]" />
              </div>
              <div>
                <p className="text-label-sm font-bold uppercase tracking-wider text-text-tertiary">
                  Layer Height
                </p>
                <p className="text-title-md font-extrabold text-text-primary">
                  0.12mm Micro Finish
                </p>
              </div>
            </div>

            <div className="absolute -bottom-4 right-4 z-20 rounded-2xl bg-surface-canvas/90 p-3.5 shadow-xl backdrop-blur-md flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-muted text-text-primary">
                <Icon name="tune" className="text-[22px]" />
              </div>
              <div>
                <p className="text-label-sm font-bold uppercase tracking-wider text-text-tertiary">
                  Assembly
                </p>
                <p className="text-label-md font-bold text-text-primary">100% Print-in-Place</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-surface-muted p-2 shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
              <div className="relative h-[360px] w-full overflow-hidden rounded-2xl sm:h-[440px] lg:h-[490px]">
                <Image
                  src={HERO_IMAGE_SRC}
                  alt={HERO_IMAGE_ALT}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-t from-text-primary/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
