import { cn } from "@/lib/utils";
import { InfoType, INFO_TYPE_META, UiLang, t } from "@/lib/content/types";

export function Badge({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-border bg-surface-2 px-2.5 py-1 text-xs font-medium text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}

export function InfoTypeBadge({ type, lang }: { type: InfoType; lang: UiLang }) {
  const meta = INFO_TYPE_META[type];
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-2.5 py-1 text-xs font-medium"
      style={{ color: meta.color }}
    >
      <span aria-hidden>{meta.dot}</span>
      {t(meta.label, lang)}
    </span>
  );
}
