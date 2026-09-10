import { Link } from 'react-router-dom';
import { useImageReveal } from '../hooks/useGsap';

/** Shared post card — the `arolax--posts` item used by the Journal section and
 *  the Blog Archive, Blog Single (related), Search and Taxonomy templates.
 *  Styling lives in sections/Journal.css (.post*), which every page imports. */
export default function PostCard({ slug, title, image, date, category }) {
  const media = useImageReveal();
  const href = `/blog/${slug}`;
  return (
    <li className="post" data-cursor="Read">
      <Link ref={media} className="post__media" to={href} aria-hidden tabIndex={-1}>
        {image && <img src={image} alt="" loading="lazy" />}
      </Link>
      <div className="post__meta">
        {category && (
          <Link className="post__cat" to={`/category/${category.toLowerCase()}`}>{category}</Link>
        )}
        {date && <span className="post__date">{date}</span>}
      </div>
      <h3 className="post__title"><Link to={href}>{title}</Link></h3>
      <Link className="post__more" to={href}>Read More</Link>
    </li>
  );
}
