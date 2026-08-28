"use client";

import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { useEffect, useState } from "react";
import { religions } from "@/lib/content/religions";
import { t } from "@/lib/content/types";
import { useReligionTheme } from "@/lib/theme/religion-theme";
import { useDict } from "@/lib/i18n/locale-context";

export function FirstVisitPrompt() {
  const { hasChosen, setReligion } = useReligionTheme();
  const { lang, dict } = useDict();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (!hasChosen) setOpen(true);
    }, 400);
    return () => window.clearTimeout(timer);
  }, [hasChosen]);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[80] bg-black/40 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-[81] w-[92vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-border bg-surface p-6 shadow-2xl sm:p-8">
          <Dialog.Title className="text-center text-lg font-semibold sm:text-xl">
            {dict.firstVisitQuestion}
          </Dialog.Title>
          <VisuallyHidden.Root>
            <Dialog.Description>{dict.switchAnytime}</Dialog.Description>
          </VisuallyHidden.Root>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {religions.map((r) => (
              <button
                key={r.slug}
                onClick={() => {
                  setReligion(r.slug);
                  setOpen(false);
                }}
                className="focus-ring flex flex-col items-center gap-2 rounded-2xl border border-border bg-bg px-3 py-5 text-sm font-medium hover:border-primary hover:bg-surface-2"
              >
                <span className="text-2xl" aria-hidden>
                  {r.symbol}
                </span>
                {t(r.name, lang)}
              </button>
            ))}
          </div>
          <button
            onClick={() => {
              setReligion("default");
              setOpen(false);
            }}
            className="focus-ring mt-5 w-full rounded-full border border-border bg-bg px-4 py-2.5 text-sm font-medium hover:bg-surface-2"
          >
            {dict.exploreAllTraditions}
          </button>
          <p className="mt-3 text-center text-xs text-muted">{dict.switchAnytime}</p>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
