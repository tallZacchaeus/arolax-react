import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * The demo pins every top-level section container:
 *   wcf_enable_pin_area: yes
 *   start  "bottom bottom"  (sections 2 and 3: "bottom bottom-=150")
 *   end    "bottom top"
 *   wcf_enable_pin_area_mobile: "no"
 *
 * Each section holds still once its bottom reaches the viewport bottom, and the
 * next section — which overlaps by -100px and has an 80px rounded top — scrolls
 * up over it. That is what produces the stacked-card feel.
 *
 * `pinSpacing: false` is essential: the sections already overlap by margin, so
 * adding pin spacers would insert gaps and break the stack.
 */
export function useStackedPin(selector = 'main > section', offsets = {}) {
  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

    const mm = gsap.matchMedia();

    // Pinning is desktop/tablet only, matching wcf_enable_pin_area_mobile: "no".
    mm.add('(min-width: 768px)', () => {
      const sections = gsap.utils.toArray(selector);
      const triggers = sections.map((el, i) => {
        // Last section stays unpinned so the footer can scroll in cleanly.
        if (i === sections.length - 1) return null;
        const start = offsets[i] ? `bottom bottom-=${offsets[i]}` : 'bottom bottom';
        return ScrollTrigger.create({
          trigger: el,
          start,
          end: 'bottom top',
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
        });
      }).filter(Boolean);

      return () => triggers.forEach((t) => t.kill());
    });

    const t = setTimeout(() => ScrollTrigger.refresh(), 450);
    return () => { clearTimeout(t); mm.revert(); };
  }, [selector, offsets]);
}
