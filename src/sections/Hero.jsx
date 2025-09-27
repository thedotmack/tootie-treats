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
      className="relative overflow-hidden border-b-4 border-accent-pink bg-gradient-to-br from-accent-pink/20 via-accent-lavender/20 to-accent-teal/20 pb-12 pt-16 sm:pb-20 sm:pt-24 liquid-shape"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse at 0% 0%, rgba(255, 0, 255, 0.4), transparent 55%), radial-gradient(ellipse at 85% 15%, rgba(0, 255, 255, 0.4), transparent 50%), radial-gradient(ellipse at 50% 100%, rgba(0, 255, 136, 0.4), transparent 55%), radial-gradient(circle at center, rgba(157, 78, 221, 0.2), transparent 70%)'
        }}
      />

      {/* Floating Instagram Images - Desktop */}
      <div className="pointer-events-none absolute left-10 top-32 hidden size-48 rotate-[-5deg] overflow-hidden rounded-[30%_70%_70%_30%_/_60%_40%_60%_40%] border-4 border-accent-pink shadow-[0_0_30px_rgba(255,20,147,0.6)] animate-liquid-morph lg:block">
        <Image
          src={`/instagram-images/${heroImages[0]}`}
          alt="Beautiful cake"
          fill
          className="object-cover"
        />
      </div>
      <div className="pointer-events-none absolute right-10 top-48 hidden size-56 rotate-[8deg] overflow-hidden rounded-[70%_30%_30%_70%_/_40%_60%_40%_60%] border-4 border-accent-teal shadow-[0_0_30px_rgba(0,255,255,0.6)] animate-liquid-morph lg:block" style={{animationDelay: '2s'}}>
        <Image
          src={`/instagram-images/${heroImages[1]}`}
          alt="Custom cake design"
          fill
          className="object-cover"
        />
      </div>
      <div className="pointer-events-none absolute bottom-20 left-20 hidden size-52 rotate-[-8deg] overflow-hidden rounded-[50%_50%_70%_30%_/_60%_60%_40%_40%] border-4 border-accent-lavender shadow-[0_0_30px_rgba(157,78,221,0.6)] animate-liquid-morph lg:block" style={{animationDelay: '4s'}}>
        <Image
          src={`/instagram-images/${heroImages[2]}`}
          alt="Cake decoration"
          fill
          className="object-cover"
        />
      </div>
      <div className="pointer-events-none absolute bottom-32 right-32 hidden size-44 rotate-[5deg] overflow-hidden rounded-[30%_70%_50%_50%_/_30%_70%_70%_30%] border-4 border-accent-green shadow-[0_0_30px_rgba(0,255,136,0.6)] animate-liquid-morph lg:block" style={{animationDelay: '6s'}}>
        <Image
          src={`/instagram-images/${heroImages[3]}`}
          alt="Cake class creation"
          fill
          className="object-cover"
        />
      </div>
      <div className="mx-auto w-container max-w-full px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="relative w-full overflow-hidden rounded-full border-2 border-main bg-gradient-to-r from-main via-accent-pink to-accent-teal shadow-[0_0_40px_rgba(255,0,255,0.7)] animate-glow-pulse">
            <div className="animate-scroll-left flex whitespace-nowrap py-3">
              <span className="inline-flex items-center gap-2 px-6 font-display text-sm uppercase tracking-[0.2em] text-main-foreground">
                {tagline}
              </span>
              <span className="inline-flex items-center gap-2 px-6 font-display text-sm uppercase tracking-[0.2em] text-main-foreground">
                {tagline}
              </span>
              <span className="inline-flex items-center gap-2 px-6 font-display text-sm uppercase tracking-[0.2em] text-main-foreground">
                {tagline}
              </span>
            </div>
          </div>
          <div className="space-y-6">
            <h1 className="font-display text-[clamp(3rem,6vw,5rem)] leading-none text-transparent bg-clip-text bg-gradient-to-r from-accent-pink via-main to-accent-teal uppercase tracking-tight psychedelic-text">
              {title}
            </h1>

            {/* Featured Image Grid - Mobile & Tablet */}
            <div className="my-4 grid grid-cols-2 gap-2 sm:my-6 sm:grid-cols-4 sm:gap-3 lg:hidden">
              {heroImages.map((image, index) => (
                <div
                  key={image}
                  className="relative aspect-square overflow-hidden rounded-[40%_60%_60%_40%_/_60%_30%_70%_40%] border-4 border-accent-pink bg-gradient-to-br from-accent-lavender/20 to-accent-teal/20 shadow-[0_0_20px_rgba(255,20,147,0.5)] animate-float-random"
                  style={{
                    transform: `rotate(${index % 2 === 0 ? '-3' : '3'}deg)`
                  }}
                >
                  <Image
                    src={`/instagram-images/${image}`}
                    alt="Cake creation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>

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