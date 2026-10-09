import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import CategoryBar from "@/components/CategoryBar";
import { categories } from "@/lib/content";

describe("CategoryBar", () => {
  it("renders every pill label from the data", () => {
    render(<CategoryBar />);

    for (const category of categories) {
      expect(screen.getByRole("button", { name: category.label })).toBeInTheDocument();
    }
  });

  it("starts with only the first pill pressed", () => {
    render(<CategoryBar />);

    const [first, ...rest] = categories;
    expect(screen.getByRole("button", { name: first.label })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    for (const category of rest) {
      expect(screen.getByRole("button", { name: category.label })).toHaveAttribute(
        "aria-pressed",
        "false",
      );
    }
  });

  it("moves the active state when another pill is clicked", async () => {
    const user = userEvent.setup();
    render(<CategoryBar />);

    const allPill = screen.getByRole("button", { name: categories[0].label });
    await user.click(screen.getByRole("button", { name: categories[2].label }));

    expect(screen.getByRole("button", { name: categories[2].label })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(allPill).toHaveAttribute("aria-pressed", "false");
  });
});
