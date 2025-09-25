import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { href: '#order', label: 'Order' },
  { href: '#classes', label: 'Classes' },
  { href: '#process', label: 'Process' },
  { href: '#testimonials', label: 'Community' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-night/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3 text-white">
          <span className="text-2xl">🎂</span>
          <span className="font-display text-lg">Tootie Treats Cakes</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#order"
            className="rounded-full bg-gradient-to-r from-lavender-500 to-lavender-600 px-4 py-2 text-sm font-semibold text-night shadow-lavender-500/40 transition hover:shadow-glow"
          >
            Start a Cake Request
          </a>
        </nav>
        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/5 bg-night/95 px-4 py-4 text-sm text-white/80 md:hidden">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-3 transition hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#order"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-lavender-500 to-lavender-600 px-4 py-3 font-semibold text-night"
              onClick={() => setOpen(false)}
            >
              Start a Cake Request
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
