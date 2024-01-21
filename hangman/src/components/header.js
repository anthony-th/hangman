import { createElement } from "./createElement";

export const header = createElement('header', 'header');
const title = createElement('h1', 'title');
title.textContent = 'hangman';
export const subtitle = createElement('h2', 'subtitle');
subtitle.textContent = 'Cyrus';
export const headerImage = createElement('img', 'header-image');
headerImage.src = './assets/img/wood.webp';
headerImage.alt = '';
export const soundImage = createElement('img', 'sound-image');
soundImage.src = './assets/img/mute.png';
soundImage.alt = 'On \ Off Sound';

header.append(title, headerImage, subtitle, soundImage);