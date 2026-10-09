import Image from "next/image";
import Icon from "./Icon";
import {
  LOGO_SRC,
  footerCareLinks,
  footerShopLinks,
  legalLinks,
  paymentMethods,
  socials,
} from "@/lib/content";

export default function SiteFooter() {
  return (
    <footer className="w-full bg-surface-subtle text-text-secondary">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-gutter pt-space-2xl pb-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter lg:gap-space-xl">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src={LOGO_SRC}
                alt="V2 3D Printing Logo"
                width={512}
                height={512}
                className="h-7 w-auto object-contain"
              />
              <span className="text-headline-sm font-extrabold text-text-primary">
                V2 3D Printing
              </span>
            </div>
            <p className="text-body-sm text-text-secondary leading-relaxed">
              Engineered for Imagination. Creating high-durability, articulation-tested mechanical
              toys and aesthetic collectibles layer-by-layer.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-muted text-label-sm text-text-secondary">
                <Icon name="eco" className="text-[16px] text-tertiary" />
                100% Non-Toxic Corn PLA
              </span>
            </div>
          </div>

          <nav aria-label="Shop collection" className="flex flex-col space-y-3">
            <span className="text-title-md font-bold text-text-primary mb-1">Shop Collection</span>
            {footerShopLinks.map((label) => (
              <a
                key={label}
                href="#"
                className="text-body-sm text-text-secondary hover:text-primary transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          <nav aria-label="Customer care" className="flex flex-col space-y-3">
            <span className="text-title-md font-bold text-text-primary mb-1">Customer Care</span>
            {footerCareLinks.map((label) => (
              <a
                key={label}
                href="#"
                className="text-body-sm text-text-secondary hover:text-primary transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col space-y-4">
            <span className="text-title-md font-bold text-text-primary">Stay in the Loop</span>
            <p className="text-body-sm text-text-secondary">
              Receive monthly drops, filament colorways, and exclusive STL prototype tests.
            </p>
            <div className="flex items-center gap-2">
              <label className="sr-only" htmlFor="footer-email">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-surface-canvas px-4 py-2.5 rounded-full text-body-sm text-text-primary placeholder:text-text-tertiary outline-none shadow-sm focus:ring-2 focus:ring-primary/20"
              />
              {/* Faithful port: this button had no handler in main.html. */}
              <button
                type="button"
                className="px-5 py-2.5 bg-primary text-on-primary text-label-md font-bold rounded-full hover:bg-primary-container transition-colors shadow-sm"
              >
                Join
              </button>
            </div>
            <div className="flex items-center gap-3 pt-2">
              {socials.map((social) => (
                <a
                  key={social.title}
                  href="#"
                  title={social.title}
                  aria-label={social.title}
                  className="w-9 h-9 rounded-full bg-surface-muted flex items-center justify-center text-text-secondary hover:text-primary hover:bg-surface-container transition-all"
                >
                  <Icon name={social.icon} className="text-[18px]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-space-xl pt-space-lg flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-6 text-body-sm text-text-tertiary">
            <span>© 2025 V2 3D Printing. All rights reserved.</span>
            {legalLinks.map((label) => (
              <a key={label} href="#" className="hover:text-text-primary transition-colors">
                {label}
              </a>
            ))}
          </div>
          {/* flex-wrap: the 7 badges are 451px wide, which overflowed a 412px
              phone viewport in main.html. Wrapping is a no-op at desktop widths. */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {paymentMethods.map((method) => (
              <span
                key={method.label}
                className={`px-2 py-1 bg-surface-canvas rounded text-[11px] font-bold uppercase ${
                  method.highlight ? "text-primary" : "text-text-tertiary"
                }`}
              >
                {method.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
