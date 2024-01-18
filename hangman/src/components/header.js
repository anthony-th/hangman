import { createElement } from "./createElement"

export const header = createElement('header', 'header');
const title = createElement('h1', 'title');
export const subtitle = createElement('h2', 'subtitle');
subtitle.textContent = 'wo';
title.textContent = 'hangman';
export const headerImage = createElement('img', 'header-image');
headerImage.src = './assets/img/wood.webp';
headerImage.alt = '';

header.append(title, headerImage, subtitle);