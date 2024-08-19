export const createElement = (tag, className, textContent = '', attributes = {}) => {
  const element = document.createElement(tag);
  element.className = className;
  element.textContent = textContent;
  Object.keys(attributes).forEach((key) => {
    element.setAttribute(key, attributes[key]);
  });

  return element;
};
