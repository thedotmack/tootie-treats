export function Footer() {
  return (
    <footer className="border-t-4 border-border bg-secondary-background px-4 py-10 text-center text-sm text-foreground sm:px-6">
      <div className="mx-auto flex w-container max-w-full flex-col items-center gap-3">
        <p className="rounded-base border-2 border-border bg-background px-4 py-2 font-heading text-base shadow-shadow">
          © {new Date().getFullYear()} Tootie Treats · Sacramento, CA 95818
        </p>
        <p className="text-sm">
          Find every booking link at{' '}
          <a
            href="https://linktr.ee/tootietreats"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-base border-2 border-border bg-main px-3 py-1 font-semibold text-main-foreground shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none"
          >
            linktr.ee/tootietreats
          </a>
        </p>
      </div>
    </footer>
  )
}
