import { useTextReveal, useFadeIn } from '../hooks/useGsap';
import HeroVideo from '../components/HeroVideo';
import './Hero.css';

/** Elementor section 1 (page #9322) — 6 widgets.
 *  Layout, type scale and colours taken verbatim from `_elementor_data`:
 *    container  bg #BAE900 + bg-shape.webp (top right), boxed 1720px,
 *               padding 195/20/250, column gap 165px
 *    row 1      headline col 75% (wrap 1160px) + video col 25% (435×260)
 *    row 2      label col 36.15% + lede col 930px (gap 50px)
 *  Effects: char split on headline, fade on lede, pin, cursor "View".
 */
export default function Hero() {
  const headline = useTextReveal({ by: 'chars', stagger: 0.05 });
  const lede = useFadeIn({ delay: 0.2 });

  return (
    <section className="hero">
      <div className="hero__noise" aria-hidden />

      <div className="hero__inner">
        <div className="hero__row">
          <div className="hero__headline-col">
            <div className="hero__headline-wrap">
              <h1 ref={headline} className="hero__headline">We sharp brand Value</h1>
              <span className="hero__pro">Pro</span>
            </div>
          </div>

          <div className="hero__video-col">
            <div className="hero__video">
              <HeroVideo />
            </div>
          </div>
        </div>

        <div className="hero__row hero__row--foot">
          <div className="hero__label-col">
            <p className="hero__eyebrow">Who we are</p>
          </div>

          <div className="hero__lede-col">
            <p ref={lede} className="hero__lede">
              Arolax is a full-service brand agency for purpose driven companies.
            </p>
            <a className="btn btn--primary" href="#work">Get started</a>
          </div>
        </div>
      </div>
    </section>
  );
}
