import { AlertCircle, Cake, Calendar, Mail, Phone, Save, Send, User } from 'lucide-react';
import { CakePreview } from '../components/CakePreview.jsx';
import { useCakeForm } from '../hooks/useCakeForm.js';

const sizes = [
  { value: '', label: 'Select a size' },
  { value: '6-round', label: '6" round (8–10 servings)' },
  { value: '8-round', label: '8" round (12–16 servings)' },
  { value: '9x13-sheet', label: '9×13" sheet (18–24 servings)' },
  { value: '2-tier-6-8', label: 'Two-tier 6" + 8" (24–30 servings)' }
];

const flavors = ['Vanilla', 'Chocolate', 'Red Velvet', 'Funfetti', 'Lemon', 'Marble'];

const fillings = [
  'Vanilla Buttercream',
  'Chocolate Ganache',
  'Strawberry',
  'Lemon Curd',
  'Cream Cheese'
];

const styles = [
  { value: '', label: 'Select a style' },
  { value: 'smooth', label: 'Smooth Buttercream' },
  { value: 'rustic', label: 'Rustic Spatula' },
  { value: 'piped', label: 'Vintage Piped' },
  { value: 'drip', label: 'Chocolate Drip' },
  { value: 'mushroom', label: 'Mushroom Cottage' }
];

