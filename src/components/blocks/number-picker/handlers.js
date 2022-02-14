import { disableMinus, enableMinus } from "../button/_minus/_minus";

const handlersMixin = {

  getHandlers() {
    return {
      'js-minus-button': 'minusHandler',
      'js-plus-button': 'plusHandler',
    }
  },

  applyHandlers(event, handlers) {
    Object.entries(handlers)
      .map(([target, applyFunc]) => event.target.classList.contains(target) && this[applyFunc]());
  },

  minusHandler() {
    if (this.isValueNull() === false) {
      this.decreaseValue();
    }
    if (this.isValueNull() === true) {
      disableMinus(this.element.querySelector('.js-minus-button'));
    }
  },

  plusHandler() {
    this.increaseValue();
    if (this.isValueNull() === false) enableMinus(this.element.querySelector('.js-minus-button'));
  },

  makeDefaultHandler() {
    const handler = event => {
      this.applyHandlers(event, this.getHandlers());
    }
    return handler;
  }
}

export default handlersMixin;
