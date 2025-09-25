import { Video, Users, Trophy, Heart } from 'lucide-react';

const highlights = [
  {
    title: 'TikTok viral techniques',
    description:
      'Learn the exact methods from our most popular videos with 2M+ views. Master trending cake decorating that breaks the internet.',
    icon: Video
  },
  {
    title: 'Small class sizes',
    description:
      'Maximum 8 students per class means personalized attention and hands-on guidance for every technique you learn.',
    icon: Users
  },
  {
    title: 'Award-winning instructor',
    description:
      'Our lead instructor has won 3 Sacramento Baking Championships and trained over 2,500 successful cake artists.',
    icon: Trophy
  },
  {
    title: 'Instagram-worthy results',
    description:
      'Every student leaves with a professional-quality cake perfect for social media and guaranteed to impress friends.',
    icon: Heart
  }
];

export function Highlights() {
  return (
    <section id="why" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl text-white sm:text-4xl">Why Sacramento loves our cake classes</h2>
          <p className="mt-4 text-base text-white/70 sm:text-lg">
            From TikTok beginners to future cake artists - our classes deliver results that get shared, liked, and remembered.
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
