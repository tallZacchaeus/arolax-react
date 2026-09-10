import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Cursor.css';

/**
 * Custom cursor — ports two plugin behaviours:
 *
 *  adv-cursor.js            `.wcf-cursor` (40px ring) + `.wcf-cursor-follower`
 *                           (8px dot). gsap.quickTo x/y, duration 0.6,
 *                           ease power4.out. Both start at scale 0 and grow in
 *                           on the first mousemove.
 *  cursor-hover-effects.js  `.wcf-hover-cursor-effect` (100px black disc with
 *                           label text). quickTo x/y duration 0.6 ease "expo";
 *                           scale 0→1 / opacity on enter, reversed on leave,
 *                           duration 0.5 ease expo.inOut.
 *
 * Both source handlers bind per-widget. Here a single delegated listener reads
 * `data-cursor` off the hovered element, so any element can opt in without
 * extra wiring — 101 elements carry this on the demo homepage.
 */
export default function Cursor() {
  const ring = useRef(null);
  const dot = useRef(null);
  const label = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia(
      '(min-width: 768px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)'
    );

    let teardown = null;

    const start = () => {
      const r = ring.current, d = dot.current, l = label.current;
      if (!r || !d || !l) return null;

      gsap.set([r, d, l], { xPercent: -50, yPercent: -50, scale: 0, opacity: 0 });

      const setRX = gsap.quickTo(r, 'x', { duration: 0.6, ease: 'power4.out' });
      const setRY = gsap.quickTo(r, 'y', { duration: 0.6, ease: 'power4.out' });
      const setDX = gsap.quickTo(d, 'x', { duration: 0.6, ease: 'power4.out' });
      const setDY = gsap.quickTo(d, 'y', { duration: 0.6, ease: 'power4.out' });
      const setLX = gsap.quickTo(l, 'x', { duration: 0.6, ease: 'expo' });
      const setLY = gsap.quickTo(l, 'y', { duration: 0.6, ease: 'expo' });

      const intro = gsap.timeline({ paused: true })
        .to(r, { scale: 1, opacity: 1, duration: 0.5, ease: 'power4.out' })
        .to(d, { scale: 1, opacity: 1, duration: 0.5, ease: 'power4.out' }, '<');

      const labelTl = gsap.timeline({ paused: true })
        .to(l, { scale: 1, opacity: 1, duration: 0.5, ease: 'expo.inOut' });

      const onMove = (e) => {
        intro.play();
        setRX(e.clientX); setRY(e.clientY);
        setDX(e.clientX); setDY(e.clientY);
        setLX(e.clientX); setLY(e.clientY);
      };

      let active = null;
      const onOver = (e) => {
        const t = e.target.closest?.('[data-cursor]');
        if (!t || t === active) return;
        active = t;
        l.textContent = t.getAttribute('data-cursor') || '';
        labelTl.play();
        gsap.to([r, d], { opacity: 0, duration: 0.25 });
      };
      const onOut = (e) => {
        if (!active) return;
        if (e.relatedTarget && active.contains(e.relatedTarget)) return;
        active = null;
        labelTl.reverse();
        gsap.to([r, d], { opacity: 1, duration: 0.25 });
      };

      window.addEventListener('mousemove', onMove, { passive: true });
      document.addEventListener('mouseover', onOver, true);
      document.addEventListener('mouseout', onOut, true);

      return () => {
        window.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseover', onOver, true);
        document.removeEventListener('mouseout', onOut, true);
        intro.kill(); labelTl.kill();
        gsap.killTweensOf([r, d, l]);
        gsap.set([r, d, l], { clearProps: 'all' });
      };
    };

    // Re-evaluate on viewport/capability change, so resizing from a narrow
    // window (or plugging in a mouse) activates the cursor without a reload.
    const sync = () => {
      if (mq.matches && !teardown) teardown = start();
      else if (!mq.matches && teardown) { teardown(); teardown = null; }
    };
    sync();
    mq.addEventListener('change', sync);

    return () => { mq.removeEventListener('change', sync); teardown?.(); };
  }, []);

  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden />
      <div ref={dot} className="cursor-dot" aria-hidden />
      <div ref={label} className="cursor-label" aria-hidden />
    </>
  );
}
