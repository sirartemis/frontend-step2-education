import { addClearButton, removeClearButton } from "../button/_clear/_clear";
import { disableMinus } from "../button/_minus/_minus";

const makeHandler = event => {
  const values = this.element.querySelectorAll('.js-number-picker__value');
  const minuses = this.element.querySelectorAll('.js-minus-button');
  const buttons = event.currentTarget.querySelector('.dropdown__body__buttons');
  let result = [];
  Object.values(values).map(value => result.push(parseInt(value.innerHTML, 10)));
  result = result.reduce((prev,next) => prev + next);
  if (event.target.classList.contains('js-expand-button')
   && event.target.classList.contains('material-icons')) {
    this.rotateExpandButton();
    this.toggleBody();
  };
  if (event.target.classList.contains('js-clear-button')) {
    Object.values(values).map(value => value.innerHTML = '0');
    Object.values(minuses).map(minus => disableMinus(minus));
    removeClearButton(this.element);
    buttons.classList.remove('dropdown__body__buttons_space-between');
  };
  if (event.target.classList.contains('js-plus-button')) {
    if (result > 0) {
      addClearButton(this.element);
      buttons.classList.add('dropdown__body__buttons_space-between');
    };
    if (parseInt(event.target.previousSibling.innerHTML, 10) > 0) {
      enableMinus(event.target.previousSibling.previousSibling);
    };
  };
    if (event.target.classList.contains('js-minus-button')) {
      if (result === 0) {
        removeClearButton(this.element);
        buttons.classList.remove('dropdown__body__buttons_space-between');
      };
    };
  this.makeDefaultHandler()(event);
return handler;
};
const handlerMixin = {
  getValues() {
    return this.element.querySelectorAll('.js-number-picker__value');
  },

  getMinuses() {
    return this.element.querySelectorAll('.js-minus-button');
  },

  getButtonsContainer(event) {
    return event.currentTarget.querySelector('.dropdown__body__buttons');
  },

  getSumOfValues() {
    let result = [];
    const values = this.getValues();
    Object
      .values(values)
      .map(value => result
        .push(parseInt(value.innerHTML, 10)));
    result = result.reduce((prev,next) => prev + next);
    return result;
  },

  expandHandler() {
    this.rotateExpandButton();
    this.toggleBody();
  },

  clearHandler(event) {
    Object
      .values(this.getValues())
      .map(value => value.innerHTML = '0');
    Object
      .values(this.getMinuses())
      .map(minus => disableMinus(minus));
    removeClearButton(this.element);
    this
      .getButtonsContainer(event)
      .classList
      .remove('dropdown__body__buttons_space-between');
  },

  plusHandler(event) {
    console.log(event.target);
    if (this.getSumOfValues() > 0) {
      addClearButton(this.element);
      this
        .getButtonsContainer(event)
        .classList
        .add('dropdown__body__buttons_space-between');
    }
  },

  minusHandler(event) {
    if (this.getSumOfValues() === 0) {
      removeClearButton(this.element);
      this
        .getButtonsContainer(event)
        .classList
        .remove('dropdown__body__buttons_space-between');
    }
  },

  applyHandlers(event) {
    const handlers = {
      'js-expand-button': 'expandHandler',
      'material-icons': 'expandHandler',
      'js-clear-button': 'clearHandler',
      'js-plus-button': 'plusHandler',
      'js-minus-button': 'minusHandler',
    };
    Object
      .entries(handlers)
      .map(([button, applyFunc]) => event
        .target
        .classList
        .contains(button) && this[applyFunc](event));
      },

}

export default handlerMixin;
