import { Link } from 'react-router-dom';
import { useTextReveal, useImageReveal, useFadeIn } from '../hooks/useGsap';
import './SelectedWork.css';

/** Elementor section 2 — 29 widgets.
 *  container  bg #FFFFFF, boxed 1720px, padding 125/20/250, row gap 60,
 *             margin-top -100 (overlaps the hero)
 *  header     title col 22% (70px) + follow col 78% (gap 40, 1px bordered chips)
 *  grid       2 columns, column gap 30 / row gap 90
 *  card       image (radius 20, reveal) + title 30px + tag row (gap 5, fade)
 *  footer     49% wide, align-self flex-end, padding-top 80, gap 42
 */
import projects from '../data/projects';

const TAGS = ['Branding', 'Business'];

export default function SelectedWork() {
  const title = useTextReveal();
  const note = useFadeIn();

  return (
    <section id="work" className="work">
      <div className="work__inner">
        <header className="work__head">
          <div className="work__title-col">
            <h2 ref={title} className="work__title">Selected work</h2>
          </div>
          <div className="work__follow">
            <a className="work__follow-item" href="#"><span>Follow</span><span className="work__follow-net">Dribbble</span></a>
            <a className="work__follow-item" href="#"><span>Follow</span><span className="work__follow-net">Behance</span></a>
          </div>
        </header>

        <ul className="work__grid">
          {projects.map((p) => <ProjectCard key={p.slug} {...p} />)}
        </ul>

        <div className="work__foot">
          <p ref={note} className="work__note">
            We are delivering brands with high objectives the strategy and the
            creativity it takes to have that impact, by the professional team.
          </p>
          <a className="btn btn--primary" href="/work">View all works</a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ slug, title, image }) {
  const media = useImageReveal();
  const tags = useFadeIn({ y: 20 });
  return (
    <li className="card" data-cursor="View">
      <Link ref={media} className="card__media" to={`/work/${slug}`}>
        <img src={image} alt={title} loading="lazy" />
      </Link>
      <div className="card__body">
        <h3 className="card__title"><Link to={`/work/${slug}`}>{title}</Link></h3>
        <div ref={tags} className="card__tags">
          {TAGS.map((t) => <span key={t} className="card__tag">{t}</span>)}
        </div>
      </div>
    </li>
  );
}
