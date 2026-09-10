import { useTextReveal, useFadeIn } from '../hooks/useGsap';
import '../styles/section.css';
import './Services.css';

/** Section 4 — bg #121212, title 790px @70px white,
 *  4-column grid of #1C1C1C cards (radius 20, padding 43/50, row gap 131). */
const SERVICES = [
  { n: '01', title: 'Brand Strategy' },
  { n: '02', title: 'Brand Identity' },
  { n: '03', title: 'Brand Guidelines' },
  { n: '04', title: 'Brand Support' },
];

export default function Services() {
  const heading = useTextReveal();
  return (
    <section className="sec services">
      <div className="sec__inner">
        <div className="services__lead">
          <h2 ref={heading} className="sec__title">
            We solve your brand problem in a different method
          </h2>
        </div>
        <div className="services__grid">
          {SERVICES.map((s, i) => <ServiceCard key={s.n} {...s} index={i} />)}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ n, title, index }) {
  const card = useFadeIn({ delay: index * 0.08 });
  return (
    <article ref={card} className="services__card" data-cursor="View">
      <span className="services__num">{n}</span>
      <h3 className="services__name">{title}</h3>
    </article>
  );
}
