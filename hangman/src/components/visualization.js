import { createElement } from "./createElement";
import { headerImage, subtitle } from "./header";

export const imagesWrapper = createElement('div', 'section-gallows');
export const manWrapper = createElement('div', 'gallows-man');
export const gallows = createElement('img', 'gallows');
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

export const womanWrapper = createElement('div', 'gallows-woman');
const womanGallows = createElement('img', 'woman-gallows');
womanGallows.src = './assets/img/c1.webp';
womanGallows.alt = '';
export const woman1 = createElement('img', 'woman-img');
woman1.src = './assets/img/c2.webp';
woman1.alt = '';
export const woman2 = createElement('img', 'woman-img');
woman2.src = './assets/img/c3.webp';
woman2.alt = '';
export const woman3 = createElement('img', 'woman-img');
woman3.src = './assets/img/c4.webp';
woman3.alt = '';
export const woman4 = createElement('img', 'woman-img');
woman4.src = './assets/img/c5.webp';
woman4.alt = '';
export const woman5 = createElement('img', 'woman-img');
woman5.src = './assets/img/c6.webp';
woman5.alt = '';
export const woman6 = createElement('img', 'woman-img');
woman6.src = './assets/img/c7.webp';
woman6.alt = '';
export const woman7 = createElement('img', 'woman-img');
woman7.src = './assets/img/c8.webp';
woman7.alt = '';

manWrapper.append(man1, man2, man3, man4, man5, man6);
womanWrapper.append(woman1, woman2, woman3, woman4, woman5, woman6, woman7);
imagesWrapper.append(gallows, manWrapper);

headerImage.onclick = toggleImages;

function toggleImages() {
  if (imagesWrapper.contains(gallows)) {
    imagesWrapper.removeChild(gallows);
    imagesWrapper.removeChild(manWrapper);
    imagesWrapper.appendChild(womanWrapper);
    imagesWrapper.appendChild(womanGallows);
    woman1.style.visibility = 'visible';
    subtitle.style.visibility = 'visible';
  } else {
    woman1.style.visibility = 'hidden';
    subtitle.style.visibility = 'hidden';
    imagesWrapper.removeChild(womanGallows);
    imagesWrapper.removeChild(womanWrapper);
    imagesWrapper.appendChild(manWrapper);
    imagesWrapper.appendChild(gallows);
  }
}