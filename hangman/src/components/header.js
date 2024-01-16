import { createElement } from "./createElement"

export const header = createElement('header', 'header');
const title = createElement('h1', 'title');
title.textContent = 'hangman game';

header.append(title);