import { CalendarCheck, Leaf, Sparkles, Truck } from 'lucide-react';

const highlights = [
  {
    title: 'Custom flavors, zero stress',
    description:
      'Mix-and-match cake, filling, and frosting combos. We guide you through crowd-pleasing picks and daring flavors alike.',
    icon: Sparkles
  },
  {
    title: 'Dietary-inclusive bakes',
    description:
      'Need vegan, gluten-friendly, or nut-aware treats? We have curated recipes ready for your celebrations.',
    icon: Leaf
  },
  {
    title: 'Reliable scheduling',
    description:
      'Reserve pickup windows up to 6 weeks out. Friendly reminders make sure your cake is ready when you are.',
    icon: CalendarCheck
  },
  {
    title: 'Seamless pickup or delivery',
    description:
      'Grab it from our Montrose studio or book white-glove delivery right to the party door.',
    icon: Truck
  }
];

export function Highlights() {
  return (
    <section id="why" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl text-white sm:text-4xl">Reasons our clients keep celebrating with us</h2>
          <p className="mt-4 text-base text-white/70 sm:text-lg">
            We obsess over the details so you can focus on the memories. From tasting notes to transport, every step feels easy.
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
