import { useTextReveal, useFadeIn } from '../hooks/useGsap';
import './PageHero.css';

/** Shared opener for inner nav pages. `dark` matches the Career/Portfolio
 *  pattern where the hero shares a surface with the dark header (#6033). */
export default function PageHero({ eyebrow, title, lede, dark = false }) {
  const t = useTextReveal({ by: 'words' });
  const l = useFadeIn();
  return (
    <header className={`phero${dark ? ' phero--dark' : ''}`}>
      <div className={dark ? 'page__inner' : undefined}>
        {eyebrow && <p className="phero__eyebrow">{eyebrow}</p>}
        <h1 ref={t} className="phero__title">{title}</h1>
        {lede && <p ref={l} className="phero__lede">{lede}</p>}
      </div>
    </header>
  );
}
