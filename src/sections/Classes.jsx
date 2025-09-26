'use client'

import { Cake, Gem, Candy, TreePine, Ghost, Check } from 'lucide-react'
import { useEffect } from 'react'

const defaultClasses = [
  {
    icon: Cake,
    title: 'Vintage Cake Class',
    description: 'Create a retro-fabulous cake complete with vintage piping techniques and craft your own edible friendship bracelet for the top. It\'s like the 70s and 80s had a delicious baby.',
    perfectFor: 'First-timers, birthday parties, anyone who loves retro vibes',
    color: 'var(--accent-pink)'
  },
  {
    icon: Gem,
    title: 'Crystal Geode Cake',
    description: 'Turn sugar into edible gemstones that sparkle like the real thing. Your Instagram will thank you. Your friends won\'t believe you made it.',
    perfectFor: 'Date nights, creative souls, geology enthusiasts with a sweet tooth',
    color: 'var(--accent-teal)'
  },
  {
    icon: Candy,
    title: 'Candy Explosion',
    description: 'Remember being a kid in a candy store? Now imagine decorating a cake with ALL THE CANDY. Dreams do come true.',
    perfectFor: 'The young at heart, birthday celebrations, sugar enthusiasts',
    color: 'var(--accent-lavender)'
  },
  {
    icon: TreePine,
    title: 'Magic Mushroom Cake',
    description: 'Whimsical forest vibes meet buttercream brilliance. No actual mushrooms involved, just pure imagination and lots of color.',
    perfectFor: 'Creative types, anyone who loved fairy tales, unique gift-givers',
    color: 'var(--accent-green)'
  },
  {
    icon: Ghost,
    title: 'Monster Mash & Seasonal Specials',
    description: 'Bold colors, monster details, and creative techniques that change with the seasons. October brings Halloween magic, December brings holiday cheer!',
    perfectFor: 'Holiday celebrations, themed parties, seasonal fun',
    color: 'var(--accent-coral)'
  }
]

const defaultIncluded = [
  'All supplies, tools, and materials (seriously, everything)',
  'Step-by-step guidance (we promise you won\'t mess up)',
  'Refreshments to keep your energy up',
  'A sturdy box to transport your masterpiece home safely',
  '2 hours of pure fun with no cleanup required',
  'Bragging rights forever'
]

export function Classes({ content }) {
  // Use content from Keystatic or fallback to defaults
  const {
    title = "Pick Your Adventure (Seriously, They're All Fun)",
    subtitle = "Everything's Included. Just Show Up Ready to Play.",
    price = "$95",
    includesTitle = "What Your $95 Includes:",
    classes = defaultClasses,
    included = defaultIncluded,
    regularClassAge = "15+",
    cakeBuddiesAge = "3-17 with an adult companion",
    bookingUrl = "https://linktr.ee/tootietreats"
  } = content || {}

  // Load Acuity's resize script for better iframe responsiveness
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://embed.acuityscheduling.com/js/embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <section
      id="classes"
      className="relative border-b-4 border-border bg-gradient-to-r from-accent-green/30 via-secondary-background to-accent-lavender/40 px-4 py-20 sm:px-6"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(circle at 15% 80%, rgba(255, 228, 77, 0.45), transparent 55%), radial-gradient(circle at 85% 20%, rgba(210, 215, 255, 0.35), transparent 50%)'
        }}
      />
      <div className="mx-auto w-container max-w-full">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-foreground/80 sm:text-xl">
            {subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {classes.map(({ icon: Icon, title, description, perfectFor, color }) => (
            <article
              key={title}
              className="group relative flex flex-col gap-4 rounded-base border-4 border-border p-6 shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none"
              style={{ backgroundColor: color }}
            >
              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-base border-2 border-border bg-main text-main-foreground shadow-shadow">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl text-foreground">{title}</h3>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-foreground/85">{description}</p>
              <div className="mt-auto">
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground/70">Perfect for:</p>
                <p className="mt-1 text-sm text-foreground/75">{perfectFor}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-base border-4 border-border bg-secondary-background p-8 shadow-shadow">
          <h3 className="font-heading text-2xl text-foreground">{includesTitle}</h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-accent-teal" />
                <span className="text-foreground/85">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-base border-2 border-border bg-accent-lavender/30 p-6">
            <p className="font-semibold text-foreground">Classes for Everyone:</p>
            <ul className="mt-3 space-y-2 text-foreground/85">
              <li>• Regular Classes: Ages {regularClassAge}</li>
              <li>• Cake Buddies: Ages {cakeBuddiesAge}</li>
              <li>• All skill levels welcome (especially "I can't even draw a stick figure" level)</li>
            </ul>
          </div>
        </div>

        {/* Embedded Acuity Scheduling with Enhanced Integration */}
        <div className="mt-12 rounded-base border-4 border-border bg-gradient-to-br from-accent-pink/20 via-white to-accent-lavender/20 p-8 shadow-shadow">
          <h3 className="mb-2 text-center font-heading text-3xl text-foreground">🎂 Book Your Class Right Here! 🎂</h3>
          <p className="mb-6 text-center text-foreground/80">Pick your date, pay online, and get ready to create something amazing!</p>
          <div className="relative w-full overflow-hidden rounded-base border-4 border-border bg-white shadow-shadow">
            <iframe
              src="https://tootietreatsclasses.as.me/schedule.php?appointmentType=83772956&embed=1&noHeader=1"
              width="100%"
              height="800"
              frameBorder="0"
              className="acuity-scheduling-iframe min-h-[800px] w-full sm:min-h-[900px]"
              style={{ border: 'none' }}
              title="Schedule Your Cake Class"
              loading="lazy"
            />
          </div>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-base border-2 border-border bg-secondary-background px-6 py-3 text-sm font-semibold text-foreground shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:bg-accent-lavender hover:shadow-none"
            >
              Having trouble? Book on Linktree →
            </a>
            <a
              href="#private-events"
              className="inline-flex items-center justify-center gap-2 rounded-base border-2 border-border bg-gradient-to-r from-accent-coral via-main to-accent-pink px-6 py-3 font-semibold text-foreground shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none"
            >
              Book a Private Class
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}