import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { useImageReveal, useFadeIn, useTextReveal } from '../hooks/useGsap';
import team from '../data/team';
import '../styles/page.css';
import '../styles/section.css';
import './Team.css';

/** Page #76 "Team Page" — 5 sections, 45 widgets.
 *  hero · counters · member grid · client stats · closing quote. */
const STATS = [
  { n: '120+', l: 'Expertise employees' },
  { n: '100+', l: 'Satisfied clients' },
  { n: '$25M+', l: 'Client funding raised' },
  { n: '14',   l: 'Years in practice' },
];

export default function Team() {
  const gridTitle = useTextReveal();
  const stats = useFadeIn();
  const quote = useFadeIn();

  return (
    <main className="page">
      <div className="page__inner">
        <PageHero
          eyebrow="Want to serve global audiences and take your career to the next level?"
          title="Work together for success."
          lede="Arolax is a beacon of innovation and the dynamic parent company of Wealcoder and many others."
        />

        <div ref={stats} className="tm__stats">
          {STATS.map((s) => (
            <div key={s.l} className="tm__stat">
              <span className="tm__stat-num">{s.n}</span>
              <span className="tm__stat-label">{s.l}</span>
            </div>
          ))}
        </div>

        <section className="tm__section">
          <h2 ref={gridTitle} className="sec__title">Bringing passion and our expertise together!</h2>
          <p className="page__lede">
            We bet on brands that shift categories and add value to people’s lives.
          </p>
          <ul className="tm__grid">
            {team.map((m) => <MemberCard key={m.slug} {...m} />)}
          </ul>
        </section>

        <section className="tm__quote">
          <p ref={quote}>
            What sets us apart is what brings us together — a shared passion for work
            that earns its place.
          </p>
        </section>
      </div>
    </main>
  );
}

function MemberCard({ slug, name, role, image, social }) {
  const media = useImageReveal();
  return (
    <li className="member" data-cursor="View">
      <Link ref={media} className="member__media" to={`/team/${slug}`}>
        <img src={image} alt={name} loading="lazy" />
      </Link>
      <div className="member__row">
        <div>
          <h3 className="member__name"><Link to={`/team/${slug}`}>{name}</Link></h3>
          <p className="member__role">{role}</p>
        </div>
        <a className="member__social" href="#">{social}</a>
      </div>
    </li>
  );
}
