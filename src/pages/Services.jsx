import PageHero from '../components/PageHero';
import { useFadeIn, useTextReveal } from '../hooks/useGsap';
import '../styles/page.css';
import '../styles/section.css';
import './Services.css';

/** Page #3331 "Service Style 1" — 7 sections, 52 widgets.
 *  hero · services list · agency pitch · pricing · CTA · brand strip. */
const SERVICES = [
  { n: '01', title: 'Interaction design', text: 'Prototypes and flows that prove the idea before it is built.' },
  { n: '02', title: 'Brand identity',     text: 'Marks, type systems and guidelines that survive contact with reality.' },
  { n: '03', title: 'Web design',         text: 'Sites designed around the decision a visitor is trying to make.' },
  { n: '04', title: 'Art direction',      text: 'A visual point of view held consistently across every surface.' },
  { n: '05', title: 'Production',         text: 'Delivery, handover and the unglamorous detail that makes it ship.' },
  { n: '06', title: 'Brand support',      text: 'Ongoing partnership once the launch noise has died down.' },
];
const PLANS = [
  { name: 'Basic',    price: '$9.00',  items: ['1 landing page', 'Brand review', 'Email support'] },
  { name: 'Standard', price: '$29.00', items: ['5 pages', 'Identity system', 'Priority support'], featured: true },
  { name: 'Premium',  price: '$59.00', items: ['Unlimited pages', 'Full brand system', 'Dedicated team'] },
];
const LOGOS = [1, 2, 3, 4, 5, 6, 7].map((n) => `/assets/brand-logo-${n}.webp`);

export default function Services() {
  const listTitle = useTextReveal();
  const pitch = useTextReveal();
  const pricing = useTextReveal();
  const strip = useFadeIn({ y: 20 });

  return (
    <main className="page">
      <div className="page__inner">
        <PageHero
          title="We make design that lead and inspire."
          lede="We take a similar approach to design commercially — impactful work, from the flowchart through to the finished brand."
        />

        <section className="sv__list-wrap">
          <h2 ref={listTitle} className="sec__title">Our exclusive services</h2>
          <p className="page__lede">
            We bet on brands that shift categories and add value to people’s lives.
          </p>
          <ul className="sv__list">
            {SERVICES.map((s) => (
              <li key={s.n} className="sv__row" data-cursor="View">
                <span className="sv__n">{s.n}</span>
                <h3 className="sv__title">{s.title}</h3>
                <p className="sv__text">{s.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="sv__pitch">
          <h2 ref={pitch} className="sec__title">We’re simple but pro-level agency</h2>
          <p className="page__lede">
            Complete control over the layout, the system and the handover — without
            the overhead of a large agency.
          </p>
          <a className="btn btn--primary" href="/about">Learn More</a>
        </section>

        <section className="sv__pricing">
          <h2 ref={pricing} className="sec__title">Special offer! choose your pack today</h2>
          <ul className="sv__plans">
            {PLANS.map((p) => (
              <li key={p.name} className={`sv__plan${p.featured ? ' is-featured' : ''}`}>
                <h3 className="sv__plan-name">{p.name}</h3>
                <p className="sv__plan-price">{p.price}</p>
                <ul className="sv__plan-items">
                  {p.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
                <a className="btn btn--primary" href="/contact">Get started</a>
              </li>
            ))}
          </ul>
        </section>

        <section className="sv__brands">
          <p className="sv__brands-label">We worked with largest global brands</p>
          <div ref={strip} className="brand-strip">
            {LOGOS.map((l) => <img key={l} src={l} alt="" loading="lazy" />)}
          </div>
        </section>
      </div>
    </main>
  );
}
