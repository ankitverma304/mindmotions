"use client";

import { useState } from "react";
import { Link2, Check, Share2 } from "lucide-react";
import { useDict } from "@/lib/i18n/locale-context";
import { useMounted } from "@/lib/hooks/use-mounted";

export function ShareButtons({ title }: { title: string }) {
  const { dict } = useDict();
  const [copied, setCopied] = useState(false);
  const mounted = useMounted();
  const canNativeShare = mounted && typeof navigator !== "undefined" && "share" in navigator;

  // Only read window.location once mounted, so the server-rendered and
  // first client-rendered markup match (avoids a hydration mismatch).
  function shareUrl() {
    return mounted ? window.location.href : "";
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(shareUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable */
    }
  }

  async function handleNativeShare() {
    if (navigator.share) {
      try {
        await navigator.share({ title, url: shareUrl() });
      } catch {
        /* user cancelled */
      }
    }
  }

  const waHref = `https://wa.me/?text=${encodeURIComponent(`${title} — ${shareUrl()}`)}`;
  const fbHref = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl())}`;
  const xHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl())}`;

  return (
    <div className="rounded-2xl border border-border bg-surface p-4">
      <p className="text-sm font-medium">{dict.shareThis}</p>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring rounded-full border border-border bg-bg px-3 py-1.5 text-xs font-medium hover:bg-surface-2"
        >
          WhatsApp
        </a>
        <a
          href={fbHref}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring rounded-full border border-border bg-bg px-3 py-1.5 text-xs font-medium hover:bg-surface-2"
        >
          Facebook
        </a>
        <a
          href={xHref}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring rounded-full border border-border bg-bg px-3 py-1.5 text-xs font-medium hover:bg-surface-2"
        >
          X
        </a>
        <button
          onClick={handleCopy}
          className="focus-ring inline-flex items-center gap-1 rounded-full border border-border bg-bg px-3 py-1.5 text-xs font-medium hover:bg-surface-2"
        >
          {copied ? <Check className="size-3.5" /> : <Link2 className="size-3.5" />}
          {copied ? "Copied" : "Copy link"}
        </button>
        {canNativeShare && (
          <button
            onClick={handleNativeShare}
            className="focus-ring inline-flex items-center gap-1 rounded-full border border-border bg-bg px-3 py-1.5 text-xs font-medium hover:bg-surface-2"
          >
            <Share2 className="size-3.5" />
            Share
          </button>
        )}
      </div>
    </div>
  );
}
