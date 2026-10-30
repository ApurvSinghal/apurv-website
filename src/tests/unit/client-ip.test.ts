import { describe, expect, it } from "vitest";
import { getClientIp } from "@/lib/client-ip";

function headersWith(entries: Record<string, string>) {
  return new Headers(entries);
}

describe("getClientIp", () => {
  it("uses the rightmost X-Forwarded-For entry, not a client-supplied one", () => {
    const headers = headersWith({
      "x-forwarded-for": "6.6.6.6, 203.0.113.9",
    });

    expect(getClientIp(headers)).toBe("203.0.113.9");
  });

  it("handles a single X-Forwarded-For entry", () => {
    expect(getClientIp(headersWith({ "x-forwarded-for": "203.0.113.9" }))).toBe(
      "203.0.113.9",
    );
  });

  it("falls back to x-real-ip, then unknown", () => {
    expect(getClientIp(headersWith({ "x-real-ip": " 198.51.100.7 " }))).toBe(
      "198.51.100.7",
    );
    expect(getClientIp(new Headers())).toBe("unknown");
  });
});
