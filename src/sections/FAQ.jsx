import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: "But I'm REALLY not creative...",
    answer: "Neither were most of our students when they walked in. Creativity isn't required - just willingness to try. You'll walk out surprised at what you created."
  },
  {
    question: "What if I mess up?",
    answer: 'There are no mistakes in cake decorating, only "rustic charm" and "artistic choices." Plus, Alexa is there every step to help you succeed.'
  },
  {
    question: "Do I need to bring anything?",
    answer: "Just yourself! We provide all supplies, tools, aprons, and even refreshments. Some people bring wine for evening classes (totally allowed!)."
  },
  {
    question: "Is the cake actually edible?",
    answer: "YES! Everything is delicious. The cakes are freshly baked, the buttercream is homemade, and all decorations are edible (except the box you take it home in)."
  },
  {
    question: "Can kids attend?",
    answer: "Regular classes are 15+, but we have special Cake Buddies classes for ages 3-17 when accompanied by an adult. Perfect for parent-child bonding!"
  },
  {
    question: "How far in advance should I book?",
    answer: "Classes typically show only 5-6 spots left by the week of, so booking 2-3 weeks ahead is smart. Private parties need at least a week's notice."
  },
  {
    question: "What if I need to cancel?",
    answer: "Life happens! Check the specific cancellation policy when booking, but we try to be flexible."
  },
  {
    question: "Do you accommodate dietary restrictions?",
    answer: "Contact us ahead of time and we'll do our best to accommodate. The experience is more about decorating than eating, but we want everyone comfortable."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="relative border-b-4 border-border bg-secondary-background px-4 py-20 sm:px-6">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(circle at 25% 50%, rgba(210, 215, 255, 0.35), transparent 55%), radial-gradient(circle at 75% 75%, rgba(255, 228, 77, 0.35), transparent 50%)'
        }}
      />
      <div className="mx-auto w-container max-w-full">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl">
              All Your Questions Answered (Even the Ones You're Shy About)
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-base border-4 border-border bg-secondary-background shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <h3 className="pr-4 font-heading text-lg text-foreground">{faq.question}</h3>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-foreground transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="border-t-2 border-border px-6 pb-6">
                    <p className="pt-4 text-foreground/85">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-base border-4 border-border bg-gradient-to-r from-accent-pink/40 to-accent-teal/40 p-8 text-center shadow-shadow">
            <p className="text-lg font-semibold text-foreground">Have a question we didn't answer?</p>
            <p className="mt-2 text-foreground/85">
              DM @tootietreats on Instagram or check the Linktree for all contact options!
            </p>
            <a
              href="https://instagram.com/tootietreats"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-base border-2 border-border bg-secondary-background px-6 py-3 font-semibold text-foreground shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:bg-accent-teal hover:text-foreground hover:shadow-none"
            >
              Ask Us on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}