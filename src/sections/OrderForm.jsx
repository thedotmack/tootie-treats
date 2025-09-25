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

  const fieldClass = (hasError = false) =>
    `mt-1 w-full rounded-base border-2 border-border bg-secondary-background px-4 py-3 text-sm text-foreground shadow-shadow focus:outline-none focus:ring-2 focus:ring-main focus:ring-offset-2 focus:ring-offset-secondary-background ${hasError ? 'ring-accent-coral' : ''}`;

  const checkboxClass = 'h-4 w-4 rounded border-2 border-border bg-secondary-background text-main focus:ring-main';
  const labelTone = 'text-xs uppercase tracking-[0.2em] text-foreground/60';

  const fieldWithIconClass = (hasError = false) => `${fieldClass(hasError)} pl-12`;

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div>
              <label className={labelTone}>Cake size *</label>
              <select
                value={formData.size}
                onChange={(event) => updateField('size', event.target.value)}
                className={fieldClass(Boolean(errors.size))}
              >
                {sizes.map((size) => (
                  <option key={size.value || 'placeholder'} value={size.value}>
                    {size.label}
                  </option>
                ))}
              </select>
              {errors.size && <p className="mt-1 text-xs text-accent-coral">{errors.size}</p>}
            </div>
            <div>
              <label className={labelTone}>Flavor *</label>
              <select
                value={formData.flavor}
                onChange={(event) => updateField('flavor', event.target.value)}
                className={fieldClass(Boolean(errors.flavor))}
              >
                <option value="">Choose flavor</option>
                {flavors.map((flavor) => (
                  <option key={flavor} value={flavor}>
                    {flavor}
                  </option>
                ))}
              </select>
              {errors.flavor && <p className="mt-1 text-xs text-accent-coral">{errors.flavor}</p>}
            </div>
            <div>
              <label className={labelTone}>Filling</label>
              <select
                value={formData.filling}
                onChange={(event) => updateField('filling', event.target.value)}
                className={fieldClass()}
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
              <label className={labelTone}>How many cakes or dozens?</label>
              <input
                type="number"
                min="1"
                value={formData.quantity}
                onChange={(event) => updateField('quantity', parseInt(event.target.value, 10) || 1)}
                className={fieldClass()}
              />
              <p className="mt-1 text-xs text-foreground/60">
                Use this for sheet cakes, tiered cakes, or cupcake dozens.
              </p>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className={labelTone}>Style *</label>
              <select
                value={formData.style}
                onChange={(event) => updateField('style', event.target.value)}
                className={fieldClass(Boolean(errors.style))}
              >
                {styles.map((style) => (
                  <option key={style.value || 'style-placeholder'} value={style.value}>
                    {style.label}
                  </option>
                ))}
              </select>
              {errors.style && <p className="mt-1 text-xs text-accent-coral">{errors.style}</p>}
            </div>
            <div>
              <label className={labelTone}>Icing colors</label>
              <div className="mt-2 flex flex-wrap gap-3 text-xs text-foreground/70">
                {['color1', 'color2', 'color3'].map((colorKey) => (
                  <div key={colorKey} className="flex items-center gap-2">
                    <input
                      type="color"
                      value={formData[colorKey]}
                      onChange={(event) => updateField(colorKey, event.target.value)}
                      className="h-12 w-16 cursor-pointer rounded-base border-2 border-border bg-secondary-background shadow-shadow"
                    />
                    <span>{colorKey.replace('color', 'Accent ')}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label className={labelTone}>Design theme or vibe</label>
              <input
                type="text"
                value={formData.theme}
                onChange={(event) => updateField('theme', event.target.value)}
                placeholder="e.g., Cottagecore mushrooms, Golden birthday, 90s throwback"
                className={fieldClass()}
              />
            </div>
            <div>
              <label className={labelTone}>Inspiration link</label>
              <input
                type="url"
                value={formData.reference_link}
                onChange={(event) => updateField('reference_link', event.target.value)}
                placeholder="Pinterest, Instagram, or Google Drive link"
                className={fieldClass()}
              />
            </div>
            <div>
              <label className={labelTone}>Inscription</label>
              <input
                type="text"
                value={formData.inscription}
                maxLength={40}
                placeholder="Optional message on the cake"
                onChange={(event) => updateField('inscription', event.target.value)}
                className={fieldClass()}
              />
            </div>
            <div className="space-y-2 text-sm text-foreground/75">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={formData.gluten_free}
                  onChange={(event) => updateField('gluten_free', event.target.checked)}
                  className={checkboxClass}
                />
                Gluten-free (adds cost)
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={formData.vegan}
                  onChange={(event) => updateField('vegan', event.target.checked)}
                  className={checkboxClass}
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
              <label className={labelTone}>What are we celebrating?</label>
              <input
                type="text"
                value={formData.event_type}
                onChange={(event) => updateField('event_type', event.target.value)}
                placeholder="Birthday, baby shower, pop-up, corporate drop, etc."
                className={fieldClass()}
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className={labelTone}>Estimated guest count</label>
                <input
                  type="number"
                  min="0"
                  value={formData.guest_count}
                  onChange={(event) => updateField('guest_count', event.target.value)}
                  placeholder="Optional"
                  className={fieldClass()}
                />
              </div>
              <div>
                <label className={labelTone}>Budget comfort zone</label>
                <select
                  value={formData.budget}
                  onChange={(event) => updateField('budget', event.target.value)}
                  className={fieldClass()}
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
                <label className={labelTone}>Desired pickup date *</label>
                <input
                  type="date"
                  value={formData.pickup_date}
                  onChange={(event) => updateField('pickup_date', event.target.value)}
                  className={fieldClass(Boolean(errors.pickup_date))}
                />
                {errors.pickup_date && <p className="mt-1 text-xs text-accent-coral">{errors.pickup_date}</p>}
              </div>
              <div>
                <label className={labelTone}>Pickup time window</label>
                <input
                  type="text"
                  value={formData.pickup_time}
                  onChange={(event) => updateField('pickup_time', event.target.value)}
                  placeholder="e.g., Afternoon, 1–3 PM, after class"
                  className={fieldClass()}
                />
              </div>
            </div>
            <div>
              <label className={labelTone}>Notes for Alexa</label>
              <textarea
                value={formData.notes}
                onChange={(event) => updateField('notes', event.target.value)}
                rows={4}
                placeholder="Allergies, flavor swaps, keepsake toppers, delivery questions, etc."
                className={`${fieldClass()} resize-none`}
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className={labelTone}>Your name *</label>
              <div className="relative mt-1">
                <User
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40"
                  size={18}
                />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(event) => updateField('name', event.target.value)}
                  className={fieldWithIconClass(Boolean(errors.name))}
                  placeholder="First & last name"
                />
              </div>
              {errors.name && <p className="mt-1 text-xs text-accent-coral">{errors.name}</p>}
            </div>
            <div>
              <label className={labelTone}>Email *</label>
              <div className="relative mt-1">
                <Mail
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40"
                  size={18}
                />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(event) => updateField('email', event.target.value)}
                  className={fieldWithIconClass(Boolean(errors.email))}
                  placeholder="you@example.com"
                />
              </div>
              {errors.email && <p className="mt-1 text-xs text-accent-coral">{errors.email}</p>}
            </div>
            <div>
              <label className={labelTone}>Phone *</label>
              <div className="relative mt-1">
                <Phone
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40"
                  size={18}
                />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(event) => updateField('phone', event.target.value)}
                  className={fieldWithIconClass(Boolean(errors.phone))}
                  placeholder="(916) 555-1234"
                />
              </div>
              {errors.phone && <p className="mt-1 text-xs text-accent-coral">{errors.phone}</p>}
            </div>
            <div>
              <label className={labelTone}>How did you hear about Tootie Treats?</label>
              <select
                value={formData.heard_about}
                onChange={(event) => updateField('heard_about', event.target.value)}
                className={fieldClass()}
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
            <label className="flex items-start gap-3 text-xs text-foreground/70">
              <input
                type="checkbox"
                checked={formData.consent}
                onChange={(event) => updateField('consent', event.target.checked)}
                className={`${checkboxClass} mt-1`}
              />
              I understand this is a request and the bakery will confirm availability & final pricing.*
            </label>
            {errors.consent && <p className="text-xs text-accent-coral">{errors.consent}</p>}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="order"
      className="relative border-b-4 border-border bg-gradient-to-br from-accent-lavender/40 via-secondary-background to-accent-pink/40 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(circle at 15% 25%, rgba(159, 247, 255, 0.45), transparent 55%), radial-gradient(circle at 85% 70%, rgba(255, 228, 77, 0.4), transparent 55%)'
        }}
      />
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl sm:text-4xl text-foreground">Build your Tootie Treats cake request</h2>
          <p className="mt-4 text-base text-foreground/75 sm:text-lg">
            Tootie Treats bakes custom cakes in Sacramento alongside the viral classes you see on social media. Use this wizard to plan your cake, then send the summary straight to Alexa.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_minmax(320px,380px)]">
          <form
            onSubmit={submitOrder}
            className="space-y-6 rounded-base border-4 border-border bg-secondary-background/95 p-6 shadow-shadow"
            noValidate
          >
            <div className="flex items-center justify-between rounded-base border-2 border-border bg-accent-lavender/60 px-4 py-3 text-xs text-foreground/70">
              <div className="flex items-center gap-2">
                <Cake className="h-4 w-4 text-foreground" />
                <span>Step {currentStep + 1} of {stepConfig.length}</span>
              </div>
              <div className="hidden text-foreground/50 sm:flex">
                {stepConfig.map((step, index) => (
                  <span
                    key={step.id}
                    className="mx-1 h-2 w-6 rounded-full"
                    style={{
                      backgroundColor:
                        index === currentStep ? 'var(--foreground)' : 'rgba(23, 21, 31, 0.25)'
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-base border-2 border-border bg-secondary-background p-6 shadow-shadow">
              <div className="mb-6 flex items-start gap-3 text-left">
                <div className="rounded-full bg-accent-teal/50 p-2 text-foreground">
                  {currentStep === 0 && <Cake className="h-5 w-5" />}
                  {currentStep === 1 && <Palette className="h-5 w-5" />}
                  {currentStep === 2 && <Calendar className="h-5 w-5" />}
                  {currentStep === 3 && <Sparkles className="h-5 w-5" />}
                </div>
                <div>
                  <h3 className="font-heading text-lg text-foreground">{stepConfig[currentStep].title}</h3>
                  <p className="mt-1 text-sm text-foreground/70">{stepConfig[currentStep].description}</p>
                </div>
              </div>

              {renderStep()}

              <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:justify-between">
                <div className="flex gap-3 sm:order-1">
                  {currentStep > 0 && (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex items-center gap-2 rounded-full border-2 border-border bg-secondary-background px-5 py-3 text-sm font-semibold text-foreground shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none"
                    >
                      <ArrowLeft className="h-4 w-4" /> Back
                    </button>
                  )}
                  {currentStep < stepConfig.length - 1 && (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 rounded-full border-2 border-border bg-gradient-to-r from-accent-coral to-main px-5 py-3 text-sm font-semibold text-foreground shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none"
                    >
                      Continue <ArrowRight className="h-4 w-4" />
                    </button>
                  )}
                  {currentStep === stepConfig.length - 1 && (
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full border-2 border-border bg-gradient-to-r from-accent-coral to-main px-5 py-3 text-sm font-semibold text-foreground shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none"
                    >
                      <Send className="h-4 w-4" /> Email my request
                    </button>
                  )}
                </div>
                <button
                  type="button"
                  onClick={saveDraft}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-border bg-secondary-background px-5 py-3 text-sm font-semibold text-foreground shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none sm:order-2"
                >
                  <Save className="h-4 w-4" /> Save draft
                </button>
              </div>
            </div>

            <div className="rounded-base border-2 border-border bg-secondary-background/90 p-6 text-foreground">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wide text-foreground/60">Estimated investment</p>
                  <p className="font-heading text-3xl text-foreground">${estimatedPrice || 0}</p>
                  <p className="text-xs text-foreground/60">Estimate updates as you design.</p>
                </div>
                {currentStep === stepConfig.length - 1 && (
                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="inline-flex items-center gap-2 rounded-full border-2 border-border bg-secondary-background px-4 py-2 text-xs font-semibold text-foreground shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none"
                  >
                    <Clipboard className="h-4 w-4" /> {copied ? 'Copied!' : 'Copy summary'}
                  </button>
                )}
              </div>
              {currentStep === stepConfig.length - 1 && (
                <div className="mt-4 rounded-base border-2 border-border bg-secondary-background p-4 text-xs leading-relaxed text-foreground/75">
                  <p className="mb-2 font-semibold text-foreground">Summary preview</p>
                  <pre className="whitespace-pre-wrap text-left">{buildSummary()}</pre>
                  <p className="mt-3 text-foreground/60">
                    Copy the summary and share it via{' '}
                    <a
                      className="font-semibold text-foreground underline decoration-accent-coral decoration-2 underline-offset-4"
                      href="https://www.instagram.com/tootietreats"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @tootietreats
                    </a>{' '}
                    or the contact buttons on{' '}
                    <a
                      className="font-semibold text-foreground underline decoration-accent-teal decoration-2 underline-offset-4"
                      href="https://linktr.ee/tootietreats"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linktr.ee/tootietreats
                    </a>.
                  </p>
                </div>
              )}
            </div>

            {status && (
              <div className="flex items-start gap-3 rounded-base border-2 border-border bg-accent-lavender/50 p-4 text-sm text-foreground">
                <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                <span>{status}</span>
              </div>
            )}
            {draftSaved && <p className="text-xs text-foreground/60">Draft saved to this device.</p>}
          </form>

          <aside className="flex flex-col gap-6 rounded-base border-4 border-border bg-secondary-background/90 p-6 text-sm text-foreground/75 shadow-shadow">
            <div className="text-center">
              <CakePreview formData={formData} />
              <p className="mt-3 text-xs text-foreground/60">
                Use the palette and inscription fields to shape the live preview. Styles like vintage piping and mushroom cottage core mirror popular Tootie Treats looks.
              </p>
            </div>
            <div className="space-y-3 rounded-base border-2 border-border bg-accent-teal/40 p-4">
              <p className="text-xs uppercase tracking-wide text-foreground/60">Need-to-knows</p>
              <ul className="space-y-2 text-left text-xs leading-relaxed text-foreground/75">
                <li>• Tootie Treats is a Sacramento custom cake studio and class host. The Linktree lists current offerings and booking forms.</li>
                <li>• Private two-hour lessons: $175 for one person, $122 each for two students, or $95 each for groups of three or more.</li>
                <li>• Travelling classes include a $50 setup fee within 10 miles of ZIP 95818. Longer distances are quoted after you inquire.</li>
              </ul>
            </div>
            <div className="space-y-2 rounded-base border-2 border-border bg-accent-pink/40 p-4 text-xs leading-relaxed text-foreground/75">
              <p className="font-semibold text-foreground">Tip</p>
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
