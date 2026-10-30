import { describe, expect, it, vi, afterEach } from "vitest";
import { createRateLimiter } from "@/lib/rate-limit";

describe("createRateLimiter", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("limits an IP once it exceeds maxRequests within the window", () => {
    const check = createRateLimiter({ windowMs: 60_000, maxRequests: 2 });

    expect(check("1.2.3.4").limited).toBe(false);
    expect(check("1.2.3.4").limited).toBe(false);
    expect(check("1.2.3.4").limited).toBe(true);
  });

  it("resets an IP's count after the window elapses", () => {
    vi.useFakeTimers();
    const check = createRateLimiter({ windowMs: 60_000, maxRequests: 1 });

    check("1.2.3.4");
    expect(check("1.2.3.4").limited).toBe(true);

    vi.advanceTimersByTime(60_000);
    expect(check("1.2.3.4").limited).toBe(false);
  });

  it("skips limiting for unknown clients", () => {
    const check = createRateLimiter({ windowMs: 60_000, maxRequests: 0 });

    expect(check("unknown")).toMatchObject({ limited: false, source: "skipped" });
  });

  it("keeps tracked IPs within the cap when many addresses are seen", () => {
    const check = createRateLimiter({ windowMs: 60_000, maxRequests: 1 });

    for (let i = 0; i < 6000; i++) {
      check(`10.0.${Math.floor(i / 256)}.${i % 256}`);
    }

    // The first address was evicted to make room, so it is treated as new.
    expect(check("10.0.0.0").currentCount).toBe(1);
  });
});
