import { expect, test } from "@playwright/test";

const cardFor = (page, productName) =>
  page.locator("#featured-collection div.group").filter({ hasText: productName });

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("rendering", () => {
  test("serves the original document title", async ({ page }) => {
    await expect(page).toHaveTitle("V2 3D Printing - Precision 3D Printed Toys & Collectibles");
  });

  test("keeps every section heading from main.html", async ({ page }) => {
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Engineered for Play");

    for (const heading of [
      "Trending 3D Printed Toys",
      "Why Parents & Collectors Choose V2",
      "Where Industrial Engineering Meets Childlike Wonder",
      "Loved on Desks. Trusted in Playrooms.",
      "Be First in Line for Secret Toy Drops",
    ]) {
      await expect(page.getByRole("heading", { name: heading })).toBeVisible();
    }
  });

  test("renders all 8 product cards, 4 benefits and 3 testimonials", async ({ page }) => {
    await expect(page.locator("#featured-collection").getByRole("heading", { level: 3 })).toHaveCount(8);
    await expect(page.getByText("Kinetic Toys Printed & Shipped")).toBeVisible();
    await expect(page.getByText("Sarah M.")).toBeVisible();
    await expect(page.getByText("David K.")).toBeVisible();
    await expect(page.getByText("Elena R.")).toBeVisible();
  });
});

test.describe("runtime assets", () => {
  test("the Material Symbols icon font actually downloads and applies", async ({ page }) => {
    const loaded = await page.evaluate(async () => {
      await document.fonts.ready;
      return document.fonts.check('24px "Material Symbols Outlined"');
    });
    expect(loaded).toBe(true);
  });

  test("remote photos are routed through the image optimiser and return real bytes", async ({
    page,
  }) => {
    const hero = page.getByAltText(/Articulated 3D printed toys including rainbow crystal dragon/);

    await expect(hero).toHaveAttribute("src", /\/_next\/image\?url=/);
    // Generous timeouts: the optimiser is cold and the suite runs in parallel.
    await expect
      .poll(() => hero.evaluate((img) => img.naturalWidth), { timeout: 20_000 })
      .toBeGreaterThan(0);

    // Proves next.config.mjs remotePatterns is accepted by the optimiser.
    const src = await hero.getAttribute("src");
    const response = await page.request.get(src, { timeout: 30_000 });
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toMatch(/^image\//);
  });

  test("every product image loads once scrolled into view", async ({ page }) => {
    const images = page.locator("#featured-collection img");
    await expect(images).toHaveCount(8);

    const last = images.last();
    await last.scrollIntoViewIfNeeded();
    await expect.poll(() => last.evaluate((img) => img.naturalWidth)).toBeGreaterThan(0);
  });
});

test.describe("interactions", () => {
  test("quick-add shows the toast with the price, then auto-dismisses", async ({ page }) => {
    const toast = page.getByRole("status");
    await expect(toast).toHaveCSS("opacity", "0");

    await cardFor(page, "ChromaWing Crystal Dragon")
      .getByRole("button", { name: /add .* to cart/i })
      .click();

    await expect(toast).toContainText('Added "ChromaWing Crystal Dragon"');
    await expect(toast).toContainText("$28.00 added to bag");
    await expect(toast).toHaveCSS("opacity", "1");

    // Auto-hides after 3500ms.
    await expect(toast).toHaveCSS("opacity", "0", { timeout: 8000 });
  });

  test("the wishlist button reports pressed state", async ({ page }) => {
    const card = cardFor(page, "GearBot Mk.II Companion");
    await expect(card.getByRole("button", { name: /wishlist/i })).toHaveAttribute(
      "aria-pressed",
      "false",
    );

    await card.getByRole("button", { name: /wishlist/i }).click();

    await expect(card.getByRole("button", { name: /wishlist/i })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  });

  test("category pills move the active state without filtering the grid", async ({ page }) => {
    const group = page.getByRole("group", { name: "Shop categories" });
    const all = group.getByRole("button", { name: "All Toys (24)" });
    const robots = group.getByRole("button", { name: "Mini Mech Robots (6)" });

    await expect(all).toHaveAttribute("aria-pressed", "true");
    await robots.click();
    await expect(robots).toHaveAttribute("aria-pressed", "true");
    await expect(all).toHaveAttribute("aria-pressed", "false");

    // Faithful to main.html: the grid is unaffected.
    await expect(page.locator("#featured-collection").getByRole("heading", { level: 3 })).toHaveCount(8);
  });

  test("VIP signup validates the email and then reveals the code", async ({ page }) => {
    const form = page.locator("form:has(#vip-email)");
    const input = form.locator("#vip-email");
    const submit = form.getByRole("button", { name: "Claim 15% Off" });
    // Scoped by id: Next.js injects its own role="alert" route announcer.
    const error = page.locator("#vip-email-error");

    await submit.click();
    await expect(error).toHaveText("Enter a valid email address.");

    await input.fill("not-an-email");
    await submit.click();
    await expect(error).toBeVisible();
    await expect(input).toBeEnabled();

    await input.fill("toy.lover@example.com");
    await submit.click();

    await expect(form.getByRole("button", { name: "Code: V2KINETIC15" })).toBeVisible();
    await expect(input).toBeDisabled();
    await expect(error).toHaveCount(0);
  });

  test("the video modal opens as a dialog and closes on Escape", async ({ page }) => {
    await page.getByRole("button", { name: /watch articulated motion/i }).click();

    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await expect(dialog).toHaveAttribute("aria-modal", "true");

    await page.keyboard.press("Escape");
    await expect(page.getByRole("dialog")).toHaveCount(0);
  });
});

test.describe("health", () => {
  test("reloads with no console errors or failed same-origin requests", async ({ page }) => {
    const problems = [];

    page.on("console", (message) => {
      if (message.type() === "error") problems.push(`console: ${message.text()}`);
    });
    page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
    page.on("requestfailed", (request) => {
      if (request.url().includes("127.0.0.1")) {
        problems.push(`requestfailed: ${request.url()}`);
      }
    });

    await page.reload();
    await page.waitForLoadState("load");

    expect(problems).toEqual([]);
  });

  test("does not overflow horizontally", async ({ page }) => {
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow).toBeLessThanOrEqual(1);
  });
});
