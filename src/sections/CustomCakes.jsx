import { Cake, Instagram, MapPin, ArrowRight } from 'lucide-react'

const cakeTypes = [
  'Elegant wedding designs',
  'Wild birthday creations',
  'Character cakes',
  'Corporate logos',
  'Milestone celebrations',
  'Any edible art you can dream up'
]

export function CustomCakes() {
  return (
    <section id="custom-cakes" className="relative border-b-4 border-border bg-gradient-to-bl from-accent-green/30 via-secondary-background to-accent-coral/30 px-4 py-20 sm:px-6">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(circle at 80% 20%, rgba(255, 228, 77, 0.35), transparent 55%), radial-gradient(circle at 20% 80%, rgba(159, 247, 255, 0.35), transparent 50%)'
        }}
      />
      <div className="mx-auto w-container max-w-full">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl">
              Want the Cake Without the Class?
            </h2>
            <p className="mt-4 text-xl font-semibold text-foreground/90">
              When You Need Edible Art Delivered
            </p>
            <p className="mt-6 text-lg text-foreground/85">
              We get it. Sometimes you need a showstopping cake but don't have two hours to make it yourself. Alexa creates custom cakes that make people say "WAIT, that's a CAKE?!"
            </p>
            <p className="mt-4 text-lg text-foreground/85">
              From elegant wedding designs to wild birthday creations, character cakes to corporate logos - if you can dream it, Alexa can make it in cake form.
            </p>

            <div className="mt-8 rounded-base border-4 border-border bg-accent-lavender/60 p-6 shadow-shadow">
              <h3 className="font-heading text-xl text-foreground">Perfect for:</h3>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {cakeTypes.map((type) => (
                  <li key={type} className="flex items-center gap-2">
                    <Cake className="h-4 w-4 text-foreground" />
                    <span className="text-foreground/85">{type}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-base border-4 border-border bg-secondary-background p-8 shadow-shadow">
              <h3 className="font-heading text-2xl text-foreground">How to Order:</h3>
              <ol className="mt-6 space-y-4">
                <li className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-base border-2 border-border bg-accent-pink font-heading text-sm font-bold text-foreground shadow-shadow">1</span>
                  <div>
                    <p className="font-semibold text-foreground">DM @tootietreats on Instagram</p>
                    <p className="mt-1 text-sm text-foreground/75">Share your vision with photos, ideas, or just describe what you're imagining</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-base border-2 border-border bg-accent-teal font-heading text-sm font-bold text-foreground shadow-shadow">2</span>
                  <div>
                    <p className="font-semibold text-foreground">Alexa will work with you on design and pricing</p>
                    <p className="mt-1 text-sm text-foreground/75">Collaborate on the perfect design within your budget</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-base border-2 border-border bg-accent-green font-heading text-sm font-bold text-foreground shadow-shadow">3</span>
                  <div>
                    <p className="font-semibold text-foreground">Pick up your edible masterpiece from Curtis Park</p>
                    <p className="mt-1 text-sm text-foreground/75">Convenient pickup location near ZIP 95818</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-base border-2 border-border bg-accent-coral font-heading text-sm font-bold text-foreground shadow-shadow">4</span>
                  <div>
                    <p className="font-semibold text-foreground">Watch everyone's jaws drop</p>
                    <p className="mt-1 text-sm text-foreground/75">Seriously, they won't believe it's cake</p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="https://instagram.com/tootietreats"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-base border-2 border-border bg-gradient-to-r from-accent-coral to-main px-6 py-3 font-semibold text-foreground shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none"
              >
                <Instagram className="h-5 w-5" />
                Start Your Custom Order on Instagram
                <ArrowRight className="h-5 w-5" />
              </a>
              <div className="flex items-center gap-2 rounded-base border-2 border-border bg-accent-teal/30 px-4 py-3">
                <MapPin className="h-5 w-5 text-foreground" />
                <span className="text-sm text-foreground/85">Pickup from Curtis Park, Sacramento 95818</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}