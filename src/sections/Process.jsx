import { Heart, Sparkles, Star, Quote } from 'lucide-react'

export function Process() {
  return (
    <section
      id="alexa-method"
      className="relative border-b-4 border-border bg-secondary-background px-4 py-20 sm:px-6"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(circle at 10% 25%, rgba(255, 180, 199, 0.35), transparent 55%), radial-gradient(circle at 90% 75%, rgba(202, 253, 90, 0.4), transparent 55%)'
        }}
      />
      <div className="mx-auto w-container max-w-full">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl">Meet Your Cake Cheerleader</h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="rounded-base border-4 border-border bg-gradient-to-br from-accent-pink/60 to-accent-lavender/60 p-6 shadow-shadow">
                <div className="flex items-start gap-4">
                  <Heart className="mt-1 h-6 w-6 shrink-0 text-foreground" />
                  <div>
                    <h3 className="mb-2 font-heading text-xl text-foreground">The Beginning</h3>
                    <p className="text-foreground/85">
                      Alexa Melhado started baking at age 4 with her grandmother and a box of Jiffy corn muffins. She loved it so much, she wrote the company a fan letter and they sent her a giant box of mixes!
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-base border-4 border-border bg-gradient-to-br from-accent-teal/60 to-accent-green/60 p-6 shadow-shadow">
                <div className="flex items-start gap-4">
                  <Sparkles className="mt-1 h-6 w-6 shrink-0 text-foreground" />
                  <div>
                    <h3 className="mb-2 font-heading text-xl text-foreground">The Journey</h3>
                    <p className="text-foreground/85">
                      Today, she's Sacramento's queen of making cake decorating approachable, fun, and totally doable for everyone. After flying across the country to learn from cake heroes and perfecting her craft, Alexa developed a teaching style that's all her own.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-base border-4 border-border bg-gradient-to-br from-accent-coral/60 to-accent-pink/60 p-6 shadow-shadow">
                <div className="flex items-start gap-4">
                  <Star className="mt-1 h-6 w-6 shrink-0 text-foreground" />
                  <div>
                    <h3 className="mb-2 font-heading text-xl text-foreground">The Magic</h3>
                    <p className="text-foreground/85">
                      After teaching hundreds of Sacramento locals that yes, they CAN decorate cakes, Alexa knows exactly how to make you feel confident, creative, and accomplished - even if you think you have "two left hands" or a "black thumb."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="rounded-base border-4 border-border bg-accent-lavender/30 p-8 shadow-shadow">
                <Quote className="mb-4 h-8 w-8 text-foreground/50" />
                <h3 className="mb-6 font-heading text-2xl text-foreground">Alexa's Philosophy:</h3>
                <blockquote className="space-y-4 text-lg italic text-foreground/90">
                  <p>
                    "I want my students to have fun, color OUTSIDE the lines, and let their artistic intuition run the show. If I can do this, you can do this. It's really just about learning a simple formula and then making it your own."
                  </p>
                </blockquote>
                <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-foreground/70">
                  - Alexa Melhado, Founder
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-base border-2 border-border bg-secondary-background p-4 text-center shadow-shadow">
                  <p className="font-heading text-2xl text-foreground">7,900+</p>
                  <p className="text-sm text-foreground/75">Happy Creators</p>
                </div>
                <div className="rounded-base border-2 border-border bg-secondary-background p-4 text-center shadow-shadow">
                  <p className="font-heading text-2xl text-foreground">100%</p>
                  <p className="text-sm text-foreground/75">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}