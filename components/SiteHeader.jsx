import Image from "next/image";
import Icon from "./Icon";
import { LOGO_SRC, navLinks } from "@/lib/content";

/**
 * Server Component — the original header had no JavaScript at all. The currency
 * select and search field are uncontrolled and work natively.
 */
export default function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-canvas/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      {/* Announcement bar */}
      <div className="bg-inverse-surface text-inverse-on-surface py-2 px-margin-mobile md:px-gutter">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-label-md">
          <div className="flex items-center gap-2 mx-auto">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-badge-sale text-on-primary text-label-sm uppercase tracking-wider">
              Special
            </span>
            <span>
              ✨ Free Worldwide Shipping on toy orders over $50 | Precision 3D Printed in
              Eco-Friendly PLA
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-1 text-surface-dim text-label-sm">
            <Icon name="public" className="text-[16px]" />
            <span>Ships in 24h</span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="h-20 max-w-7xl mx-auto px-margin-mobile md:px-gutter flex items-center justify-between gap-gutter">
        <div className="flex items-center gap-8">
          <a className="flex items-center gap-3 transition-opacity hover:opacity-90" href="#">
            <Image
              src={LOGO_SRC}
              alt="V2 3D Printing Logo"
              width={512}
              height={512}
              className="h-8 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="text-headline-sm text-text-primary tracking-tight font-extrabold">
                V2 3D Printing
              </span>
              <span className="text-label-sm text-text-tertiary uppercase tracking-widest">
                Additive Toys &amp; Models
              </span>
            </div>
          </a>

          <nav
            aria-label="Primary"
            className="hidden md:flex items-center gap-8 ml-4 text-label-lg"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-current={link.active ? "page" : undefined}
                className={`transition-colors py-1 ${
                  link.active
                    ? "text-primary font-bold"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-space-md">
          <div className="hidden xl:flex items-center bg-surface-subtle rounded-full px-3 py-1.5 gap-2 text-text-secondary">
            <Icon name="payments" className="text-text-tertiary text-[18px]" />
            <label className="sr-only" htmlFor="currency-select">
              Currency
            </label>
            <select
              id="currency-select"
              defaultValue="USD"
              className="bg-transparent text-label-md text-text-secondary outline-none cursor-pointer pr-1"
            >
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="GBP">GBP (£)</option>
              <option value="CAD">CAD ($)</option>
            </select>
          </div>

          <div className="hidden sm:flex items-center bg-surface-subtle rounded-full px-3 py-1.5 text-text-secondary gap-2 transition-all hover:bg-surface-muted">
            <Icon name="search" className="text-text-tertiary text-[18px]" />
            <label className="sr-only" htmlFor="site-search">
              Search products
            </label>
            <input
              id="site-search"
              type="search"
              placeholder="Search precision models..."
              className="bg-transparent text-body-sm text-text-primary placeholder:text-text-tertiary outline-none w-36 lg:w-48"
            />
          </div>

          <a
            href="#"
            title="Wishlist"
            aria-label="Wishlist, 2 items"
            className="relative p-2 rounded-full text-text-secondary hover:bg-surface-subtle hover:text-on-surface transition-colors"
          >
            <Icon name="favorite" className="text-[22px]" />
            <span
              aria-hidden="true"
              className="absolute top-1 right-1 flex items-center justify-center w-4 h-4 rounded-full bg-badge-sale text-on-primary text-[10px] font-bold"
            >
              2
            </span>
          </a>

          <a
            href="#"
            title="Shopping Cart"
            aria-label="Shopping cart, 3 items, $74.00"
            className="relative flex items-center gap-2 pl-3 pr-4 py-2 rounded-full bg-surface-subtle hover:bg-surface-muted text-text-primary transition-all"
          >
            <Icon name="shopping_bag" className="text-[20px] text-text-secondary" />
            <span className="text-label-md font-bold text-text-primary">$74.00</span>
            <span
              aria-hidden="true"
              className="flex items-center justify-center w-5 h-5 rounded-full bg-badge-sale text-on-primary text-label-sm font-bold ml-0.5"
            >
              3
            </span>
          </a>

          <a
            href="#"
            title="Account Profile"
            aria-label="Account profile"
            className="p-0.5 rounded-full hover:ring-2 hover:ring-surface-container-high transition-all"
          >
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <Icon name="person" className="text-on-primary text-[18px]" />
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}
