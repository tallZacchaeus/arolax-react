import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTextReveal } from '../hooks/useGsap';
import PostCard from '../components/PostCard';
import posts from '../data/posts';
import '../styles/page.css';
import '../sections/Journal.css';
import './Search.css';

/** Elementor template #6518 "Search Page" — boxed 1290, padding 100/20.
 *  wcf--blog--search--form (placeholder "Search...")
 *  wcf--blog--search--query      centred, 60px, #121212
 *  wcf--blog--search--result-message  30px
 *  arolax--posts                 results grid
 */
export default function Search() {
  const [params, setParams] = useSearchParams();
  const q = params.get('q') ?? '';
  const [draft, setDraft] = useState(q);
  const query = useTextReveal({ by: 'words' });

  const term = q.trim().toLowerCase();
  const results = term
    ? posts.filter((p) =>
        `${p.title} ${p.category}`.toLowerCase().includes(term))
    : [];

  const submit = (e) => {
    e.preventDefault();
    setParams(draft.trim() ? { q: draft.trim() } : {});
  };

  return (
    <main className="page search">
      <div className="page__inner">
        <form className="search__form" onSubmit={submit} role="search">
          <input
            type="search"
            name="q"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Search..."
            aria-label="Search posts"
          />
          <button type="submit">Search</button>
        </form>

        {term && <h1 ref={query} className="search__query">{q}</h1>}

        <p className="search__message">
          {!term
            ? 'Type a term above to search the journal.'
            : results.length
              ? `${results.length} result${results.length === 1 ? '' : 's'} found`
              : 'No results found. Try another term.'}
        </p>

        {results.length > 0 && (
          <ul className="search__grid">
            {results.map((p) => <PostCard key={p.slug} {...p} />)}
          </ul>
        )}
      </div>
    </main>
  );
}
