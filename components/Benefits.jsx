import Icon from "./Icon";
import { benefits } from "@/lib/content";

export default function Benefits() {
  return (
    <section className="w-full bg-surface-canvas py-space-2xl">
      <div className="mx-auto max-w-7xl px-margin-mobile md:px-gutter">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-label-sm font-bold uppercase tracking-wider text-badge-sale">
            Industrial Standards • Playful Souls
          </span>
          <h2 className="mt-1 text-headline-xl font-extrabold tracking-tight text-text-primary">
            Why Parents &amp; Collectors Choose V2
          </h2>
          <p className="mt-2 text-body-md text-text-secondary">
            Not all 3D prints are created equal. We run surgical tolerances and food-grade raw
            materials.
          </p>
        </div>

        <div className="mt-space-xl grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex flex-col rounded-3xl bg-surface-muted p-7 shadow-xs transition-all hover:-translate-y-1 hover:bg-surface-subtle hover:shadow-md"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-canvas shadow-sm ${benefit.iconClass}`}
              >
                <Icon name={benefit.icon} className="text-[26px]" />
              </div>
              <h3 className="mt-6 text-title-md font-bold text-text-primary">{benefit.title}</h3>
              <p className="mt-2 text-body-sm leading-relaxed text-text-secondary">
                {benefit.body}
              </p>
              <div
                className={`mt-6 pt-4 flex items-center gap-1 text-label-sm font-bold ${benefit.footnoteClass}`}
              >
                <span>{benefit.footnote}</span>
                <Icon name="check" className="text-[14px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
