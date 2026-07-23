import { useState } from 'react';
import type { FormEvent } from 'react';
import { useMutation } from '@tanstack/react-query';
import { CONTACT_INFO, SOCIAL_LINKS } from '../../data/portfolio';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Button } from '../ui/Button/Button';
import { SectionHeader } from '../ui/SectionHeader/SectionHeader';
import { SocialLinks } from '../ui/SocialLinks/SocialLinks';
import './Contact.scss';

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initial: FormState = { name: '', email: '', message: '' };

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = 'Name is required.';
  else if (values.name.trim().length < 2) errors.name = 'Enter at least 2 characters.';

  if (!values.email.trim()) errors.email = 'Email is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }

  if (!values.message.trim()) errors.message = 'Message is required.';
  else if (values.message.trim().length < 10) {
    errors.message = 'Please write at least 10 characters.';
  }

  return errors;
}

async function submitContact(values: FormState) {
  await new Promise((resolve) => setTimeout(resolve, 700));
  return { ok: true as const, name: values.name.trim() };
}

export function Contact() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState<string | null>(null);

  const mutation = useMutation({
    mutationFn: submitContact,
    onSuccess: (data) => {
      setSuccess(`Thanks ${data.name}! Your message is ready — email me directly to continue.`);
      setValues(initial);
      setErrors({});
    },
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSuccess(null);
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    mutation.mutate(values);
  };

  return (
    <section id="contact" className="contact" aria-labelledby="contact-title" ref={ref}>
      <div className={`container reveal ${isVisible ? 'is-visible' : ''}`}>
        <SectionHeader
          eyebrow="Contact"
          titleId="contact-title"
          title="Let's Build Something Amazing"
          lead="Have an idea, product, or project in mind? Let's create a modern and impactful digital experience together."
        />

        <div className="contact__grid">
          <aside className="contact__info">
            <p>
              Prefer a direct channel? Reach out via email or connect on GitHub and LinkedIn.
            </p>
            <ul className="contact__channels">
              <li>
                <span>Email</span>
                <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
              </li>
              <li>
                <span>GitHub</span>
                <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer">
                  github.com/ashilkumar1414-source
                </a>
              </li>
              <li>
                <span>LinkedIn</span>
                <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/ashil-kumar
                </a>
              </li>
            </ul>
            <SocialLinks
              links={[
                ...SOCIAL_LINKS,
                { label: 'Email', url: `mailto:${CONTACT_INFO.email}`, icon: 'email' },
              ]}
            />
          </aside>

          <form className="contact__form" onSubmit={onSubmit} noValidate>
            <div className="contact__field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                value={values.name}
                onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name ? (
                <p id="name-error" className="contact__error" role="alert">
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div className="contact__field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email ? (
                <p id="email-error" className="contact__error" role="alert">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message ? (
                <p id="message-error" className="contact__error" role="alert">
                  {errors.message}
                </p>
              ) : null}
            </div>

            {success ? (
              <p className="contact__success" role="status">
                {success}
              </p>
            ) : null}

            {mutation.isError ? (
              <p className="contact__error" role="alert">
                Something went wrong. Please try again or email me directly.
              </p>
            ) : null}

            <Button type="submit" variant="primary" disabled={mutation.isPending}>
              {mutation.isPending ? 'Sending…' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
