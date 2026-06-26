import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal.js";
import { bio, images, photography } from "../content.js";

export function HomePage() {
  const featured = photography[0];
  return (
    <div className="page page--home">
      <section className="hero" id="top">
        <div className="hero__media">
          <img src={images.heroBeach} alt="Two figures walking a mirrored beach at dusk" />
        </div>
        <div className="hero__scrim" />
        <div className="hero__inner">
          <p className="kicker hero__kicker">Iowa City, IA · Est. 2024</p>
          <h1 className="hero__title">
            <span className="line">
              <span>Madelynn</span>
            </span>
            <span className="line">
              <span>Paulsen</span>
            </span>
          </h1>
          <p className="hero__roles">
            Filmmaker <i>·</i> Cinematographer <i>·</i> Photographer <i>·</i> Writer
          </p>
          <a href="#intro" className="hero__cue" aria-label="Scroll to explore">
            <span>Scroll</span>
            <span className="hero__cue-line" />
          </a>
        </div>
      </section>

      <section className="intro" id="intro">
        <Reveal as="p" className="label">
          Welcome
        </Reveal>
        <Reveal as="p" className="intro__lead">
          {bio.lead}
        </Reveal>
        <Reveal className="intro__links">
          <Link to="/photography" className="btn">
            See the photography ↗
          </Link>
          <Link to="/portfolio" className="btn btn--ghost">
            Watch the films ↗
          </Link>
        </Reveal>
      </section>

      <section className="teasers">
        <Reveal as="figure" className="teaser">
          <Link to="/photography">
            <img src={featured?.src} alt={featured?.alt ?? ""} />
            <figcaption>
              <span className="label">02 — Photography</span>
              <span className="teaser__title">Frames found in passing</span>
            </figcaption>
          </Link>
        </Reveal>
        <Reveal as="figure" className="teaser" delay={0.08}>
          <Link to="/portfolio">
            <img src={images.filmMonitor} alt="A camera monitor on a night shoot" />
            <figcaption>
              <span className="label">03 — Film</span>
              <span className="teaser__title">On set, behind the monitor</span>
            </figcaption>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
