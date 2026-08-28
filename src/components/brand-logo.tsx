import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  variant?: "full" | "symbol";
  className?: string;
  priority?: boolean;
}

/** `unoptimized` is required here: Next's image optimizer re-encodes to WEBP
 * by default, which visibly blurs this artwork's fine linework — serving the
 * original PNG bytes as-is keeps it sharp. */
export function BrandLogo({ variant = "full", className, priority }: BrandLogoProps) {
  if (variant === "symbol") {
    // The symbol is a fully-coloured emblem (not dark text on transparent),
    // so it reads fine on any background — no chip needed in either theme.
    return (
      <Image
        src="/symbol.png"
        alt="MindMotions"
        width={1024}
        height={1024}
        priority={priority}
        unoptimized
        className={cn("h-10 w-10 sm:h-11 sm:w-11", className)}
      />
    );
  }

  return (
    // The full lockup's wordmark is dark navy text, invisible on a dark
    // background — give it a white chip only in dark mode; stays fully
    // transparent in light mode.
    <span className={cn("inline-flex items-center rounded-xl dark:bg-white dark:px-2 dark:py-1", className)}>
      <Image
        src="/logo.png"
        alt="MindMotions"
        width={1408}
        height={768}
        priority={priority}
        unoptimized
        className="h-11 w-auto sm:h-12"
      />
    </span>
  );
}
