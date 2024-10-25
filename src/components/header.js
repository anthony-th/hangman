import { createElement } from './common/createElement';

const header = createElement('header', 'header');
const title = createElement('h1', 'title', 'hangman');
const subtitle = createElement('h2', 'subtitle', 'Cyrus');
const headerImage = createElement('img', 'header-image', '', {
  src: './assets/img/wood.webp',
  alt: '',
});
const soundImage = createElement('img', 'sound-image', '', {
  src: './assets/img/mute.webp',
  alt: 'On / Off Sound',
});

header.append(title, headerImage, subtitle, soundImage);

export { header, title, subtitle, headerImage, soundImage };
