import { Outlet, useLocation } from 'react-router-dom';
import Cursor from '../components/Cursor';
import Header from './Header';
import Footer from './Footer';
import FooterInner from './FooterInner';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

/** Shared chrome for every route: cursor, header, footer, smooth scroll.
 *  Stacked-card pinning is homepage-only, so it stays in <Home>. */
export default function SiteLayout() {
  useSmoothScroll();
  const { pathname } = useLocation();

  // The homepage header floats over the lime hero (#13 + #1354).
  // Inner pages sit on a light ground and use the in-flow header (#7259)
  // and the CTA-led footer (#558).
  const isHome = pathname === '/';
  // Portfolio Details (#4725) opens on a dark hero, so it takes the dark
  // header (#6033); header and hero then read as one continuous surface.
  const isDark = pathname.startsWith('/work/');
  const variant = isHome ? 'overlay' : isDark ? 'dark' : 'inner';

  return (
    <>
      <Cursor />
      <Header variant={variant} />
      <Outlet />
      {isHome ? <Footer /> : <FooterInner />}
    </>
  );
}
