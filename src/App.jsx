import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/tokens.css';
import './styles/base.css';
import SiteLayout from './layout/SiteLayout';
import Home from './pages/Home';
import BlogArchive from './pages/BlogArchive';
import BlogSingle from './pages/BlogSingle';
import PortfolioDetails from './pages/PortfolioDetails';
import About from './pages/About';
import Services from './pages/Services';
import Work from './pages/Work';
import Team from './pages/Team';
import TeamDetails from './pages/TeamDetails';
import Career from './pages/Career';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Search from './pages/Search';
import TaxonomyArchive from './pages/TaxonomyArchive';
import NotFound from './pages/NotFound';

/** Routes mirror the Elementor templates:
 *    /                 page #9322  Home (Branding Agency)
 *    /blog             #6484       Blog Archive
 *    /blog/:slug       #5365       Blog Single
 *    /work/:slug       #4725       Portfolio Details
 *    /about            #3304       About Us 01
 *    /services         #3331       Service Style 1
 *    /work             #4307       Work
 *    /team             #76         Team Page
 *    /team/:slug       #1715       Team Details
 *    /career           #229        Career
 *    /faq              #2096       FAQ
 *    /contact          #2474       Contact Us
 *    /search?q=        #6518       Search Page
 *    /category/:slug   #6512       Tags/Category Archive
 *    /tag/:slug        #6512       (same template, tag heading)
 *    *                 #7258       404
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<BlogArchive />} />
          <Route path="blog/:slug" element={<BlogSingle />} />
          <Route path="work/:slug" element={<PortfolioDetails />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="work" element={<Work />} />
          <Route path="team" element={<Team />} />
          <Route path="team/:slug" element={<TeamDetails />} />
          <Route path="career" element={<Career />} />
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
          <Route path="search" element={<Search />} />
          <Route path="category/:slug" element={<TaxonomyArchive kind="Category" />} />
          <Route path="tag/:slug" element={<TaxonomyArchive kind="Tag" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
