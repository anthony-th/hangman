export const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};
