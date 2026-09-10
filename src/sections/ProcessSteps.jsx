import { useTextReveal, useImageReveal, useFadeIn } from '../hooks/useGsap';
import '../styles/section.css';
import './ProcessSteps.css';

/** Section 5 — bg #D8E9E4, padding 118/20.
 *  head: title (520px, 70px/1.1) + floating-img (40.5%)
 *  grid: 5 columns — half-circle, step, step, half-circle, step
 *        step columns are 23.5% wide with a 288px internal row gap */
const STEPS = [
  { step: 'Step - 01', title: 'User Research' },
  { step: 'Step - 02', title: 'Define Problems' },
  { step: 'Step - 03', title: 'Design and Prototype' },
  { step: 'Step - 04', title: 'Evaluation & Testing' },
];

export default function ProcessSteps() {
  const heading = useTextReveal();
  const float = useImageReveal();
  return (
    <section className="sec process">
      <div className="sec__inner">
        <div className="process__head">
          <h2 ref={heading} className="sec__title process__title">
            Our standard design thinking process
          </h2>
          <img ref={float} className="process__float" src="/assets/floating-img.webp" alt="" aria-hidden />
        </div>

        <div className="process__grid">
          <img className="process__deco" src="/assets/left-half-circle.webp" alt="" aria-hidden />
          <Step {...STEPS[0]} index={0} />
          <Step {...STEPS[1]} index={1} />
          <img className="process__deco" src="/assets/right-half-circle.webp" alt="" aria-hidden />
          <Step {...STEPS[2]} index={2} />
        </div>
        <div className="process__grid">
          <Step {...STEPS[3]} index={3} />
        </div>
      </div>
    </section>
  );
}

function Step({ step, title, index }) {
  const el = useFadeIn({ delay: index * 0.1 });
  return (
    <div ref={el} className="process__step">
      <span className="process__label">{step}</span>
      <h3 className="process__name">{title}</h3>
    </div>
  );
}
