import { createElement } from '../common/createElement';

export const header = createElement('header', 'header');
const title = createElement('h1', 'title', 'hangman');
export const subtitle = createElement('h2', 'subtitle', 'Cyrus');
export const headerImage = createElement('img', 'header-image', '', {
  src: './assets/img/wood.webp',
  alt: '',
});
export const soundImage = createElement('img', 'sound-image', '', {
  src: './assets/img/mute.webp',
  alt: 'On / Off Sound',
});

header.append(title, headerImage, subtitle, soundImage);
