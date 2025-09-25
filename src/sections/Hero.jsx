import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-night/90 px-4 pb-20 pt-32 text-white sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 -z-10 bg-grid-glow" aria-hidden />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-start">
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-lavender-200 backdrop-blur">
            Sacramento custom cakes • treats • classes
          </span>
          <div className="space-y-6">
            <h1 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Order a cake from Tootie Treats<br className="hidden sm:block" />
              <span className="text-transparent bg-gradient-to-r from-lavender-400 via-blush to-sky bg-clip-text">
                and explore the classes you’ve seen online
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/70 sm:text-xl">
              Alexa Melhado’s Sacramento bakery-turned-classroom was spotlighted on Good Day Sacramento and continues to host
              small-group decorating workshops while producing custom cakes for birthdays, showers, and creative pop-ups.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#order"
              className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-lavender-500 to-lavender-600 px-6 py-3 text-base font-semibold shadow-lg shadow-lavender-500/40 transition hover:shadow-glow sm:w-auto"
            >
              Start a custom cake request
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#classes"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white/80 backdrop-blur transition hover:border-white/40 hover:text-white sm:w-auto"
            >
              View upcoming classes
            </a>
          </div>
          <dl className="grid w-full grid-cols-1 gap-4 rounded-3xl border border-white/5 bg-white/5 p-6 text-left backdrop-blur-lg sm:grid-cols-2">
            <div className="space-y-1">
              <dt className="text-xs uppercase tracking-wide text-white/60">As seen on</dt>
              <dd className="font-display text-xl text-white">Good Day Sacramento</dd>
              <p className="text-xs text-white/60">Recent classes at the Sierra 2 Center highlight vintage piping, crumb-coating, and take-home boxes for every student.</p>
            </div>
            <div className="space-y-1">
              <dt className="text-xs uppercase tracking-wide text-white/60">Private lessons</dt>
              <dd className="font-display text-xl text-white">One-on-one from $175</dd>
              <p className="text-xs text-white/60">Schedule a two-hour session with Alexa or host a travelling class—with a local setup fee for locations within 10 miles of 95818.</p>
            </div>
          </dl>
        </div>
        <div className="flex flex-1 items-center justify-center lg:justify-end">
          <div className="relative flex max-w-md flex-col items-center gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <div className="absolute -left-8 top-12 hidden h-20 w-20 rounded-2xl bg-gradient-to-br from-blush/60 to-lavender-400/40 blur-3xl lg:block" />
            <img
              src="/sacramento-mascot.png"
              alt="Sacramento cake class mascot"
              className="w-full max-w-xs drop-shadow-[0_15px_40px_rgba(169,120,255,0.45)]"
            />
            <div className="w-full rounded-2xl border border-white/10 bg-night/50 p-4 text-sm text-white/70">
              <div className="flex items-center justify-between font-medium text-white">
                <span>Upcoming experiences</span>
                <span className="rounded-full bg-lavender-500/20 px-3 py-1 text-xs text-lavender-100">Limited spots</span>
              </div>
              <ul className="mt-3 space-y-2 text-xs leading-relaxed text-white/60">
                <li className="flex items-start gap-2"><Sparkles className="mt-0.5 h-4 w-4 text-lavender-200" />Blueberry Pie Cake Class · Sierra 2 Center · Sept 24</li>
                <li className="flex items-start gap-2"><Sparkles className="mt-0.5 h-4 w-4 text-lavender-200" />Magic Mushroom Cake Class · Panama Pottery · Oct 1</li>
                <li className="flex items-start gap-2"><Sparkles className="mt-0.5 h-4 w-4 text-lavender-200" />Monster Mash Cake Decorating · The Crafted Canvas · Oct 25</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}