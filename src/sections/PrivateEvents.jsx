import { PartyPopper, Heart, Users, Briefcase, Wine, Calendar, Home, MapPin } from 'lucide-react'

const eventTypes = [
  { icon: PartyPopper, label: 'Birthday Parties', desc: 'Way better than another restaurant dinner' },
  { icon: Heart, label: 'Bachelorette Parties', desc: 'Memorable AND you get cake' },
  { icon: Calendar, label: 'Date Nights', desc: 'Nothing says romance like buttercream and laughter' },
  { icon: Briefcase, label: 'Team Building', desc: 'Your coworkers will actually want to come to this one' },
  { icon: Wine, label: "Girls' Nights", desc: 'Wine, friends, and cake decorating? Yes please!' },
  { icon: Users, label: 'Family Reunions', desc: 'An activity everyone from 15 to 85 can enjoy' },
  { icon: PartyPopper, label: 'Just Because', desc: 'Tuesday is a perfectly valid reason to decorate a cake' },
]

const pricing = [
  { people: 'Solo Session', price: '$175', desc: 'one-on-one with Alexa' },
  { people: 'Duo', price: '$122', desc: 'per person' },
  { people: 'Groups of 3+', price: '$95', desc: 'per person' },
  { people: 'Mobile Classes', price: '+$50', desc: 'travel fee within 10 miles of 95818' },
]

export function PrivateEvents() {
  return (
    <section id="private-events" className="relative border-b-4 border-border bg-gradient-to-br from-accent-coral/30 via-secondary-background to-accent-pink/40 px-4 py-20 sm:px-6">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(circle at 20% 50%, rgba(255, 180, 199, 0.45), transparent 55%), radial-gradient(circle at 80% 80%, rgba(255, 228, 77, 0.35), transparent 50%)'
        }}
      />
      <div className="mx-auto w-container max-w-full">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl">
            Bring Your Crew. We'll Bring the Party.
          </h2>
          <p className="mt-4 text-lg text-foreground/80 sm:text-xl">
            Transform Any Occasion into an Unforgettable Creative Experience
          </p>
        </div>

        <div className="mt-12">
          <h3 className="mb-6 text-center font-heading text-2xl text-foreground">Perfect for:</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {eventTypes.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="rounded-base border-4 border-border bg-secondary-background p-4 shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none"
              >
                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-base border-2 border-border bg-main shadow-shadow">
                    <Icon className="h-5 w-5 text-main-foreground" />
                  </div>
                  <div>
                    <p className="font-heading text-foreground">{label}</p>
                    <p className="mt-1 text-sm text-foreground/75">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-base border-4 border-border bg-accent-lavender/60 p-8 shadow-shadow">
            <h3 className="font-heading text-2xl text-foreground">Private Party Pricing:</h3>
            <ul className="mt-6 space-y-4">
              {pricing.map(({ people, price, desc }) => (
                <li key={people} className="flex items-center justify-between rounded-base border-2 border-border bg-secondary-background p-4">
                  <span className="font-semibold text-foreground">{people}</span>
                  <span className="text-right">
                    <span className="font-heading text-xl text-foreground">{price}</span>
                    {desc && <span className="ml-2 text-sm text-foreground/75">{desc}</span>}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-foreground/85">
              All private parties include the same materials and instruction as regular classes, plus the flexibility to choose your theme and schedule.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-base border-4 border-border bg-accent-teal/60 p-6 shadow-shadow">
              <div className="mb-4 flex items-center gap-3">
                <Home className="h-6 w-6 text-foreground" />
                <h4 className="font-heading text-xl text-foreground">Host Options</h4>
              </div>
              <p className="text-foreground/85">
                Choose between hosting in Alexa's Curtis Park studio or having her bring the party to you! Perfect for birthday celebrations, team events, or any gathering where you want to add creative fun.
              </p>
            </div>

            <div className="rounded-base border-4 border-border bg-accent-pink/60 p-6 shadow-shadow">
              <div className="mb-4 flex items-center gap-3">
                <MapPin className="h-6 w-6 text-foreground" />
                <h4 className="font-heading text-xl text-foreground">Mobile Service</h4>
              </div>
              <p className="text-foreground/85">
                We'll come to you! Flat $50 travel fee within 10 miles of 95818. Additional distance quoted after you submit the travel form. Alexa brings everything needed for your cake decorating adventure.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="https://app.acuityscheduling.com/catalog.php?owner=32574148&action=addCart&clear=1&id=2037518"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-base border-2 border-border bg-gradient-to-r from-accent-coral to-main px-6 py-3 font-semibold text-foreground shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none"
              >
                Book a Private Class
              </a>
              <a
                href="https://www.jotform.com/form/243365823386161"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-base border-2 border-border bg-secondary-background px-6 py-3 font-semibold text-foreground shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:bg-accent-teal hover:text-foreground hover:shadow-none"
              >
                Submit Travel Class Request
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}