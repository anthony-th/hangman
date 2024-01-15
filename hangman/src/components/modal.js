import { createElement } from "./createElement";

export const createModal = function() {
  const modal = createElement('div', 'modal-wrapper');
  const title = createElement('h2', 'title-modal');

  modal.append(title);
  return modal;
}