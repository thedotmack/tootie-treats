import { Instagram, Link as LinkIcon, MapPin, Mail, ArrowRight } from 'lucide-react'

export function Contact({ content }) {
  // Use content from Keystatic or fallback to defaults
  const {
    title = "Your Cake Adventure Starts Here",
    subtitle = "Three Ways to Join the Fun:",
    instagram = "@tootietreats",
    instagramUrl = "https://instagram.com/tootietreats",
    linktreeUrl = "https://linktr.ee/tootietreats",
    privateEventFormUrl = "https://www.jotform.com/form/243365823386161",
    mainLocation = "Sierra 2 Center - 2791 24th Street, Sacramento\nMost regular classes held here in the Learney Room",
    popupLocation = "Various Sacramento venues - Check Instagram for special event locations",
    studioArea = "Curtis Park area, Sacramento 95818"
  } = content || {}

  return (
    <section
      id="contact"
      className="relative border-b-4 border-border bg-gradient-to-br from-accent-coral/40 via-secondary-background to-accent-teal/40 px-4 pb-24 pt-12 sm:px-6 lg:px-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(circle at 10% 25%, rgba(251, 196, 255, 0.45), transparent 55%), radial-gradient(circle at 85% 60%, rgba(159, 247, 255, 0.4), transparent 55%)'
        }}
      />
      <div className="mx-auto w-container max-w-full">
        <div className="text-center">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80 sm:text-xl">
            {subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="rounded-base border-4 border-border bg-secondary-background/95 p-8 shadow-shadow">
            <h3 className="font-heading text-xl text-foreground">1. Book a Public Class</h3>
            <p className="mt-3 text-foreground/85">$95 per person • 2 hours • All supplies included</p>
            <p className="mt-2 text-sm text-foreground/75">Perfect for trying something new or bringing a friend</p>
            <a
              href={linktreeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-base border-2 border-border bg-gradient-to-r from-accent-coral to-main px-6 py-3 font-semibold text-foreground shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none"
            >
              Browse Classes & Book
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <div className="rounded-base border-4 border-border bg-secondary-background/95 p-8 shadow-shadow">
            <h3 className="font-heading text-xl text-foreground">2. Plan a Private Party</h3>
            <p className="mt-3 text-foreground/85">Your group, your schedule, your theme</p>
            <p className="mt-2 text-sm text-foreground/75">Starting at $95 per person for groups of 3+</p>
            <a
              href={privateEventFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-base border-2 border-border bg-gradient-to-r from-accent-teal to-accent-green px-6 py-3 font-semibold text-foreground shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none"
            >
              Request Private Event
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <div className="rounded-base border-4 border-border bg-secondary-background/95 p-8 shadow-shadow">
            <h3 className="font-heading text-xl text-foreground">3. Order a Custom Cake</h3>
            <p className="mt-3 text-foreground/85">Let Alexa create edible art for your special occasion</p>
            <p className="mt-2 text-sm text-foreground/75">DM @tootietreats on Instagram to start</p>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-base border-2 border-border bg-gradient-to-r from-accent-pink to-accent-lavender px-6 py-3 font-semibold text-foreground shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none"
            >
              Start Custom Order
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-12 rounded-base border-4 border-border bg-accent-lavender/30 p-10 text-center shadow-shadow">
          <h3 className="font-heading text-2xl text-foreground">Find Us, Follow Us, Join Us</h3>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div className="text-left">
              <h4 className="font-semibold text-foreground">Class Locations:</h4>
              <p className="mt-2 text-foreground/85">
                <strong>Sierra 2 Center</strong> - 2791 24th Street, Sacramento<br />
                Most regular classes held here in the Learney Room
              </p>
              <p className="mt-3 text-foreground/85">
                <strong>Pop-up Locations</strong> - Various Sacramento venues<br />
                Check Instagram for special event locations
              </p>
            </div>

            <div className="text-left">
              <h4 className="font-semibold text-foreground">Stay Connected:</h4>
              <div className="mt-3 space-y-2">
                <a href="https://instagram.com/tootietreats" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground/85 hover:text-foreground">
                  <Instagram className="h-4 w-4" /> Instagram: @tootietreats
                </a>
                <a href="https://linktr.ee/tootietreats" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground/85 hover:text-foreground">
                  <LinkIcon className="h-4 w-4" /> Book through Linktree
                </a>
                <p className="flex items-center gap-2 text-foreground/85">
                  <Mail className="h-4 w-4" /> Email: Via Instagram DM or Linktree
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-base border-2 border-border bg-secondary-background p-4">
            <p className="flex items-center justify-center gap-2 text-sm text-foreground/75">
              <MapPin className="h-4 w-4" />
              <span>Studio Location: Curtis Park area, Sacramento 95818</span>
            </p>
            <p className="mt-1 text-xs text-foreground/60">(Exact address provided for private bookings and cake pickups)</p>
          </div>
        </div>
      </div>
    </section>
  )
}