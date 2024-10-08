import { createElement } from '../common/createElement';
import { manImages, woman1, womanImages, imagesWrapper, gallows, newGame } from './visualization';
import { titleModal, modalAnswerText, modal, buttonTryAgain } from './modal';
import { soundImage } from './header';
import dataJson from '../data/questions.json';

const sounds = {
  soundClickAz: new Audio('./assets/audio/click-enter.mp3'),
  soundClickEnter: new Audio('./assets/audio/click-a-z.mp3'),
  soundLost: new Audio('./assets/audio/lost.mp3'),
  soundWin: new Audio('./assets/audio/win.mp3'),
};

const setVolume = (volume) => {
  Object.values(sounds).forEach((sound) => {
    sound.volume = volume;
  });
};

setVolume(0.1);

let mute = true;
const maxFails = 6;
let randomWord = null;
let currentFails = 0;
let listItems = [];
let gameOver = false;
let wasQuestions = [];
let isReloadPage = true;
let lastQuestion = null;
export const buttons = {};

const shadow = createElement('div', 'shadow');
export const functionBlock = createElement('div', 'section-logic');
const maskAnswer = createElement('ul', 'list');
const questionBlock = createElement('div', 'question-wrapper');
const questionTitle = createElement('h2', 'title-question');
const fails = createElement('div', 'fails');
const failsTitle = createElement('h3', 'subtitle', 'Fails:');
const greenSpan = createElement('span', 'green', currentFails);
const orangeSpan = createElement('span', 'orange', maxFails);
const slash = createElement('p', 'slash', '/');
fails.append(failsTitle, greenSpan, slash, orangeSpan);

const generateMaskBlock = (letter) => {
  const item = createElement('li', 'list-item', '', { 'data-letter': letter });
  maskAnswer.append(item);
  listItems.push(item);
};

const endTranslateY = (answer) => {
  modalAnswerText.textContent = `${answer}`;
  modal.removeEventListener('transitionend', endTranslateY);
};

const resetGameVisibility = () => {
  manImages.style.visibility = 'hidden';
  womanImages.style.visibility = 'hidden';
  newGame.className = imagesWrapper.contains(gallows) ? 'text' : 'text-woman';
};

const getRandomQuestion = () => {
  let unusedQuestion = dataJson.filter((question) => !wasQuestions.includes(question.id));
  if (unusedQuestion.length === 0) {
    wasQuestions = [];
    unusedQuestion = dataJson;
    console.log(
      `This game has a total of ${dataJson.length} questions. You have answered all ${dataJson.length}   questions. From now on, the questions will start repeating.`
    );
  }
  const randomIndex = Math.floor(Math.random() * unusedQuestion.length);
  randomWord = unusedQuestion[randomIndex];
  while (lastQuestion && randomWord.id === lastQuestion.id) {
    const newIndex = Math.floor(Math.random() * unusedQuestion.length);
    randomWord = unusedQuestion[newIndex];
  }
  lastQuestion = randomWord;
  wasQuestions.push(randomWord.id);
  questionTitle.textContent = randomWord.question;
  maskAnswer.innerHTML = '';
  gameOver = false;
  listItems = [];
  const letters = randomWord.answer.split('');
  letters.forEach((letter) => generateMaskBlock(letter));
  if (isReloadPage) {
    modalAnswerText.textContent = `${randomWord.answer}`;
    console.log("Please, don't forget to switch to the English keyboard layout.");
    isReloadPage = false;
  }
  console.log(`Answer: ${randomWord.answer}`);
  return randomWord;
};

const playAgain = () => {
  resetGameVisibility();
  woman1.style.visibility = imagesWrapper.contains(gallows) ? 'hidden' : 'visible';
  shadow.style.display = 'none';
  modal.style.transform = 'translateY(-100vh)';
  currentFails = 0;
  greenSpan.textContent = currentFails;
  getRandomQuestion();
  gameOver = false;
  for (let charCode = 65; charCode <= 90; charCode += 1) {
    const buttonId = `key-id-${charCode - 64}`;
    buttons[buttonId].disabled = false;
  }
  buttonTryAgain.blur();
  newGame.blur();
};

const playSound = (condition, sound) => {
  if (condition) {
    sound.play();
  }
};

const soundAfterModalTransition = () => {
  if (currentFails === maxFails) {
    playSound(true, sounds.soundLost);
  } else {
    playSound(true, sounds.soundWin);
  }
};

questionBlock.append(questionTitle);
functionBlock.append(maskAnswer, questionBlock, fails);

const updateVisibility = () => {
  if (currentFails >= 1 && currentFails <= 6) {
    manImages.style.visibility = 'visible';
    womanImages.style.visibility = 'visible';

    const manImageSrc = `./assets/img/man/man${currentFails}.webp`;
    const womanImageSrc = `./assets/img/syrus/syrus${currentFails}.webp`;

    manImages.src = manImageSrc;
    womanImages.src = womanImageSrc;
  }
};

export const buttonPress = (letter, button) => {
  if (gameOver || button.disabled) {
    return;
  }
  const filterItems = listItems.filter(
    (item) => item.dataset.letter.toLowerCase() === letter.toLowerCase()
  );
  if (filterItems.length > 0) {
    filterItems.forEach((item) => {
      item.textContent = letter;
    });
  } else {
    currentFails += 1;
    updateVisibility();
    if (currentFails === maxFails) {
      console.log('u lost');
      gameOver = true;
      titleModal.textContent = 'You lost';
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
  listItems.forEach((item) => {
    if (item.textContent.trim() !== '') {
      item.style.borderBottom = 'none';
    }
  });
  greenSpan.textContent = currentFails;
  const notEmpty = listItems.every((item) => item.textContent.trim() !== '');
  if (notEmpty) {
    console.log('u win!');
    gameOver = true;
    titleModal.textContent = 'You win';
    requestAnimationFrame(() => {
      shadow.style.display = 'block';
      modal.style.transform = 'translateY(0)';
    });
    if (!mute) {
      soundAfterModalTransition();
    }
  }
};

const pressDownKeyboard = (event) => {
  switch (event.keyCode) {
    case 9:
      event.preventDefault();
      break;
    case 13:
    case 27:
      if (shadow.style.display === 'block') {
        playSound(!mute, sounds.soundClickEnter);
        playAgain();
      }
      break;
    default:
      if (event.keyCode >= 65 && event.keyCode <= 90) {
        const letter = String.fromCharCode(event.keyCode);
        const buttonId = `key-id-${event.keyCode - 64}`;
        const button = buttons[buttonId];
        if (!button.disabled && !gameOver && !mute) {
          playSound(true, sounds.soundClickAz);
        }
        buttonPress(letter, button);
      }
      break;
  }
};

const toggleSound = () => {
  mute = !mute;
  soundImage.src = `./assets/img/${mute ? 'mute' : 'sound-on'}.webp`;
  localStorage.setItem('mute', mute);
};

const muteStatus = localStorage.getItem('mute');
if (muteStatus !== null) {
  mute = JSON.parse(muteStatus);
  soundImage.src = mute ? './assets/img/mute.webp' : './assets/img/sound-on.webp';
}

soundImage.onclick = toggleSound;

document.onkeydown = (event) => pressDownKeyboard(event);
modal.addEventListener('transitionend', () => endTranslateY(randomWord.answer));
newGame.onclick = playAgain;
buttonTryAgain.onclick = () => playAgain();
document.addEventListener('DOMContentLoaded', () => {
  getRandomQuestion();
});

export default shadow;
