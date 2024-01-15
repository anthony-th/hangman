import { createElement } from "./createElement";

export const imagesWrapper = createElement('div', 'section-gallows');
const gallows = createElement('img', 'gallows');
gallows.src = './assets/img/1.webp';
export const man1 = createElement('img', 'img');
man1.src = './assets/img/2.webp';
export const man2 = createElement('img', 'img');
man2.src = './assets/img/3.webp';
export const man3 = createElement('img', 'img');
man3.src = './assets/img/4.webp';
export const man4 = createElement('img', 'img');
man4.src = './assets/img/5.webp';
export const man5 = createElement('img', 'img');
man5.src = './assets/img/6.webp';
export const man6 = createElement('img', 'img');
man6.src = './assets/img/7.webp';

imagesWrapper.append(gallows, man1, man2, man3, man4, man5, man6);