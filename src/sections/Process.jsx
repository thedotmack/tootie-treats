import { Palette, Mail, MapPin, Sparkles } from 'lucide-react'

const steps = [
  {
    title: 'Design your cake',
    detail: 'Use the custom cake builder to choose sizes, flavors, colors, and the story you want the cake to tell.',
    icon: Palette,
    badge: 'Step 1'
  },
  {
    title: 'Send the summary',
    detail: 'Copy the wizard summary and send it through the Linktree contact options—email, Instagram DM, or the private-class request forms Alexa maintains.',
    icon: Mail,
    badge: 'Step 2'
  },
  {
    title: 'Confirm pickup logistics',
    detail: 'Alexa replies with availability, pricing, and pickup details from her Curtis Park kitchen or your reserved class venue.',
    icon: MapPin,
    badge: 'Step 3'
  },
  {
    title: 'Celebrate in style',
    detail: 'Collect your finished cake, or attend a scheduled class to decorate alongside other Sacramento creatives.',
    icon: Sparkles,
    badge: 'Step 4'
  }
]

export function Process() {
  return (
    <section id="process" className="border-b-4 border-border bg-background px-4 py-20 sm:px-6">
      <div className="mx-auto w-container max-w-full">
        <div className="mb-12 max-w-2xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl">How the custom order process works</h2>
          <p className="text-base text-foreground/80 sm:text-lg">
            Sacramento locals love Tootie Treats because the bakery keeps custom cakes collaborative—Alexa guides you from
            inspiration through pickup or class day.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {steps.map(({ title, detail, icon: Icon, badge }) => (
            <article
              key={title}
              className="group flex flex-col gap-4 rounded-base border-4 border-border bg-secondary-background p-6 shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex size-12 items-center justify-center rounded-base border-2 border-border bg-main text-main-foreground shadow-shadow">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-heading text-xl text-foreground">{title}</h3>
                </div>
                <span className="rounded-base border-2 border-border bg-background px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-foreground shadow-shadow">
                  {badge}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-foreground/75">{detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}