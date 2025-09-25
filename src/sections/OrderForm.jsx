import { useState } from 'react';
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Cake,
  Calendar,
  Clipboard,
  Mail,
  Palette,
  Phone,
  Save,
  Send,
  Sparkles,
  User
} from 'lucide-react';
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

const budgetRanges = ['', 'Under $125', '$125–$200', '$200–$300', '$300+'];

const stepConfig = [
  {
    id: 1,
    title: 'Cake basics',
    description: 'Choose the size, flavor, and filling for your celebration cake.',
    fields: ['size', 'flavor', 'filling', 'quantity']
  },
  {
    id: 2,
    title: 'Design & palette',
    description: 'Tell us about the look and dietary needs so Alexa can plan the decorating details.',
    fields: ['style', 'color1', 'color2', 'color3', 'inscription', 'gluten_free', 'vegan', 'theme', 'reference_link']
  },
  {
    id: 3,
    title: 'Event details',
    description: 'Share when and where you need the cake so we can confirm availability.',
    fields: ['event_type', 'guest_count', 'pickup_date', 'pickup_time', 'budget', 'notes']
  },
  {
    id: 4,
    title: 'Contact & review',
    description: 'Add your contact details, see the full summary, and send it straight to Tootie Treats.',
    fields: ['name', 'email', 'phone', 'heard_about', 'consent']
  }
];

