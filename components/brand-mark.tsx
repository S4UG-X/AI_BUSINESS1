import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export function BrandMark() {
  return (
    <span className="brand-mark">
      <span className="brand-logo-frame">
        <Image
          className="brand-logo-image"
          src={siteConfig.images.logo}
          alt=""
          width={48}
          height={48}
        />
      </span>
      <span className="wordmark-name">{siteConfig.wordmark.name}</span>
      <span className="wordmark-ai">{siteConfig.wordmark.suffix}</span>
    </span>
  );
}
