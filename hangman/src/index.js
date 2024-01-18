import './styles/main.scss';
import { createElement } from './components/createElement';
import { imagesWrapper } from './components/visualization';
import { createKeyboard } from './components/keyboard';
import { modal } from './components/modal';
import { header } from './components/header';
import { footer } from './components/footer';

const main = createElement('main', 'main');
export const shadow = createElement('div', 'shadow');
const logicBlock = createKeyboard();
document.body.className = 'body';

main.append(imagesWrapper, logicBlock, modal);
document.body.append(header, main, footer, shadow);