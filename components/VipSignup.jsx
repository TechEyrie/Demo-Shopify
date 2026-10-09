"use client";

import { useState } from "react";
import Icon from "./Icon";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Faithful port of the success state (button becomes the discount code, field
 * swaps to a confirmation and disables), plus the validation main.html was
 * relying on the browser to do.
 */
export default function VipSignup() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError("Enter a valid email address.");
      return;
    }
    setError(null);
    setSubmitted(true);
  }

  return (
    <section className="w-full bg-surface-canvas py-space-xl">
      <div className="mx-auto max-w-7xl px-margin-mobile md:px-gutter">
        <div className="relative overflow-hidden rounded-3xl bg-inverse-surface px-6 py-12 text-inverse-on-surface shadow-2xl sm:px-12 lg:py-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-badge-sale/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-tertiary-container/30 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-inverse-on-surface/10 px-3.5 py-1 text-label-sm font-bold uppercase tracking-wider text-primary-fixed backdrop-blur-md">
              <Icon name="notifications_active" className="text-[16px]" />
              <span>Secret Drops &amp; Filament Test Runs</span>
            </div>

            <h2 className="mt-4 text-headline-xl font-extrabold tracking-tight text-white">
              Be First in Line for Secret Toy Drops
            </h2>
            <p className="mt-3 text-body-md text-surface-dim">
              Limited run multi-color filament batches, seasonal articulated models, and
              subscriber-only <span className="font-bold text-white">15% off your first order</span>.
            </p>

            {/* noValidate: the custom check below owns validation, so it stays reachable. */}
            <form
              noValidate
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-center"
            >
              <div className="w-full sm:w-80">
                <label className="sr-only" htmlFor="vip-email">
                  Email address
                </label>
                <input
                  id="vip-email"
                  type="email"
                  value={submitted ? "Welcome! Check your inbox for the drop pass." : email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (error) setError(null);
                  }}
                  disabled={submitted}
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? "vip-email-error" : undefined}
                  placeholder="Enter your email address..."
                  className="h-12 w-full rounded-full bg-white/10 px-6 text-body-md text-white placeholder:text-surface-dim/60 shadow-inner backdrop-blur-md outline-none transition-all focus:bg-white/15 focus:ring-2 focus:ring-badge-sale"
                />
                {error && (
                  <p
                    id="vip-email-error"
                    role="alert"
                    className="mt-2 px-2 text-left text-label-sm text-primary-fixed"
                  >
                    {error}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={submitted}
                className={`h-12 shrink-0 rounded-full px-8 text-label-lg font-bold text-on-primary shadow-lg transition-all active:scale-95 ${
                  submitted
                    ? "bg-emerald-600"
                    : "bg-badge-sale hover:bg-primary hover:shadow-[0_4px_20px_rgba(235,28,36,0.5)]"
                }`}
              >
                {submitted ? "Code: V2KINETIC15" : "Claim 15% Off"}
              </button>
            </form>

            <p className="mt-4 text-label-sm text-surface-dim/70">
              No spam. Unsubscribe anytime. 18,000+ toy lovers enrolled.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
