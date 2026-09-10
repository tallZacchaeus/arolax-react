import PageHero from '../components/PageHero';
import { useImageReveal } from '../hooks/useGsap';
import { Link } from 'react-router-dom';
import projects from '../data/projects';
import '../styles/page.css';
import '../sections/SelectedWork.css';
import './Work.css';

/** Page #4307 "Work" — 1 section, 4 widgets:
 *  wcf--title + text-editor + wcf--image + wcf--portfolio ("Load More Works"). */
export default function Work() {
  return (
    <main className="page">
      <div className="page__inner">
        <PageHero
          title="Work"
          lede="We take a similar approach to design commercially — impactful work, from the flowchart through to the finished brand."
        />
        <ul className="work-grid">
          {projects.map((p) => <WorkCard key={p.slug} {...p} />)}
        </ul>
        <div className="work-grid__more">
          <button className="btn btn--primary" type="button">Load More Works</button>
        </div>
      </div>
    </main>
  );
}

function WorkCard({ slug, title, image, tags = [] }) {
  const media = useImageReveal();
  return (
    <li className="card" data-cursor="View">
      <Link ref={media} className="card__media" to={`/work/${slug}`}>
        <img src={image} alt={title} loading="lazy" />
      </Link>
      <div className="card__body">
        <h3 className="card__title"><Link to={`/work/${slug}`}>{title}</Link></h3>
        <div className="card__tags">
          {tags.map((t) => <span key={t} className="card__tag">{t}</span>)}
        </div>
      </div>
    </li>
  );
}
