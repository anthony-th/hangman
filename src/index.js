import './styles/main.scss';
import { header } from './components/header';
import { main } from './components/main';
import { footer } from './components/footer';
import shadow from './components/game';

document.body.className = 'body';
document.body.append(header, main, footer, shadow);
