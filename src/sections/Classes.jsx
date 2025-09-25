import { Calendar, MapPin, Clock, ExternalLink } from 'lucide-react'

const publicClasses = [
  {
    name: 'Blueberry Pie Cake Class',
    date: 'Wednesday · Sept 24, 2025',
    time: '7:00 – 8:30 PM',
    price: '$95',
    location: 'Sierra 2 Center Learney Room 7 · 2791 24th Street, Sacramento',
    details: [
      'Stack, fill, and crumb-coat a layered cake before piping a blueberry lattice pie design.',
      'All materials and a take-home box are provided by the Sierra Curtis Neighborhood Association.'
    ],
    link: 'https://secure.qgiv.com/for/101for101years/event/blueberrypiecakeclass'
  },
  {
    name: 'Fall Cake Decorating Class (Ages 15+)',
    date: 'Sunday · Sept 28, 2025',
    time: '6:00 – 7:45 PM',
    price: '$95',
    location: 'Sierra 2 Center Learney Room 7 · 2791 24th Street, Sacramento',
    details: [
      'Learn to stack, fill, and crumb-coat buttercream cakes before adding fall embellishments.',
      'Taught by Alexa Melhado of Tootie Treats—highlighted on Good Day Sacramento.'
    ],
    link: 'https://secure.qgiv.com/for/101for101years/event/fallcakedecoratingclassages15/'
  },
  {
    name: 'Magic Mushroom Cake Class',
    date: 'Wednesday · Oct 1, 2025',
    time: 'Check booking link for available sessions',
    price: 'See booking link',
    location: 'Panama Pottery · 4421 24th Street, Sacramento',
    details: [
      'Listed on the Tootie Treats scheduling calendar with Panama Pottery as the host venue.',
      'Reserve directly through Acuity Scheduling to secure your seat.'
    ],
    link: 'https://tootietreatsclasses.as.me/?appointmentType=83772956'
  },
  {
    name: 'Monster Mash Cake Decorating',
    date: 'Saturday · Oct 25, 2025',
    time: 'Check booking link for seatings',
    price: 'See booking link',
    location: 'The Crafted Canvas · 9906 Fair Oaks Blvd., Fair Oaks',
    details: [
      'Scheduled through the Tootie Treats Acuity calendar in partnership with The Crafted Canvas.',
      'Follow the link for ticket availability and host details.'
    ],
    link: 'https://tootietreatsclasses.as.me/?appointmentType=83293677'
  },
  {
    name: 'Halloween Cake Decorating Class',
    date: 'Sunday · Oct 26, 2025',
    time: '2:00 – 3:30 PM',
    price: '$95',
    location: 'Sierra 2 Center Learney Room 7 · 2791 24th Street, Sacramento',
    details: [
      'Sierra Curtis Neighborhood Association hosts this Halloween workshop with Alexa Melhado.',
      'All tools and take-home boxes are provided—perfect for beginner decorators.'
    ],
    link: 'https://secure.qgiv.com/for/101for101years/event/halloweencakedecoratingclass/'
  }
]

const cardBackgrounds = [
  'var(--accent-pink)',
  'var(--accent-teal)',
  'var(--accent-lavender)',
  'var(--accent-green)',
  'var(--accent-coral)'
]

export function Classes() {
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
      <div className="mx-auto grid w-container max-w-full gap-10 lg:grid-cols-[minmax(0,1fr)_380px]">
        <div className="flex flex-col gap-6">
          <header className="space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl">Upcoming Sacramento classes</h2>
            <p className="text-base text-foreground/80 sm:text-lg">
              Alexa Melhado teaches hands-on decorating workshops across Sacramento—from Curtis Park’s Sierra 2 Center to
              partners like Panama Pottery and The Crafted Canvas. Every ticket includes tools, buttercream, and a neon-bright
              cake box.
            </p>
            <p className="text-sm text-foreground/70">
              Ticketing lives with each host venue. Use the verified links below or visit the Tootie Treats Linktree for the
              newest schedule.
            </p>
          </header>
          <div className="space-y-5">
            {publicClasses.map((classItem, index) => (
              <article
                key={classItem.name}
                className="rounded-base border-4 border-border p-6 shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none"
                style={{ backgroundColor: cardBackgrounds[index % cardBackgrounds.length] }}
              >
                <header className="flex flex-col gap-3 border-b-2 border-border pb-4">
                  <h3 className="font-heading text-xl text-foreground">{classItem.name}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-4 w-4" /> {classItem.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-4 w-4" /> {classItem.time}
                    </span>
                    <span className="rounded-base border-2 border-border bg-secondary-background px-3 py-1 text-[0.7rem] font-semibold text-foreground">
                      {classItem.price}
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-2 text-xs text-foreground/70">
                    <MapPin className="h-4 w-4" />
                    <span>{classItem.location}</span>
                  </div>
                </header>
                <ul className="mt-4 space-y-2 text-sm text-foreground/75">
                  {classItem.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <span className="mt-1 inline-block size-2 rounded-full bg-foreground" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={classItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-base border-2 border-border bg-secondary-background px-4 py-2 text-sm font-semibold text-foreground shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:bg-accent-teal hover:text-foreground hover:shadow-none"
                >
                  Reserve via host site <ExternalLink className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
        <aside className="flex h-full flex-col gap-5 rounded-base border-4 border-border bg-secondary-background/90 p-6 shadow-shadow">
          <div className="rounded-base border-2 border-border bg-accent-pink/50 p-4">
            <h3 className="font-heading text-xl text-foreground">Private group experiences</h3>
            <p className="mt-3 text-sm text-foreground/75">
              Birthdays, bachelorettes, or corporate teams welcome. Private sessions start at $175 for one decorator, $122 each
              for two, and $95 each for groups of three or more.
            </p>
          </div>
          <div className="rounded-base border-2 border-border bg-accent-teal/50 p-4">
            <h4 className="font-heading text-sm uppercase tracking-[0.2em] text-foreground/70">Travel & host details</h4>
            <p className="mt-2 text-sm text-foreground/75">
              Host in the Tootie Treats studio or have Alexa travel within ten miles of ZIP 95818 (flat $50 setup). Additional
              distance is quoted after you submit the travel form.
            </p>
          </div>
          <div className="mt-auto grid gap-3">
            <a
              href="https://app.acuityscheduling.com/catalog.php?owner=32574148&action=addCart&clear=1&id=2037518"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-base border-2 border-border bg-gradient-to-r from-accent-coral to-main px-5 py-3 font-semibold text-foreground shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none"
            >
              Book a private class
            </a>
            <a
              href="https://www.jotform.com/form/243365823386161"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-base border-2 border-border bg-secondary-background px-5 py-3 font-semibold text-foreground shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:bg-accent-teal hover:text-foreground hover:shadow-none"
            >
              Submit travel class request
            </a>
          </div>
        </aside>
      </div>
    </section>
  )
}