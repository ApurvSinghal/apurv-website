export type RateLimitDecision = {
  currentCount: number;
  limited: boolean;
  source: "memory" | "skipped";
};

type RateLimitOptions = {
  windowMs: number;
  maxRequests: number;
};

// Upper bound on tracked IPs per instance, so spoofed or rotating addresses
// cannot grow the map without limit.
const MAX_TRACKED_IPS = 5000;

// Best-effort, per-instance limiter; state resets on cold start.
export function createRateLimiter({ windowMs, maxRequests }: RateLimitOptions) {
  const requestCounts = new Map<
    string,
    { count: number; windowStart: number }
  >();

  function makeRoom(now: number) {
    for (const [trackedIp, trackedEntry] of requestCounts) {
      if (now - trackedEntry.windowStart >= windowMs) {
        requestCounts.delete(trackedIp);
      }
    }

    // Still full of live windows: evict the oldest insertions (Map keeps
    // insertion order) to stay within the cap.
    while (requestCounts.size >= MAX_TRACKED_IPS) {
      const oldestIp = requestCounts.keys().next().value;
      if (oldestIp === undefined) break;
      requestCounts.delete(oldestIp);
    }
  }

  return function check(ip: string): RateLimitDecision {
    if (!ip || ip === "unknown") {
      return { currentCount: 0, limited: false, source: "skipped" };
    }

    const now = Date.now();
    const entry = requestCounts.get(ip);

    if (!entry || now - entry.windowStart >= windowMs) {
      if (!entry) makeRoom(now);
      requestCounts.set(ip, { count: 1, windowStart: now });
      return { currentCount: 1, limited: false, source: "memory" };
    }

    entry.count += 1;

    return {
      currentCount: entry.count,
      limited: entry.count > maxRequests,
      source: "memory",
    };
  };
}

const checkContactRateLimit = createRateLimiter({
  windowMs: 10 * 60 * 1000,
  maxRequests: 5,
});

export async function getContactRateLimitDecision(
  ip: string,
): Promise<RateLimitDecision> {
  return checkContactRateLimit(ip);
}
