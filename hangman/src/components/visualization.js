import { createElement } from "./createElement";

export const imagesWrapper = createElement('div', 'section-gallows');
export const manWrapper = createElement('div', 'gallows-man');
const gallows = createElement('img', 'gallows');
gallows.src = './assets/img/1.webp';
gallows.alt = '';
export const man1 = createElement('img', 'img');
man1.src = './assets/img/2.webp';
man1.alt = '';
export const man2 = createElement('img', 'img');
man2.src = './assets/img/3.webp';
man2.alt = '';
export const man3 = createElement('img', 'img');
man3.src = './assets/img/4.webp';
man3.alt = '';
export const man4 = createElement('img', 'img');
man4.src = './assets/img/5.webp';
man4.alt = '';
export const man5 = createElement('img', 'img');
man5.src = './assets/img/6.webp';
man5.alt = '';
export const man6 = createElement('img', 'img');
man6.src = './assets/img/7.webp';
man6.alt = '';

manWrapper.append(man1, man2, man3, man4, man5, man6);
imagesWrapper.append(gallows, manWrapper);