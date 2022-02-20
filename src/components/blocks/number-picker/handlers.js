import { disableMinus, enableMinus } from "../button/_minus/_minus";

const handlersMixin = {

  numberPickerHandlers : {
    'js-minus-button': 'minusHandler',
    'js-plus-button': 'plusHandler',
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
 }

export default handlersMixin;
