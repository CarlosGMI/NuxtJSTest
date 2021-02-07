export const createContainer = (tag = 'div') => {
  const container = document.createElement(tag);

  document.body.appendChild(container);

  return container;
};

export const isInLocalStorage = (key) => {
  if (localStorage[key]) {
    return true;
  } else {
    return false;
  }
};

export const saveInLocalStorage = (key, value) => {
  if (typeof value === 'object' && value) {
    localStorage[key] = JSON.stringify(value);
  } else {
    localStorage[key] = value;
  }
};

export const getFromLocalStorage = (key) => {
  return localStorage[key];
};
