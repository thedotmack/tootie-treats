import { Calendar, MapPin, Clock, ExternalLink } from 'lucide-react';

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
];

export function Classes() {
  return (
    <section id="classes" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_minmax(320px,420px)]">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="font-display text-3xl text-white sm:text-4xl">Upcoming Sacramento classes</h2>
              <p className="text-base text-white/70 sm:text-lg">
                Alexa Melhado teaches hands-on decorating workshops around the Sacramento area—from Curtis Park’s Sierra 2 Center to creative partners like Panama Pottery and The Crafted Canvas. Every class includes ingredients, tools, and a box to carry your cake home.
              </p>
              <p className="text-sm text-white/50">
                Tickets are limited and sold through the host venues. Use the links below or visit the Tootie Treats Linktree for the latest calendar.
              </p>
            </div>
            <div className="space-y-4">
              {publicClasses.map((classItem) => (
                <article key={classItem.name} className="rounded-3xl border border-white/5 bg-white/5 p-6">
                  <header className="flex flex-col gap-2 border-b border-white/10 pb-4 text-left">
                    <h3 className="font-display text-xl text-white">{classItem.name}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-white/60">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" /> {classItem.date}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" /> {classItem.time}
                      </span>
                      <span className="rounded-full bg-lavender-500/15 px-3 py-1 text-xs text-lavender-100">{classItem.price}</span>
                    </div>
                    <div className="inline-flex items-center gap-2 text-xs text-white/60">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{classItem.location}</span>
                    </div>
                  </header>
                  <ul className="mt-4 space-y-2 text-sm text-white/70">
                    {classItem.details.map((detail) => (
                      <li key={detail}>• {detail}</li>
                    ))}
                  </ul>
                  <a
                    href={classItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-full border border-lavender-400/40 px-4 py-2 text-sm font-semibold text-lavender-200 transition hover:border-lavender-200 hover:text-white"
                  >
                    Reserve through host site <ExternalLink className="h-4 w-4" />
                  </a>
                </article>
              ))}
            </div>
          </div>
          <aside className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
            <div className="space-y-2">
              <h3 className="font-display text-xl text-white">Private group experiences</h3>
              <p>
                Want a birthday, bachelorette, or team-building cake class? Private sessions start at $175 for one person, $122 each for two students, and $95 each for groups of three or more.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-white">Travel & host details</h4>
              <p>
                Host at the Tootie Treats studio in Sacramento or have Alexa travel to you. There’s a $50 travel and setup fee within ten miles of ZIP 95818; additional distance is quoted after you submit the request form.
              </p>
            </div>
            <div className="space-y-3">
              <a
                href="https://app.acuityscheduling.com/catalog.php?owner=32574148&action=addCart&clear=1&id=2037518"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-lavender-500 to-lavender-600 px-5 py-3 text-sm font-semibold text-night shadow-lavender-500/40 transition hover:shadow-glow"
              >
                Book a private class
              </a>
              <a
                href="https://www.jotform.com/form/243365823386161"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
              >
                Submit travel class request
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}