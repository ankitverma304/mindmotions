import Link from "next/link";

export default function RootNotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <span className="text-6xl" aria-hidden>
        🪔
      </span>
      <h1 className="mt-4 text-2xl font-bold sm:text-3xl">पृष्ठ नहीं मिला / Page not found</h1>
      <p className="mt-2 text-sm text-muted">
        हो सकता है यह जानकारी अभी उपलब्ध न हो। / This information may not be available yet.
      </p>
      <Link
        href="/hi"
        className="focus-ring mt-6 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
      >
        होम / Home
      </Link>
    </div>
  );
}
