export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-night/90 px-4 py-8 text-center text-xs text-white/60 sm:px-6">
      <p>© {new Date().getFullYear()} Tootie Treats · Sacramento, CA 95818.</p>
      <p className="mt-2">
        Find every booking link at{' '}
        <a
          href="https://linktr.ee/tootietreats"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lavender-200 hover:text-lavender-100"
        >
          linktr.ee/tootietreats
        </a>
        .
      </p>
    </footer>
  );
}
