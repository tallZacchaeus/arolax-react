import { useTextReveal, useFadeIn } from '../hooks/useGsap';
import { home } from '../data/site';
import '../styles/section.css';
import './ProcessSteps.css';

/** Home "Why Brandfirst Media" — content document headline
 *  "Built Around Strategy, Reach, and Results" + five highlights. */
export default function ProcessSteps() {
  const heading = useTextReveal();
  const body = useFadeIn();
  const { why } = home;
  return (
    <section className="sec process">
      <div className="sec__inner">
        <div className="process__head">
          <h2 ref={heading} className="sec__title process__title">{why.headline}</h2>
          <p ref={body} className="process__body">{why.body}</p>
        </div>
        <ul className="process__highlights">
          {why.highlights.map((h, i) => <Highlight key={h} text={h} index={i} />)}
        </ul>
      </div>
    </section>
  );
}

function Highlight({ text, index }) {
  const el = useFadeIn({ delay: index * 0.07, y: 24 });
  return (
    <li ref={el} className="process__highlight">
      <span className="process__hn">{String(index + 1).padStart(2, '0')}</span>
      <span className="process__ht">{text}</span>
    </li>
  );
}
