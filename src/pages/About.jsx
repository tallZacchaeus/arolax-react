import PageHero from '../components/PageHero';
import { useFadeIn, useTextReveal, useImageReveal } from '../hooks/useGsap';
import team from '../data/team';
import { Link } from 'react-router-dom';
import '../styles/page.css';
import '../styles/section.css';
import './About.css';

/** Page #3304 "About Us 01" — 10 sections, 61 widgets.
 *  intro · client stats · who we are · agency pitch · showcase ·
 *  discipline line · dark "Quality team" · pricing · CTA · brand strip. */
const STATS = [
  { n: '100+',  l: 'satisfied clients' },
  { n: '$25M+', l: 'client funding raised' },
  { n: '14',    l: 'years in practice' },
];
const LOGOS = [1, 2, 3, 4, 5, 6, 7].map((n) => `/assets/brand-logo-${n}.webp`);

export default function About() {
  const who = useTextReveal();
  const pitch = useTextReveal();
  const discipline = useTextReveal({ by: 'words' });
  const stats = useFadeIn();
  const showcase = useImageReveal();
  const strip = useFadeIn({ y: 20 });

  return (
    <main className="page">
      <div className="page__inner">
        <PageHero
          eyebrow="01. about us"
          title="We are ”Arolax” — product, branding and creative agency."
        />

        <div ref={stats} className="ab__stats">
          {STATS.map((s) => (
            <div key={s.l} className="ab__stat">
              <span className="ab__stat-num">{s.n}</span>
              <span className="ab__stat-label">{s.l}</span>
            </div>
          ))}
        </div>

        <section className="ab__who">
          <p className="ab__eyebrow">02. Who we are</p>
          <h2 ref={who} className="sec__title">
            We make storable strategy growth your company with arolax agency
          </h2>
          <p className="page__lede">
            We deploy world-class creative design, a team on demand. The surest
            measure of success is when a client returns with the next problem.
          </p>
        </section>

        <section className="ab__pitch">
          <h2 ref={pitch} className="sec__title">We’re simple but pro-level agency</h2>
          <p className="page__lede">
            Complete control over the layout, the system and the handover.
          </p>
          <Link className="btn btn--primary" to="/services">Learn More</Link>
        </section>

        <div ref={showcase} className="ab__showcase">
          <img src="/assets/divider-img.webp" alt="" />
        </div>

        <section className="ab__discipline">
          <p ref={discipline}>Working in the fields of UI/UX design and art direction.</p>
        </section>
      </div>

      <section className="ab__quality">
        <div className="page__inner">
          <h2 className="sec__title ab__quality-title">Quality team</h2>
          <p className="ab__quality-lede">
            We deploy world-class creative design, a team on demand.
          </p>
          <ul className="ab__team">
            {team.slice(0, 4).map((m) => (
              <li key={m.slug} className="ab__member" data-cursor="View">
                <Link to={`/team/${m.slug}`}>
                  <img src={m.image} alt={m.name} loading="lazy" />
                </Link>
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="page__inner">
        <section className="ab__cta">
          <p className="ab__cta-eyebrow">Start your experience with Arolax</p>
          <Link className="btn btn--primary" to="/contact">Let’s get in touch</Link>
        </section>

        <section className="ab__brands">
          <p className="ab__brands-label">We worked with largest global brands</p>
          <div ref={strip} className="brand-strip">
            {LOGOS.map((l) => <img key={l} src={l} alt="" loading="lazy" />)}
          </div>
        </section>
      </div>
    </main>
  );
}
