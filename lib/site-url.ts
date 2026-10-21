import { siteConfig } from "@/lib/site-config";

export function getSiteUrl(): URL | undefined {
  const configured =
    siteConfig.siteUrl ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL;
  if (!configured) return undefined;
  try {
    const url = new URL(
      configured.includes("://") ? configured : `https://${configured}`,
    );
    return ["https:", "http:"].includes(url.protocol)
      ? new URL(url.origin)
      : undefined;
  } catch {
    return undefined;
  }
}
