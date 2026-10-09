import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import VideoModal from "@/components/VideoModal";

describe("VideoModal", () => {
  it("renders only the trigger until it is clicked", () => {
    render(<VideoModal />);

    expect(screen.queryByRole("dialog")).toBeNull();
    expect(
      screen.getByRole("button", { name: /watch articulated motion/i }),
    ).toBeInTheDocument();
  });

  it("opens an accessible dialog", async () => {
    const user = userEvent.setup();
    render(<VideoModal />);

    await user.click(screen.getByRole("button", { name: /watch articulated motion/i }));

    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveAttribute("aria-modal", "true");
    expect(dialog).toHaveAccessibleName("Articulated Motion Demo");
  });

  it("closes on the close button", async () => {
    const user = userEvent.setup();
    render(<VideoModal />);

    await user.click(screen.getByRole("button", { name: /watch articulated motion/i }));
    await user.click(screen.getByRole("button", { name: /close video/i }));

    expect(screen.queryByRole("dialog")).toBeNull();
  });

  it("closes on Escape and returns focus to the trigger", async () => {
    const user = userEvent.setup();
    render(<VideoModal />);

    const trigger = screen.getByRole("button", { name: /watch articulated motion/i });
    await user.click(trigger);
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    await user.keyboard("{Escape}");

    expect(screen.queryByRole("dialog")).toBeNull();
    expect(trigger).toHaveFocus();
  });
});
