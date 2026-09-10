import { useTextReveal, useImageReveal } from '../hooks/useGsap';
import '../styles/section.css';
import './StatsIntro.css';

/** Section 3 — bg #D9DCED, radius 80, overlap -100.
 *  lead 865px @70px/1.1 · row 76.3% (line image + "150" @450px, col 62.8%) */
export default function StatsIntro() {
  const copy = useTextReveal({ by: 'words' });
  const line = useImageReveal();
  const figure = useTextReveal({ by: 'chars', stagger: 0.08 });
  return (
    <section className="sec stats">
      <div className="sec__inner">
        <div className="stats__lead">
          <p ref={copy} className="stats__copy">
            Designing great products is so hard. But we&rsquo;ve done more than
            150 of them in this year.
          </p>
        </div>
        <div className="stats__row">
          <img ref={line} className="stats__line" src="/assets/line-img.webp" alt="" aria-hidden />
          <div className="stats__figure-col">
            <span ref={figure} className="stats__figure">150</span>
          </div>
        </div>
      </div>
    </section>
  );
}
