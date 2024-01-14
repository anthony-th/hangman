import './styles/main.scss';

function createElement(tag, className) {
  const element = document.createElement(tag);
  element.className = className;
  document.body.append(element);
}

const main = createElement('main', 'main');