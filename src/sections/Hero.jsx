import { ArrowRight, Star, Users } from 'lucide-react'
import Image from 'next/image'

export function Hero({ content }) {
  // Use default values if content is not available
  const {
    tagline = "Sacramento's Creative Playground • Cake Classes • Custom Cakes • Book Now",
    title = "Never Decorated a Cake Before? Perfect.",
    subtitle = "Sacramento's Most Fun Creative Experience Where Everyone Leaves Feeling Like a Cake Artist",
    description = "No Experience Needed • All Supplies Included • You'll Surprise Yourself",
    primaryButtonText = "Book Your Class - $95",
    primaryButtonLink = "#classes",
    secondaryButtonText = "Request a Private Party",
    secondaryButtonLink = "#private-events",
    badge1 = "As Seen on Good Day Sacramento",
    badge2 = "Join 7,900+ Happy Creators"
  } = content || {}

  // Featured Instagram images for hero
  const heroImages = [
    '25010028_1556556137713159_1011648992175456256_n.jpg',
    '24332359_163149614285805_1997413217185300480_n.jpg',
    '25005932_377180272752295_2985600276196491264_n.jpg',
    '26267475_2047093122188366_6963455971930669056_n.jpg',
  ]

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b-4 border-border bg-gradient-to-br from-accent-pink/40 via-secondary-background to-accent-teal/40 pb-20 pt-36"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
        style={{
          background:
            'radial-gradient(circle at 0% 0%, rgba(251, 196, 255, 0.55), transparent 55%), radial-gradient(circle at 85% 15%, rgba(159, 247, 255, 0.55), transparent 50%), radial-gradient(circle at 50% 100%, rgba(202, 253, 90, 0.45), transparent 55%)'
        }}
      />

      {/* Floating Instagram Images */}
      <div className="pointer-events-none absolute left-10 top-32 hidden size-48 rotate-[-5deg] overflow-hidden rounded-base border-4 border-border shadow-shadow lg:block">
        <Image
          src={`/instagram-images/${heroImages[0]}`}
          alt="Beautiful cake"
          fill
          className="object-cover"
        />
      </div>
      <div className="pointer-events-none absolute right-10 top-48 hidden size-56 rotate-[8deg] overflow-hidden rounded-base border-4 border-border shadow-shadow lg:block">
        <Image
          src={`/instagram-images/${heroImages[1]}`}
          alt="Custom cake design"
          fill
          className="object-cover"
        />
      </div>
      <div className="pointer-events-none absolute bottom-20 left-20 hidden size-52 rotate-[-8deg] overflow-hidden rounded-base border-4 border-border shadow-shadow lg:block">
        <Image
          src={`/instagram-images/${heroImages[2]}`}
          alt="Cake decoration"
          fill
          className="object-cover"
        />
      </div>
      <div className="pointer-events-none absolute bottom-32 right-32 hidden size-44 rotate-[5deg] overflow-hidden rounded-base border-4 border-border shadow-shadow lg:block">
        <Image
          src={`/instagram-images/${heroImages[3]}`}
          alt="Cake class creation"
          fill
          className="object-cover"
        />
      </div>
      <div className="mx-auto w-container max-w-full px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="inline-flex w-max items-center gap-2 rounded-base border-2 border-border bg-accent-teal px-6 py-3 font-heading text-sm uppercase tracking-[0.15em] text-foreground shadow-shadow">
            {tagline}
          </span>
          <div className="space-y-6">
            <h1 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] leading-tight text-foreground">
              {title}
            </h1>
            <p className="mx-auto max-w-3xl text-xl font-semibold text-foreground/90 sm:text-2xl">
              {subtitle}
            </p>
            <p className="text-lg font-medium text-foreground/80">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href={primaryButtonLink}
              className="inline-flex items-center justify-center gap-2 rounded-base border-2 border-border bg-gradient-to-r from-accent-coral via-main to-accent-pink px-8 py-4 text-lg font-semibold text-foreground shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none"
            >
              {primaryButtonText}
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href={secondaryButtonLink}
              className="inline-flex items-center justify-center gap-2 rounded-base border-2 border-border bg-secondary-background px-8 py-4 text-lg font-semibold text-foreground shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:bg-accent-teal hover:text-foreground hover:shadow-none"
            >
              {secondaryButtonText}
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 pt-4">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-accent-pink" />
              <span className="text-lg font-semibold text-foreground">
                {badge1}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-accent-teal" />
              <span className="text-lg font-semibold text-foreground">
                {badge2}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}