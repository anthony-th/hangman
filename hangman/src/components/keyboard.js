import { createElement } from './createElement';
import { buttons, functionBlock, buttonPress } from './game';

export const createKeyboard = () => {
  const keyboard = createElement('div', 'keyboard-wrapper');
  for (let charCode = 65; charCode <= 90; charCode++) {
    const letter = String.fromCharCode(charCode);
    const button = createElement('button', 'button');
    button.textContent = letter;
    const buttonId = `key-id-${charCode - 64}`;
    button.id = buttonId;
    keyboard.append(button);
    buttons[buttonId] = button;
    button.onclick = () => buttonPress(letter, button);
  }
  functionBlock.append(keyboard);
  return functionBlock;
}
