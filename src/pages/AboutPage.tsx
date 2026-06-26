import { Reveal } from "../components/Reveal.js";
import { bio, images, publications, social } from "../content.js";

export function AboutPage() {
  return (
    <div className="page page--inner about">
      <div className="about__portrait">
        <Reveal as="figure" className="about__frame">
          <img src={images.portraitMaddy} alt="Portrait of Madelynn Paulsen at night" />
        </Reveal>
      </div>

      <div className="about__body">
        <Reveal as="p" className="label">
          01 — Madelynn Mae
        </Reveal>
        <Reveal as="h1" className="display">
          Chasing the <em>essence</em> of human emotion.
        </Reveal>
        <Reveal as="p" className="lead">
          {bio.lead}
        </Reveal>
        <Reveal as="p">
          {bio.body.replace("people's journal", "")}
          <span className="hl">people's journal</span>.
        </Reveal>

        <Reveal as="ul" className="about__stats">
          <li>
            <b>BFA</b>
            <span>Cinematography &amp; Screenwriting</span>
          </li>
          <li>
            <b>2024 →</b>
            <span>Freelance Filmmaker</span>
          </li>
          <li>
            <b>Iowa City</b>
            <span>Based in IA</span>
          </li>
        </Reveal>

        <Reveal className="words">
          <p className="credits__label">Words &amp; Publications</p>
          <ul className="pubs">
            {publications.map((p) => (
              <li key={p.title}>
                <span className="pubs__yr">{p.year}</span>
                <span className="pubs__ttl">{p.title}</span>
                <span className="pubs__meta">{p.meta}</span>
              </li>
            ))}
          </ul>
          <figure className="words__cover">
            <img src={images.magBrokenClock} alt="The Broken Clock Magazine, Volume 5 cover" />
          </figure>
          <a className="btn btn--ghost" href={social.substack} target="_blank" rel="noopener">
            Read on Substack ↗
          </a>
        </Reveal>
      </div>
    </div>
  );
}
