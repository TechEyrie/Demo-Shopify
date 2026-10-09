import Icon from "./Icon";
import ProductGrid from "./ProductGrid";

export default function FeatureCollection() {
  return (
    <section id="featured-collection" className="w-full bg-surface py-space-2xl">
      <div className="mx-auto max-w-7xl px-margin-mobile md:px-gutter">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-2 text-label-md font-bold uppercase tracking-wider text-badge-sale">
              <Icon name="verified" className="text-[18px]" />
              <span>Batch Calibrated</span>
            </div>
            <h2 className="mt-1 text-headline-xl font-extrabold tracking-tight text-text-primary">
              Trending 3D Printed Toys
            </h2>
            <p className="mt-1 text-body-md text-text-secondary">
              Individually calibrated and printed with multi-color precision down to 0.12mm
              layer heights.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <label
              htmlFor="sort-order"
              className="text-label-sm uppercase tracking-wider text-text-tertiary"
            >
              Quick Sort:
            </label>
            {/* Faithful port: this select never sorted anything in main.html. */}
            <select
              id="sort-order"
              defaultValue="Featured First"
              className="rounded-full bg-surface-canvas px-4 py-1.5 text-label-md font-bold text-text-primary shadow-sm outline-none cursor-pointer"
            >
              <option>Featured First</option>
              <option>Most Popular</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        <ProductGrid />

        <div className="mt-space-xl flex flex-col items-center justify-center gap-3 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-surface-canvas px-8 py-3.5 text-label-lg font-bold text-text-primary shadow-sm transition-all hover:bg-surface-muted hover:shadow-md"
          >
            <span>Explore All 24 Season 4 Models</span>
            <Icon name="keyboard_arrow_down" className="text-[18px]" />
          </a>
          <p className="text-label-sm text-text-tertiary">
            All toys backed by our 30-Day Zero Snapping Replacement Warranty
          </p>
        </div>
      </div>
    </section>
  );
}
