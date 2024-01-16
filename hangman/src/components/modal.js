import { createElement } from "./createElement";
import { playAgain } from "./keyboard";

export const modal = createElement('div', 'modal-wrapper');
export const titleModal = createElement('h2', 'title-modal');
titleModal.textContent = 'You win!';
export const modalAnswer = createElement('p', 'subtitle-modal');
modalAnswer.textContent = `Correct answer:`;
const buttonTryAgain = createElement('button', 'button-try-again');
buttonTryAgain.textContent = 'play again!';

buttonTryAgain.onclick = () => playAgain();

modal.append(titleModal, modalAnswer, buttonTryAgain);
