import { CultCarousel } from '../components/CultCarousel.jsx';

const testimonials = [
  {
    id: 1,
    title: 'Sierra 2 Center · Blueberry Pie Class',
    content:
      '“Join Alexa Melhado from Tootie Treats in learning to decorate a cake using vintage piping techniques with a lattice pie design... All materials and a box to take home your cake will be provided.”',
    author: 'Sierra Curtis Neighborhood Association',
    role: 'Blueberry Pie Cake Class · Sept 24, 2025',
    imageUrl: 'https://db5569e1d39ae4cc112e-3aa958bc462565c5222e7bc575a8ffbd.ssl.cf1.rackcdn.com/blueberry_cake-1756160235',
    source: 'https://secure.qgiv.com/for/101for101years/event/blueberrypiecakeclass'
  },
  {
    id: 2,
    title: 'Fall Cake Decorating Class',
    content:
      '“Learn how to assemble a fall themed cake with master cake decorator and instructor, Alexa Melhado from Tootie Treats—as seen on Good Day Sacramento! Participants will learn how to stack, fill, and crumb coat their cakes.”',
    author: 'Sierra Curtis Neighborhood Association',
    role: 'Fall Cake Decorating · Sept 28, 2025',
    imageUrl: 'https://db5569e1d39ae4cc112e-3aa958bc462565c5222e7bc575a8ffbd.ssl.cf1.rackcdn.com/fall_cake_class_15_-1754595233',
    source: 'https://secure.qgiv.com/for/101for101years/event/fallcakedecoratingclassages15/'
  },
  {
    id: 3,
    title: 'Private class request form',
    content:
      '“How many students will be in your two hour class? One on one instruction with Alexa of Tootie Treats ($175) · Two Students ($122 each) · Three or More Students ($95 each).”',
    author: 'Tootie Treats',
    role: 'Private class catalog via Acuity Scheduling',
    imageUrl: 'https://ugc.production.linktr.ee/5aab6399-b304-4e46-a944-f3984ffa17c1_image.png?io=true&size=thumbnail-stack_v1_0',
    source: 'https://app.acuityscheduling.com/catalog.php?owner=32574148&action=addCart&clear=1&id=2037518'
  },
  {
    id: 4,
    title: 'Travel class logistics',
    content:
      '“There is a $50 travel and setup fee if you are within 10 miles of 95818. For outside of that range, we will calculate the distance and advise you of the fee.”',
    author: 'Tootie Treats',
    role: 'Private Cake Decorating Class Jotform',
    imageUrl: 'https://ugc.production.linktr.ee/f2c5e25f-1b62-4a62-b903-a42eb5ace92a_Tootie-Treats-Logo.674e0a00c1c218.81659265.png?io=true&size=thumbnail-stack_v1_0',
    source: 'https://www.jotform.com/form/243365823386161'
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl text-center">
          <h2 className="font-display text-3xl text-white sm:text-4xl">What hosts and forms say about Tootie Treats</h2>
          <p className="mt-4 text-base text-white/70 sm:text-lg">
            These quotes come straight from current class listings and booking forms—no fabricated reviews, only verifiable Sacramento sources.
          </p>
        </div>
        <div className="mt-12 overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-4">
          <CultCarousel
            slides={testimonials.map((testimonial) => ({
              ...testimonial,
              badge: 'Verified source'
            }))}
            autoplayInterval={6000}
          />
        </div>
      </div>
    </section>
  );
}
