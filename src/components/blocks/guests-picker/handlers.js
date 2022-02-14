import { addClearButton, removeClearButton } from "../button/_clear/_clear";
import { disableMinus, enableMinus } from "../button/_minus/_minus";
import makeDeclination from "../../../utils/make-declination";

const handlersMixin = {

  getGuestsPickerHandlers() {
    return {
      'js-clear-button': 'clearGuestsPickerHandler',
      'js-minus-button': 'minusGuestsPickerHandler',
      'js-apply-button': 'applyGuestsPickerHandler',
    }
  },

  getGuestsPickerEventHandlers() {
    return {
      'js-plus-button': 'plusGuestsPickerHandler',
    }
  },

  applyGuestsPickerHandler() {
    const declination = {
      he: 'гость',
      him: 'гостя',
      their: 'гостей',
    };
    const babiesDeclination = {
      he: 'младенец',
      him: 'младенца',
      their: 'младенцев',
    };
    const guestsCount = this.getSumOfValues();
    const guests = `${guestsCount} ${makeDeclination(declination, guestsCount)}`;
    const babiesCount = parseInt(this.element.querySelector('.js-babies .js-number-picker__value').innerHTML, 10);
    const babies = (babiesCount !== 0 && `, ${babiesCount} ${makeDeclination(babiesDeclination, babiesCount)}`) || '';
    this.element
      .querySelector('.js-dropdown__head__field')
      .value = `${guests}${babies}`;
  },

  clearGuestsPickerHandler() {
    Object.values(this.getAllValues())
      .map(value => value.innerHTML = '0');
    Object.values(this.getAllMinuses())
      .map(minus => disableMinus(minus));
    removeClearButton(this.element);
    this.getButtonsContainer().classList.remove('dropdown__body__buttons_space-between');
    this.element.querySelector('.js-dropdown__head__field').value = 'Сколько гостей';
  },

  plusGuestsPickerHandler(event) {
    if (this.getSumOfValues() > 0) {
      addClearButton(this.element);
      this.getButtonsContainer().classList.add('dropdown__body__buttons_space-between');
    }
    if (parseInt(event.target.previousSibling.innerHTML, 10) > 0) {
      enableMinus(event.target.previousSibling.previousSibling);
    }
  },

  minusGuestsPickerHandler() {
    if (this.getSumOfValues() === 0) {
      removeClearButton(this.element);
      this.getButtonsContainer().classList.remove('dropdown__body__buttons_space-between');
    }
  },

  applyGuestsPickerHandlers(event) {
    Object.entries(this.getGuestsPickerHandlers())
      .map(([target, applyFunc]) => event.target.classList.contains(target) && this[applyFunc]());
    Object.entries(this.getGuestsPickerEventHandlers())
      .map(([target, applyFunc]) => event.target.classList.contains(target) && this[applyFunc](event));
  },

  makeGuestsPickerHandler() {
    const handler = event => this.applyGuestsPickerHandlers(event);
    return handler;
  }
}

export default handlersMixin;
