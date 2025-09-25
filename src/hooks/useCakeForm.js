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
  pickup_date: '',
  quantity: 1,
  name: '',
  email: '',
  phone: '',
  notes: '',
  consent: false
};

export function useCakeForm() {
  const [formData, setFormData] = useState(defaultForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [draftSaved, setDraftSaved] = useState(false);

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

  const validate = () => {
    const required = ['size', 'flavor', 'style', 'pickup_date', 'name', 'email', 'phone'];
    const newErrors = {};

    required.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `${field.replace('_', ' ')} is required.`;
      }
    });

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.consent) {
      newErrors.consent = 'Please confirm you understand this is a request.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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

  const resetForm = () => {
    setFormData(defaultForm);
  };

  const submitOrder = async (event) => {
    event.preventDefault();

    if (!validate()) {
      setStatus('Please complete the highlighted fields.');
      return;
    }

    try {
      const subject = encodeURIComponent(`Cake Order Request – ${formData.name}`);
      const body = encodeURIComponent(`Hi Tootie Treats,%0D%0A%0D%0AI'd like to order a custom cake. Here are the details:%0D%0A%0D%0A` +
        `Name: ${formData.name}%0D%0A` +
        `Email: ${formData.email}%0D%0A` +
        `Phone: ${formData.phone}%0D%0A` +
        `Pickup Date: ${formData.pickup_date}%0D%0A%0D%0A` +
        `Size: ${formData.size}%0D%0A` +
        `Flavor: ${formData.flavor}%0D%0A` +
        `Filling: ${formData.filling || 'None'}%0D%0A` +
        `Style: ${formData.style}%0D%0A` +
        `Colors: ${formData.color1}, ${formData.color2}, ${formData.color3}%0D%0A` +
        `Inscription: ${formData.inscription || 'None'}%0D%0A` +
        `Gluten-free: ${formData.gluten_free ? 'Yes' : 'No'}%0D%0A` +
        `Vegan: ${formData.vegan ? 'Yes' : 'No'}%0D%0A` +
        `Quantity: ${formData.quantity}%0D%0A%0D%0A` +
        `Notes: ${formData.notes || 'None'}%0D%0A%0D%0A` +
        `Estimated Price: $${estimatedPrice}%0D%0A%0D%0ASubmitted: ${new Date().toLocaleString()}`);

      if (typeof window !== 'undefined') {
        const link = document.createElement('a');
        link.href = `mailto:orders@tootietreats.example?subject=${subject}&body=${body}`;
        link.click();
      }

      setStatus('Thanks! Your order request is ready to send via email.');
      localStorage.removeItem(STORAGE_KEY);
      resetForm();
    } catch (error) {
      console.error('Failed to submit order', error);
      setStatus('We could not launch your email client. Please email us directly.');
    }
  };

  return {
    formData,
    errors,
    status,
    draftSaved,
    estimatedPrice,
    updateField,
    saveDraft,
    submitOrder
  };
}