export function OrderForm() {
  const {
    formData,
    errors,
    status,
    draftSaved,
    estimatedPrice,
    updateField,
    saveDraft,
    submitOrder,
    validate,
    buildSummary,
    setStatus
  } = useCakeForm();

  const [currentStep, setCurrentStep] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleNext = () => {
    const fieldsToValidate = stepConfig[currentStep].fields.filter((field) => field in formData);
    const valid = validate(fieldsToValidate);
    if (!valid) {
      setStatus('Please complete the highlighted fields before moving on.');
      return;
    }
    setStatus('');
    setCurrentStep((prev) => Math.min(prev + 1, stepConfig.length - 1));
  };

  const handleBack = () => {
    setStatus('');
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleCopySummary = async () => {
    try {
      await navigator.clipboard.writeText(buildSummary());
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (error) {
      console.error('Unable to copy summary', error);
      setStatus('Copy failed. You can manually select the text instead.');
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
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
              <label className="text-xs uppercase tracking-wide text-white/60">How many cakes or dozens?</label>
              <input
                type="number"
                min="1"
                value={formData.quantity}
                onChange={(event) => updateField('quantity', parseInt(event.target.value, 10) || 1)}
                className="mt-1 w-full rounded-2xl border border-white/10 bg-night/70 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lavender-500"
              />
              <p className="mt-1 text-xs text-white/50">Use this for sheet cakes, tiered cakes, or cupcake dozens.</p>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6">
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
              <div className="mt-2 flex flex-wrap gap-3">
                {['color1', 'color2', 'color3'].map((colorKey) => (
                  <div key={colorKey} className="flex items-center gap-2 text-xs text-white/60">
                    <input
                      type="color"
                      value={formData[colorKey]}
                      onChange={(event) => updateField(colorKey, event.target.value)}
                      className="h-12 w-16 cursor-pointer rounded-2xl border border-white/20 bg-night/70"
                    />
                    <span>{colorKey.replace('color', 'Accent ')}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-wide text-white/60">Design theme or vibe</label>
              <input
                type="text"
                value={formData.theme}
                onChange={(event) => updateField('theme', event.target.value)}
                placeholder="e.g., Cottagecore mushrooms, Golden birthday, 90s throwback"
                className="mt-1 w-full rounded-2xl border border-white/10 bg-night/70 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lavender-500"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wide text-white/60">Inspiration link</label>
              <input
                type="url"
                value={formData.reference_link}
                onChange={(event) => updateField('reference_link', event.target.value)}
                placeholder="Pinterest, Instagram, or Google Drive link"
                className="mt-1 w-full rounded-2xl border border-white/10 bg-night/70 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lavender-500"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wide text-white/60">Inscription</label>
              <input
                type="text"
                value={formData.inscription}
                maxLength={40}
                placeholder="Optional message on the cake"
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
        );
      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="text-xs uppercase tracking-wide text-white/60">What are we celebrating?</label>
              <input
                type="text"
                value={formData.event_type}
                onChange={(event) => updateField('event_type', event.target.value)}
                placeholder="Birthday, baby shower, pop-up, corporate drop, etc."
                className="mt-1 w-full rounded-2xl border border-white/10 bg-night/70 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lavender-500"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs uppercase tracking-wide text-white/60">Estimated guest count</label>
                <input
                  type="number"
                  min="0"
                  value={formData.guest_count}
                  onChange={(event) => updateField('guest_count', event.target.value)}
                  placeholder="Optional"
                  className="mt-1 w-full rounded-2xl border border-white/10 bg-night/70 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lavender-500"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wide text-white/60">Budget comfort zone</label>
                <select
                  value={formData.budget}
                  onChange={(event) => updateField('budget', event.target.value)}
                  className="mt-1 w-full rounded-2xl border border-white/10 bg-night/70 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lavender-500"
                >
                  {budgetRanges.map((option) => (
                    <option key={option || 'budget-empty'} value={option}>
                      {option || 'Let us know (optional)'}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
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
                <label className="text-xs uppercase tracking-wide text-white/60">Pickup time window</label>
                <input
                  type="text"
                  value={formData.pickup_time}
                  onChange={(event) => updateField('pickup_time', event.target.value)}
                  placeholder="e.g., Afternoon, 1–3 PM, after class"
                  className="mt-1 w-full rounded-2xl border border-white/10 bg-night/70 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lavender-500"
                />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-wide text-white/60">Notes for Alexa</label>
              <textarea
                value={formData.notes}
                onChange={(event) => updateField('notes', event.target.value)}
                rows={4}
                placeholder="Allergies, flavor swaps, keepsake toppers, delivery questions, etc."
                className="mt-1 w-full resize-none rounded-2xl border border-white/10 bg-night/70 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lavender-500"
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
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
                  placeholder="(916) 555-1234"
                />
              </div>
              {errors.phone && <p className="mt-1 text-xs text-red-300">{errors.phone}</p>}
            </div>
            <div>
              <label className="text-xs uppercase tracking-wide text-white/60">How did you hear about Tootie Treats?</label>
              <select
                value={formData.heard_about}
                onChange={(event) => updateField('heard_about', event.target.value)}
                className="mt-1 w-full rounded-2xl border border-white/10 bg-night/70 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lavender-500"
              >
                <option value="">Select an option</option>
                <option value="instagram">Instagram (@tootietreats)</option>
                <option value="tiktok">TikTok classes</option>
                <option value="goodday">Good Day Sacramento</option>
                <option value="sierra2">Sierra 2 Center event</option>
                <option value="referral">Friend or family</option>
                <option value="other">Other</option>
              </select>
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
        );
      default:
        return null;
    }
  };

  return (
    <section id="order" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl text-white sm:text-4xl">Build your Tootie Treats cake request</h2>
          <p className="mt-4 text-base text-white/70 sm:text-lg">
            Tootie Treats bakes custom cakes in Sacramento alongside the viral classes you see on social media. Use this wizard to plan your cake, then send the summary straight to Alexa.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_minmax(320px,380px)]">
          <form
            onSubmit={submitOrder}
            className="space-y-6 rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur"
            noValidate
          >
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-night/60 px-4 py-3 text-xs text-white/60">
              <div className="flex items-center gap-2">
                <Cake className="h-4 w-4 text-lavender-200" />
                <span>Step {currentStep + 1} of {stepConfig.length}</span>
              </div>
              <div className="hidden text-white/50 sm:flex">
                {stepConfig.map((step, index) => (
                  <span
                    key={step.id}
                    className={`mx-1 h-2 w-6 rounded-full ${
                      index === currentStep ? 'bg-lavender-300' : 'bg-white/15'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-night/60 p-6">
              <div className="mb-6 flex items-start gap-3 text-left">
                <div className="rounded-full bg-lavender-500/15 p-2 text-lavender-100">
                  {currentStep === 0 && <Cake className="h-5 w-5" />}
                  {currentStep === 1 && <Palette className="h-5 w-5" />}
                  {currentStep === 2 && <Calendar className="h-5 w-5" />}
                  {currentStep === 3 && <Sparkles className="h-5 w-5" />}
                </div>
                <div>
                  <h3 className="font-display text-lg text-white">{stepConfig[currentStep].title}</h3>
                  <p className="mt-1 text-sm text-white/60">{stepConfig[currentStep].description}</p>
                </div>
              </div>

              {renderStep()}

              <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:justify-between">
                <div className="flex gap-3 sm:order-1">
                  {currentStep > 0 && (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white/70 transition hover:border-white/40 hover:text-white"
                    >
                      <ArrowLeft className="h-4 w-4" /> Back
                    </button>
                  )}
                  {currentStep < stepConfig.length - 1 && (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-lavender-500 to-lavender-600 px-5 py-3 text-sm font-semibold text-night shadow-lavender-500/40 transition hover:shadow-glow"
                    >
                      Continue <ArrowRight className="h-4 w-4" />
                    </button>
                  )}
                  {currentStep === stepConfig.length - 1 && (
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-lavender-500 to-lavender-600 px-5 py-3 text-sm font-semibold text-night shadow-lavender-500/40 transition hover:shadow-glow"
                    >
                      <Send className="h-4 w-4" /> Email my request
                    </button>
                  )}
                </div>
                <button
                  type="button"
                  onClick={saveDraft}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white sm:order-2"
                >
                  <Save className="h-4 w-4" /> Save draft
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-night/60 p-6 text-white/80">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wide text-white/50">Estimated investment</p>
                  <p className="font-display text-3xl text-white">${estimatedPrice || 0}</p>
                  <p className="text-xs text-white/50">Estimate updates as you design.</p>
                </div>
                {currentStep === stepConfig.length - 1 && (
                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
                  >
                    <Clipboard className="h-4 w-4" /> {copied ? 'Copied!' : 'Copy summary'}
                  </button>
                )}
              </div>
              {currentStep === stepConfig.length - 1 && (
                <div className="mt-4 rounded-2xl border border-white/10 bg-night/70 p-4 text-xs leading-relaxed text-white/70">
                  <p className="mb-2 font-semibold text-white">Summary preview</p>
                  <pre className="whitespace-pre-wrap text-left">{buildSummary()}</pre>
                  <p className="mt-3 text-white/60">
                    Copy the summary and share it via <a className="text-lavender-200 hover:text-lavender-100" href="https://www.instagram.com/tootietreats" target="_blank" rel="noopener noreferrer">@tootietreats</a> or the contact buttons on{' '}
                    <a className="text-lavender-200 hover:text-lavender-100" href="https://linktr.ee/tootietreats" target="_blank" rel="noopener noreferrer">linktr.ee/tootietreats</a>.
                  </p>
                </div>
              )}
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

          <aside className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
            <div className="text-center">
              <CakePreview formData={formData} />
              <p className="mt-3 text-xs text-white/60">
                Use the palette and inscription fields to shape the live preview. Styles like vintage piping and mushroom cottage core mirror popular Tootie Treats looks.
              </p>
            </div>
            <div className="space-y-3 rounded-2xl border border-white/10 bg-night/70 p-4">
              <p className="text-xs uppercase tracking-wide text-white/50">Need-to-knows</p>
              <ul className="space-y-2 text-left text-xs leading-relaxed">
                <li>• Tootie Treats is a Sacramento custom cake studio and class host. The Linktree lists current offerings and booking forms.</li>
                <li>• Private two-hour lessons: $175 for one person, $122 each for two students, or $95 each for groups of three or more.</li>
                <li>• Travelling classes include a $50 setup fee within 10 miles of ZIP 95818. Longer distances are quoted after you inquire.</li>
              </ul>
            </div>
            <div className="space-y-2 rounded-2xl border border-white/10 bg-night/70 p-4 text-xs leading-relaxed text-white/60">
              <p className="font-semibold text-white">Tip</p>
              <p>
                After you message Alexa through Linktree or Instagram, watch for a reply confirming availability and pickup arrangements in Curtis Park. For public classes, monitor the host links for ticket updates.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
