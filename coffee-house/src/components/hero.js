export const heroSection = document.createElement('section');
heroSection.classList.add('section', 'hero-section');
const heroContent = document.createElement('div');
heroContent.classList.add('hero-block');
const heroTitle = document.createElement('h1');
heroTitle.classList.add('hero-title');
heroTitle.innerHTML = `<span class="italic-accent">Enjoy</span> premium coffee at our charming cafe`
const heroSubtitle = document.createElement('p');
heroSubtitle.textContent = 'With its inviting atmosphere and delicious coffee options, the Coffee House Resource is a popular destination for coffee lovers and those seeking a warm and inviting space to enjoy their favorite beverage.';
heroSubtitle.classList.add('hero-text');
const heroButton = document.createElement('a');
heroButton.classList.add('hero-btn', 'cursor-pointer');
heroButton.href = './menu.html';
heroButton.innerHTML = '<span>Menu</span>';

heroContent.append(heroTitle, heroSubtitle, heroButton);
heroSection.append(heroContent);