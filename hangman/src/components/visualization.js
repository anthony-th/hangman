import { createElement } from './createElement';
import { headerImage, subtitle } from './header';

export const imagesWrapper = createElement('div', 'section-gallows');

export const manWrapper = createElement('div', 'gallows-man');
export const gallows = createImage('./assets/img/1.webp', 'gallows');
export const manImages = [
  createImage('./assets/img/2.webp', 'img'),
  createImage('./assets/img/3.webp', 'img'),
  createImage('./assets/img/4.webp', 'img'),
  createImage('./assets/img/5.webp', 'img'),
  createImage('./assets/img/6.webp', 'img'),
  createImage('./assets/img/7.webp', 'img'),
];

export const womanWrapper = createElement('div', 'gallows-woman');
export const womanGallows = createImage('./assets/img/c1.webp', 'woman-gallows');
export const woman1 = createImage('./assets/img/c2.webp', 'woman-img');
export const womanImages = [
  createImage('./assets/img/c3.webp', 'woman-img'),
  createImage('./assets/img/c4.webp', 'woman-img'),
  createImage('./assets/img/c5.webp', 'woman-img'),
  createImage('./assets/img/c6.webp', 'woman-img'),
  createImage('./assets/img/c7.webp', 'woman-img'),
  createImage('./assets/img/c8.webp', 'woman-img'),
];

function createImage(src, alt) {
  const img = createElement('img', alt);
  img.src = src;
  img.alt = '';
  return img;
}

export const newGame = createElement('button', 'text')
newGame.textContent = 'new game?';

manWrapper.append(...manImages);
womanWrapper.append(woman1, ...womanImages);
imagesWrapper.append(gallows, manWrapper, newGame);

//Egg
headerImage.onclick = toggleImages;

function toggleImages() {
  const imageContains = imagesWrapper.contains(gallows);
  imagesWrapper.removeChild(imageContains ? gallows : womanGallows);
  imagesWrapper.removeChild(imageContains ? manWrapper : womanWrapper);
  imagesWrapper.appendChild(imageContains ? womanWrapper : manWrapper);
  imagesWrapper.appendChild(imageContains ? womanGallows : gallows);
  woman1.style.visibility = imageContains ? 'visible' : 'hidden';
  subtitle.style.visibility = imageContains ? 'visible' : 'hidden';
  newGame.className = imageContains ? 'text-woman' : 'text';
}