import { useTextReveal, useFadeIn } from '../hooks/useGsap';
import PostCard from '../components/PostCard';
import posts from '../data/posts';
import '../styles/page.css';
import './BlogArchive.css';

/** Elementor template #6484 "Blog Archive" — boxed 1290, padding 150/20.
 *  head: title "We always think" @100px/1.08 (350px) + lede (300px) + 2 counters
 *  grid: arolax--posts
 *  foot: "Latest insight the arolax!" + lede */
export default function BlogArchive() {
  const title = useTextReveal();
  const lede = useFadeIn();
  const footTitle = useTextReveal();

  return (
    <main className="page">
      <div className="page__inner">
        <header className="archive__head">
          <div className="archive__head-l">
            <h1 ref={title} className="page__title archive__title">We always think</h1>
          </div>
          <div className="archive__head-r">
            <p ref={lede} className="page__lede archive__lede">
              Add the best talent on the market, an agile skilled management &amp; seamless involvement.
            </p>
            <div className="archive__counters">
              <div>
                <span className="counter__num">{posts.length}</span>
                <span className="counter__label">Total post</span>
              </div>
              <div>
                <span className="counter__num">04</span>
                <span className="counter__label">Blog writer</span>
              </div>
            </div>
          </div>
        </header>

        <ul className="archive__grid">
          {posts.map((p) => <PostCard key={p.slug} {...p} />)}
        </ul>

        <section className="archive__foot">
          <h2 ref={footTitle} className="page__title archive__foot-title">Latest insight the arolax!</h2>
          <p className="page__lede">
            Add the best talent on the market, an agile skilled management &amp; seamless involvement.
          </p>
        </section>
      </div>
    </main>
  );
}
