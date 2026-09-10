import { useTextReveal, useFadeIn } from '../hooks/useGsap';
import './FooterInner.css';

/** Elementor template #558 "Footer Inner Page".
 *  A CTA-led footer used on inner pages, distinct from #1354:
 *  bg #171717 (vs #121212), boxed 1290 (vs 1760), padding 125/20.
 *  Copy and addresses are the template's own values.
 */
export default function FooterInner() {
  const title = useTextReveal({ by: 'words' });
  const lede = useFadeIn();

  return (
    <footer className="footer-inner">
      <div className="footer-inner__inner">
        <div className="footer-inner__cta">
          <h2 ref={title} className="footer-inner__title">Get started now</h2>
          <p ref={lede} className="footer-inner__lede">
            If you would like to work with us or just want to get in touch,
            we&rsquo;d love to hear from you.
          </p>
        </div>

        <div className="footer-inner__row">
          <div className="footer-inner__addresses">
            <div className="footer-inner__addr">
              <h3 className="footer-inner__city">London</h3>
              <p className="footer-inner__lines">Baltia Squar, Mark Street, London</p>
            </div>
            <div className="footer-inner__addr">
              <h3 className="footer-inner__city">New York</h3>
              <p className="footer-inner__lines">Nenuya Centre, Elia Street New York, USA</p>
            </div>
          </div>

          {/* wcf--mailchimp in the template */}
          <div className="footer-inner__signup">
            <span className="footer-inner__label">Newsletter</span>
            <form className="footer-inner__form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" name="email" placeholder="Your email address" aria-label="Email address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-inner__bottom">
          © 2024 – 2025 | Alrights reserved by <strong>crowdyTheme</strong>
        </div>
      </div>
    </footer>
  );
}
