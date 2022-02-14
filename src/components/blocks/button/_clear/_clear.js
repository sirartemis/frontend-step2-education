const getClearButton = element => element.querySelector('.js-clear-button');
const addClearButton = element => {
  const clearButton = getClearButton(element);
  clearButton.classList.remove('js-clear-button_removed');
}

const removeClearButton = element => {
  const clearButton = getClearButton(element);
  clearButton.classList.add('js-clear-button_removed');
}

export { addClearButton,removeClearButton };
