import { Quote, Star } from 'lucide-react'

const defaultTestimonials = [
  {
    content: "I literally cannot draw a stick figure and I made a cake that looked professional. I don't understand how this happened but I'm not questioning it. Already signed up for the next class!",
    author: 'Sarah M.',
    role: 'First-time decorator',
    rating: 5
  },
  {
    content: "Came for my friend's birthday thinking I'd just watch everyone else. Left with a gorgeous vintage cake and feeling like I discovered a hidden talent. Who knew?",
    author: 'Mike T.',
    role: 'Surprised himself',
    rating: 5
  },
  {
    content: "Best date night we've had in years. We laughed, made a bit of a mess, learned something new, and ate cake. What more could you want?",
    author: 'Jennifer & David P.',
    role: 'Date night winners',
    rating: 5
  },
  {
    content: "Our team from accounting (yes, accounting!) had such a blast. Everyone was nervous at first but Alexa made it so easy and fun. Best team building ever.",
    author: 'Linda K.',
    role: 'Corporate event organizer',
    rating: 5
  }
]

const colors = ['var(--accent-pink)', 'var(--accent-teal)', 'var(--accent-lavender)', 'var(--accent-green)']

export function Testimonials({ content }) {
  // Use content from Keystatic or fallback to defaults
  const {
    title = "Don't Just Take Our Word For It",
    subtitle = "Real Reviews from Real People (Who Were Really Nervous)",
    testimonials = defaultTestimonials,
    happyCreatorsCount = "7,900+",
    happyCreatorsText = "Join thousands of Sacramento locals who discovered they're way more creative than they thought"
  } = content || {}
  return (
    <section
      id="testimonials"
      className="relative border-b-4 border-border bg-gradient-to-r from-accent-pink/40 via-secondary-background to-accent-teal/40 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(circle at 20% 25%, rgba(251, 196, 255, 0.4), transparent 50%), radial-gradient(circle at 80% 80%, rgba(159, 247, 255, 0.45), transparent 55%)'
        }}
      />
      <div className="mx-auto w-container max-w-full">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl">{title}</h2>
          <p className="mt-4 text-lg text-foreground/80 sm:text-xl">
            {subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-base border-4 border-border p-8 shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none"
              style={{ backgroundColor: colors[index % colors.length] }}
            >
              <Quote className="mb-4 h-8 w-8 text-foreground/30" />
              <blockquote className="text-foreground/90">
                <p className="text-lg italic leading-relaxed">
                  "{testimonial.content}"
                </p>
              </blockquote>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="font-heading text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-foreground/70">{testimonial.role}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-foreground" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-base border-4 border-border bg-secondary-background p-10 text-center shadow-shadow">
          <p className="text-2xl font-heading text-foreground">{happyCreatorsCount} Happy Creators</p>
          <p className="mt-3 text-foreground/80">
            {happyCreatorsText}
          </p>
          <a
            href="#classes"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-base border-2 border-border bg-gradient-to-r from-accent-coral to-main px-6 py-3 font-semibold text-foreground shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none"
          >
            Book Your Class Today
          </a>
        </div>
      </div>
    </section>
  )
}