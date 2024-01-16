import { createElement } from "./createElement";

export const modal = createElement('div', 'modal-wrapper');
const title = createElement('h2', 'title-modal');

modal.append(title);
