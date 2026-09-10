import { useTextReveal, useImageReveal, useFadeIn } from '../hooks/useGsap';
import '../styles/section.css';
import './Team.css';

/** Section 8 — bg #F4E0E0, row gap 90.
 *  head 1250px: title 645px @70px + note 375px @18px/1.42 (#555555)
 *  grid: members, 80px column gap, each card padding-top 35 */
const TEAM = [
  { name: 'Kamal Abraham', role: 'CEO, Alaska',   img: 'team-img-1.webp', social: 'LinkedIn' },
  { name: 'Selina Gomaze', role: 'Jr. Executive', img: 'team-img-2.webp', social: 'Twitter'  },
  { name: 'Pedrik Vadra',  role: 'Art Director',  img: 'team-img-3.webp', social: 'LinkedIn' },
  { name: 'Mariana Silva', role: 'Brand Designer',img: 'team-img-4.webp', social: 'Twitter'  },
  { name: 'Tomas Berger',  role: 'Strategist',    img: 'team-img-5.webp', social: 'LinkedIn' },
  { name: 'Ana Ferreira',  role: 'Producer',      img: 'team-img-6.webp', social: 'LinkedIn' },
];

export default function Team() {
  const heading = useTextReveal();
  const note = useFadeIn();
  return (
    <section className="sec team">
      <div className="sec__inner">
        <div className="sec__head team__head">
          <h2 ref={heading} className="sec__title team__title">
            The talented team behind the creative design
          </h2>
          <p ref={note} className="team__note">
            Our dedication and commitment to excellence ensure that your business
            thrives in the ever-evolving market.
          </p>
        </div>
        <ul className="team__grid">
          {TEAM.map((m) => <Member key={m.name} {...m} />)}
        </ul>
      </div>
    </section>
  );
}

function Member({ name, role, img, social }) {
  const media = useImageReveal();
  return (
    <li className="member" data-cursor="View">
      <div ref={media} className="member__media">
        <img src={`/assets/${img}`} alt={name} loading="lazy" />
      </div>
      <div className="member__row">
        <div>
          <h3 className="member__name">{name}</h3>
          <p className="member__role">{role}</p>
        </div>
        <a className="member__social" href="#">{social}</a>
      </div>
    </li>
  );
}
