import "server-only";

import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { cacheLife } from "next/cache";
import sharp from "sharp";

export type ProjectMedia = { exists: boolean; blurDataURL?: string };

/**
 * Checks whether a screenshot exists in /public and builds a tiny blur
 * placeholder for it. Cached, so it runs once per image at build time.
 */
export async function getProjectMedia(src: string): Promise<ProjectMedia> {
  "use cache";
  cacheLife("max");
  try {
    const file = await readFile(join(process.cwd(), "public", src));
    const tiny = await sharp(file)
      .resize(16, 10, { fit: "cover" })
      .webp({ quality: 40 })
      .toBuffer();
    return { exists: true, blurDataURL: `data:image/webp;base64,${tiny.toString("base64")}` };
  } catch {
    return { exists: false };
  }
}
