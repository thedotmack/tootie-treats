import { ArrowRight, Sparkles } from 'lucide-react'

const marqueeItems = [
  'Custom cakes made in Curtis Park',
  'Sacramento workshops every month',
  'Decorating classes led by Alexa Melhado',
  'Private lessons + travelling pop-ups',
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b-4 border-border bg-background pb-24 pt-36"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-70 opacity-40"
        aria-hidden
      />
      <div className="pointer-events-none absolute -top-32 right-10 hidden size-64 rotate-6 rounded-[38%] border-4 border-border bg-main/40 blur-3xl lg:block" />
      <div className="mx-auto grid w-container max-w-full gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_420px]">
        <div className="flex flex-col gap-8">
          <span className="inline-flex w-max items-center gap-2 rounded-base border-2 border-border bg-secondary-background px-4 py-2 font-heading text-xs uppercase tracking-[0.18em] text-foreground shadow-shadow">
            Sacramento • Cakes • Classes
          </span>
          <div className="space-y-5">
            <h1 className="font-heading text-4xl leading-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
              Tootie Treats crafts bold custom cakes and hosts neon-bright decorating classes across Sacramento.
            </h1>
            <p className="max-w-2xl text-base text-foreground/80 sm:text-lg">
              Alexa Melhado’s Curtis Park studio-turned-classroom was featured on Good Day Sacramento. Join a workshop at the
              Sierra 2 Center, book a private session, or submit a travelling class request—every detail on this site links
              straight to her live schedule.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#order"
              className="inline-flex items-center justify-center gap-2 rounded-base border-2 border-border bg-main px-6 py-3 font-semibold text-main-foreground shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none"
            >
              Start a custom cake request
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#classes"
              className="inline-flex items-center justify-center gap-2 rounded-base border-2 border-border bg-secondary-background px-6 py-3 font-semibold text-foreground shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:bg-main hover:text-main-foreground hover:shadow-none"
            >
              Browse upcoming classes
            </a>
          </div>
          <dl className="grid gap-4 rounded-base border-2 border-border bg-secondary-background p-6 shadow-shadow sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70">As seen on</dt>
              <dd className="font-heading text-2xl text-foreground">Good Day Sacramento</dd>
              <p className="text-sm text-foreground/70">
                Hands-on classes at the Sierra 2 Center teach stacking, crumb-coating, and vintage piping. Every student heads
                home with a boxed cake.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70">Private lessons</dt>
              <dd className="font-heading text-2xl text-foreground">One-on-one from $175</dd>
              <p className="text-sm text-foreground/70">
                Host in Curtis Park or request a travelling class. Alexa brings the ingredients, tools, and a signature
                neobrutalist setup.
              </p>
            </div>
          </dl>
        </div>
        <aside className="relative flex flex-col gap-5 rounded-base border-4 border-border bg-secondary-background p-6 shadow-shadow">
          <div className="absolute -left-10 top-10 hidden size-24 -rotate-6 rounded-[40%] border-4 border-border bg-main/60 blur-xl md:block" />
          <img
            src="/sacramento-class-hero.png"
            alt="Decorated cake from a Sacramento class"
            className="rounded-base border-2 border-border bg-background p-3 shadow-shadow"
          />
          <div className="rounded-base border-2 border-border bg-background p-4 shadow-shadow">
            <header className="flex items-center justify-between">
              <span className="font-heading text-lg text-foreground">Upcoming experiences</span>
              <span className="rounded-base border-2 border-border bg-main px-3 py-1 text-xs font-semibold text-main-foreground">
                Limited spots
              </span>
            </header>
            <ul className="mt-4 space-y-3 text-sm text-foreground/80">
              <li className="flex items-start gap-2">
                <Sparkles className="mt-1 h-4 w-4 text-foreground" />
                Blueberry Pie Cake Class · Sierra 2 Center · Sept 24
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="mt-1 h-4 w-4 text-foreground" />
                Magic Mushroom Cake Class · Panama Pottery · Oct 1
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="mt-1 h-4 w-4 text-foreground" />
                Monster Mash Cake Decorating · The Crafted Canvas · Oct 25
              </li>
            </ul>
          </div>
        </aside>
      </div>
      <div className="mt-12 border-y-4 border-border bg-secondary-background py-3">
        <div className="mx-auto w-container max-w-full overflow-hidden">
          <div className="relative flex whitespace-nowrap">
            <div className="flex items-center gap-6 text-sm font-heading uppercase tracking-[0.3em] text-foreground animate-marquee">
              {marqueeItems.map((item) => (
                <span key={item} className="flex items-center gap-3">
                  {item}
                  <span className="inline-block size-2 rounded-full bg-foreground" />
                </span>
              ))}
            </div>
            <div className="flex items-center gap-6 text-sm font-heading uppercase tracking-[0.3em] text-foreground animate-marquee-secondary">
              {marqueeItems.map((item) => (
                <span key={`${item}-mirror`} className="flex items-center gap-3">
                  {item}
                  <span className="inline-block size-2 rounded-full bg-foreground" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}