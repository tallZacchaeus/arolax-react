import { useParams } from 'react-router-dom';
import { useTextReveal } from '../hooks/useGsap';
import PostCard from '../components/PostCard';
import posts from '../data/posts';
import '../styles/page.css';
import '../sections/Journal.css';
import './TaxonomyArchive.css';

/** Elementor template #6512 "Tags/Category Archive" — boxed 1290, padding 150/20.
 *  wcf--blog--archive--title centred @60px/80px (750px) + arolax--posts.
 *  Serves both /category/:slug and /tag/:slug; `kind` sets the heading prefix.
 */
export default function TaxonomyArchive({ kind = 'Category' }) {
  const { slug = '' } = useParams();
  const title = useTextReveal({ by: 'words' });

  const term = slug.toLowerCase();
  const matches = posts.filter((p) => (p.category || '').toLowerCase() === term);
  const label = slug ? slug[0].toUpperCase() + slug.slice(1) : '';

  return (
    <main className="page tax">
      <div className="page__inner">
        <h1 ref={title} className="tax__title">
          {kind}: {label}
        </h1>
        <p className="tax__count">
          {matches.length
            ? `${matches.length} post${matches.length === 1 ? '' : 's'}`
            : 'No posts in this archive yet.'}
        </p>

        {matches.length > 0 && (
          <ul className="tax__grid">
            {matches.map((p) => <PostCard key={p.slug} {...p} />)}
          </ul>
        )}
      </div>
    </main>
  );
}
