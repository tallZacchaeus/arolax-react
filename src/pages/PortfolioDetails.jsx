import { useParams } from 'react-router-dom';
import { useTextReveal, useImageReveal, useFadeIn } from '../hooks/useGsap';
import projects from '../data/projects';
import NotFound from './NotFound';
import '../styles/page.css';
import './PortfolioDetails.css';

/** Elementor template #4725 "Portfolio Details" — boxed 1290.
 *  hero:    wcf--blog--post--title @80px #FFFFFF (70%) + meta grid (row gap 25)
 *  body:    wcf--image blocks + text-editor sections
 *  metrics: 4 heading/text pairs ($25-$30, $120-$160, 66%, 143%) */
const METRICS = [
  { n: '$25-$30',   t: 'Cost per lead each month on non-branded keywords.' },
  { n: '$120-$160', t: 'Total leads generated each month' },
  { n: '66%',       t: 'Percentage of leads from mobile devices.' },
  { n: '143%',      t: 'Increase in overall revenue since switching to Arolax' },
];

export default function PortfolioDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const title = useTextReveal({ by: 'words' });
  const cover = useImageReveal();
  const metrics = useFadeIn();

  if (!project) return <NotFound />;

  return (
    <main className="page">
      <header className="pd__hero">
        <div className="pd__hero-inner">
          <h1 ref={title} className="pd__title">{project.title}</h1>
          <div className="pd__meta">
            <div>
              <span className="pd__meta-label">Date</span>
              <span className="pd__meta-value">{project.date}</span>
            </div>
            <div>
              <span className="pd__meta-label">Role</span>
              <span className="pd__meta-value">{project.role}</span>
            </div>
            <div>
              <span className="pd__meta-label">Website</span>
              <a className="pd__meta-value pd__link" href="#">( View website )</a>
            </div>
          </div>
        </div>
      </header>

      <div className="pd__body">
        <div ref={cover} className="pd__cover">
          <img src={project.image} alt={project.title} />
        </div>

        <section className="pd__block">
          <h2>Problem Statement</h2>
          <p>
            We drive into your business dream in order to bring to the surface the
            underlying value that your brand creates for its audience.
          </p>
        </section>

        <section className="pd__block">
          <h2>Results &amp; Metrics</h2>
          <p>
            We deploy world-class creative design, a team on demand. The surest
            measure of success is when a client returns with the next problem.
          </p>
        </section>

        <div ref={metrics} className="pd__metrics">
          {METRICS.map((m) => (
            <div key={m.n}>
              <p className="pd__metric-num">{m.n}</p>
              <p className="pd__metric-text">{m.t}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
