import { useTextReveal } from '../hooks/useGsap';
import '../styles/section.css';
import './CTAFooter.css';

/** Section 10 — bg #D8E9E4, padding 147/20, centred.
 *  "Have a project in mind?" @30px · "Let's work together" @150px (947px) · button */
export default function CTAFooter() {
  const eyebrow = useTextReveal({ by: 'words' });
  const line = useTextReveal({ by: 'chars', stagger: 0.04 });
  return (
    <section className="sec cta">
      <div className="sec__inner">
        <div className="cta__col">
          <p ref={eyebrow} className="cta__eyebrow">Have a project in mind?</p>
          <h2 ref={line} className="cta__line">Let&rsquo;s work together</h2>
          <a className="btn btn--primary" href="/contact">Get in touch</a>
        </div>
      </div>
    </section>
  );
}
