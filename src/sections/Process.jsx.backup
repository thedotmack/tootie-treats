import { CalendarDays, MessagesSquare, Palette, Wand2 } from 'lucide-react';

const steps = [
  {
    title: 'Share your celebration',
    detail: 'Tell us the vibe, guest count, and any inspiration images. We handle the planning magic.',
    icon: MessagesSquare,
    badge: 'Step 1'
  },
  {
    title: 'Design & tasting call',
    detail: 'We confirm flavors, sketch the design, and plan logistics within 24 hours of your request.',
    icon: Palette,
    badge: 'Step 2'
  },
  {
    title: 'Secure your date',
    detail: 'Pay a 30% retainer to lock in your bake slot. We send updates as your event gets close.',
    icon: CalendarDays,
    badge: 'Step 3'
  },
  {
    title: 'Pick up or delivery',
    detail: 'We set up the cake box with transport tips or deliver and assemble on-site for a flawless reveal.',
    icon: Wand2,
    badge: 'Step 4'
  }
];

export function Process() {
  return (
    <section id="process" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <h2 className="font-display text-3xl text-white sm:text-4xl">How ordering works</h2>
          <p className="mt-4 text-base text-white/70 sm:text-lg">
            We built Tootie Treats to make custom cake ordering feel personal and quick. Here’s what happens after you send in the form.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {steps.map(({ title, detail, icon: Icon, badge }) => (
            <article
              key={title}
              className="group flex flex-col justify-between rounded-3xl border border-white/5 bg-gradient-to-br from-white/8 via-white/2 to-white/5 p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-lavender-200">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-wide text-white/60">
                  {badge}
                </span>
              </div>
              <div className="mt-4 space-y-3">
                <h3 className="font-display text-xl text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-white/70">{detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
