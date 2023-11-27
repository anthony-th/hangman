import { heroSection } from "./hero";
import { favoriteSection } from "./favorite";

export const main = document.createElement('main');
main.classList.add('main');

main.append(heroSection, favoriteSection);