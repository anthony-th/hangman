import { createElement } from "./createElement";

export const createKeyboard = function() {
  const keyboard = createElement('div', 'keyboard-wrapper');

  for (let charCode = 65; charCode <= 90; charCode++) {
    const letter = String.fromCharCode(charCode);
    const button = createElement("button", "button");
    button.textContent = letter;
    button.id = `key-id-${charCode - 64}`;

    keyboard.append(button);
    button.onclick = () => {
      console.log(button.textContent, button.id);
    }
  }

  return keyboard;
}
