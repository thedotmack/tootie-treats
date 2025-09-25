import { CultCarousel } from '../components/CultCarousel.jsx';

const testimonials = [
  {
    id: 1,
    title: 'TikTok fame overnight',
    content:
      'My rosette cake from class got 2.3 million views on TikTok! The techniques I learned here made me go viral and now I teach my own friends.',
    author: 'Jessica M.',
    role: 'Viral TikTok creator, Sacramento',
    imageUrl: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    title: 'Birthday party hero',
    content:
      'Everyone thought I ordered my daughter\'s unicorn cake from a fancy bakery. When I told them I made it in class, they couldn\'t believe it!',
    author: 'Maria S.',
    role: 'Mom of two, Midtown Sacramento',
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    title: 'Started my side business',
    content:
      'After taking three classes here, I started selling custom cakes from home. I\'ve already booked $2,000 worth of orders this month!',
    author: 'Alex K.',
    role: 'New cake entrepreneur, East Sacramento',
    imageUrl: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    title: 'Confidence boost',
    content:
      'I was so nervous about decorating, but the instructor made everything feel achievable. Now I make elaborate birthday cakes for my whole family!',
    author: 'Robert H.',
    role: 'Retired teacher, Land Park',
    imageUrl: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a8e?auto=format&fit=crop&w=600&q=80'
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl text-center">
          <h2 className="font-display text-3xl text-white sm:text-4xl">Sacramento student success stories</h2>
          <p className="mt-4 text-base text-white/70 sm:text-lg">
            From TikTok viral moments to starting cake businesses - see how our classes transform Sacramento bakers into artists.
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
