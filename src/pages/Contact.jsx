import PageHero from '../components/PageHero';
import { useFadeIn } from '../hooks/useGsap';
import '../styles/page.css';
import './Contact.css';

/** Page #2474 "Contact Us" — 3 sections, 15 widgets.
 *  Copy, phone, email, Skype handle and address are the demo's own values. */
export default function Contact() {
  const form = useFadeIn();
  return (
    <main className="page">
      <div className="page__inner">
        <PageHero
          eyebrow="We’ve been waiting for you!"
          title="Any questions? simply ask us this is you home!"
          lede="Add the best talent on the market, an agile skilled management and seamless involvement."
        />

        <div className="contact">
          <aside className="contact__aside">
            <h2 className="contact__label">Direct contact:</h2>
            <a className="contact__line" href="tel:+8817506606 00">+881 750 6606 00</a>
            <a className="contact__line" href="mailto:hello@arolax.com">hello@arolax.com</a>
            <p className="contact__skype">Skype.arolax007</p>
            <p className="contact__addr">230 alaska street dunasia QC (USA) H8R 1A1</p>
          </aside>

          <form ref={form} className="contact__form" onSubmit={(e) => e.preventDefault()}>
            <h2 className="contact__heading">We want to hear from you. let’s us know how we can help!</h2>
            <div className="contact__row">
              <label className="contact__field">
                <span>Name</span>
                <input type="text" name="name" required />
              </label>
              <label className="contact__field">
                <span>Email</span>
                <input type="email" name="email" required />
              </label>
            </div>
            <label className="contact__field">
              <span>Subject</span>
              <input type="text" name="subject" />
            </label>
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
