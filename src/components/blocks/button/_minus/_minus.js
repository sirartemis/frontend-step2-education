const disableMinus = minus => {
  if (minus.classList.contains('minus-button_disabled') === false) {
    minus.classList.add('minus-button_disabled');
    minus.setAttribute('disabled','disabled');
  }
}

const enableMinus = minus => {
  if (minus.classList.contains('minus-button_disabled') === true) {
    minus.classList.remove('minus-button_disabled');
    minus.removeAttribute('disabled');
  }
}

export { enableMinus, disableMinus };
