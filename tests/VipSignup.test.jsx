import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import VipSignup from "@/components/VipSignup";

const VALID = "toy.lover@example.com";

describe("VipSignup", () => {
  it("rejects an empty submit", async () => {
    const user = userEvent.setup();
    render(<VipSignup />);

    await user.click(screen.getByRole("button", { name: "Claim 15% Off" }));

    expect(screen.getByRole("alert")).toHaveTextContent("Enter a valid email address.");
    expect(screen.getByRole("button", { name: "Claim 15% Off" })).toBeInTheDocument();
  });

  it.each([
    "not-an-email",
    "missing@tld",
    "two@@at.com",
    "space in@email.com",
  ])("rejects the malformed address %s", async (bad) => {
    const user = userEvent.setup();
    render(<VipSignup />);

    const input = screen.getByLabelText("Email address");
    await user.type(input, bad);
    await user.click(screen.getByRole("button", { name: "Claim 15% Off" }));

    expect(screen.getByRole("alert")).toHaveTextContent("Enter a valid email address.");
    expect(input).not.toBeDisabled();
    expect(input).toHaveAttribute("aria-invalid", "true");
  });

  it("clears the error as soon as the user edits the field", async () => {
    const user = userEvent.setup();
    render(<VipSignup />);

    const input = screen.getByLabelText("Email address");
    await user.type(input, "bad");
    await user.click(screen.getByRole("button", { name: "Claim 15% Off" }));
    expect(screen.getByRole("alert")).toBeInTheDocument();

    await user.type(input, "x");
    expect(screen.queryByRole("alert")).toBeNull();
  });

  it("swaps into the discount-code state on a valid address", async () => {
    const user = userEvent.setup();
    render(<VipSignup />);

    const input = screen.getByLabelText("Email address");
    await user.type(input, VALID);
    await user.click(screen.getByRole("button", { name: "Claim 15% Off" }));

    expect(screen.queryByRole("alert")).toBeNull();
    expect(screen.getByRole("button", { name: "Code: V2KINETIC15" })).toBeInTheDocument();
    expect(screen.getByLabelText("Email address")).toBeDisabled();
    expect(screen.getByLabelText("Email address")).toHaveValue(
      "Welcome! Check your inbox for the drop pass.",
    );
  });
});
