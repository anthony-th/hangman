import './styles/main.scss';
import { createElement } from './components/createElement';
import { imagesWrapper } from './components/visualization';
import { createKeyboard } from './components/keyboard';
// import { createModal } from './components/modal';

const main = createElement('main', 'main');
const logicBlock = createKeyboard();
// const modal = createModal();

main.append(imagesWrapper, logicBlock);
document.body.append(main);