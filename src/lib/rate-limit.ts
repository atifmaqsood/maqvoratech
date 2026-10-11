import "server-only";

type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

/**
 * Tiny in-memory fixed-window rate limiter. Good enough to blunt spam on a
 * single instance; swap for Upstash/Redis if you run many serverless instances.
 */
export function rateLimit(key: string, limit = 5, windowMs = 10 * 60 * 1000) {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || bucket.resetAt < now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    if (buckets.size > 5000) {
      for (const [k, b] of buckets) if (b.resetAt < now) buckets.delete(k);
    }
    return { allowed: true };
  }

  bucket.count += 1;
  return { allowed: bucket.count <= limit };
}
