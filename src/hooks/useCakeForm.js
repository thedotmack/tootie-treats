import { useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'tt-cake-draft-v1';

const PRICE = {
  base: {
    '6-round': 55,
    '8-round': 75,
    '9x13-sheet': 95,
    '2-tier-6-8': 190
  },
  style: {
    smooth: 0,
    rustic: 10,
    piped: 25,
    drip: 15,
    mushroom: 20
  },
  filling: 8,
  gluten_free: 10,
  vegan: 12,
  inscription: 5,
  qty_unit: 3
};

const defaultForm = {
  size: '',
  flavor: '',
  filling: '',
  style: '',
  color1: '#ffd1dc',
  color2: '#c6e2ff',
  color3: '#d9ffdb',
  inscription: '',
  gluten_free: false,
  vegan: false,
  theme: '',
  reference_link: '',
  pickup_date: '',
  pickup_time: '',
  quantity: 1,
  event_type: '',
  guest_count: '',
  budget: '',
  name: '',
  email: '',
  phone: '',
  notes: '',
  heard_about: '',
  consent: false
};

export function useCakeForm() {
  const [formData, setFormData] = useState(defaultForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [draftSaved, setDraftSaved] = useState(false);

  const requiredFields = ['size', 'flavor', 'style', 'pickup_date', 'name', 'email', 'phone'];

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setFormData({ ...defaultForm, ...parsed });
        setStatus('Draft restored from this device.');
        const timeout = setTimeout(() => setStatus(''), 3000);
        return () => clearTimeout(timeout);
      }
    } catch (error) {
      console.warn('Unable to load saved draft', error);
    }
  }, []);

  const estimatedPrice = useMemo(() => {
    if (!formData.size || !formData.style) return 0;
    let total = PRICE.base[formData.size] || 0;
    total += PRICE.style[formData.style] || 0;
    if (formData.filling) total += PRICE.filling;
    if (formData.gluten_free) total += PRICE.gluten_free;
    if (formData.vegan) total += PRICE.vegan;
    if (formData.inscription?.trim()) total += PRICE.inscription;
    if (formData.quantity > 1) total += (formData.quantity - 1) * PRICE.qty_unit;
    return total;
  }, [formData]);

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const validate = (fields) => {
    const fieldsToCheck = fields ?? requiredFields;
    const updatedErrors = { ...errors };

    fieldsToCheck.forEach((field) => {
      if (updatedErrors[field]) {
        delete updatedErrors[field];
      }

      if (!formData[field]) {
        updatedErrors[field] = `${field.replace('_', ' ')} is required.`;
      }
    });

    if ((fieldsToCheck.includes('email') || (!fields && formData.email)) &&
      formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      updatedErrors.email = 'Please enter a valid email address.';
    }

    if ((!fields || fieldsToCheck.includes('consent')) && !formData.consent) {
      updatedErrors.consent = 'Please confirm you understand this is a request.';
    }

    setErrors(updatedErrors);
    return Object.keys(updatedErrors).length === 0;
  };

  const saveDraft = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    setDraftSaved(true);
    setStatus('Draft saved. Come back anytime!');
    setTimeout(() => {
      setDraftSaved(false);
      setStatus('');
    }, 3000);
  };

  const buildSummary = () => {
    const summaryLines = [
      `Name: ${formData.name || '—'}`,
      `Email: ${formData.email || '—'}`,
      `Phone: ${formData.phone || '—'}`,
      `Pickup Date: ${formData.pickup_date || '—'}`,
      formData.pickup_time ? `Preferred Pickup Time: ${formData.pickup_time}` : null,
      formData.event_type ? `Occasion: ${formData.event_type}` : null,
      formData.guest_count ? `Approximate Guests: ${formData.guest_count}` : null,
      formData.budget ? `Budget Comfort Zone: ${formData.budget}` : null,
      '',
      `Size: ${formData.size || '—'}`,
      `Flavor: ${formData.flavor || '—'}`,
      `Filling: ${formData.filling || 'None'}`,
      `Style: ${formData.style || '—'}`,
      `Colors: ${formData.color1}, ${formData.color2}, ${formData.color3}`,
      formData.theme ? `Design Theme: ${formData.theme}` : null,
      formData.reference_link ? `Inspiration Link: ${formData.reference_link}` : null,
      `Inscription: ${formData.inscription || 'None'}`,
      `Gluten-free: ${formData.gluten_free ? 'Yes' : 'No'}`,
      `Vegan: ${formData.vegan ? 'Yes' : 'No'}`,
      `Quantity: ${formData.quantity}`,
      '',
      formData.notes ? `Notes: ${formData.notes}` : 'Notes: None provided',
      formData.heard_about ? `Heard about Tootie Treats via: ${formData.heard_about}` : null,
      `Estimated Price: $${estimatedPrice}`,
      `Submitted: ${new Date().toLocaleString()}`
    ].filter(Boolean);

    return summaryLines.join('\n');
  };

  const submitOrder = async (event) => {
    event?.preventDefault?.();

    if (!validate()) {
      setStatus('Please complete the highlighted fields.');
      return;
    }

    const summary = buildSummary();
    let clipboardCopied = false;

    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(summary);
        clipboardCopied = true;
      }
    } catch (error) {
      console.warn('Clipboard copy failed', error);
    }

    if (typeof window !== 'undefined') {
      window.open('https://linktr.ee/tootietreats', '_blank', 'noopener');
    }

    setStatus(
      clipboardCopied
        ? 'Summary copied! Paste it into the Linktree contact options or DM @tootietreats to finish your request.'
        : 'Open the Linktree contact options or DM @tootietreats, then paste the summary above.'
    );
  };

  return {
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
  };
}
