import { Gallery } from "../components/Gallery.js";
import { Reveal } from "../components/Reveal.js";
import { photography } from "../content.js";

export function PhotographyPage() {
  return (
    <div className="page page--inner">
      <header className="section__head">
        <Reveal as="p" className="label">
          02 — Photography
        </Reveal>
        <Reveal as="h1" className="display">
          Frames found in passing.
        </Reveal>
        <Reveal as="p" className="lead">
          A wandering eye for doorways, water and tungsten light — from Venetian canals to
          Midwest dusk. Tap any frame to view it full-size.
        </Reveal>
      </header>

      <Gallery shots={photography} />
    </div>
  );
}
