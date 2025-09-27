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
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-accent-pink/50 bg-gradient-to-r from-background/70 via-secondary-background/70 to-background/70 shadow-nav backdrop-blur-xl holographic">
      <div className="mx-auto flex w-container max-w-full items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#home"
          className="group flex items-center gap-3 rounded-full border border-accent-pink/50 bg-gradient-to-r from-secondary-background/60 to-accent-lavender/10 px-4 py-2 text-foreground shadow-[var(--glow-pink)] transition-all duration-300 hover:scale-105 hover:shadow-[var(--glow-main)] hover:border-main/80 backdrop-blur-md holographic overflow-hidden relative"
        >
          <span className="text-2xl animate-float-random relative z-10">🎂</span>
          <span className="font-display text-xl leading-none psychedelic-text uppercase tracking-wider relative z-10">Tootie Treats</span>
          <div className="absolute inset-0 bg-gradient-to-r from-accent-pink via-main to-accent-teal opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
        </a>
        <nav className="hidden items-center gap-3 text-sm font-base md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full border border-accent-teal/40 bg-gradient-to-r from-secondary-background/50 to-transparent px-3 py-2 text-foreground/90 transition-all duration-300 hover:scale-105 hover:shadow-[var(--glow-cyan)] hover:border-accent-teal hover:text-foreground backdrop-blur-md font-medium relative overflow-hidden group"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#order"
            className="rounded-full border-2 border-main/80 iridescent px-4 py-2 font-bold text-main-foreground shadow-[var(--glow-main)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(255,0,229,1)] hover:border-main animate-glow-pulse relative overflow-hidden"
          >
            Start a Cake Request
          </a>
        </nav>
        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-accent-pink/50 bg-gradient-to-r from-secondary-background/60 to-accent-teal/20 text-foreground shadow-[var(--glow-pink)] transition-all duration-300 hover:scale-105 hover:shadow-[var(--glow-cyan)] hover:border-accent-teal backdrop-blur-md md:hidden"
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
