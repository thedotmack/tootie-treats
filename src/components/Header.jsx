'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { href: '#order', label: 'Order' },
  { href: '#classes', label: 'Classes' },
  { href: '#process', label: 'Process' },
  { href: '#testimonials', label: 'Community' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-4 border-border bg-gradient-to-r from-accent-pink/90 via-main/90 to-accent-teal/90 shadow-nav backdrop-blur">
      <div className="mx-auto flex w-container max-w-full items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#home"
          className="flex items-center gap-3 rounded-base border-2 border-border bg-secondary-background px-4 py-2 text-foreground shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:bg-accent-lavender hover:shadow-none"
        >
          <span className="text-2xl">🎂</span>
          <span className="font-heading text-lg leading-none">Tootie Treats</span>
        </a>
        <nav className="hidden items-center gap-3 text-sm font-base md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-base border-2 border-border bg-secondary-background/90 px-3 py-2 text-foreground shadow-shadow transition-all hover:-translate-x-1 hover:-translate-y-1 hover:bg-accent-lavender hover:shadow-none"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#order"
            className="rounded-base border-2 border-border bg-gradient-to-r from-accent-coral to-main px-4 py-2 font-semibold text-foreground shadow-shadow transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none"
          >
            Start a Cake Request
          </a>
        </nav>
        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="flex h-11 w-11 items-center justify-center rounded-base border-2 border-border bg-secondary-background text-foreground shadow-shadow transition-all hover:-translate-x-1 hover:-translate-y-1 hover:bg-accent-lavender hover:shadow-none md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t-4 border-border bg-secondary-background px-4 py-4 text-sm text-foreground md:hidden">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-base border-2 border-border bg-secondary-background px-4 py-3 shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:bg-accent-lavender hover:text-foreground hover:shadow-none"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#order"
              className="rounded-base border-2 border-border bg-gradient-to-r from-accent-coral to-main px-4 py-3 text-center font-semibold text-foreground shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none"
              onClick={() => setOpen(false)}
            >
              Start a Cake Request
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
