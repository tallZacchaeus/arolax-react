import { Link } from 'react-router-dom';
import { useTextReveal, useFadeIn } from '../hooks/useGsap';
import './NotFound.css';

/** Elementor template #7258 "404 Page Template".
 *  min-height 100vh, centred; title 60px/65px, text 18px/26px (381px), button. */
export default function NotFound() {
  const title = useTextReveal({ by: 'chars' });
  const text = useFadeIn();
  return (
    <main className="nf">
      <p className="nf__code" aria-hidden>404</p>
      <h1 ref={title} className="nf__title">Sorry! Page not found.</h1>
      <p ref={text} className="nf__text">
        The page you are looking for was moved, removed, renamed or never existed.
      </p>
      <Link className="btn btn--primary" to="/">Back To Home</Link>
    </main>
  );
}
