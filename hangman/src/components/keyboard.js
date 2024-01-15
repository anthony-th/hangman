import { createElement } from "./createElement";
import { man1, man2, man3, man4, man5, man6 } from "./visualization";
import dataJson from '../data/questions.json';

const maxFails = 6;
let currentFails = 0;
let listItems = [];

const functionBlock = createElement('div', 'section-logic');
const maskAnswer = createElement('ul', 'list');
const question = createElement('h2', 'title-question');
const fails = createElement('div', 'fails');
const failsTitle = createElement('h3', 'subtitle')
failsTitle.textContent = 'Fails: ';

const greenSpan = createElement('span', 'green');
greenSpan.textContent = currentFails;

const orangeSpan = createElement('span', 'orange');
orangeSpan.textContent = maxFails;
fails.append(failsTitle, greenSpan, `/`, orangeSpan);

function generateMaskBlock(letter) {
  const item = createElement('li', 'list-item');
  item.textContent = '';
  item.dataset.letter = letter;
  maskAnswer.append(item);
  listItems.push(item);
}

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

function getRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * dataJson.length);
  const randomWord = dataJson[randomIndex];
  question.textContent = randomWord.question;
  maskAnswer.innerHTML = '';
  listItems = [];
  const letters = randomWord.answer.split('');
  letters.forEach(letter => generateMaskBlock(letter));
  console.log(`ответ ` + randomWord.answer);
  return randomWord;
}

functionBlock.append(maskAnswer, question, fails);

export const createKeyboard = function() {
  const keyboard = createElement('div', 'keyboard-wrapper');

  for (let charCode = 65; charCode <= 90; charCode++) {
    const letter = String.fromCharCode(charCode);
    const button = createElement("button", "button");
    button.textContent = letter;
    button.id = `key-id-${charCode - 64}`;

    keyboard.append(button);
    button.onclick = () => buttonPress(letter, button);
  }

  functionBlock.append(keyboard);
  return functionBlock;
}

getRandomQuestion();

function buttonPress(letter, button) {
  const filterItems = listItems.filter(item => item.dataset.letter.toLowerCase() === letter.toLowerCase());

  if (filterItems.length > 0) {
    filterItems.forEach(item => {
      item.textContent = letter;
    });
  } else {
    currentFails += 1;
    if (currentFails === maxFails) {
      console.log("u lost");
    }
  }
  button.disabled = true;
  listItems.forEach(item => {
    if (item.textContent.trim() !== '') {
      item.style.borderBottom = 'none';
    }
  });
  greenSpan.textContent = currentFails;
  const notEmpty = listItems.every(item => item.textContent.trim() !== '');
  if (notEmpty) {
    console.log("u win!");
  }
}

document.onkeydown = (event) => pressDownKeyboard(event);

function pressDownKeyboard(event) {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    const letter = String.fromCharCode(event.keyCode);
    const button = document.getElementById(`key-id-${event.keyCode - 64}`);
    buttonPress(letter, button);
  }
}