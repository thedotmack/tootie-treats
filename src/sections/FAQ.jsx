const faqs = [
  {
    question: 'How far in advance should I order?',
    answer:
      'Most celebrations are secured 2–3 weeks out. For weddings or elaborate sculpted cakes, reach out 6–8 weeks ahead so we can reserve tasting time.'
  },
  {
    question: 'Do you deliver?',
    answer:
      'We offer delivery within the Houston metro for an additional fee starting at $35. We also provide transport instructions for pickups.'
  },
  {
    question: 'Can you accommodate allergies?',
    answer:
      'We bake vegan and gluten-friendly cakes. While our kitchen handles nuts and dairy, we sanitize tools and prep surfaces carefully—please note all allergies in the form.'
  },
  {
    question: 'What is your payment policy?',
    answer:
      'A 30% retainer confirms your date. The remaining balance is due 48 hours before pickup or delivery. We accept credit card, Zelle, and Apple Pay.'
  }
];

export function FAQ() {
  return (
    <section id="faq" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="font-display text-3xl text-white sm:text-4xl">Frequently asked questions</h2>
          <p className="mt-4 text-base text-white/70 sm:text-lg">
            Everything you need to know before we whisk up your dream cake.
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
