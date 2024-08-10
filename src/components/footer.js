import { createElement } from '../common/createElement';

export const footer = createElement('footer', 'footer');
const copyrightText = createElement('p', 'copyright-text', 'Copyright');
const linkAuthor = createElement('a', 'copyright-link', 'anthony-th', {
  href: 'https://github.com/anthony-th',
  rel: 'noreferrer noopener',
  target: '_blank',
});
const copyrightYeah = createElement('p', 'copyright-text', '© 2024');

footer.append(copyrightText, linkAuthor, copyrightYeah);
