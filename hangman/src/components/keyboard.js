import { createElement } from "./createElement";
import { man1, man2, man3, man4, man5, man6 } from "./visualization";
import dataJson from '../data/questions.json';

const maxFails = 6;
let currentFails = 0;

const functionBlock = createElement('div', 'section-logic');
const question = createElement('h2', 'title-question');
const fails = createElement('h3', 'subtitle');
fails.innerText = `Fails: ${currentFails}/${maxFails}`;

function playAgain() {
  man1.style.visibility = 'hidden';
  man2.style.visibility = 'hidden';
  man3.style.visibility = 'hidden';
  man4.style.visibility = 'hidden';
  man5.style.visibility = 'hidden';
  man6.style.visibility = 'hidden';
  currentFails = 0;
  getRandomQuestion();
}
// playAgain();

function getRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * dataJson.length);
  const randomWord = dataJson[randomIndex];
  question.textContent = randomWord.question;
  console.log(randomIndex);
  console.log(randomWord.question);
  console.log(randomWord.answer);
  return randomWord;
}

functionBlock.append(question, fails);
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

  functionBlock.append(keyboard);
  return functionBlock;
}

getRandomQuestion();
// console.log(dataJson);