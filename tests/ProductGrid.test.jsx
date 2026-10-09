import { act, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/lib/products";

const dragon = products[0];

// fireEvent rather than userEvent: userEvent's internal awaits do not resolve
// cleanly while setTimeout is faked.
function quickAddFor(product) {
  const card = screen.getByRole("heading", { name: product.name }).closest("div.group");
  return within(card).getByRole("button", { name: /add .* to cart/i });
}

describe("ProductGrid", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders one card per product", () => {
    render(<ProductGrid />);

    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(products.length);
    for (const product of products) {
      expect(screen.getByRole("heading", { name: product.name })).toBeInTheDocument();
    }
  });

  it("shows the added product in the toast, then auto-hides it after 3500ms", () => {
    vi.useFakeTimers();
    render(<ProductGrid />);

    const toast = screen.getByRole("status");
    // The live region is always mounted so it can announce; it starts hidden.
    expect(toast).toHaveClass("opacity-0");
    expect(toast).toHaveTextContent("Added to Cart!");

    fireEvent.click(quickAddFor(dragon));

    expect(toast).toHaveClass("opacity-100");
    expect(within(toast).getByText(`Added "${dragon.name}"`)).toBeInTheDocument();
    expect(within(toast).getByText(/\$28\.00 added to bag/)).toBeInTheDocument();

    // One millisecond short of the duration it must still be visible.
    act(() => {
      vi.advanceTimersByTime(3499);
    });
    expect(toast).toHaveClass("opacity-100");

    act(() => {
      vi.advanceTimersByTime(1);
    });
    expect(toast).toHaveClass("opacity-0");
    expect(toast).toHaveTextContent("Your items are reserved for 15 mins.");
  });

  it("restarts the hide timer when a second product is added", () => {
    vi.useFakeTimers();
    render(<ProductGrid />);

    const toast = screen.getByRole("status");

    fireEvent.click(quickAddFor(products[0]));
    act(() => {
      vi.advanceTimersByTime(3000);
    });
    fireEvent.click(quickAddFor(products[1]));

    // 3000ms more would have expired the first timer; the second restarted it.
    act(() => {
      vi.advanceTimersByTime(3000);
    });
    expect(toast).toHaveClass("opacity-100");
    expect(within(toast).getByText(`Added "${products[1].name}"`)).toBeInTheDocument();
  });

  it("does not leak the timer on unmount", () => {
    vi.useFakeTimers();
    const { unmount } = render(<ProductGrid />);

    fireEvent.click(quickAddFor(dragon));
    unmount();

    // If the timeout still fired after unmount it would warn/throw on state update.
    expect(() =>
      act(() => {
        vi.advanceTimersByTime(5000);
      }),
    ).not.toThrow();
  });
});
