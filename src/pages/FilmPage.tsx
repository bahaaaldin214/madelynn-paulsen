import { Reveal } from "../components/Reveal.js";
import { filmography, images, social } from "../content.js";

export function FilmPage() {
  return (
    <div className="page page--inner">
      <header className="section__head">
        <Reveal as="p" className="label">
          03 — Film
        </Reveal>
        <Reveal as="h1" className="display">
          On set, behind the monitor.
        </Reveal>
        <Reveal as="p" className="lead">
          Directing, shooting and designing for the screen — a selection of recent work.
        </Reveal>
      </header>

      <div className="film__grid">
        <div className="film__stills">
          <Reveal as="figure" className="shot">
            <img src={images.filmMonitor} alt="A camera monitor showing a night shoot lit blue" />
            <figcaption>STBY — night exterior</figcaption>
          </Reveal>
          <Reveal as="figure" className="shot" delay={0.08}>
            <img src={images.filmSet} alt="A tungsten light panel down a hallway on set" />
            <figcaption>Practical light</figcaption>
          </Reveal>
        </div>

        <Reveal className="credits">
          <p className="credits__label">Selected Filmography</p>
          <ul className="credits__list">
            {filmography.map((c) => (
              <li key={c.title}>
                <span className="yr">{c.year}</span>
                <span className="ttl">{c.title}</span>
                <span className="role">{c.role}</span>
              </li>
            ))}
          </ul>
          <a className="btn btn--ghost" href={social.youtube} target="_blank" rel="noopener">
            Watch on YouTube ↗
          </a>
        </Reveal>
      </div>
    </div>
  );
}
