import moon from "../assets/destination/image-moon.webp";
import mars from "../assets/destination/image-mars.webp";
import europa from "../assets/destination/image-europa.webp";
import titan from "../assets/destination/image-titan.webp";

const imagesPlanets: string[] = [moon, mars, europa, titan];

import douglas from '../assets/crew/image-douglas-hurley.webp';
import mark from '../assets/crew/image-mark-shuttleworth.webp';
import victor from '../assets/crew/image-victor-glover.webp';
import anousheh from '../assets/crew/image-anousheh-ansari.webp';

const imagesEmployees: string[] = [douglas, mark, victor, anousheh];

import launch from "../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceport from "../assets/technology/image-spaceport-portrait.jpg";
import capsule from "../assets/technology/image-space-capsule-portrait.jpg";

const imagesRocketsDesktop: string[] = [launch, spaceport, capsule];

import launchLand from "../assets/technology/image-launch-vehicle-landscape.jpg";
import capsuleLand from "../assets/technology/image-space-capsule-landscape.jpg";
import spaceportLand from '../assets/technology/image-spaceport-landscape.jpg';

const RocketsSmallerDevices: string[] = [launchLand, spaceportLand, capsuleLand]

function getImageByIndex<T>(index: number, list: T[]) :T {
    return list[index];
}

export { imagesPlanets, imagesEmployees, imagesRocketsDesktop, RocketsSmallerDevices, getImageByIndex  };