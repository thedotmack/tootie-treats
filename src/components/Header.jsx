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
    <header className="fixed inset-x-0 top-0 z-50 border-b-4 border-border bg-gradient-to-r from-accent-pink/80 via-accent-lavender/80 to-accent-teal/80 shadow-nav backdrop-blur-xl liquid-shape">
      <div className="mx-auto flex w-container max-w-full items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#home"
          className="group flex items-center gap-3 rounded-full border-2 border-accent-pink bg-gradient-to-r from-accent-lavender/20 to-accent-pink/20 px-4 py-2 text-foreground shadow-shadow transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,0,255,0.6)] hover:border-accent-teal backdrop-blur-md"
        >
          <span className="text-2xl animate-float-random">🎂</span>
          <span className="font-display text-xl leading-none psychedelic-text uppercase tracking-wider">Tootie Treats</span>
        </a>
        <nav className="hidden items-center gap-3 text-sm font-base md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full border-2 border-accent-teal bg-gradient-to-r from-secondary-background/60 to-accent-lavender/20 px-3 py-2 text-foreground shadow-shadow transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] hover:border-accent-pink backdrop-blur-md font-medium"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#order"
            className="rounded-full border-2 border-main bg-gradient-to-r from-main via-accent-pink to-accent-teal px-4 py-2 font-bold text-main-foreground shadow-[0_0_25px_rgba(255,0,255,0.7)] transition-all hover:scale-110 hover:shadow-[0_0_40px_rgba(255,0,255,0.9)] animate-glow-pulse"
          >
            Start a Cake Request
          </a>
        </nav>
        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-accent-pink bg-gradient-to-r from-accent-lavender/60 to-accent-teal/60 text-foreground shadow-[0_0_20px_rgba(255,20,147,0.5)] transition-all hover:scale-110 hover:shadow-[0_0_30px_rgba(0,255,255,0.7)] backdrop-blur-md md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t-4 border-accent-pink bg-gradient-to-b from-secondary-background/90 to-background/90 px-4 py-4 text-sm text-foreground backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full border-2 border-accent-teal bg-gradient-to-r from-secondary-background/60 to-accent-lavender/20 px-4 py-3 shadow-shadow transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] hover:border-accent-pink backdrop-blur-md"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#order"
              className="rounded-full border-2 border-main bg-gradient-to-r from-main via-accent-pink to-accent-teal px-4 py-3 text-center font-bold text-main-foreground shadow-[0_0_25px_rgba(255,0,255,0.7)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,0,255,0.9)] animate-glow-pulse"
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
