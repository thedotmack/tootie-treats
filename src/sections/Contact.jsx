import { Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="px-4 pb-24 pt-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 to-white/10 p-10 text-center">
        <h2 className="font-display text-3xl text-white sm:text-4xl">Let’s plan dessert</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
          Ready to reserve your date or have a question about design possibilities? Reach out and we’ll reply within one business day.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <a
            href="mailto:classes@sacramentocakeclasses.com"
            className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-night/60 p-6 text-sm text-white/70 transition hover:border-white/40 hover:text-white"
          >
            <Mail className="h-6 w-6 text-lavender-200" />
            classes@sacramentocakeclasses.com
          </a>
          <a
            href="tel:19165551234"
            className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-night/60 p-6 text-sm text-white/70 transition hover:border-white/40 hover:text-white"
          >
            <Phone className="h-6 w-6 text-lavender-200" />
            (916) 555-1234
          </a>
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-night/60 p-6 text-sm text-white/70">
            <MapPin className="h-6 w-6 text-lavender-200" />
            Sacramento, CA
          </div>
        </div>
      </div>
    </section>
  );
}
