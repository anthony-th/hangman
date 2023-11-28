import sliderFor1week from '../assets/img/slider/coffee-slider-1.webp';

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
const arrowLeftIcon = document.createElement('svg');
arrowLeftIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M18.5 12H6M6 12L12 6M6 12L12 18" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const favoriteSlider = document.createElement('div');
favoriteSlider.classList.add('slider');
const sliderImg = document.createElement('img');
sliderImg.classList.add('slider-img');
sliderImg.src = sliderFor1week;
sliderImg.alt = '';

const favoriteTextBlock = document.createElement('div');
favoriteTextBlock.classList.add('slider-textblock');
const favoriteSliderTitle = document.createElement('h2');
favoriteSliderTitle.classList.add('slider-title');
favoriteSliderTitle.textContent = 'S’mores Frappuccino';
const favoriteSliderText = document.createElement('p');
favoriteSliderText.classList.add('slider-text');
favoriteSliderText.textContent = 'This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.';
const favoriteSliderPrice = document.createElement('p');
favoriteSliderPrice.classList.add('slider-text');
favoriteSliderPrice.textContent = '$5.50';

const favoriteArrowRight = document.createElement('a');
favoriteArrowRight.classList.add('arrow', 'cursor-pointer');
const arrowRightIcon = document.createElement('svg');
arrowRightIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M6 12H18.5M18.5 12L12.5 6M18.5 12L12.5 18" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const sliderProgressBar = document.createElement('div');
sliderProgressBar.classList.add('slider-progressbar');
const sliderProgressBarLine1 = document.createElement('span');
sliderProgressBarLine1.classList.add('progressbar-line');
const sliderProgressBarLine2 = document.createElement('span');
sliderProgressBarLine2.classList.add('progressbar-line');
const sliderProgressBarLine3 = document.createElement('span');
sliderProgressBarLine3.classList.add('progressbar-line');

favoriteArrowLeft.append(arrowLeftIcon);
favoriteArrowRight.append(arrowRightIcon);
sliderProgressBar.append(sliderProgressBarLine1, sliderProgressBarLine2, sliderProgressBarLine3);
favoriteTextBlock.append(favoriteSliderTitle, favoriteSliderText, favoriteSliderPrice);
favoriteSlider.append(sliderImg, favoriteTextBlock);
favoriteSliderWrapper.append(favoriteArrowLeft, favoriteSlider,favoriteArrowRight);
favoriteSection.append(favoriteTitle, favoriteSliderWrapper, sliderProgressBar);