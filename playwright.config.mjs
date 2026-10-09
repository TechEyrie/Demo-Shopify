import { defineConfig, devices } from "@playwright/test";

const PORT = 3300;
const BASE_URL = `http://127.0.0.1:${PORT}`;

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  // One local retry: the first navigation to a cold server also pays for image
  // optimisation and two external font hosts, which is occasionally slower
  // than the navigation timeout under parallel load.
  retries: process.env.CI ? 2 : 1,
  // Default (cores/2 = 6 here) over-subscribes the single server and makes the
  // cold-start navigations flaky. 4 keeps real parallelism without the queueing.
  workers: process.env.CI ? 2 : 4,
  reporter: [["list"]],
  use: {
    baseURL: BASE_URL,
    trace: "on-first-retry",
    navigationTimeout: 60_000,
    actionTimeout: 15_000,
  },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"] } },
    { name: "mobile", use: { ...devices["Pixel 7"] } },
  ],
  // Runs against the real production build, not the dev server.
  webServer: {
    command: `npx next start -p ${PORT}`,
    url: BASE_URL,
    // Never reuse: a leftover server would silently serve a stale build and
    // make the suite pass (or fail) against code that is no longer on disk.
    reuseExistingServer: false,
    timeout: 120_000,
  },
});
