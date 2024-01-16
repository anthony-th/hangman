import './styles/main.scss';
import { createElement } from './components/createElement';
import { imagesWrapper } from './components/visualization';
import { createKeyboard } from './components/keyboard';
import { modal } from './components/modal';

const main = createElement('main', 'main');
const shadow = createElement('div', 'shadow');
const logicBlock = createKeyboard();

main.append(imagesWrapper, logicBlock, modal, shadow);
document.body.append(main);