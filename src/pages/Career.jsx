import PageHero from '../components/PageHero';
import { useFadeIn, useTextReveal } from '../hooks/useGsap';
import '../styles/page.css';
import '../styles/section.css';
import './Career.css';

/** Page #229 "Career" — 4 sections, 42 widgets.
 *  dark hero · values statement · dark "We're Currently hiring" list · why-join grid. */
const ROLES = [
  { n: '01', title: 'UI/UX Designer',      type: 'Full time', place: 'Remote' },
  { n: '02', title: 'Brand Strategist',    type: 'Full time', place: 'London' },
  { n: '03', title: 'Motion Designer',     type: 'Contract',  place: 'Remote' },
  { n: '04', title: 'Front-end Developer', type: 'Full time', place: 'New York' },
];
const VALUES = [
  { title: 'Innovation',   text: 'We back ideas that move a category, not ones that copy it.' },
  { title: 'Ownership',    text: 'Everyone here owns outcomes, not just tasks.' },
  { title: 'Craft',        text: 'Detail is the difference between work that ships and work that lasts.' },
  { title: 'Openness',     text: 'Feedback travels in every direction, early and often.' },
  { title: 'Balance',      text: 'Sustainable pace beats heroics over any real timescale.' },
  { title: 'Growth',       text: 'Time and budget for learning are part of the job, not a perk.' },
];

export default function Career() {
  const hiring = useTextReveal();
  const why = useTextReveal();
  const intro = useFadeIn();

  return (
    <main className="page">
      <PageHero dark eyebrow="Career" title="Unlock your future! start here career at arolax" />

      <div className="page__inner">
        <p ref={intro} className="cr__intro">
          What sets us apart is what brings us together — a shared passion for work
          that earns its place.
        </p>

        <section className="cr__hiring">
          <h2 ref={hiring} className="sec__title cr__hiring-title">We’re Currently hiring</h2>
          <ul className="cr__roles">
            {ROLES.map((r) => (
              <li key={r.n} className="cr__role" data-cursor="Apply">
                <span className="cr__role-n">{r.n}</span>
                <h3 className="cr__role-title">{r.title}</h3>
                <span className="cr__role-meta">{r.type} · {r.place}</span>
                <a className="cr__role-link" href="/job-apply">Apply</a>
              </li>
            ))}
          </ul>
        </section>

        <section className="cr__why">
          <h2 ref={why} className="sec__title">Why you should attach our expert member!</h2>
          <p className="page__lede">
            We bet on brands that shift categories and add value to people’s lives.
          </p>
          <ul className="cr__values">
            {VALUES.map((v) => (
              <li key={v.title} className="cr__value">
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
