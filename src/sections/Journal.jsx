import { useTextReveal } from '../hooks/useGsap';
import PostCard from '../components/PostCard';
import defaultPosts from '../data/posts';
import '../styles/section.css';
import './Journal.css';

/** Section 9 — bg #FFFFFF, row gap 90.
 *  head: title 420px @70px + "Read all posts"
 *  body: wcf--posts — posts_per_page 3, order asc, thumb_height 400,
 *        title 30px Instrument Sans 600, taxonomy 14px Kanit uppercase, date on.
 *
 *  `posts` defaults to the imported demo posts but accepts any array of
 *  { slug, title, date, category, image } — swap in a CMS fetch as needed.
 */
export default function Journal({ posts = defaultPosts, limit = 3 }) {
  const heading = useTextReveal();
  const items = posts.slice(0, limit);

  return (
    <section className="sec journal">
      <div className="sec__inner">
        <div className="sec__head">
          <h2 ref={heading} className="sec__title journal__title">Journal from arolax</h2>
          <a className="btn btn--primary" href="/blog">Read all posts</a>
        </div>

        {items.length === 0 ? (
          <p className="journal__empty">No posts yet.</p>
        ) : (
          <ul className="journal__grid">
            {items.map((p) => <PostCard key={p.slug} {...p} />)}
          </ul>
        )}
      </div>
    </section>
  );
}
