import { Calendar, GraduationCap, Home, Link } from 'lucide-react'

const highlights = [
  {
    title: 'Curtis Park pickup',
    description:
      'Custom cakes are prepared from Alexa Melhado’s Sacramento kitchen near ZIP 95818, the same hub noted in her private class request form.',
    icon: Home,
    accent: 'var(--accent-pink)'
  },
  {
    title: 'Community classes',
    description:
      'Sierra 2 Center workshops teach stacking, filling, crumb-coating, and vintage piping—with every student leaving with a boxed cake.',
    icon: Calendar,
    accent: 'var(--accent-teal)'
  },
  {
    title: 'Private coaching',
    description:
      'One-on-one lessons start at $175, two-student sessions at $122 each, and groups of three or more at $95 each, with a $50 travel and setup fee inside 10 miles of 95818.',
    icon: GraduationCap,
    accent: 'var(--accent-lavender)'
  },
  {
    title: 'Link-in-bio hub',
    description:
      'The Linktree lists Sacramento class tickets, private lesson catalog, Jotform travel request, gift certificates, and the Good Day Sacramento feature.',
    icon: Link,
    accent: 'var(--accent-green)'
  }
]

export function Highlights() {
  return (
    <section id="why" className="relative border-b-4 border-border bg-secondary-background px-4 py-20 sm:px-6">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(circle at 15% 20%, rgba(255, 228, 77, 0.45), transparent 55%), radial-gradient(circle at 85% 30%, rgba(255, 180, 199, 0.35), transparent 50%)'
        }}
      />
      <div className="mx-auto flex w-container max-w-full flex-col gap-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center rounded-base border-2 border-border bg-accent-lavender px-4 py-2 font-heading text-xs uppercase tracking-[0.2em] text-foreground shadow-shadow">
            Sacramento Provenance
          </p>
          <h2 className="mt-5 font-heading text-3xl sm:text-4xl">
            Sacramento details that set Tootie Treats apart
          </h2>
          <p className="mt-4 text-base text-foreground/80 sm:text-lg">
            Real workshops, local pickup, and verified links—every highlight connects to the official Linktree, booking forms,
            or Good Day Sacramento feature.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ title, description, icon: Icon, accent }, index) => (
            <article
              key={title}
              className="group relative flex h-full flex-col gap-4 rounded-base border-4 border-border p-6 text-left shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none"
              style={{ backgroundColor: accent }}
            >
              <span className="absolute -right-6 -top-6 size-14 rotate-6 rounded-[35%] border-4 border-border bg-secondary-background/70 blur-lg" aria-hidden />
              <div className="flex size-12 items-center justify-center rounded-base border-2 border-border bg-main text-main-foreground shadow-shadow">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-xl text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-foreground/75">
                {description}
              </p>
              <span className="mt-auto inline-flex w-max items-center gap-2 rounded-base border-2 border-border bg-background px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground shadow-shadow">
                {String(index + 1).padStart(2, '0')}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
