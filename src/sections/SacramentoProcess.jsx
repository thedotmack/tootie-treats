import { Calendar, Video, Palette, Camera } from 'lucide-react';

const steps = [
  {
    title: 'Choose your class',
    detail: 'Browse our trending cake decorating classes and pick the perfect time slot for your schedule.',
    icon: Calendar,
    badge: 'Step 1'
  },
  {
    title: 'Learn signature techniques',
    detail: 'Master the crowd-favorite methods with hands-on instruction from our award-winning cake artists.',
    icon: Video,
    badge: 'Step 2'
  },
  {
    title: 'Create your masterpiece',
    detail: 'Build your own stunning cake using professional tools and premium ingredients we provide.',
    icon: Palette,
    badge: 'Step 3'
  },
  {
    title: 'Share & take home',
    detail: 'Get perfect photos for social media, then take your beautiful finished cake home to enjoy!',
    icon: Camera,
    badge: 'Step 4'
  }
];

export function Process() {
  return (
    <section id="process" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <h2 className="font-display text-3xl text-white sm:text-4xl">How our classes work</h2>
          <p className="mt-4 text-base text-white/70 sm:text-lg">
            From booking to taking home your masterpiece, we've designed the most fun and educational cake decorating experience in Sacramento.
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