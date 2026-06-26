import { AuthViewModel, ContactViewModel, FeatureRequestViewModel } from "@lumora/core";
import { FeatureRequestPage, SignInForm } from "@lumora/ui";
import { useEffect, useMemo, useState } from "react";
import {
  HashRouter,
  Link,
  NavLink,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { social } from "./content.js";
import { AboutPage } from "./pages/AboutPage.js";
import { ContactPage } from "./pages/ContactPage.js";
import { FilmPage } from "./pages/FilmPage.js";
import { HomePage } from "./pages/HomePage.js";
import { PhotographyPage } from "./pages/PhotographyPage.js";
import { SITE, client } from "./client.js";

const NAV = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/photography", label: "Photography" },
  { to: "/portfolio", label: "Film" },
  { to: "/contact", label: "Contact" },
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

function Shell() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location.pathname]);

  const contactVM = useMemo(
    () =>
      new ContactViewModel(async (message) => {
        // No public inbox yet — log locally so the form is functional in dev.
        // Swap for a backend contact handler when ready.
        console.log("contact submitted", message);
      }),
    [],
  );
  const authVM = useMemo(() => new AuthViewModel(client, SITE), []);
  const featureVM = useMemo(() => new FeatureRequestViewModel(client), []);

  return (
    <>
      <ScrollToTop />
      <div className="grain" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />

      <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <Link to="/" className="nav__brand">
          <span className="nav__mark">MP</span>
          <span className="nav__name">Madelynn&nbsp;Paulsen</span>
        </Link>
        <nav className={`nav__links ${menuOpen ? "nav__links--open" : ""}`} aria-label="Primary">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.end ?? false}
              className={({ isActive }) => (isActive ? "is-active" : "")}
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <button
          className={`nav__toggle ${menuOpen ? "is-open" : ""}`}
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </header>

      <main className="stage" key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/photography" element={<PhotographyPage />} />
          <Route path="/portfolio" element={<FilmPage />} />
          <Route path="/contact" element={<ContactPage viewModel={contactVM} />} />
          <Route
            path="/signin"
            element={
              <div className="page page--inner">
                <SignInForm viewModel={authVM} title="Sign in" />
              </div>
            }
          />
          {/* Hidden, unlinked, auth-gated platform page (feature requests → GH). */}
          <Route
            path="/__/request"
            element={
              client.claims() ? (
                <FeatureRequestPage className="page page--inner" viewModel={featureVM} />
              ) : (
                <Navigate to="/signin" replace />
              )
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Madelynn Paulsen</span>
        <span className="footer__loc">Iowa City, Iowa</span>
        <span className="footer__social">
          <a href={social.instagram} target="_blank" rel="noopener">
            Instagram
          </a>
          <a href={social.youtube} target="_blank" rel="noopener">
            YouTube
          </a>
          <a href={social.substack} target="_blank" rel="noopener">
            Substack
          </a>
        </span>
      </footer>
    </>
  );
}

export function App() {
  return (
    <HashRouter>
      <Shell />
    </HashRouter>
  );
}
