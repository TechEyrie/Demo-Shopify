import Icon from "./Icon";
import { stats } from "@/lib/content";

export default function AboutStudio() {
  return (
    <section className="w-full bg-surface-muted py-space-2xl">
      <div className="mx-auto max-w-7xl px-margin-mobile md:px-gutter">
        <div className="grid grid-cols-1 items-center gap-space-xl lg:grid-cols-12 lg:gap-gutter">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-surface-canvas px-3.5 py-1 text-label-sm font-bold uppercase tracking-wider text-text-secondary shadow-xs">
              <Icon name="precision_manufacturing" className="text-[16px] text-badge-sale" />
              <span>Micro-Manufacturing Hub</span>
            </div>
            <h2 className="mt-3 text-headline-xl font-extrabold tracking-tight text-text-primary">
              Where Industrial Engineering Meets Childlike Wonder
            </h2>
            <p className="mt-4 text-body-md leading-relaxed text-text-secondary">
              V2 3D Printing was founded in 2023 by two former aerospace CAD designers who grew
              tired of disposable, brittle injection-molded plastics. We believed kinetic toys
              should be sturdy enough for everyday adventures yet engineered with the microscopic
              precision of high-end chronometers.
            </p>
            <p className="mt-3 text-body-md leading-relaxed text-text-secondary">
              Today, our micro-factory runs continuous multi-filament testing, calibrating layer
              line flow down to microns to achieve silky smooth transitions and frictionless joint
              rotation directly off the build sheet.
            </p>

            <div className="mt-space-lg flex items-center gap-4">
              <div className="flex -space-x-2 overflow-hidden">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-xs font-bold text-on-primary shadow-xs">
                  V2
                </span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-xs font-bold text-on-secondary shadow-xs">
                  LAB
                </span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-text-primary text-xs font-bold text-on-primary shadow-xs">
                  QC
                </span>
              </div>
              <div>
                <p className="text-label-md font-bold text-text-primary">
                  Designed &amp; Calibrated In-House
                </p>
                <p className="text-body-sm text-text-tertiary">
                  Over 800 hours of drop-testing per design
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col justify-between rounded-3xl bg-surface-canvas p-6 shadow-sm"
                >
                  <Icon name={stat.icon} className={`text-[28px] ${stat.iconClass}`} />
                  <div className="mt-6">
                    <span className="text-headline-xl font-extrabold text-text-primary">
                      {stat.value}
                    </span>
                    <p className="mt-1 text-label-md font-medium text-text-secondary">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
