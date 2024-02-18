import { createElement } from './createElement';

export const footer = createElement('footer', 'footer');
const copyrightText = createElement('p', 'copyright-text');
copyrightText.textContent = 'Copyright';
const linkAuthor = createElement('a', 'copyright-link');
linkAuthor.href = 'https://github.com/anthony-th';
linkAuthor.rel = 'noreferrer noopener';
linkAuthor.target = '_blank';
linkAuthor.textContent = 'anthony-th';
const copyrightYeah = createElement('p', 'copyright-text');
copyrightYeah.textContent = '© 2024';

footer.append(copyrightText, linkAuthor, copyrightYeah);
