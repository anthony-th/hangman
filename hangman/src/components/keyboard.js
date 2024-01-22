import { createElement } from './createElement';
import { manImages, woman1, womanImages, imagesWrapper, gallows, newGame } from './visualization';
import { shadow } from '..';
import { titleModal, modalAnswerText, modal, buttonTryAgain } from './modal';
import { soundImage } from './header';
import dataJson from '../data/questions.json';

const soundClickAz = new Audio('./assets/audio/click-enter.mp3');
const soundClickEnter = new Audio('./assets/audio/click-a-z.mp3');
const soundLost = new Audio('./assets/audio/lost.mp3');
const soundWin = new Audio('./assets/audio/win.mp3');
soundClickAz.volume = 0.1;
soundClickEnter.volume = 0.1;
soundLost.volume = 0.1;
soundWin.volume = 0.1;
let mute = true;
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

const generateMaskBlock = (letter) => {
  const item = createElement('li', 'list-item');
  item.textContent = '';
  item.dataset.letter = letter;
  maskAnswer.append(item);
  listItems.push(item);
}

const endTranslateY = (answer) => {
  modalAnswerText.textContent = `${answer}`;
  modal.removeEventListener('transitionend', endTranslateY);
}

const resetGameVisibility = () => {
  manImages.forEach(manImg => {
    manImg.style.visibility = 'hidden';
  });
  womanImages.forEach(womanImg => {
    womanImg.style.visibility = 'hidden';
  });
  newGame.className = imagesWrapper.contains(gallows) ? 'text' : 'text-woman';
}

export const playAgain = () => {
  resetGameVisibility();
  woman1.style.visibility = imagesWrapper.contains(gallows) ? 'hidden' : 'visible';
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
  buttonTryAgain.blur();
  newGame.blur();
}

const getRandomQuestion = () => {
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

export const createKeyboard = () => {
  const keyboard = createElement('div', 'keyboard-wrapper');
  for (let charCode = 65; charCode <= 90; charCode++) {
    const letter = String.fromCharCode(charCode);
    const button = createElement('button', 'button');
    button.textContent = letter;
    button.id = `key-id-${charCode - 64}`;
    keyboard.append(button);
    button.onclick = () => buttonPress(letter, button);
  }
  functionBlock.append(keyboard);
  return functionBlock;
}

const buttonPress = (letter, button) => {
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
      console.log('u lost');
      gameOver = true;
      titleModal.textContent = 'You lost!';
      requestAnimationFrame(() => {
        shadow.style.display = 'block';
        modal.style.transform = 'translateY(0)';
      });
      if (!mute) {
        soundAfterModalTransition();
      }
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
    console.log('u win!');
    gameOver = true;
    titleModal.textContent = 'You win!';
    requestAnimationFrame(() => {
      shadow.style.display = 'block';
      modal.style.transform = 'translateY(0)';
    });
    if (!mute) {
      soundAfterModalTransition();
    }
  }
}

const soundAfterModalTransition = () => {
  if (currentFails === maxFails)  {
    playSound(true, soundLost);
  } else {
    playSound(true, soundWin);
  }
}

document.onkeydown = (event) => pressDownKeyboard(event);
modal.addEventListener('transitionend', () => endTranslateY(randomWord.answer));
newGame.onclick = playAgain;

const pressDownKeyboard = (event) => {
  if (event.keyCode === 9) {
    event.preventDefault();
  }
  if (event.keyCode === 13 && shadow.style.display === 'block') {
    playSound(!mute, soundClickEnter);
    playAgain();
  } else if (event.keyCode >= 65 && event.keyCode <= 90) {
    const letter = String.fromCharCode(event.keyCode);
    const button = document.getElementById(`key-id-${event.keyCode - 64}`);
    if (!button.disabled && !gameOver && !mute) {
      playSound(true, soundClickAz);
    }
    buttonPress(letter, button);
  }
}

const playSound = (condition, sound) => {
  if (condition) {
    sound.pause();
    sound.currentTime = 0;
    sound.play();
  }
}

const updateVisibility = () => {
  const showParts = (manIndex, womanIndex) => {
    manImages[manIndex].style.visibility = 'visible';
    womanImages[womanIndex].style.visibility = 'visible';
  };

  switch (currentFails) {
    case 1: showParts(0, 0); break;
    case 2: showParts(1, 1); break;
    case 3: showParts(2, 2); break;
    case 4: showParts(3, 3); break;
    case 5: showParts(4, 4); break;
    case 6: showParts(5, 5); break;
    default: break;
  }
}

const toggleSound = () => {
  mute = !mute;
  soundImage.src = mute ? './assets/img/mute.webp' : './assets/img/sound-on.webp';
  localStorage.setItem('mute', mute);
}

const muteStatus = localStorage.getItem('mute');
if (muteStatus !== null) {
  mute = JSON.parse(muteStatus);
  soundImage.src = mute ? './assets/img/mute.webp' : './assets/img/sound-on.webp';
}

soundImage.onclick = toggleSound;

getRandomQuestion();