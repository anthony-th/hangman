import { createElement } from '../common/createElement';
import { headerImage, subtitle } from './header';

const createImage = (src, alt) => {
  const img = createElement('img', alt, '', { src, alt: '' });
  return img;
};

const imagesWrapper = createElement('div', 'section-gallows');
const manWrapper = createElement('div', 'gallows-man');
const gallows = createImage('./assets/img/man/gallows.webp', 'gallows');
const manImages = createImage('./assets/img/man/man1.webp', 'img');

const womanWrapper = createElement('div', 'gallows-woman');
const womanGallows = createImage(
  './assets/img/syrus/beam.webp',
  'woman-gallows'
);
const woman1 = createImage('./assets/img/syrus/ball.webp', 'woman-img');
const womanImages = createImage('./assets/img/syrus/syrus1.webp', 'woman-img');

const newGame = createElement('button', 'text', 'new game?');

manWrapper.append(manImages);
womanWrapper.append(woman1, womanImages);
imagesWrapper.append(gallows, manWrapper, newGame);

// Egg
const toggleImages = () => {
  const imageContains = imagesWrapper.contains(gallows);
  imagesWrapper.removeChild(imageContains ? gallows : womanGallows);
  imagesWrapper.removeChild(imageContains ? manWrapper : womanWrapper);
  imagesWrapper.appendChild(imageContains ? womanWrapper : manWrapper);
  imagesWrapper.appendChild(imageContains ? womanGallows : gallows);
  woman1.style.visibility = imageContains ? 'visible' : 'hidden';
  subtitle.style.visibility = imageContains ? 'visible' : 'hidden';
  newGame.className = imageContains ? 'text-woman' : 'text';
};

headerImage.onclick = toggleImages;

export {
  imagesWrapper,
  manWrapper,
  gallows,
  manImages,
  womanWrapper,
  womanGallows,
  woman1,
  womanImages,
  newGame,
};
