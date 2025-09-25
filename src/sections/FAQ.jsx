const faqs = [
  {
    question: 'How far in advance should I book?',
    answer:
      'Classes typically fill up 1–2 weeks in advance, especially weekends. Popular classes like "Viral Buttercream Basics" book up fast, so reserve your spot early!'
  },
  {
    question: 'What should I bring to class?',
    answer:
      'Nothing! We provide all materials, tools, aprons, and ingredients. Just bring yourself and get ready to have fun learning. Comfortable clothes recommended.'
  },
  {
    question: 'Can you accommodate dietary restrictions?',
    answer:
      'Absolutely! We offer vegan and gluten-free options for most classes. Please note any allergies or dietary needs when booking so we can prepare accordingly.'
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'We require 48 hours notice for a full refund. Cancellations within 48 hours receive a class credit valid for 6 months. No-shows forfeit the class fee.'
  },
  {
    question: 'Can beginners join advanced classes?',
    answer:
      'We recommend starting with "Beginner Cake Decorating" first. Our instructors assess each student\'s skill level and can provide extra guidance as needed.'
  },
  {
    question: 'Do you offer private group classes?',
    answer:
      'Yes! Private classes for birthdays, bachelorette parties, or team building start at $600 for up to 8 people. Contact us to customize your experience.'
  }
];

export function FAQ() {
  return (
    <section id="faq" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="font-display text-3xl text-white sm:text-4xl">Frequently asked questions</h2>
          <p className="mt-4 text-base text-white/70 sm:text-lg">
            Everything you need to know before joining our viral cake decorating classes.
          </p>
        </div>
        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur transition focus:outline-none focus:ring-2 focus:ring-lavender-500"
            >
              <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-white">
                <span>{faq.question}</span>
                <span className="ml-4 text-sm text-lavender-200 group-open:hidden">Open</span>
                <span className="ml-4 text-sm text-lavender-200 hidden group-open:inline">Close</span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-white/70">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
