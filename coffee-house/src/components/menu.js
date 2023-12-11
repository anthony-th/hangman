import dataProductsJson from '../data/products.json';
import { checkWidth, menu } from './header';

export const menuSection = document.createElement('section');
menuSection.classList.add('section', 'menu-section');

const manuTabs = document.createElement('div');
manuTabs.classList.add('menu-tabs');

const manuTitle = document.createElement('h1');
manuTitle.classList.add('title');
manuTitle.innerHTML = `Behind each of our cups hides an <span class="italic-accent">amazing surprise</span>`;

const tabsList = document.createElement('div');
tabsList.classList.add('tabs-list');

const tabsLink1 = document.createElement('a');
tabsLink1.classList.add('tabs-link', 'tab-active');
const tabsLink1Iconblock = document.createElement('div');
tabsLink1Iconblock.classList.add('link-block');
const tabsLink1Icon = document.createElement('img');
tabsLink1Icon.classList.add('link-icon');
tabsLink1Icon.src = './assets/img/cof.png';
tabsLink1Icon.alt = '';
const tabsLink1Text = document.createElement('p');
tabsLink1Text.classList.add('link-text');
tabsLink1Text.textContent = 'Coffee';

const tabsLink2 = document.createElement('a');
tabsLink2.classList.add('tabs-link');
const tabsLink2Iconblock = document.createElement('div');
tabsLink2Iconblock.classList.add('link-block');
const tabsLink2Icon = document.createElement('img');
tabsLink2Icon.classList.add('link-icon');
tabsLink2Icon.src = './assets/img/tee.png';
tabsLink2Icon.alt = '';
const tabsLink2Text = document.createElement('p');
tabsLink2Text.classList.add('link-text');
tabsLink2Text.textContent = 'Tea';

const tabsLink3 = document.createElement('a');
tabsLink3.classList.add('tabs-link');
const tabsLink3Iconblock = document.createElement('div');
tabsLink3Iconblock.classList.add('link-block');
const tabsLink3Icon = document.createElement('img');
tabsLink3Icon.classList.add('link-icon');
tabsLink3Icon.src = './assets/img/chees.png';
tabsLink3Icon.alt = '';

const tabsLink3Text = document.createElement('p');
tabsLink3Text.classList.add('link-text');
tabsLink3Text.textContent = 'Dessert';

const manuList = document.createElement('div');
manuList.classList.add('menu-list');

let initialQuantityProducts;
const cardVisible = [];

function filterProducts(category) { 
  cardVisible.length = 0;
  manuList.innerHTML = '';
  const filterProduct = dataProductsJson.filter((el) => el.category === category);
  initialQuantityProducts = filterProduct.length;
  filterProduct.forEach((item) => {
    const menuListItem = document.createElement('div');
    menuListItem.classList.add('card', 'cursor-pointer');
    const listImgWrapper = document.createElement('div');
    listImgWrapper.classList.add('item-wrapper');
    const listItemImg = document.createElement('img');
    listItemImg.classList.add('item-img');
    listItemImg.alt = '';
    listItemImg.src = item.img;
    const listTextWrapper = document.createElement('div');
    listTextWrapper.classList.add('text-wrapper');
    const listItemTitle = document.createElement('h3');
    listItemTitle.classList.add('item-title');
    listItemTitle.textContent = item.name;
    const listItemText = document.createElement('p');
    listItemText.classList.add('item-text');
    listItemText.textContent = item.description;
    const listItemPrice = document.createElement('h4');
    listItemPrice.classList.add('item-price');
    listItemPrice.textContent = `$${item.price}`;
  
    listTextWrapper.append(listItemTitle, listItemText, listItemPrice);
    listImgWrapper.append(listItemImg);
    menuListItem.append(listImgWrapper, listTextWrapper);
    manuList.append(menuListItem);

    cardVisible.push(menuListItem);
  });
}

const tabsReload = document.createElement('div');
tabsReload.classList.add('tabs-reload', 'cursor-pointer');
const svgReload =  document.createElement('svg');
svgReload.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M21.8883 13.5C21.1645 18.3113 17.013 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C16.1006 2 19.6248 4.46819 21.1679 8" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 8H21.4C21.7314 8 22 7.73137 22 7.4V3" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

function tabslinkOne() {
  tabsLink1.classList.add('tab-active');
  tabsLink2.classList.remove('tab-active');
  tabsLink3.classList.remove('tab-active');
  filterProducts('coffee');
  checkInnerWidthForTabReload();
  showCards();
}

function tabslinkTwo() {
  tabsLink1.classList.remove('tab-active');
  tabsLink2.classList.add('tab-active');
  tabsLink3.classList.remove('tab-active');
  filterProducts('tea');
  checkInnerWidthForTabReload();
  showCards();
}

function tabslinkThree() {
  tabsLink1.classList.remove('tab-active');
  tabsLink2.classList.remove('tab-active');
  tabsLink3.classList.add('tab-active');
  filterProducts('dessert');
  checkInnerWidthForTabReload();
  showCards();
}

tabsLink1.onclick = tabslinkOne;
tabsLink2.onclick = tabslinkTwo;
tabsLink3.onclick = tabslinkThree;
tabsReload.onclick = tabsReloadRotate;

function tabsReloadRotate() {
  svgReload.classList.add('rotate360');
}

tabsReload.addEventListener('animationend', function() {
  svgReload.classList.remove('rotate360');
    if (visibleCardsCount < initialQuantityProducts) {
    cardVisible.forEach((card) => {
      card.style.display = 'flex';
      tabsReload.style.display = 'none';
    });
  }
});

let visibleCardsCount = window.innerWidth <= 768 ? 4 : 8;

function showCards() {
  cardVisible.forEach((card, index) => {
    card.style.display = index < visibleCardsCount ? 'flex' : 'none';
  });
}

function checkInnerWidthForTabReload() {
  const isSmallScreen = window.innerWidth <= 768;
  visibleCardsCount = isSmallScreen ? 4 : 8;
  tabsReload.style.display = isSmallScreen && initialQuantityProducts > 4 ? 'flex' : 'none';
  showCards();
}

function resizeWin() {
  checkWidth();
  checkInnerWidthForTabReload();
  menu.className = 'menu link-active';
}

filterProducts('coffee');
checkInnerWidthForTabReload();

window.onresize = resizeWin;

tabsReload.append(svgReload);
tabsLink1Iconblock.append(tabsLink1Icon);
tabsLink2Iconblock.append(tabsLink2Icon);
tabsLink3Iconblock.append(tabsLink3Icon);
tabsLink1.append(tabsLink1Iconblock, tabsLink1Text);
tabsLink2.append(tabsLink2Iconblock, tabsLink2Text);
tabsLink3.append(tabsLink3Iconblock, tabsLink3Text);
tabsList.append(tabsLink1, tabsLink2, tabsLink3);
manuTabs.append(manuTitle, tabsList);
menuSection.append(manuTabs, manuList, tabsReload);