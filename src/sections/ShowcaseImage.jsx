import { useImageReveal } from '../hooks/useGsap';
import '../styles/section.css';
import './ShowcaseImage.css';

/** Section 6 — single centred wcf--image, image_border_radius 80,
 *  container padding 0, bg #FFFFFF. Scroll-scaled + pinned in the demo. */
export default function ShowcaseImage() {
  const img = useImageReveal();
  return (
    <section className="sec showcase">
      <img ref={img} className="showcase__img" src="/assets/divider-img.webp" alt="" />
    </section>
  );
}
