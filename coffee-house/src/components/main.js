import { heroSection } from "./hero";
import { favoriteSection } from "./favorite";
import { aboutSection } from "./about";

export const main = document.createElement('main');
main.classList.add('main');

main.append(heroSection, favoriteSection, aboutSection);