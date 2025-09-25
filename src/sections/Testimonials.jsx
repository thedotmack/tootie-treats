import { CultCarousel } from '../components/CultCarousel.jsx';

const testimonials = [
  {
    id: 1,
    title: 'Baby shower bliss',
    content:
      'Alexa took my Pinterest board and made it edible art. Guests kept asking who crafted the mushroom cottage cake.',
    author: 'Maya C.',
    role: 'Baby shower in Midtown',
    imageUrl: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    title: 'Corporate wow factor',
    content:
      'We needed 150 branded cupcakes on short notice. They arrived boxed, labeled, and gorgeous—our client was thrilled.',
    author: 'Jordan L.',
    role: 'Agency producer',
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    title: 'Perfectly vegan',
    content:
      'Finding vegan cakes that taste amazing is tough. Tootie Treats nailed the texture and flavor for my wedding dessert bar.',
    author: 'Devon R.',
    role: 'Bride + wedding planner',
    imageUrl: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=600&q=80'
  }
];

export function Testimonials() {
  return (
    <section id="love" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl text-center">
          <h2 className="font-display text-3xl text-white sm:text-4xl">Client love notes</h2>
          <p className="mt-4 text-base text-white/70 sm:text-lg">
            The Cult UI carousel highlights real stories from people who let us bake for their biggest milestones.
          </p>
        </div>
        <div className="mt-12 overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-4">
          <CultCarousel
            slides={testimonials.map((testimonial) => ({
              ...testimonial,
              badge: 'Story'
            }))}
            autoplayInterval={6000}
          />
        </div>
      </div>
    </section>
  );
}
