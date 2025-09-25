import { Instagram, Link as LinkIcon, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="px-4 pb-24 pt-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 to-white/10 p-10 text-center">
        <h2 className="font-display text-3xl text-white sm:text-4xl">Let’s plan dessert</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
          Build your cake summary with the wizard, then share it through the official Tootie Treats channels below. Every link routes to a real booking tool Alexa uses.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <a
            href="https://linktr.ee/tootietreats"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-night/60 p-6 text-sm text-white/70 transition hover:border-white/40 hover:text-white"
          >
            <LinkIcon className="h-6 w-6 text-lavender-200" />
            linktr.ee/tootietreats
            <span className="text-xs text-white/50">Custom cake & class links</span>
          </a>
          <a
            href="https://www.instagram.com/tootietreats"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-night/60 p-6 text-sm text-white/70 transition hover:border-white/40 hover:text-white"
          >
            <Instagram className="h-6 w-6 text-lavender-200" />
            @tootietreats
            <span className="text-xs text-white/50">Class drops & direct messages</span>
          </a>
          <a
            href="https://www.jotform.com/form/243365823386161"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-night/60 p-6 text-sm text-white/70 transition hover:border-white/40 hover:text-white"
          >
            <MapPin className="h-6 w-6 text-lavender-200" />
            Curtis Park travel request
            <span className="text-xs text-white/50">Includes $50 setup fee inside 95818</span>
          </a>
        </div>
        <p className="mt-6 text-xs text-white/50">
          Prefer email? Use the Linktree “Custom Cake Request” button to open Alexa’s latest form or contact address, then paste your copied summary.
        </p>
      </div>
    </section>
  );
}
