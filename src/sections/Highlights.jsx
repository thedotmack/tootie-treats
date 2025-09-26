import { Clock, Heart, Smile, Award } from 'lucide-react'

export function Highlights() {
  return (
    <section id="about" className="relative border-b-4 border-border bg-secondary-background px-4 py-20 sm:px-6">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(circle at 15% 20%, rgba(255, 228, 77, 0.45), transparent 55%), radial-gradient(circle at 85% 30%, rgba(255, 180, 199, 0.35), transparent 50%)'
        }}
      />
      <div className="mx-auto w-container max-w-full">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl">
              Two Hours of Pure Creative Joy (And Yes, You Can Do This)
            </h2>
            <p className="mt-6 text-lg text-foreground/80 sm:text-xl">
              Remember making mud pies as a kid? This is like that, but prettier and edible.
            </p>
          </div>

          <div className="mt-12 space-y-6 rounded-base border-4 border-border bg-gradient-to-br from-accent-pink/30 via-secondary-background to-accent-teal/30 p-8 shadow-shadow">
            <p className="text-lg text-foreground/85">
              At Tootie Treats, we believe everyone has an inner cake artist waiting to play. Whether you've never held a piping bag or you burn toast, our founder Alexa's teaching style encourages you to use your imagination and color outside the lines. No perfection required. Just fun.
            </p>
            <p className="text-lg text-foreground/85">
              Founded by Alexa Melhado (who started her baking journey at age 4 with grandma and a box of Jiffy corn muffins), Tootie Treats has become Sacramento's favorite place to discover you're way more creative than you thought.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group relative flex flex-col gap-4 rounded-base border-4 border-border bg-accent-lavender/60 p-6 text-center shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none">
              <div className="mx-auto flex size-12 items-center justify-center rounded-base border-2 border-border bg-main text-main-foreground shadow-shadow">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg text-foreground">2 Hours</h3>
              <p className="text-sm text-foreground/75">Just enough time to learn, create, and surprise yourself</p>
            </div>

            <div className="group relative flex flex-col gap-4 rounded-base border-4 border-border bg-accent-pink/60 p-6 text-center shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none">
              <div className="mx-auto flex size-12 items-center justify-center rounded-base border-2 border-border bg-main text-main-foreground shadow-shadow">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg text-foreground">All Included</h3>
              <p className="text-sm text-foreground/75">Every tool, ingredient, and even the take-home box</p>
            </div>

            <div className="group relative flex flex-col gap-4 rounded-base border-4 border-border bg-accent-teal/60 p-6 text-center shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none">
              <div className="mx-auto flex size-12 items-center justify-center rounded-base border-2 border-border bg-main text-main-foreground shadow-shadow">
                <Smile className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg text-foreground">No Experience</h3>
              <p className="text-sm text-foreground/75">Seriously, we've taught people who can't draw stick figures</p>
            </div>

            <div className="group relative flex flex-col gap-4 rounded-base border-4 border-border bg-accent-green/60 p-6 text-center shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none">
              <div className="mx-auto flex size-12 items-center justify-center rounded-base border-2 border-border bg-main text-main-foreground shadow-shadow">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg text-foreground">Bragging Rights</h3>
              <p className="text-sm text-foreground/75">Walk out feeling like a creative genius (because you are)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}