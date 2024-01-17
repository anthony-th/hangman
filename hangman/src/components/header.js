import { createElement } from "./createElement"

export const header = createElement('header', 'header');
const title = createElement('h1', 'title');
title.innerHTML = `hangman`;
const headerImage = createElement('img', 'header-image');
headerImage.src = './assets/img/wood.webp';
headerImage.alt = '';

header.append(title, headerImage);