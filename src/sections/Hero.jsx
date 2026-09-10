import { Link } from 'react-router-dom';
import { useTextReveal, useFadeIn } from '../hooks/useGsap';
import HeroVideo from '../components/HeroVideo';
import { home } from '../data/site';
import './Hero.css';

/** Home hero. Layout from Elementor section 1 (#9322); copy from the
 *  Brandfirst Media content document. Two buttons per that document. */
export default function Hero() {
  const headline = useTextReveal({ by: 'words', stagger: 0.06 });
  const sub = useFadeIn({ delay: 0.2 });
  const { hero } = home;

  return (
    <section className="hero">
      <div className="hero__noise" aria-hidden />
      <div className="hero__inner">
        <div className="hero__row">
          <div className="hero__headline-col">
            <div className="hero__headline-wrap">
              <h1 ref={headline} className="hero__headline">{hero.headline}</h1>
            </div>
          </div>
          <div className="hero__video-col">
            <div className="hero__video"><HeroVideo /></div>
          </div>
        </div>

        <div className="hero__row hero__row--foot">
          <div className="hero__label-col">
            <p className="hero__eyebrow">{hero.support}</p>
          </div>
          <div className="hero__lede-col">
            <p ref={sub} className="hero__lede">{hero.sub}</p>
            <div className="hero__actions">
              <Link className="btn btn--primary" to={hero.primary.href}>{hero.primary.label}</Link>
              <Link className="btn btn--ghost" to={hero.secondary.href}>{hero.secondary.label}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
