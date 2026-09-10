import { useState } from 'react';
import PageHero from '../components/PageHero';
import faqs from '../data/faqs';
import '../styles/page.css';
import './Faq.css';

/** Page #2096 "FAQ" — 1 section: wcf--title, text-editor, accordion, wcf--button. */
export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <main className="page">
      <div className="page__inner">
        <PageHero
          eyebrow="Building outstanding design, development and strategy"
          title="Frequently asked question!"
          lede="Arolax is a beacon of innovation and the dynamic parent company of Wealcoder and many others."
        />

        <ul className="faq">
          {faqs.map((f, i) => (
            <li key={f.q} className={`faq__item${open === i ? ' is-open' : ''}`}>
              <button
                className="faq__q"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <span>{f.q}</span>
                <span className="faq__icon" aria-hidden>{open === i ? '−' : '+'}</span>
              </button>
              <div className="faq__a" hidden={open !== i}>
                <p>{f.a}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
