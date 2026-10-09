import { describe, expect, it } from "vitest";
import { benefits, categories, navLinks, reviews, stats } from "@/lib/content";
import { products } from "@/lib/products";

const countIn = (label) => Number(label.match(/\((\d+)\)/)[1]);

describe("products data", () => {
  it("carries the same 8 featured products as main.html", () => {
    expect(products).toHaveLength(8);
    expect(new Set(products.map((p) => p.id)).size).toBe(8);
  });

  it("gives every product renderable content", () => {
    for (const product of products) {
      expect(product.name).toBeTruthy();
      expect(product.price).toBeGreaterThan(0);
      expect(product.rating).toBeGreaterThanOrEqual(0);
      expect(product.rating).toBeLessThanOrEqual(5);
      expect(product.image).toMatch(/^https:\/\/lh3\.googleusercontent\.com\//);
      // Alt text is the only description a screen reader gets for the photo.
      expect(product.alt.length).toBeGreaterThan(20);
      expect(product.colorways.length).toBeGreaterThan(0);
    }
  });

  it("never claims a discount without a higher compare-at price", () => {
    for (const product of products) {
      if (product.compareAt !== null) {
        expect(product.compareAt).toBeGreaterThan(product.price);
      }
    }
  });

  it("keeps the advertised discount percentages honest", () => {
    // Card 1 badge reads "Save 20%" — 28.00 from 35.00.
    const dragon = products.find((p) => p.id === "chromawing-crystal-dragon");
    expect(dragon.price / dragon.compareAt).toBeCloseTo(0.8, 5);

    // Card 5 badge reads "Sale -20%" — 32.00 from 40.00.
    const rex = products.find((p) => p.id === "robo-rex-desk-guardian");
    expect(rex.price / rex.compareAt).toBeCloseTo(0.8, 5);
  });

  it("only uses badge variants the card knows how to render", () => {
    const variants = new Set(["sale", "dark", "secondary", "tertiary", "muted"]);
    for (const product of products) {
      if (product.badge) expect(variants.has(product.badge.variant)).toBe(true);
    }
  });
});

describe("content collections", () => {
  it("keeps the category pill counts equal to the catalog total", () => {
    const [all, ...rest] = categories;
    const sum = rest.reduce((total, category) => total + countIn(category.label), 0);
    expect(countIn(all.label)).toBe(24);
    expect(sum).toBe(countIn(all.label));
  });

  it("has the same collection sizes as the original page", () => {
    expect(benefits).toHaveLength(4);
    expect(stats).toHaveLength(4);
    expect(reviews).toHaveLength(3);
    expect(navLinks).toHaveLength(4);
  });

  it("marks exactly one nav link as the current page", () => {
    expect(navLinks.filter((link) => link.active)).toHaveLength(1);
    expect(navLinks[0].active).toBe(true);
  });
});
