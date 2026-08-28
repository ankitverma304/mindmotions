"use client";

import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { search as runSearch } from "@/lib/search";
import { useDict } from "@/lib/i18n/locale-context";
import { KIND_LABEL, KIND_PATH } from "@/lib/content/kind-meta";

const POPULAR = ["Diwali", "Holi", "Ganesh Aarti", "Hanuman Chalisa", "Eid", "Gurpurab", "Christmas"];

export function SearchOverlay() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { lang, dict } = useDict();
  const router = useRouter();

  const results = useMemo(() => (query.trim() ? runSearch(query, 8) : []), [query]);

  function goTo(kind: string, slug: string) {
    setOpen(false);
    setQuery("");
    router.push(`/${lang}${KIND_PATH[kind as keyof typeof KIND_PATH]}/${slug}`);
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          className="focus-ring flex size-9 items-center justify-center rounded-full border border-border bg-surface hover:bg-surface-2 sm:w-auto sm:gap-2 sm:px-4"
          aria-label={dict.search}
        >
          <Search className="size-4" aria-hidden />
          <span className="hidden sm:inline text-sm font-medium">{dict.search}</span>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[70] bg-black/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in" />
        <Dialog.Content className="fixed left-1/2 top-[8vh] z-[71] w-[92vw] max-w-2xl -translate-x-1/2 rounded-2xl border border-border bg-surface p-4 shadow-2xl sm:p-6">
          <VisuallyHidden.Root>
            <Dialog.Title>{dict.search}</Dialog.Title>
            <Dialog.Description>{dict.searchQuestion}</Dialog.Description>
          </VisuallyHidden.Root>
          <div className="flex items-center gap-2 rounded-xl border border-border bg-bg px-3 py-2.5">
            <Search className="size-4 shrink-0 text-muted" aria-hidden />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={dict.searchPlaceholder}
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
            />
            <Dialog.Close className="focus-ring rounded-full p-1 text-muted hover:text-text" aria-label={dict.close}>
              <X className="size-4" />
            </Dialog.Close>
          </div>

          {query.trim() === "" ? (
            <div className="mt-4">
              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted">{dict.popularSearches}</p>
              <div className="flex flex-wrap gap-2">
                {POPULAR.map((p) => (
                  <button
                    key={p}
                    onClick={() => setQuery(p)}
                    className="focus-ring rounded-full border border-border bg-bg px-3 py-1.5 text-sm hover:bg-surface-2"
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-4 max-h-[50vh] overflow-y-auto">
              {results.length === 0 ? (
                <p className="py-6 text-center text-sm text-muted">{dict.noResults}</p>
              ) : (
                <ul className="space-y-1">
                  {results.map(({ doc }) => (
                    <li key={`${doc.kind}-${doc.slug}`}>
                      <button
                        onClick={() => goTo(doc.kind, doc.slug)}
                        className="focus-ring flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left hover:bg-surface-2"
                      >
                        <span className="mt-0.5 rounded-full bg-surface-2 px-2 py-0.5 text-[11px] font-medium text-muted">
                          {KIND_LABEL[doc.kind][lang]}
                        </span>
                        <span className="flex-1">
                          <span className="block font-medium">{lang === "hi" ? doc.title : doc.titleEn}</span>
                          <span className="line-clamp-1 block text-xs text-muted">{doc.shortText}</span>
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
