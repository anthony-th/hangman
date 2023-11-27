export const favoriteSection = document.createElement('section');
favoriteSection.classList.add('section', 'favorite-section');
const favoriteTitle = document.createElement('h2');
favoriteTitle.classList.add('title');
favoriteTitle.innerHTML = `Choose your <span class="italic-accent">favorite</span> coffee`;

favoriteSection.append(favoriteTitle);