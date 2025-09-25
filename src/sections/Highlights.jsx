import { Calendar, GraduationCap, Home, Link } from 'lucide-react';

const highlights = [
  {
    title: 'Curtis Park pickup',
    description:
      'Custom cakes are prepared from Alexa Melhado’s Sacramento kitchen near ZIP 95818, the same hub noted in her private class request form.',
    icon: Home
  },
  {
    title: 'Community classes',
    description:
      'Sierra 2 Center workshops teach stacking, filling, crumb-coating, and vintage piping—with every student leaving with a boxed cake.',
    icon: Calendar
  },
  {
    title: 'Private coaching',
    description:
      'One-on-one lessons start at $175, two-student sessions at $122 each, and groups of three or more at $95 each, with a $50 travel and setup fee inside 10 miles of 95818.',
    icon: GraduationCap
  },
  {
    title: 'Link-in-bio hub',
    description:
      'The Linktree lists Sacramento class tickets, private lesson catalog, Jotform travel request, gift certificates, and the Good Day Sacramento feature.',
    icon: Link
  }
];

export function Highlights() {
  return (
    <section id="why" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl text-white sm:text-4xl">Sacramento details that set Tootie Treats apart</h2>
          <p className="mt-4 text-base text-white/70 sm:text-lg">
            Real workshops, local pickup, and verified links—everything on this page ties back to the classes and forms Alexa shares with her community.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-6 text-left shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-lavender-500/20 blur-2xl" aria-hidden />
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-lavender-500/80 to-blush/60 text-night">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-xl text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
