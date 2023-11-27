import imgForGaller1 from '../assets/img/about/about-1.webp';
import imgForGaller2 from '../assets/img/about/about-2.webp';
import imgForGaller3 from '../assets/img/about/about-3.webp';
import imgForGaller4 from '../assets/img/about/about-4.webp';

export const aboutSection = document.createElement('section');
aboutSection.classList.add('section', 'about-section');

const aboutTitle = document.createElement('h2');
aboutTitle.classList.add('title');
aboutTitle.innerHTML = `Resource is <span class="italic-accent">the perfect and cozy place</span> where you can enjoy a variety of hot beverages, relax, catch up with friends, or get some work done.`;

const aboutGalery = document.createElement('div');
aboutGalery.classList.add('about-block');

const overflowFor1 = document.createElement('div');
overflowFor1.classList.add('img-wrapper');
const imgGalery1 = document.createElement('img');
imgGalery1.classList.add('about-img');
imgGalery1.src = imgForGaller1;

const overflowFor2 = document.createElement('div');
overflowFor2.classList.add('img-wrapper');
const imgGalery2 = document.createElement('img');
imgGalery2.classList.add('about-img');
imgGalery2.src = imgForGaller3;

const overflowFor3 = document.createElement('div');
overflowFor3.classList.add('img-wrapper');
const imgGalery3 = document.createElement('img');
imgGalery3.classList.add('about-img');
imgGalery3.src = imgForGaller4;

const overflowFor4 = document.createElement('div');
overflowFor4.classList.add('img-wrapper');
const imgGalery4 = document.createElement('img');
imgGalery4.classList.add('about-img');
imgGalery4.src = imgForGaller2;

overflowFor1.append(imgGalery1);
overflowFor2.append(imgGalery2);
overflowFor3.append(imgGalery3);
overflowFor4.append(imgGalery4);
aboutGalery.append(overflowFor1, overflowFor2, overflowFor3, overflowFor4);
aboutSection.append(aboutTitle, aboutGalery);