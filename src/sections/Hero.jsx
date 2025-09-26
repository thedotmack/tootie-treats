import { ArrowRight, Star, Users } from 'lucide-react'

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
      <div className="pointer-events-none absolute -top-32 right-10 hidden size-64 rotate-6 rounded-[38%] border-4 border-border bg-main blur-3xl lg:block" />
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