export function OrderForm() {
  const { formData, errors, status, draftSaved, estimatedPrice, updateField, saveDraft, submitOrder } = useCakeForm();

  return (
    <section id="order" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl text-white sm:text-4xl">Design your cake request</h2>
          <p className="mt-4 text-base text-white/70 sm:text-lg">
            Fill out the form below for an instant estimate. We’ll email you back within 24 hours to confirm availability and pricing.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_minmax(320px,380px)]">
          <form
            onSubmit={submitOrder}
            className="space-y-6 rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur"
            noValidate
          >
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-white">
                    <Cake className="h-4 w-4 text-lavender-200" /> Cake details
                  </label>
                  <div className="mt-3 space-y-4">
                    <div>
                      <label className="text-xs uppercase tracking-wide text-white/60">Cake size *</label>
                      <select
                        value={formData.size}
                        onChange={(event) => updateField('size', event.target.value)}
                        className={`mt-1 w-full rounded-2xl border bg-night/70 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lavender-500 ${
                          errors.size ? 'border-red-400/60' : 'border-white/10'
                        }`}
                      >
                        {sizes.map((size) => (
                          <option key={size.value || 'placeholder'} value={size.value}>
                            {size.label}
                          </option>
                        ))}
                      </select>
                      {errors.size && <p className="mt-1 text-xs text-red-300">{errors.size}</p>}
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-wide text-white/60">Flavor *</label>
                      <select
                        value={formData.flavor}
                        onChange={(event) => updateField('flavor', event.target.value)}
                        className={`mt-1 w-full rounded-2xl border bg-night/70 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lavender-500 ${
                          errors.flavor ? 'border-red-400/60' : 'border-white/10'
                        }`}
                      >
                        <option value="">Choose flavor</option>
                        {flavors.map((flavor) => (
                          <option key={flavor} value={flavor}>
                            {flavor}
                          </option>
                        ))}
                      </select>
                      {errors.flavor && <p className="mt-1 text-xs text-red-300">{errors.flavor}</p>}
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-wide text-white/60">Filling</label>
                      <select
                        value={formData.filling}
                        onChange={(event) => updateField('filling', event.target.value)}
                        className="mt-1 w-full rounded-2xl border border-white/10 bg-night/70 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lavender-500"
                      >
                        <option value="">None</option>
                        {fillings.map((filling) => (
                          <option key={filling} value={filling}>
                            {filling}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-wide text-white/60">Style *</label>
                      <select
                        value={formData.style}
                        onChange={(event) => updateField('style', event.target.value)}
                        className={`mt-1 w-full rounded-2xl border bg-night/70 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lavender-500 ${
                          errors.style ? 'border-red-400/60' : 'border-white/10'
                        }`}
                      >
                        {styles.map((style) => (
                          <option key={style.value || 'style-placeholder'} value={style.value}>
                            {style.label}
                          </option>
                        ))}
                      </select>
                      {errors.style && <p className="mt-1 text-xs text-red-300">{errors.style}</p>}
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-wide text-white/60">Icing colors</label>
                      <div className="mt-2 flex gap-3">
                        {['color1', 'color2', 'color3'].map((colorKey) => (
                          <input
                            key={colorKey}
                            type="color"
                            value={formData[colorKey]}
                            onChange={(event) => updateField(colorKey, event.target.value)}
                            className="h-12 w-16 cursor-pointer rounded-2xl border border-white/20 bg-night/70"
                          />
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-wide text-white/60">Inscription</label>
                      <input
                        type="text"
                        value={formData.inscription}
                        maxLength={40}
                        placeholder="e.g., Happy Birthday, Jess!"
                        onChange={(event) => updateField('inscription', event.target.value)}
                        className="mt-1 w-full rounded-2xl border border-white/10 bg-night/70 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lavender-500"
                      />
                    </div>
                    <div className="space-y-2 text-sm text-white/80">
                      <label className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={formData.gluten_free}
                          onChange={(event) => updateField('gluten_free', event.target.checked)}
                          className="h-4 w-4 rounded border-white/20 bg-night"
                        />
                        Gluten-free (adds cost)
                      </label>
                      <label className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={formData.vegan}
                          onChange={(event) => updateField('vegan', event.target.checked)}
                          className="h-4 w-4 rounded border-white/20 bg-night"
                        />
                        Vegan (adds cost)
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-white">
                    <Calendar className="h-4 w-4 text-lavender-200" /> Pickup & contact
                  </label>
                  <div className="mt-3 space-y-4">
                    <div>
                      <label className="text-xs uppercase tracking-wide text-white/60">Desired pickup date *</label>
                      <input
                        type="date"
                        value={formData.pickup_date}
                        onChange={(event) => updateField('pickup_date', event.target.value)}
                        className={`mt-1 w-full rounded-2xl border bg-night/70 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lavender-500 ${
                          errors.pickup_date ? 'border-red-400/60' : 'border-white/10'
                        }`}
                      />
                      {errors.pickup_date && <p className="mt-1 text-xs text-red-300">{errors.pickup_date}</p>}
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-wide text-white/60">Quantity</label>
                      <input
                        type="number"
                        min="1"
                        value={formData.quantity}
                        onChange={(event) => updateField('quantity', parseInt(event.target.value, 10) || 1)}
                        className="mt-1 w-full rounded-2xl border border-white/10 bg-night/70 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lavender-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-wide text-white/60">Your name *</label>
                      <div className="relative mt-1">
                        <User className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(event) => updateField('name', event.target.value)}
                          className={`w-full rounded-2xl border bg-night/70 py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-lavender-500 ${
                            errors.name ? 'border-red-400/60' : 'border-white/10'
                          }`}
                          placeholder="First & last name"
                        />
                      </div>
                      {errors.name && <p className="mt-1 text-xs text-red-300">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-wide text-white/60">Email *</label>
                      <div className="relative mt-1">
                        <Mail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(event) => updateField('email', event.target.value)}
                          className={`w-full rounded-2xl border bg-night/70 py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-lavender-500 ${
                            errors.email ? 'border-red-400/60' : 'border-white/10'
                          }`}
                          placeholder="you@example.com"
                        />
                      </div>
                      {errors.email && <p className="mt-1 text-xs text-red-300">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-wide text-white/60">Phone *</label>
                      <div className="relative mt-1">
                        <Phone className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(event) => updateField('phone', event.target.value)}
                          className={`w-full rounded-2xl border bg-night/70 py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-lavender-500 ${
                            errors.phone ? 'border-red-400/60' : 'border-white/10'
                          }`}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      {errors.phone && <p className="mt-1 text-xs text-red-300">{errors.phone}</p>}
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-wide text-white/60">Notes for the baker</label>
                      <textarea
                        value={formData.notes}
                        onChange={(event) => updateField('notes', event.target.value)}
                        rows={4}
                        placeholder="Allergies, design inspo, delivery info, budget, etc."
                        className="mt-1 w-full resize-none rounded-2xl border border-white/10 bg-night/70 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lavender-500"
                      />
                    </div>
                    <label className="flex items-start gap-3 text-xs text-white/70">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(event) => updateField('consent', event.target.checked)}
                        className="mt-1 h-4 w-4 rounded border-white/20 bg-night"
                      />
                      I understand this is a request and the bakery will confirm availability & final pricing.*
                    </label>
                    {errors.consent && <p className="text-xs text-red-300">{errors.consent}</p>}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-night/60 p-6 text-white/80 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-wide text-white/50">Estimated investment</p>
                <p className="font-display text-3xl text-white">${estimatedPrice || 0}</p>
                <p className="text-xs text-white/50">Estimate updates as you design your cake.</p>
              </div>
              <div className="flex flex-1 flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={saveDraft}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
                >
                  <Save className="h-4 w-4" /> Save draft
                </button>
                <button
                  type="submit"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-lavender-500 to-lavender-600 px-5 py-3 text-sm font-semibold text-night shadow-lg shadow-lavender-500/30 transition hover:shadow-glow"
                >
                  <Send className="h-4 w-4" /> Submit request
                </button>
              </div>
            </div>

            {status && (
              <div
                className={`flex items-start gap-3 rounded-2xl border p-4 text-sm ${
                  status.toLowerCase().includes('complete') || status.toLowerCase().includes('error')
                    ? 'border-red-400/50 bg-red-400/10 text-red-100'
                    : status.toLowerCase().includes('thanks')
                      ? 'border-emerald-400/50 bg-emerald-400/10 text-emerald-100'
                      : 'border-lavender-400/40 bg-lavender-400/10 text-lavender-100'
                }`}
              >
                <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                <span>{status}</span>
              </div>
            )}
            {draftSaved && <p className="text-xs text-lavender-200">Draft saved to this device.</p>}
          </form>

          <aside className="flex flex-col items-center gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
            <CakePreview formData={formData} />
            <div className="space-y-4 text-sm text-white/70">
              <div>
                <h3 className="font-display text-lg text-white">Live preview</h3>
                <p className="mt-2 text-xs text-white/60">
                  Adjust your colors, inscription, and style to see your cake vision come to life.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-night/60 p-4">
                <p className="text-xs uppercase tracking-wide text-white/50">Pro tips</p>
                <ul className="mt-2 space-y-2 text-left text-xs leading-relaxed">
                  <li>• Choose one hero color and use the others as accents.</li>
                  <li>• Not sure on flavors? Tell us your favorites and we’ll suggest pairings.</li>
                  <li>• Adding cupcakes? Use the quantity field to indicate dozens.</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
