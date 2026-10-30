// X-Forwarded-For is a comma-separated chain: each proxy appends the address
// it received the request from. Entries on the left can be supplied by the
// client, so only the rightmost entry (appended by the edge in front of us)
// is trusted.
export function getClientIp(headers: Headers): string {
  const forwardedFor = headers.get("x-forwarded-for");
  if (forwardedFor) {
    const entries = forwardedFor
      .split(",")
      .map((entry) => entry.trim())
      .filter(Boolean);
    const trusted = entries[entries.length - 1];
    if (trusted) return trusted;
  }

  return headers.get("x-real-ip")?.trim() || "unknown";
}
