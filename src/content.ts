// Single source of content for the site. Keeping copy + media here means the
// page Views stay presentational (and easy for Madelynn to edit later).
import filmMonitor from "./assets/img/film-monitor.jpg";
import filmSet from "./assets/img/film-set.jpg";
import heroBeach from "./assets/img/hero-beach.jpg";
import magBrokenClock from "./assets/img/mag-brokenclock.jpg";
import phGate from "./assets/img/ph-gate.jpg";
import phNeon from "./assets/img/ph-neon.jpg";
import phRedDoor from "./assets/img/ph-reddoor.jpg";
import phStairs from "./assets/img/ph-stairs.jpg";
import phVenice from "./assets/img/ph-venice.jpg";
import phWindow from "./assets/img/ph-window.jpg";
import portraitGrass from "./assets/img/portrait-grass.jpg";
import portraitMaddy from "./assets/img/portrait-maddy.jpg";
import portraitStanding from "./assets/img/portrait-standing.jpg";

export const images = {
  heroBeach,
  portraitMaddy,
  filmSet,
  filmMonitor,
  magBrokenClock,
} as const;

export interface Shot {
  src: string;
  alt: string;
  caption: string;
}

export const photography: Shot[] = [
  { src: phVenice, alt: "A Venetian canal framed by a dark archway", caption: "Venezia — through the arch" },
  { src: portraitStanding, alt: "A portrait shot in a sunlit field", caption: "Portraiture — golden hour" },
  { src: phGate, alt: "A glowing lantern behind an iron garden gate", caption: "The lantern gate" },
  { src: phStairs, alt: "A red-carpeted hotel staircase with a painted mural", caption: "Hôtel — stairwell mural" },
  { src: phWindow, alt: "A tree seen through a dark glass-block window", caption: "A window of green" },
  { src: portraitGrass, alt: "A portrait shot among tall grass", caption: "Portraiture — in the grass" },
  { src: phRedDoor, alt: "Palm trees at dusk through a red door frame", caption: "Palms & the red door" },
  { src: phNeon, alt: "A neon-lit vending machine glowing magenta at night", caption: "Notte — neon hum" },
];

export interface Credit {
  year: string;
  title: string;
  role: string;
}

export const filmography: Credit[] = [
  { year: "2025", title: "Kamala Vacation", role: "Director" },
  { year: "2025", title: "Chappell Roan — Music Video", role: "Cinematographer" },
  { year: "2025", title: "404 Not Found", role: "Set Design" },
  { year: "2025", title: "Sophie & Ashley", role: "Production Asst." },
];

export interface Publication {
  year: string;
  title: string;
  meta: string;
}

export const publications: Publication[] = [
  { year: "2025", title: "A Hawk's Eye View of Iowa City", meta: "Prose · Substack" },
  { year: "2024", title: "Rebecca Feldman Zine", meta: "Poem" },
];

export const bio = {
  lead:
    "Madelynn Paulsen is a passionate filmmaker based in Iowa City, IA, with a BFA in Cinematography & Screenwriting. Her work blends visual artistry with raw feeling — capturing the moments between moments.",
  body:
    "Through film, photography and writing she seeks to inspire and provoke thought, collecting the conversations she finds along the way in her ongoing people's journal.",
};

export const social = {
  instagram: "https://www.instagram.com/maddypaulsen/",
  youtube: "https://www.youtube.com/@madelynnmae836",
  substack: "https://substack.com/@madelynnmae",
};
