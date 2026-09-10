import { useParams } from 'react-router-dom';
import { useImageReveal, useTextReveal } from '../hooks/useGsap';
import team from '../data/team';
import NotFound from './NotFound';
import '../styles/page.css';
import './TeamDetails.css';

/** Page #1715 "Team Details" — 1 section, 10 widgets:
 *  name, role, bio, "Profile:" links (Behance / Dribble / Meduim), "Follow :". */
const PROFILES = ['Behance', 'Dribble', 'Meduim'];

export default function TeamDetails() {
  const { slug } = useParams();
  const member = team.find((m) => m.slug === slug);
  const name = useTextReveal({ by: 'words' });
  const photo = useImageReveal();

  if (!member) return <NotFound />;

  return (
    <main className="page td">
      <div className="page__inner td__grid">
        <div ref={photo} className="td__media">
          <img src={member.image} alt={member.name} />
        </div>
        <div className="td__body">
          <h1 ref={name} className="td__name">{member.name}</h1>
          <p className="td__role">{member.role}</p>
          <p className="td__bio">
            {member.name.split(' ')[0]} is known for the ability to take a creative brief
            and run with it across digital design, brand systems and production.
          </p>
          <h2 className="td__label">Profile:</h2>
          <div className="td__links">
            {PROFILES.map((p) => <a key={p} className="td__link" href="#">{p}</a>)}
          </div>
          <h2 className="td__label">Follow :</h2>
          <p className="td__follow">{member.social}</p>
        </div>
      </div>
    </main>
  );
}
