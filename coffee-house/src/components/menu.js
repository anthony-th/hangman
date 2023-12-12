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

    menuListItem.onclick = function() {
      openModal(item);
    };

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

function openModal(item) {
  const shadow = document.createElement('div');
  shadow.classList.add('modal-shadow');

  const modal = document.createElement('div');
  modal.classList.add('modal');
  const blockImage = document.createElement("div");
  blockImage.classList.add("modal-image-block");
  const modalImage = document.createElement("img");
  modalImage.classList.add("modal-image");
  modalImage.src = item.img;

  const blockText = document.createElement("div");
  blockText.classList.add("modal-text-block");
  const titleBlock = document.createElement("div");
  titleBlock.classList.add("title-block");
  const title = document.createElement("h2");
  title.classList.add("title-modal");
  title.textContent = item.name;
  const subTitle = document.createElement("p");
  subTitle.classList.add("modal-description");
  subTitle.textContent = item.description;
  const sizeBlock = document.createElement("div");
  sizeBlock.classList.add("size-block");
  const sizeTitle = document.createElement("p");
  sizeTitle.classList.add("size-title");
  sizeTitle.textContent = 'Size';
  const sizeButtons = document.createElement("div");
  sizeButtons.classList.add("size-buttons");

  const sizeButton1 = document.createElement("div");
  sizeButton1.classList.add("size-button", "size-button-active");
  const sizeCircle1 = document.createElement("div");
  sizeCircle1.classList.add('size-circle');
  sizeCircle1.textContent = 'S';
  const sizeSml = document.createElement("p");
  sizeSml.classList.add('size-ml');
  sizeSml.textContent = item.sizes.s.size;

  const sizeButton2 = document.createElement("div");
  sizeButton2.classList.add("size-button");
  const sizeCircle2 = document.createElement("div");
  sizeCircle2.classList.add("size-circle");
  sizeCircle2.textContent = 'M';
  const sizeMml = document.createElement("p");
  sizeMml.classList.add('size-ml');
  sizeMml.textContent = item.sizes.m.size;

  const sizeButton3 = document.createElement("div");
  sizeButton3.classList.add("size-button");
  const sizeCircle3 = document.createElement("div");
  sizeCircle3.classList.add("size-circle");
  sizeCircle3.textContent = 'L';
  const sizeLml = document.createElement("p");
  sizeLml.classList.add('size-ml');
  sizeLml.textContent = item.sizes.l.size;

  const additives = document.createElement("div");
  additives.classList.add("additives");
  const additivesTitle = document.createElement("p");
  additivesTitle.classList.add("additives-title");
  additivesTitle.textContent = 'Additives';

  const additivesButtons = document.createElement("div");
  additivesButtons.classList.add("additives-buttons");

  const additivesButton1 = document.createElement("div");
  additivesButton1.classList.add("additives-button");
  const additivesCircle1 = document.createElement("div");
  additivesCircle1.classList.add("additives-circle");
  additivesCircle1.textContent = '1';
  const additivesSugar = document.createElement("p");
  additivesSugar.classList.add('additives-elements');
  additivesSugar.textContent = item.additives[0].name;

  const additivesButton2 = document.createElement("div");
  additivesButton2.classList.add("additives-button");
  const additivesCircle2 = document.createElement("div");
  additivesCircle2.classList.add("additives-circle");
  additivesCircle2.textContent = '2';
  const additivesCin = document.createElement("p");
  additivesCin.classList.add('additives-elements');
  additivesCin.textContent = item.additives[1].name;

  const additivesButton3 = document.createElement("div");
  additivesButton3.classList.add("additives-button");
  const additivesCircle3 = document.createElement("div");
  additivesCircle3.classList.add("additives-circle");
  additivesCircle3.textContent = '3';
  const additivesSy = document.createElement("p");
  additivesSy.classList.add('additives-elements');
  additivesSy.textContent = item.additives[2].name;

  document.body.classList.add('overflow-hidden');

  const totalBlock = document.createElement("div");
  totalBlock.classList.add("total-block");
  const totalText = document.createElement("p");
  totalText.classList.add("total-text");
  totalText.textContent = 'Total:';
  const totalPrice = document.createElement("p");
  totalPrice.classList.add("total-price");

  const alertBlock = document.createElement("div");
  alertBlock.classList.add("alert-block");
  const alertSvg = document.createElement("svg");
  alertSvg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g clip-path="url(#clip0_268_12877)">
    <path d="M8 7.66663V11" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 5.00667L8.00667 4.99926" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.99967 14.6667C11.6816 14.6667 14.6663 11.6819 14.6663 8.00004C14.6663 4.31814 11.6816 1.33337 7.99967 1.33337C4.31778 1.33337 1.33301 4.31814 1.33301 8.00004C1.33301 11.6819 4.31778 14.6667 7.99967 14.6667Z" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_268_12877">
      <rect width="16" height="16" fill="white"/>
    </clipPath>
  </defs>
  </svg>`;
  const alertTitle = document.createElement("p");
  alertTitle.classList.add("alert-title");
  alertTitle.textContent = 'The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.';

  const closeButton = document.createElement("button");
  closeButton.classList.add("button-close");
  closeButton.textContent = 'Close';
  closeButton.onclick = function() {
    closeModal();
  };

  shadow.onclick = function() {
    closeModal();
  };

  function closeModal() {
    modal.remove();
    shadow.remove();
    document.body.classList.remove('overflow-hidden');
  }

  let selectSize = item.sizes.s.addprice;
  let selectAddPrice = 0;

  sizeButton1.onclick = sizeButton1Click;
  sizeButton2.onclick = sizeButton2Click;
  sizeButton3.onclick = sizeButton3Click;
  function sizeButton1Click() {
    if (!sizeButton1.classList.contains('size-button-active')) {
      sizeButton1.classList.add('size-button-active');
      sizeButton2.classList.remove('size-button-active');
      sizeButton3.classList.remove('size-button-active');
      selectSize = item.sizes.s.addprice;
      updateTotalPrice();
    }
  }

  function sizeButton2Click() {
    if (!sizeButton2.classList.contains('size-button-active')) {
      sizeButton2.classList.add('size-button-active');
      sizeButton1.classList.remove('size-button-active');
      sizeButton3.classList.remove('size-button-active');
      selectSize = item.sizes.m.addprice;
      updateTotalPrice();
    }
  }
  function sizeButton3Click() {
    if (!sizeButton3.classList.contains('size-button-active')) {
      sizeButton3.classList.add('size-button-active');
      sizeButton1.classList.remove('size-button-active');
      sizeButton2.classList.remove('size-button-active');
      selectSize = item.sizes.l.addprice;
      updateTotalPrice();
    }
  }

  additivesButton1.onclick = additivesButton1Click;
  additivesButton2.onclick = additivesButton2Click;
  additivesButton3.onclick = additivesButton3Click;

  function additivesButton1Click() {
    additivesButton1.classList.toggle('additives-button-active');
    updateSelectAdd();
  }
  function additivesButton2Click() {
    additivesButton2.classList.toggle('additives-button-active');
    updateSelectAdd();
  }
  function additivesButton3Click() {
    additivesButton3.classList.toggle('additives-button-active');
    updateSelectAdd();
  }

  additivesButtons.append(additivesButton1, additivesButton2, additivesButton3);
  additivesButton1.append(additivesCircle1, additivesSugar);
  additivesButton2.append(additivesCircle2, additivesCin);
  additivesButton3.append(additivesCircle3, additivesSy);
  additives.append(additivesTitle, additivesButtons);

  sizeButton1.append(sizeCircle1, sizeSml);
  sizeButton2.append(sizeCircle2, sizeMml);
  sizeButton3.append(sizeCircle3, sizeLml);
  sizeButtons.append(sizeButton1, sizeButton2, sizeButton3);
  sizeBlock.append(sizeTitle, sizeButtons);
  titleBlock.append(title, subTitle);

  totalBlock.append(totalText, totalPrice);

  alertBlock.append(alertSvg, alertTitle);

  let selectAddArray = [];

  function updateSelectAdd() {
    selectAddArray = [];
    const additivesButtonsArr = [additivesButton1, additivesButton2, additivesButton3];

    additivesButtonsArr.forEach((el, index) => {
      if (el.classList.contains('additives-button-active')) {
        selectAddArray.push(item.additives[index]);
      }
    });
    updateTotalPrice();
  }

  totalPrice.textContent = `$${(Number(item.price) + Number(selectSize) + Number(selectAddPrice)).toFixed(2)}`;

  function calculateTotalPrice(item, selectSize, selectAddPrice) {
    return (Number(item.price) + Number(selectSize) + Number(selectAddPrice)).toFixed(2);
  }

  function updateTotalPrice() {
    let totalAddPrice = 0;
    selectAddArray.forEach((el) => {
      totalAddPrice += Number(el.addprice);
    });
    totalPrice.textContent = `$${calculateTotalPrice(item, selectSize, totalAddPrice)}`;
  }

  window.onresize = function() {
    closeModal();
  };

  blockText.append(titleBlock, sizeBlock, additives, totalBlock, alertBlock, closeButton);
  modal.append(blockImage, blockText);
  blockImage.append(modalImage);
  manuList.append(shadow, modal);  
}


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