export const validatePattern = /\d/;

export const clearContainer = (container) => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};
