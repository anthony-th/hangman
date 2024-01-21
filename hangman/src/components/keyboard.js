import { createElement } from "./createElement";
import { manImages, woman1, womanImages, imagesWrapper, gallows, newGame } from "./visualization";
import { shadow } from "..";
import { titleModal, modalAnswerText, modal, buttonTryAgain } from "./modal";
import dataJson from '../data/questions.json';

const clickAz = new Audio('./assets/audio/click9.mp3');
const clickEnter = new Audio('./assets/audio/click4.mp3');
const maxFails = 6;
let randomWord = null;
let currentFails = 0;
let listItems = [];
let gameOver = false;
let wasQuestions = [];
let isReloadPage = true;
let lastQuestion = null;

const functionBlock = createElement('div', 'section-logic');
const maskAnswer = createElement('ul', 'list');
const questionBlock = createElement('div', 'question-wrapper');
const question = createElement('h2', 'title-question');
const fails = createElement('div', 'fails');
const failsTitle = createElement('h3', 'subtitle')
failsTitle.textContent = 'Fails: ';
const greenSpan = createElement('span', 'green');
greenSpan.textContent = currentFails;
const orangeSpan = createElement('span', 'orange');
const slash = createElement('p', 'slash');
slash.textContent = '/';
orangeSpan.textContent = maxFails;
fails.append(failsTitle, greenSpan, slash, orangeSpan);

function generateMaskBlock(letter) {
  const item = createElement('li', 'list-item');
  item.textContent = '';
  item.dataset.letter = letter;
  maskAnswer.append(item);
  listItems.push(item);
}

function endTranslateY(answer) {
  modalAnswerText.textContent = `${answer}`;
  modal.removeEventListener('transitionend', endTranslateY);
}

export function playAgain() {
  if (imagesWrapper.contains(gallows)) {
    manImages.forEach(manImg => {
      manImg.style.visibility = 'hidden';
    });
    woman1.style.visibility = 'hidden';
    womanImages.forEach(womanImg => {
      womanImg.style.visibility = 'hidden';
    });
    newGame.className = 'text';
    shadow.style.display = 'none';
    modal.style.transform = 'translateY(-100vh)';
    currentFails = 0;
    greenSpan.textContent = currentFails;
    getRandomQuestion();
    gameOver = false;
    for (let charCode = 65; charCode <= 90; charCode++) {
      const button = document.getElementById(`key-id-${charCode - 64}`);
      button.disabled = false;
    }
  } else {
    newGame.className = 'text-woman';
    woman1.style.visibility = 'visible';
    womanImages.forEach(womanImg => {
      womanImg.style.visibility = 'hidden';
    });
    manImages.forEach(manImg => {
      manImg.style.visibility = 'hidden';
    });
    shadow.style.display = 'none';
    modal.style.transform = 'translateY(-100vh)';
    currentFails = 0;
    greenSpan.textContent = currentFails;
    getRandomQuestion();
    gameOver = false;
    for (let charCode = 65; charCode <= 90; charCode++) {
      const button = document.getElementById(`key-id-${charCode - 64}`);
      button.disabled = false;
    }
  }
  buttonTryAgain.blur();
}

function getRandomQuestion() {
  let unusedQuestion = dataJson.filter(question => !wasQuestions.includes(question.id));
  if (unusedQuestion.length === 0) {
    wasQuestions = [];
    unusedQuestion = dataJson;
    console.log(`This game has a total of ${dataJson.length} questions. You have answered all ${dataJson.length}   questions. From now on, the questions will start repeating.`);
  }
  const randomIndex = Math.floor(Math.random() * unusedQuestion.length);
  randomWord = unusedQuestion[randomIndex];
  while (lastQuestion && randomWord.id === lastQuestion.id) {
    const newIndex = Math.floor(Math.random() * unusedQuestion.length);
    randomWord = unusedQuestion[newIndex];
  }
  lastQuestion = randomWord; 
  wasQuestions.push(randomWord.id);
  question.textContent = randomWord.question;
  maskAnswer.innerHTML = '';
  gameOver = false;
  listItems = [];
  const letters = randomWord.answer.split('');
  letters.forEach(letter => generateMaskBlock(letter));
  if (isReloadPage) {
    modalAnswerText.textContent = `${randomWord.answer}`;
    console.log('Please, don\'t forget to switch to the English keyboard layout.');
    isReloadPage = false;
  }
  console.log(`Answer: ` + randomWord.answer);
  return randomWord;
}

questionBlock.append(question);
functionBlock.append(maskAnswer, questionBlock, fails);

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

function buttonPress(letter, button) {
  if (gameOver || button.disabled) {
    return;
  }
  const filterItems = listItems.filter(item => item.dataset.letter.toLowerCase() === letter.toLowerCase());
  if (filterItems.length > 0) {
    filterItems.forEach(item => {
      item.textContent = letter;
    });
  } else {
    currentFails += 1;
    updateVisibility();
    if (currentFails === maxFails) {
      console.log("u lost");
      gameOver = true;
      titleModal.textContent = 'You lost!';
      requestAnimationFrame(() => {
        shadow.style.display = 'block';
        modal.style.transform = 'translateY(0)';
      });
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
    gameOver = true;
    titleModal.textContent = 'You win!';
    requestAnimationFrame(() => {
      shadow.style.display = 'block';
      modal.style.transform = 'translateY(0)';
    });
  }
}

document.onkeydown = (event) => pressDownKeyboard(event);
modal.addEventListener('transitionend', () => endTranslateY(randomWord.answer));
newGame.onclick = playAgain;

function pressDownKeyboard(event) {
  if (event.keyCode === 9) {
    event.preventDefault();
  }
  if (event.keyCode === 13 && shadow.style.display === 'block') {
    clickEnter.pause();
    clickEnter.currentTime = 0;
    clickEnter.play();
    clickEnter.volume = '0.1';
    playAgain();
  } else if (event.keyCode >= 65 && event.keyCode <= 90) {
    const letter = String.fromCharCode(event.keyCode);
    const button = document.getElementById(`key-id-${event.keyCode - 64}`);
    if (!button.disabled && !gameOver) {
      clickAz.pause();
      clickAz.currentTime = 0;
      clickAz.play();
      clickAz.volume = '0.1';
    }
    buttonPress(letter, button);
  }
}

function updateVisibility() {
  switch (currentFails) {
    case 1:
      manImages[0].style.visibility = 'visible';
      womanImages[0].style.visibility = 'visible';
      break;
    case 2:
      manImages[1].style.visibility = 'visible';
      womanImages[1].style.visibility = 'visible';
      break;
    case 3:
      manImages[2].style.visibility = 'visible';
      womanImages[2].style.visibility = 'visible';
      break;
    case 4:
      manImages[3].style.visibility = 'visible';
      womanImages[3].style.visibility = 'visible';
      break;
    case 5:
      manImages[4].style.visibility = 'visible';
      womanImages[4].style.visibility = 'visible';
      break;
    case 6:
      manImages[5].style.visibility = 'visible';
      womanImages[5].style.visibility = 'visible';
      break;
    default:
      break;
  }
}

getRandomQuestion();