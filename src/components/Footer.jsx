export function Footer() {
  return (
    <footer className="border-t-4 border-border bg-gradient-to-r from-accent-lavender/40 via-secondary-background to-accent-pink/40 px-4 py-10 text-center text-sm text-foreground sm:px-6">
      <div className="mx-auto flex w-container max-w-full flex-col items-center gap-3">
        <p className="rounded-base border-2 border-border bg-secondary-background/90 px-4 py-2 font-heading text-base shadow-shadow">
          © {new Date().getFullYear()} Tootie Treats · Sacramento, CA 95818
        </p>
        <p className="text-sm">
          Find every booking link at{' '}
          <a
            href="https://linktr.ee/tootietreats"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-base border-2 border-border bg-gradient-to-r from-accent-coral to-main px-3 py-1 font-semibold text-foreground shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none"
          >
            linktr.ee/tootietreats
          </a>
        </p>
      </div>
    </footer>
  )
}
