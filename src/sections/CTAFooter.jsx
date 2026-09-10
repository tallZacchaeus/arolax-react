import { Link } from 'react-router-dom';
import { useTextReveal, useFadeIn } from '../hooks/useGsap';
import { home } from '../data/site';
import '../styles/section.css';
import './CTAFooter.css';

/** Home closing CTA — content document "Ready to Put Your Brand First?" */
export default function CTAFooter() {
  const eyebrow = useTextReveal({ by: 'words' });
  const body = useFadeIn();
  const { cta } = home;
  return (
    <section className="sec cta">
      <div className="sec__inner">
        <div className="cta__col">
          <h2 ref={eyebrow} className="cta__line">{cta.headline}</h2>
          <p ref={body} className="cta__body">{cta.body}</p>
          <Link className="btn btn--primary" to={cta.button.href}>{cta.button.label}</Link>
        </div>
      </div>
    </section>
  );
}
