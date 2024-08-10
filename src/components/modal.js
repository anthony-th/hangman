import { createElement } from '../common/createElement';

const modal = createElement('div', 'modal-wrapper');
const titleModal = createElement('h2', 'title-modal');
titleModal.textContent = 'You win';
const modalAnswerBlock = createElement('div', 'modal-answer');
const modalAnswerSubtitle = createElement('h3', 'modal-subtitle');
modalAnswerSubtitle.textContent = `Correct answer:`;
const modalAnswerText = createElement('p', 'modal-text');
modalAnswerText.textContent = '';
const buttonTryAgain = createElement('button', 'button-try-again');
buttonTryAgain.textContent = 'play again!';

modalAnswerBlock.append(modalAnswerSubtitle, modalAnswerText);
modal.append(titleModal, modalAnswerBlock, buttonTryAgain);

export { modal, buttonTryAgain, modalAnswerText, titleModal };
