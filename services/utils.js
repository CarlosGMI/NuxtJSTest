export const createContainer = (tag = 'div') => {
  const container = document.createElement(tag);

  document.body.appendChild(container);

  return container;
};
