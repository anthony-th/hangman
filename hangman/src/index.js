import './styles/main.scss';
import { createElement } from './components/createElement';
import { imagesWrapper } from './components/visualization';
import { createKeyboard } from './components/keyboard';
import { createModal } from './components/modal';

const main = createElement('main', 'main');
const functionBlock = createElement('div', 'logic');
const keyboard = createKeyboard();
const modal = createModal();

functionBlock.append(keyboard);
main.append(imagesWrapper, functionBlock, modal);
document.body.append(main);