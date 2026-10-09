import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "@/app/page";
import { benefits, reviews, stats, navLinks } from "@/lib/content";
import { products } from "@/lib/products";

/**
 * Renders the real page.js tree (layout.js is skipped on purpose — it pulls in
 * next/font, which is a build-time concern). This is the "did anything get
 * dropped in the port" check.
 */
describe("home page composition", () => {
  it("keeps the page landmarks", () => {
    render(<Home />);

    expect(screen.getByRole("banner")).toBeInTheDocument(); // <header>
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument(); // <footer>
  });

  it("renders every section heading from the original", () => {
    render(<Home />);

    const headings = [
      "Engineered for Play. Crafted for Collectors.",
      "Trending 3D Printed Toys",
      "Why Parents & Collectors Choose V2",
      "Where Industrial Engineering Meets Childlike Wonder",
      "Loved on Desks. Trusted in Playrooms.",
      "Be First in Line for Secret Toy Drops",
    ];

    for (const text of headings) {
      expect(screen.getByRole("heading", { name: new RegExp(escapeRegExp(text)) })).toBeInTheDocument();
    }
  });

  it("renders all 8 product cards", () => {
    render(<Home />);

    for (const product of products) {
      expect(screen.getByRole("heading", { name: product.name })).toBeInTheDocument();
    }
  });

  it("renders the benefits, stats and testimonial cards", () => {
    render(<Home />);

    for (const benefit of benefits) {
      expect(screen.getByRole("heading", { name: benefit.title })).toBeInTheDocument();
    }
    for (const stat of stats) {
      expect(screen.getByText(stat.value)).toBeInTheDocument();
    }
    for (const review of reviews) {
      expect(screen.getByText(review.name)).toBeInTheDocument();
    }
  });

  it("renders the nav links, hero CTA and video trigger", () => {
    render(<Home />);

    for (const link of navLinks) {
      expect(screen.getByRole("link", { name: link.label })).toBeInTheDocument();
    }
    expect(screen.getByRole("link", { name: /Shop Best Sellers/i })).toHaveAttribute(
      "href",
      "#featured-collection",
    );
    expect(screen.getByRole("button", { name: /watch articulated motion/i })).toBeInTheDocument();
  });

  it("keeps the sticky category bar with a controllable pill", () => {
    render(<Home />);

    expect(screen.getByRole("group", { name: "Shop categories" })).toBeInTheDocument();
  });
});

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
