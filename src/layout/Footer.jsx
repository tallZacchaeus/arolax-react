import './Footer.css';

/** Elementor template #1354 "Footer" — bg #121212, boxed 1760, radius 80 top.
 *  row 1: logo col 37.7% + link cols 62.3% (both padding-top 130)
 *  row 2: centred copyright, 18px #999999, max-width 300
 *  Copy, addresses and contact details are the demo's own values.
 */
const SERVICES = [
  { label: 'UI/UX Design', href: '/services' },
  { label: 'Web Design', href: '/services' },
  { label: 'Branding', href: '/services' },
  { label: 'WebFlow', href: '/services' },
  { label: 'Development', href: '/services' },
];
const COMPANY = [
  { label: 'Home', href: '/' },
  { label: 'Agency', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Career', href: '/career' },
  { label: 'Contact Us', href: '/contact' },
];
const SOCIAL = ['Dribbble', 'Behance', 'LinkedIn', 'Instagram'];

const slug = (s) => '/' + s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <a className="footer__logo" href="/" aria-label="Arolax home">
              <img src="/assets/Logo_white.png" alt="Arolax" />
            </a>
            <p className="footer__blurb">
              Feel free to reach out if you want to collaborate with us, or simply have a chat.
            </p>
            <div className="footer__contact">
              <a href="mailto:info@yourwebsite.com">info@yourwebsite.com</a>
              <a href="tel:+1287360633">+1 287-360-633</a>
            </div>
          </div>

          <div className="footer__cols">
            <div>
              <h3 className="footer__col-title">Services</h3>
              <ul className="footer__list">
                {SERVICES.map((s) => <li key={s.label}><a href={s.href}>{s.label}</a></li>)}
              </ul>
            </div>
            <div>
              <h3 className="footer__col-title">Company</h3>
              <ul className="footer__list">
                {COMPANY.map((c) => <li key={c.label}><a href={c.href}>{c.label}</a></li>)}
              </ul>
            </div>
            <div>
              <h3 className="footer__col-title">New York</h3>
              <p className="footer__addr">1772 Street Charleston, New York</p>
              <h3 className="footer__col-title" style={{ marginTop: '32px' }}>London</h3>
              <p className="footer__addr">14 Bishopsgate, London EC2N</p>
            </div>
            <div>
              <h3 className="footer__col-title">Follow Us</h3>
              <ul className="footer__list">
                {SOCIAL.map((s) => <li key={s}><a href="#">{s}</a></li>)}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">© 2024 – 2025 <strong>crowdyTheme</strong></p>
        </div>
      </div>
    </footer>
  );
}
