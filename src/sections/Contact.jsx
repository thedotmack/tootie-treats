import { Instagram, Link as LinkIcon, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section
      id="contact"
      className="relative border-b-4 border-border bg-gradient-to-br from-accent-coral/40 via-secondary-background to-accent-teal/40 px-4 pb-24 pt-12 sm:px-6 lg:px-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(circle at 10% 25%, rgba(251, 196, 255, 0.45), transparent 55%), radial-gradient(circle at 85% 60%, rgba(159, 247, 255, 0.4), transparent 55%)'
        }}
      />
      <div className="mx-auto max-w-4xl rounded-base border-4 border-border bg-secondary-background/95 p-10 text-center shadow-shadow">
        <h2 className="font-heading text-3xl sm:text-4xl text-foreground">Let’s plan dessert</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-foreground/75 sm:text-lg">
          Build your cake summary with the wizard, then share it through the official Tootie Treats channels below. Every link routes to a real booking tool Alexa uses.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <a
            href="https://linktr.ee/tootietreats"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 rounded-base border-4 border-border bg-accent-pink/80 p-6 text-sm text-foreground shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none"
          >
            <LinkIcon className="h-6 w-6 text-foreground" />
            linktr.ee/tootietreats
            <span className="text-xs text-foreground/70">Custom cake & class links</span>
          </a>
          <a
            href="https://www.instagram.com/tootietreats"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 rounded-base border-4 border-border bg-accent-teal/80 p-6 text-sm text-foreground shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none"
          >
            <Instagram className="h-6 w-6 text-foreground" />
            @tootietreats
            <span className="text-xs text-foreground/70">Class drops & direct messages</span>
          </a>
          <a
            href="https://www.jotform.com/form/243365823386161"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 rounded-base border-4 border-border bg-accent-green/80 p-6 text-sm text-foreground shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none"
          >
            <MapPin className="h-6 w-6 text-foreground" />
            Curtis Park travel request
            <span className="text-xs text-foreground/70">Includes $50 setup fee inside 95818</span>
          </a>
        </div>
        <p className="mt-6 text-xs text-foreground/60">
          Prefer email? Use the Linktree “Custom Cake Request” button to open Alexa’s latest form or contact address, then paste your copied summary.
        </p>
      </div>
    </section>
  );
}
