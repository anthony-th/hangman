import cof from '../assets/img/cof.png';
import tee from '../assets/img/tee.png';
import chees from '../assets/img/chees.png';
import dataJson from '../data/coffee.json';

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
tabsLink1.classList.add('tabs-link');
const tabsLink1Iconblock = document.createElement('div');
tabsLink1Iconblock.classList.add('link-block');
const tabsLink1Icon = document.createElement('img');
tabsLink1Icon.classList.add('link-icon');
tabsLink1Icon.src = cof;
const tabsLink1Text = document.createElement('p');
tabsLink1Text.classList.add('link-text');
tabsLink1Text.textContent = 'Coffee';

const tabsLink2 = document.createElement('a');
tabsLink2.classList.add('tabs-link');
const tabsLink2Iconblock = document.createElement('div');
tabsLink2Iconblock.classList.add('link-block');
const tabsLink2Icon = document.createElement('img');
tabsLink2Icon.classList.add('link-icon');
tabsLink2Icon.src = tee;
const tabsLink2Text = document.createElement('p');
tabsLink2Text.classList.add('link-text');
tabsLink2Text.textContent = 'Tea';

const tabsLink3 = document.createElement('a');
tabsLink3.classList.add('tabs-link');
const tabsLink3Iconblock = document.createElement('div');
tabsLink3Iconblock.classList.add('link-block');
const tabsLink3Icon = document.createElement('img');
tabsLink3Icon.classList.add('link-icon');
tabsLink3Icon.src = chees;
const tabsLink3Text = document.createElement('p');
tabsLink3Text.classList.add('link-text');
tabsLink3Text.textContent = 'Dessert';

const manuList = document.createElement('div');
manuList.classList.add('menu-list');

dataJson.forEach((item) => {
  const manuListItem = document.createElement('div');
  manuListItem.classList.add('list-item');
  const listItemImg = document.createElement('img');
  listItemImg.classList.add('item-img');
  listItemImg.src = item.img;
  const listItemTitle = document.createElement('h3');
  listItemTitle.classList.add('item-title');
  listItemTitle.textContent = item.name;
  const listItemText = document.createElement('p');
  listItemText.classList.add('item-text');
  listItemText.textContent = item.description;
  const listItemPrice = document.createElement('h4');
  listItemPrice.classList.add('item-price');
  listItemPrice.textContent = item.price;

  manuListItem.append(listItemImg, listItemTitle, listItemText, listItemPrice);
  manuList.append(manuListItem);
});

tabsLink1Iconblock.append(tabsLink1Icon);
tabsLink2Iconblock.append(tabsLink2Icon);
tabsLink3Iconblock.append(tabsLink3Icon);
tabsLink1.append(tabsLink1Iconblock, tabsLink1Text);
tabsLink2.append(tabsLink2Iconblock, tabsLink2Text);
tabsLink3.append(tabsLink3Iconblock, tabsLink3Text);
tabsList.append(tabsLink1, tabsLink2, tabsLink3);
manuTabs.append(manuTitle, tabsList);
menuSection.append(manuTabs, manuList);