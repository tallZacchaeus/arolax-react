import { useTextReveal, useFadeIn } from '../hooks/useGsap';
import { home } from '../data/site';
import '../styles/section.css';
import './Testimonials.css';

/** Home "Industries" — content document "Supporting Brands Across Sectors".
 *  Replaces the demo's testimonials block, which had no Brandfirst equivalent
 *  (no client quotes supplied). */
export default function Testimonials() {
  const heading = useTextReveal();
  const body = useFadeIn();
  const { industries } = home;
  return (
    <section className="sec industries">
      <div className="sec__inner">
        <div className="sec__head industries__head">
          <h2 ref={heading} className="sec__title industries__title">{industries.headline}</h2>
          <p ref={body} className="industries__body">{industries.body}</p>
        </div>
        <ul className="industries__list">
          {industries.sectors.map((s) => (
            <li key={s} className="industries__item">{s}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
