import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Section({
  title,
  subtitle,
  viewAllHref,
  viewAllLabel,
  children,
  className,
}: {
  title: string;
  subtitle?: string;
  viewAllHref?: string;
  viewAllLabel?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-7xl px-4 py-10 sm:px-6 ${className ?? ""}`}>
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold sm:text-2xl">{title}</h2>
          {subtitle && <p className="mt-1 text-sm text-muted">{subtitle}</p>}
        </div>
        {viewAllHref && (
          <Link
            href={viewAllHref}
            className="focus-ring hidden shrink-0 items-center gap-1 text-sm font-semibold text-primary sm:inline-flex"
          >
            {viewAllLabel}
            <ArrowRight className="size-3.5" aria-hidden />
          </Link>
        )}
      </div>
      <div className="mt-6">{children}</div>
      {viewAllHref && (
        <Link href={viewAllHref} className="focus-ring mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary sm:hidden">
          {viewAllLabel}
          <ArrowRight className="size-3.5" aria-hidden />
        </Link>
      )}
    </section>
  );
}
