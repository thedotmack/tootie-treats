export function Footer() {
  return (
    <footer className="border-t-4 border-border bg-gradient-to-r from-accent-lavender/40 via-secondary-background to-accent-pink/40 px-4 py-12 text-center text-sm text-foreground sm:px-6">
      <div className="mx-auto w-container max-w-full">
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-2xl text-foreground">Tootie Treats Sacramento</h3>
            <p className="mt-2 italic text-foreground/80">Where Everyone Discovers They're Creative</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 text-foreground/70">
            <span>Cake Classes</span>
            <span>•</span>
            <span>Custom Cakes</span>
            <span>•</span>
            <span>Private Parties</span>
            <span>•</span>
            <span>Team Building</span>
          </div>

          <p className="text-base font-medium text-foreground/85">
            No Experience Necessary • All Supplies Included • Pure Fun Guaranteed
          </p>

          <p className="text-foreground/70">
            Featured on Good Day Sacramento • 7,900+ Happy Creators and Counting
          </p>

          <div className="rounded-base border-2 border-border bg-secondary-background/90 px-6 py-4 shadow-shadow">
            <p className="font-semibold text-foreground">
              © {new Date().getFullYear()} Tootie Treats. Bringing joy to Sacramento, one cake at a time.
            </p>
          </div>

          <p className="text-sm text-foreground/60">
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

          <p className="text-xs text-foreground/40 mt-4">
            <a href="/keystatic" className="hover:text-foreground/60 transition-colors">
              Admin
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
