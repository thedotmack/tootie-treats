const faqs = [
  {
    question: 'Where do classes take place?',
    answer:
      'Most public workshops run through the Sierra Curtis Neighborhood Association at the Sierra 2 Center (2791 24th Street, Sacramento). Pop-ups like the Magic Mushroom class are hosted at partner spaces listed on the Tootie Treats Linktree.'
  },
  {
    question: 'What should I bring to class?',
    answer:
      'Sierra 2 Center listings confirm that all materials, buttercream, and a take-home box are provided—just arrive ready to decorate. Beginner-friendly instruction is included in every session.'
  },
  {
    question: 'How quickly do classes sell out?',
    answer:
      'Recent Sierra 2 Center events such as the Blueberry Pie and Fall Cake Decorating classes show only five to six tickets left, so it’s best to reserve as soon as you know your date.'
  },
  {
    question: 'How are private lessons priced?',
    answer:
      'The Acuity Scheduling catalog lists one-on-one sessions with Alexa at $175, two-student lessons at $122 per person, and groups of three or more at $95 each.'
  },
  {
    question: 'Do you travel for private classes?',
    answer:
      'Yes. The private class request form notes a $50 travel and setup fee for locations within ten miles of ZIP 95818, with additional distance quoted after submission.'
  },
  {
    question: 'How do I request a custom cake?',
    answer:
      'Use the wizard on this page to build your cake summary, copy it, and send it via the contact options on linktr.ee/tootietreats (email, DM, or request forms). Alexa will confirm availability and pickup logistics.'
  }
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="relative border-b-4 border-border bg-secondary-background px-4 py-20 sm:px-6 lg:px-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(circle at 15% 30%, rgba(202, 253, 90, 0.45), transparent 55%), radial-gradient(circle at 80% 70%, rgba(210, 215, 255, 0.4), transparent 55%)'
        }}
      />
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="font-heading text-3xl sm:text-4xl text-foreground">Frequently asked questions</h2>
          <p className="mt-4 text-base text-foreground/75 sm:text-lg">
            Answers are pulled directly from current registration pages and booking forms so you can plan with confidence.
          </p>
        </div>
        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group overflow-hidden rounded-base border-4 border-border bg-secondary-background/90 p-6 text-left shadow-shadow transition focus:outline-none focus-visible:-translate-x-1 focus-visible:-translate-y-1 focus-visible:shadow-none"
            >
              <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-foreground">
                <span>{faq.question}</span>
                <span className="ml-4 text-sm text-foreground/60 group-open:hidden">Open</span>
                <span className="ml-4 hidden text-sm text-foreground/60 group-open:inline">Close</span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-foreground/75">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
