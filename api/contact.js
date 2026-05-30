const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MAX_BODY_LENGTH = 5000;

const requestStore = new Map();

function getClientIp(req) {
  const forwardedFor = req.headers["x-forwarded-for"];
  if (Array.isArray(forwardedFor)) {
    return forwardedFor[0]?.split(",")[0]?.trim() ?? "unknown";
  }
  if (typeof forwardedFor === "string") {
    return forwardedFor.split(",")[0]?.trim() ?? "unknown";
  }
  return req.socket?.remoteAddress ?? "unknown";
}

function isRateLimited(ip) {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const existing = requestStore.get(ip) ?? [];
  const recent = existing.filter((timestamp) => timestamp > windowStart);

  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestStore.set(ip, recent);
    return true;
  }

  recent.push(now);
  requestStore.set(ip, recent);
  return false;
}

function asString(value) {
  return typeof value === "string" ? value.trim() : "";
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    res
      .status(429)
      .json({ error: "Too many requests. Please try again later." });
    return;
  }

  let body = {};
  try {
    body =
      typeof req.body === "string"
        ? JSON.parse(req.body || "{}")
        : (req.body ?? {});
  } catch {
    res.status(400).json({ error: "Invalid JSON payload" });
    return;
  }
  const name = asString(body.name);
  const email = asString(body.email);
  const businessType = asString(body.businessType);
  const automation = asString(body.automation);
  const honeypot = asString(body.website);
  const source = asString(body.source);

  if (honeypot) {
    res.status(200).json({ ok: true });
    return;
  }

  if (!name || !email || !automation) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }

  if (
    name.length > 120 ||
    email.length > 320 ||
    businessType.length > 160 ||
    automation.length > MAX_BODY_LENGTH
  ) {
    res.status(400).json({ error: "Input too long" });
    return;
  }

  if (!process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
    res.status(503).json({ error: "Contact service is not configured" });
    return;
  }

  try {
    const webhookResponse = await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        name,
        email,
        businessType,
        automation,
        source,
      }),
    });

    if (!webhookResponse.ok) {
      res.status(502).json({ error: "Upstream webhook failed" });
      return;
    }

    res.status(200).json({ ok: true });
  } catch {
    res.status(500).json({ error: "Failed to submit form" });
  }
}
