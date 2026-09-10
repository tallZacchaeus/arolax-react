import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { useFadeIn } from '../hooks/useGsap';
import { services } from '../data/site';
import '../styles/page.css';
import '../styles/section.css';
import './Services.css';

/** Services page — six services from the content document, each with its body
 *  and "what this includes" list. */
export default function Services() {
  return (
    <main className="page">
      <div className="page__inner">
        <PageHero
          title="Media and Communication Services That Move Brands Forward"
          lede="From strategy to execution, Brandfirst Media helps organizations create campaigns that are clear, targeted, and measurable."
        />
        <div className="sv__stack">
          {services.map((s, i) => <ServiceBlock key={s.slug} {...s} index={i} />)}
        </div>

        <section className="sv__cta">
          <h2 className="sec__title">Need a Campaign Plan That Fits Your Brand?</h2>
          <p className="page__lede">
            Talk to Brandfirst Media about your goals, audience, and budget. We will
            help you shape the right communication approach.
          </p>
          <Link className="btn btn--primary" to="/contact">Request a Consultation</Link>
        </section>
      </div>
    </main>
  );
}

function ServiceBlock({ n, slug, title, body, includes, index }) {
  const el = useFadeIn({ delay: index * 0.04 });
  return (
    <section ref={el} id={slug} className="sv__block">
      <div className="sv__block-head">
        <span className="sv__block-n">{n}</span>
        <h2 className="sv__block-title">{title}</h2>
      </div>
      <div className="sv__block-body">
        <p>{body}</p>
        <div>
          <h3 className="sv__includes-label">What this includes</h3>
          <ul className="sv__includes">
            {includes.map((i) => <li key={i}>{i}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
