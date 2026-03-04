'use client';

import { useState } from 'react';
import type { SiteConfig } from '@/types/site';

interface Props {
  config: SiteConfig;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const EMPTY_FORM: FormState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!form.name.trim()) {
    errors.name = 'Namn är obligatoriskt.';
  }
  if (!form.email.trim()) {
    errors.email = 'E-post är obligatoriskt.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Ange en giltig e-postadress.';
  }
  if (!form.phone.trim()) {
    errors.phone = 'Telefonnummer är obligatoriskt.';
  }
  if (!form.service) {
    errors.service = 'Välj en tjänst.';
  }

  return errors;
}

export function ContactForm({ config }: Props) {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  // Derive service options from offers; fallback to generic options
  const serviceOptions =
    config.offers.length > 0
      ? config.offers.map((o) => o.name)
      : ['Allmän förfrågan', 'Få en offert', 'Övrigt'];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validate(form);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Move focus to first error
      const firstErrorId = Object.keys(newErrors)[0];
      document.getElementById(firstErrorId)?.focus();
      return;
    }

    setStatus('loading');
    // Simulate async form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <section aria-labelledby="contact-heading" className="py-20 bg-white" id="contact">
        <div className="container mx-auto px-4 max-w-xl text-center">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl bg-primary-soft"
            aria-hidden="true"
          >
            ✓
          </div>
          <h2
            id="contact-heading"
            className="text-3xl font-bold mb-4"
            style={{ color: 'var(--color-secondary)' }}
          >
            Vi Återkommer Snart!
          </h2>
          <p className="text-gray-500 mb-8 text-lg">
            Tack för att du hörde av dig. En av våra medarbetare kontaktar dig inom 2 arbetstimmar.
          </p>
          <a
            href={`tel:${config.phone}`}
            className="font-semibold hover:opacity-80 transition-opacity"
            style={{ color: 'var(--color-primary)' }}
          >
            Brådskande? Ring oss: {config.phone}
          </a>
        </div>
      </section>
    );
  }

  return (
    <section aria-labelledby="contact-heading" className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2
              id="contact-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--color-secondary)' }}
            >
              Få Din Kostnadsfria Offert
            </h2>
            <p className="text-gray-500 text-lg">
              Fyll i formuläret så återkommer vi inom 2 timmar.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            aria-label="Contact form"
            className="bg-white rounded-2xl border border-gray-100 shadow-card-hover p-8 space-y-5"
          >
            {/* Row 1: Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field
                id="name"
                label="Namn"
                required
                error={errors.name}
              >
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Anna Svensson"
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={inputClass(!!errors.name)}
                />
              </Field>

              <Field
                id="email"
                label="Email"
                required
                error={errors.email}
              >
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={inputClass(!!errors.email)}
                />
              </Field>
            </div>

            {/* Row 2: Phone + Service */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field
                id="phone"
                label="Telefon"
                required
                error={errors.phone}
              >
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="070-000 00 00"
                  autoComplete="tel"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                  className={inputClass(!!errors.phone)}
                />
              </Field>

              <Field
                id="service"
                label="Tjänstetyp"
                required
                error={errors.service}
              >
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  aria-invalid={!!errors.service}
                  aria-describedby={errors.service ? 'service-error' : undefined}
                  className={inputClass(!!errors.service)}
                >
                  <option value="">Välj en tjänst…</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            {/* Message */}
            <Field id="message" label="Meddelande">
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Berätta om ditt projekt…"
                className={inputClass(false) + ' resize-none'}
              />
            </Field>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-4 rounded-xl text-white font-semibold text-lg transition-opacity duration-200 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              {status === 'loading' ? 'Skickar…' : config.ctaPrimary}
            </button>

            <p className="text-center text-xs text-gray-400">
              Vi respekterar din integritet. Ingen spam, aldrig.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

// ── Field wrapper ─────────────────────────────────────────────────────────────

interface FieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}

function Field({ id, label, required, error, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1.5">
        {label}
        {required && (
          <span className="text-red-500 ml-0.5" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-red-500 text-xs mt-1">
          {error}
        </p>
      )}
    </div>
  );
}

function inputClass(hasError: boolean): string {
  return [
    'w-full px-4 py-3 rounded-xl border text-gray-800 bg-white',
    'transition-colors duration-200',
    'focus:outline-none focus:border-transparent focus:ring-2 focus:ring-offset-0',
    hasError
      ? 'border-red-300 focus:ring-red-300'
      : 'border-gray-200 focus:ring-gray-300',
  ].join(' ');
}
