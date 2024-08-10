import { createElement } from '../common/createElement';
import { imagesWrapper } from './visualization';
import { modal } from './modal';
import { keyboard } from './keyboard';

const main = createElement('main', 'main');

main.append(imagesWrapper, keyboard(), modal);

export { main };
