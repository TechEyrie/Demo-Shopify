"use client";

import { useState } from "react";
import Image from "next/image";
import Icon from "./Icon";

const BADGE_VARIANTS = {
  sale: "bg-badge-sale text-on-primary",
  dark: "bg-text-primary text-on-secondary",
  secondary: "bg-secondary text-on-secondary",
  tertiary: "bg-tertiary text-on-tertiary",
  muted: "bg-surface-muted text-text-primary",
};

export default function ProductCard({ product, onAdd }) {
  const [wished, setWished] = useState(false);
  const badge = product.badge;

  return (
    <div className="group relative flex flex-col justify-between rounded-3xl bg-surface-canvas p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-60 w-full overflow-hidden rounded-2xl bg-surface-muted">
        {(badge || product.discountLabel) && (
          <div className="absolute left-3 top-3 z-10 flex flex-col gap-1.5">
            {badge && (
              <span
                className={`rounded-full px-2.5 py-1 text-label-sm font-extrabold uppercase shadow-sm ${
                  BADGE_VARIANTS[badge.variant]
                }`}
              >
                {badge.label}
              </span>
            )}
            {product.discountLabel && (
              <span className="rounded-full bg-surface-canvas/90 px-2 py-0.5 text-[10px] font-bold text-badge-sale shadow-xs backdrop-blur-sm">
                {product.discountLabel}
              </span>
            )}
          </div>
        )}

        <button
          type="button"
          aria-label={`${wished ? "Remove" : "Add"} ${product.name} ${wished ? "from" : "to"} wishlist`}
          aria-pressed={wished}
          onClick={() => setWished((v) => !v)}
          className={`absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-surface-canvas/80 shadow-sm backdrop-blur-sm transition-colors hover:text-badge-sale ${
            wished ? "text-badge-sale" : "text-text-secondary"
          }`}
        >
          <Icon
            name="favorite"
            className="text-[18px]"
            style={{ fontVariationSettings: wished ? "'FILL' 1" : "'FILL' 0" }}
          />
        </button>

        <Image
          src={product.image}
          alt={product.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="mt-4 flex flex-1 flex-col justify-between">
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              {product.colorways.map((colorway) => (
                <span
                  key={colorway.title}
                  title={colorway.title}
                  className={`h-3.5 w-3.5 rounded-full shadow-xs ${colorway.className}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-1 text-label-sm font-bold text-text-secondary">
              <Icon
                name="star"
                className="text-[15px] text-amber-500"
                style={{ fontVariationSettings: "'FILL' 1" }}
              />
              <span>{product.rating.toFixed(1)}</span>
              <span className="text-text-tertiary font-normal">({product.reviews})</span>
            </div>
          </div>

          <h3 className="mt-2 text-title-md font-bold text-text-primary line-clamp-1">
            {product.name}
          </h3>
          <p className="mt-0.5 text-body-sm text-text-tertiary">{product.spec}</p>
        </div>

        <div className="mt-4 flex items-center justify-between pt-2">
          <div className="flex items-baseline gap-2">
            <span className="text-headline-sm font-extrabold text-text-primary">
              ${product.price.toFixed(2)}
            </span>
            {product.compareAt && (
              <span className="text-body-sm text-text-tertiary line-through">
                ${product.compareAt.toFixed(2)}
              </span>
            )}
          </div>
          <button
            type="button"
            aria-label={`Add ${product.name} to cart`}
            onClick={() => onAdd(product)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-muted text-text-primary shadow-xs transition-all hover:bg-badge-sale hover:text-on-primary active:scale-90"
          >
            <Icon name="shopping_bag" className="text-[20px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
