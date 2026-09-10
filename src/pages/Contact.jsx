import PageHero from '../components/PageHero';
import { useFadeIn } from '../hooks/useGsap';
import { contact, site, services } from '../data/site';
import '../styles/page.css';
import './Contact.css';

/** Contact page — content document copy and its seven specified form fields.
 *  Phone and email are left blank because the document marks them
 *  "[Add phone number]" / "[Add email address]". */
export default function Contact() {
  const form = useFadeIn();
  return (
    <main className="page">
      <div className="page__inner">
        <PageHero title={contact.hero.headline} lede={contact.hero.sub} />

        <div className="contact">
          <aside className="contact__aside">
            <h2 className="contact__label">Office</h2>
            <p className="contact__addr">{site.location}</p>

            {site.phone && <a className="contact__line" href={`tel:${site.phone}`}>{site.phone}</a>}
            {site.email && <a className="contact__line" href={`mailto:${site.email}`}>{site.email}</a>}
            {!site.phone && !site.email && (
              <p className="contact__pending">Phone and email to be confirmed.</p>
            )}

            <h2 className="contact__label contact__label--gap">Social</h2>
            {site.social.map((s) => (
              <a key={s.label} className="contact__line" href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
            ))}
          </aside>

          <form ref={form} className="contact__form" onSubmit={(e) => e.preventDefault()}>
            <p className="contact__intro">{contact.body}</p>
            <div className="contact__row">
              <Field label="Name" name="name" required />
              <Field label="Company or organization" name="company" />
            </div>
            <div className="contact__row">
              <Field label="Email address" name="email" type="email" required />
              <Field label="Phone number" name="phone" type="tel" />
            </div>
            <div className="contact__row">
              <label className="contact__field">
                <span>Service interest</span>
                <select name="service" defaultValue="">
                  <option value="" disabled>Select a service</option>
                  {services.map((s) => <option key={s.slug} value={s.slug}>{s.title}</option>)}
                </select>
              </label>
              <label className="contact__field">
                <span>Project budget range</span>
                <select name="budget" defaultValue="">
                  <option value="" disabled>Select a range</option>
                  <option>Under ₦1M</option><option>₦1M – ₦5M</option>
                  <option>₦5M – ₦20M</option><option>Above ₦20M</option>
                  <option>Not yet defined</option>
                </select>
              </label>
            </div>
            <label className="contact__field">
              <span>Message</span>
              <textarea name="message" rows={5} required />
            </label>
            <button className="btn btn--primary" type="submit">Send message</button>
          </form>
        </div>
      </div>
    </main>
  );
}

function Field({ label, name, type = 'text', required = false }) {
  return (
    <label className="contact__field">
      <span>{label}</span>
      <input type={type} name={name} required={required} />
    </label>
  );
}
