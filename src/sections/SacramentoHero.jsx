import { ArrowRight } from 'lucide-react';

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
            🎉 Sacramento's Hottest Cake Classes! 🎉
          </span>
          <div className="space-y-6">
            <h1 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Learn to cake like a<br className="hidden sm:block" />
              <span className="text-transparent bg-gradient-to-r from-lavender-400 via-blush to-sky bg-clip-text">
                TikTok star! ✨
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/70 sm:text-xl">
              Join Sacramento's most celebrated cake decorating classes! Learn trending techniques, master buttercream art,
              and create Instagram-worthy masterpieces in our fun, energetic studio environment.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#classes"
              className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-lavender-500 to-lavender-600 px-6 py-3 text-base font-semibold shadow-lg shadow-lavender-500/40 transition hover:shadow-glow sm:w-auto"
            >
              Book Your Class Now! 🎂
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#techniques"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white/80 backdrop-blur transition hover:border-white/40 hover:text-white sm:w-auto"
            >
              See Class Techniques
            </a>
          </div>
          <dl className="grid w-full grid-cols-2 gap-6 rounded-3xl border border-white/5 bg-white/5 p-6 text-left backdrop-blur-lg sm:grid-cols-4">
            <div>
              <dt className="text-xs uppercase tracking-wide text-white/60">Students Taught</dt>
              <dd className="mt-1 font-display text-2xl">2,500+</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-white/60">TikTok Followers</dt>
              <dd className="mt-1 font-display text-2xl">850K</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-white/60">Class Techniques</dt>
              <dd className="mt-1 font-display text-2xl">25+</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-white/60">Next Class</dt>
              <dd className="mt-1 font-display text-2xl">Sat!</dd>
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
              <p className="flex items-center justify-between font-medium text-white">
                Next Class Available
                <span className="rounded-full bg-lavender-500/20 px-3 py-1 text-xs text-lavender-100">This Weekend</span>
              </p>
              <p className="mt-2 text-xs leading-relaxed text-white/60">
                🔥 Trending techniques! Join our signature buttercream class - spots filling fast!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}