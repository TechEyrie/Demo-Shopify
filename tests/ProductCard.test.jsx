import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

const dragon = products[0]; // ChromaWing Crystal Dragon — $28.00, was $35.00, "Save 20%"

describe("ProductCard", () => {
  it("renders price, compare-at price, rating and spec from the data", () => {
    render(<ProductCard product={dragon} onAdd={() => {}} />);

    expect(screen.getByText("$28.00")).toBeInTheDocument();
    expect(screen.getByText("$35.00")).toBeInTheDocument();
    expect(screen.getByText("5.0")).toBeInTheDocument();
    expect(screen.getByText("(184)")).toBeInTheDocument();
    expect(screen.getByText(dragon.spec)).toBeInTheDocument();
    expect(screen.getByText("Bestseller")).toBeInTheDocument();
    expect(screen.getByText("Save 20%")).toBeInTheDocument();
  });

  it("omits the compare-at price when the product is not discounted", () => {
    const gearbot = products[1]; // no compareAt
    const { container } = render(<ProductCard product={gearbot} onAdd={() => {}} />);

    expect(screen.getByText("$24.00")).toBeInTheDocument();
    // A struck-through price is the marker for a discount; there must be none.
    expect(container.querySelector(".line-through")).toBeNull();
  });

  it("toggles the wishlist button and exposes the state via aria-pressed", async () => {
    const user = userEvent.setup();
    render(<ProductCard product={dragon} onAdd={() => {}} />);

    const wishlist = screen.getByRole("button", { name: /wishlist/i });
    expect(wishlist).toHaveAttribute("aria-pressed", "false");

    await user.click(wishlist);
    expect(screen.getByRole("button", { name: /wishlist/i })).toHaveAttribute(
      "aria-pressed",
      "true",
    );

    await user.click(screen.getByRole("button", { name: /wishlist/i }));
    expect(screen.getByRole("button", { name: /wishlist/i })).toHaveAttribute(
      "aria-pressed",
      "false",
    );
  });

  it("calls onAdd with the whole product from the quick-add button", async () => {
    const user = userEvent.setup();
    const onAdd = vi.fn();
    render(<ProductCard product={dragon} onAdd={onAdd} />);

    await user.click(screen.getByRole("button", { name: /add .* to cart/i }));

    expect(onAdd).toHaveBeenCalledTimes(1);
    expect(onAdd).toHaveBeenCalledWith(dragon);
  });
});
