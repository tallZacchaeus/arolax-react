import { useTextReveal, useFadeIn } from '../hooks/useGsap';
import '../styles/section.css';
import './Testimonials.css';

/** Section 7 — bg #F9F3EE, margin-top -150 (deeper overlap than the rest).
 *  head: title 500px @70px
 *  row:  rating card 27.9% (#FDFAF8, radius 20, padding 60, "4.9" @120px/.741)
 *        + quote + wcf--brand-slider logo strip */
const LOGOS = [1, 2, 3, 4, 5, 6, 7].map((n) => `brand-logo-${n}.webp`);

export default function Testimonials() {
  const heading = useTextReveal();
  const quote = useFadeIn();
  const strip = useFadeIn({ y: 20, delay: 0.15 });

  return (
    <section className="sec testimonials">
      <div className="sec__inner">
        <div className="sec__head">
          <h2 ref={heading} className="sec__title testimonials__title">What they say about us</h2>
        </div>

        <div className="testimonials__row">
          <div className="rating-card">
            <span className="rating-card__score">4.9</span>
            <span className="rating-card__stars" aria-label="4.9 out of 5">★★★★★</span>
            <span className="rating-card__meta">(40+ reviews)</span>
          </div>

          <blockquote ref={quote} className="testimonials__quote">
            Helping world-class company by creative design.
          </blockquote>
        </div>

        <div ref={strip} className="brand-slider" role="list" aria-label="Clients">
          {LOGOS.map((l) => (
            <img key={l} src={`/assets/${l}`} alt="" role="listitem" loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  );
}
