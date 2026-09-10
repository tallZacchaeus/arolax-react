import { useParams } from 'react-router-dom';
import { useTextReveal, useImageReveal } from '../hooks/useGsap';
import PostCard from '../components/PostCard';
import posts from '../data/posts';
import NotFound from './NotFound';
import '../styles/page.css';
import './BlogSingle.css';

/** Elementor template #5365 "Blog Single" — boxed 1290, padding 110/20.
 *  wcf--blog--post--title @100px/1em · 3 × wcf--blog--post--meta-info in a
 *  630px row (25% / 23% / 33%) · wcf--theme-post-content · "Related articles". */
export default function BlogSingle() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  const title = useTextReveal({ by: 'words' });
  const cover = useImageReveal();

  if (!post) return <NotFound />;
  const related = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main className="page single">
      <div className="page__inner">
        <h1 ref={title} className="page__title single__title">{post.title}</h1>

        <div className="single__meta">
          <div><span className="single__meta-label">Date</span><span className="single__meta-value">{post.date}</span></div>
          <div><span className="single__meta-label">Category</span><span className="single__meta-value">{post.category}</span></div>
          <div><span className="single__meta-label">Read</span><span className="single__meta-value">5 min</span></div>
        </div>

        <div ref={cover} className="single__cover">
          <img src={post.image} alt="" />
        </div>

        <article className="single__body">
          <p>
            We drive into your business dream in order to bring to the surface the
            underlying value that your brand creates for its audience.
          </p>
          <h2>What we set out to do</h2>
          <p>
            Add the best talent on the market, an agile skilled management and
            seamless involvement across every stage of the engagement.
          </p>
          <p>
            {/* Placeholder body copy — the demo's post content lives in
                wcf--theme-post-content, which renders whatever the CMS returns. */}
            Replace this with your CMS content; the template only supplies layout.
          </p>
        </article>

        <section className="single__related">
          <h2 className="page__title single__related-title">Related articles</h2>
          <ul className="single__related-grid">
            {related.map((p) => <PostCard key={p.slug} {...p} />)}
          </ul>
        </section>
      </div>
    </main>
  );
}
