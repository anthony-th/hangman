import sliderJson from '../data/slider.json';

export const favoriteSection = document.createElement('section');
favoriteSection.classList.add('section', 'favorite-section');
favoriteSection.id = 'favorite';
const favoriteTitle = document.createElement('h2');
favoriteTitle.classList.add('title');
favoriteTitle.innerHTML = `Choose your <span class="italic-accent">favorite</span> coffee`;
const favoriteSliderWrapper = document.createElement('div');
favoriteSliderWrapper.classList.add('slider-block');

const favoriteArrowLeft = document.createElement('a');
favoriteArrowLeft.classList.add('arrow', 'cursor-pointer');
favoriteArrowLeft.src = '';
const arrowLeftIcon = document.createElement('svg');
arrowLeftIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M18.5 12H6M6 12L12 6M6 12L12 18" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const favoriteSliders = document.createElement('div');
favoriteSliders.classList.add('sliders');

const totalSliders = sliderJson.length;
const allSliders = [];
let startSlider = 0;
let autoScrollInterval;
let pause = false;

sliderJson.forEach((item) => {
  const favoriteSlider = document.createElement('div');
  favoriteSlider.classList.add('slider');
  
  const sliderImg = document.createElement('img');
  sliderImg.classList.add('slider-img', 'user-select-none');
  sliderImg.src = item.img;
  sliderImg.alt = '';

  const favoriteTextBlock = document.createElement('div');
  favoriteTextBlock.classList.add('slider-textblock');
  
  const favoriteSliderTitle = document.createElement('h2');
  favoriteSliderTitle.classList.add('slider-title', 'user-select-none');
  favoriteSliderTitle.textContent = item.name;

  const favoriteSliderText = document.createElement('p');
  favoriteSliderText.classList.add('slider-text', 'user-select-none');
  favoriteSliderText.textContent = item.description;

  const favoriteSliderPrice = document.createElement('p');
  favoriteSliderPrice.classList.add('slider-text', 'user-select-none');
  favoriteSliderPrice.textContent = `$${item.price}`;

  favoriteTextBlock.append(favoriteSliderTitle, favoriteSliderText, favoriteSliderPrice);
  favoriteSlider.append(sliderImg, favoriteTextBlock);
  favoriteSliders.append(favoriteSlider);

  favoriteSlider.onmouseenter = () => {
    slidersMouseOver();
  }
  
  favoriteSlider.onmouseleave = () => {
    slidersMouseOut();
  }

  allSliders.push(favoriteSlider);
});

const favoriteArrowRight = document.createElement('a');
favoriteArrowRight.classList.add('arrow', 'cursor-pointer');
favoriteArrowRight.src = '';
const arrowRightIcon = document.createElement('svg');
arrowRightIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M6 12H18.5M18.5 12L12.5 6M18.5 12L12.5 18" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const sliderProgressBar = document.createElement('div');
sliderProgressBar.classList.add('slider-progressbar');
const sliderProgressBarLine1 = document.createElement('span');
sliderProgressBarLine1.classList.add('progressbar-line', 'active-progress-line');
const sliderProgressBarLine2 = document.createElement('span');
sliderProgressBarLine2.classList.add('progressbar-line');
const sliderProgressBarLine3 = document.createElement('span');
sliderProgressBarLine3.classList.add('progressbar-line');

const progressLines = [sliderProgressBarLine1, sliderProgressBarLine2, sliderProgressBarLine3];
let intervalTime = 6900 / 1000;
let mouseOverTime = 0;
let pauseInterval = 0;
let pauseStopInterval;
let touchFingerStart = 0;
let touchFingerEnd = 0;

function autoScrollX() {
  autoScrollInterval = setInterval(() => {
    nextSlide();
  }, intervalTime);
  pauseInterval = new Date().getTime();
}

function slidersMouseOver() {
  clearInterval(autoScrollInterval);
  pause = true;
  progressLines.forEach((line) => {
    line.classList.add('pause');
  });
  mouseOverTime = new Date().getTime();
  pauseStopInterval = mouseOverTime - pauseInterval;
  intervalTime -= pauseStopInterval;
}

function slidersMouseOut() {
  if (pause === true) {
    autoScrollX();
    pause = false;
    progressLines.forEach((line) => {
      line.classList.remove('pause');
    });
  }
}

function updateLinesStatus() {
  progressLines.forEach((line, index) => {
    line.classList.toggle('active-progress-line', index === startSlider);
  });
}

function currentSlide(index) {
  const translateX = `translateX(${-100 * index}%)`;
  allSliders.forEach((slider) => {
    slider.style.transform = translateX;
  });
}

favoriteSliders.addEventListener('touchstart', (e) => {
  e.preventDefault();
  touchFingerStart = e.touches[0].clientX;
  slidersMouseOver();
});

favoriteSliders.addEventListener('touchmove', (e) => {
  touchFingerEnd = e.touches[0].clientX;
});

favoriteSliders.addEventListener('touchend', (e) => {
  e.preventDefault()
  slidersMouseOut();
  swipe();
});

function swipe() {
  if (touchFingerStart && touchFingerEnd) {
    const direction = touchFingerStart - touchFingerEnd;
    if (Math.abs(direction) >= 100) {
      if (direction > 0) {
        nextSlide();
      } else if (direction < 0) {
        prevSlide();
      }
    }
  }
  touchFingerStart = 0;
  touchFingerEnd = 0;
}

favoriteSliders.addEventListener('touchcancel', () => {
  slidersMouseOut();
});

function nextSlide() {
  clearInterval(autoScrollInterval);
  intervalTime = 6900;
  autoScrollX();
  startSlider = (startSlider + 1) % totalSliders;
  currentSlide(startSlider);
  updateLinesStatus();
}

function prevSlide() {
  clearInterval(autoScrollInterval);
  intervalTime = 6900;
  autoScrollX();
  startSlider = (startSlider - 1 + totalSliders) % totalSliders;
  currentSlide(startSlider);
  updateLinesStatus();
}

window.onload = () => {
  autoScrollX();
};

favoriteArrowLeft.onclick = prevSlide;
favoriteArrowRight.onclick = nextSlide;

favoriteArrowLeft.append(arrowLeftIcon);
favoriteArrowRight.append(arrowRightIcon);
sliderProgressBar.append(sliderProgressBarLine1, sliderProgressBarLine2, sliderProgressBarLine3);
favoriteSliderWrapper.append(favoriteArrowLeft, favoriteSliders, favoriteArrowRight);
favoriteSection.append(favoriteTitle, favoriteSliderWrapper, sliderProgressBar);