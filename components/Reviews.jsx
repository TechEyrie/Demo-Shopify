import Icon from "./Icon";
import { reviews } from "@/lib/content";

const FILLED_STAR = { fontVariationSettings: "'FILL' 1" };

// className is passed as a literal so Tailwind's scanner can see the size utility.
function StarRow({ className }) {
  return (
    <div className="flex text-amber-500">
      {[0, 1, 2, 3, 4].map((i) => (
        <Icon key={i} name="star" className={className} style={FILLED_STAR} />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="w-full bg-surface-canvas py-space-2xl">
      <div className="mx-auto max-w-7xl px-margin-mobile md:px-gutter">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-surface-muted px-4 py-1.5 shadow-xs">
            <StarRow className="text-[18px]" />
            <span className="text-label-md font-bold text-text-primary">
              4.92 out of 5 stars
            </span>
            <span className="text-text-tertiary">•</span>
            <span className="text-body-sm text-text-secondary">1,420+ Verified Buyers</span>
          </div>
          <h2 className="mt-3 text-headline-xl font-extrabold tracking-tight text-text-primary">
            Loved on Desks. Trusted in Playrooms.
          </h2>
          <div className="mt-2 flex items-center gap-4 text-text-tertiary">
            <span className="inline-flex items-center gap-1 text-label-sm font-semibold">
              <Icon name="verified_user" className="text-[16px] text-emerald-600" /> Trustpilot 4.9
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1 text-label-sm font-semibold">
              <Icon name="verified_user" className="text-[16px] text-blue-600" /> Google Reviews
              4.95
            </span>
          </div>
        </div>

        <div className="mt-space-xl grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="flex flex-col justify-between rounded-3xl bg-surface-muted p-7 shadow-xs transition-all hover:bg-surface-subtle hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <StarRow className="text-[16px]" />
                  <span className="text-label-sm text-text-tertiary">{review.when}</span>
                </div>
                <p className="mt-4 text-body-md leading-relaxed text-text-primary">
                  {review.body}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-3 pt-4">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full font-bold ${review.avatarClass}`}
                >
                  {review.initials}
                </div>
                <div>
                  <p className="text-label-md font-bold text-text-primary">{review.name}</p>
                  <div className="flex items-center gap-1 text-label-sm text-text-tertiary">
                    <Icon name="check_circle" className="text-[14px] text-emerald-600" />
                    <span>{review.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
