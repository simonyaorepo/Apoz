import { useState } from "react";
import type { ImgHTMLAttributes } from "react";

export interface ImageWithFallbackProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

export function ImageWithFallback({ src, fallbackSrc, alt, ...props }: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={() => fallbackSrc && setImgSrc(fallbackSrc)}
      {...props}
    />
  );
}
