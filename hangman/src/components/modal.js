import { createElement } from "./createElement";
import { playAgain } from "./keyboard";

export const modal = createElement('div', 'modal-wrapper');
export const titleModal = createElement('h2', 'title-modal');
titleModal.textContent = 'You win!';
const modalAnswerBlock = createElement('div', 'modal-answer');
const modalAnswerSubtitle = createElement('h3', 'modal-subtitle');
modalAnswerSubtitle.textContent = `Correct answer:`;
export const modalAnswerText = createElement('p', 'modal-text');
modalAnswerText.textContent = '';
export const buttonTryAgain = createElement('button', 'button-try-again');
buttonTryAgain.textContent = 'play again!';

buttonTryAgain.onclick = () => playAgain();

modalAnswerBlock.append(modalAnswerSubtitle, modalAnswerText);
modal.append(titleModal, modalAnswerBlock, buttonTryAgain);
