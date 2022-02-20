import { addClearButton, removeClearButton } from "../button/_clear/_clear";
import { disableMinus, enableMinus } from "../button/_minus/_minus";
import makeDeclination from "../../../utils/make-declination";

const handlersMixin = {

  guestsPickerHandlers : {
      'js-clear-button': 'clearGuestsPickerHandler',
      'js-minus-button': 'minusGuestsPickerHandler',
      'js-apply-button': 'applyGuestsPickerHandler',
      'js-plus-button': 'plusGuestsPickerHandler',
    },

  applyGuestsPickerHandler(event) {
    const guestsCount = this.getSumOfValues();
    const guestsDeclination = makeDeclination(this.props.declinations.guests, guestsCount);
    const guests = `${guestsCount} ${guestsDeclination}`;
    const babiesCount = this.props.babies.getNumericValue();
    const babiesDeclination = makeDeclination(this.props.declinations.babies, babiesCount);
    let babies = '';
    if (babiesCount > 0) {
      babies = `, ${babiesCount} ${babiesDeclination}`;
    } else babies = '';
    this.changeHeadFieldValue(`${guests}${babies}`);
    return event;
  },

  clearGuestsPickerHandler(event) {
    Object.values(this.getAllValues())
      .map(value => value.innerHTML = '0');
    Object.values(this.getAllMinuses())
      .map(minus => disableMinus(minus));
    removeClearButton(this.element);
    this.getButtonsContainer().classList.remove('dropdown__body__buttons_space-between');
    this.changeHeadFieldValue(this.props.head.field.props.placeholder);
    return event;
  },

  plusGuestsPickerHandler(event) {
    if (this.getSumOfValues() > 0) {
      addClearButton(this.element);
      this.getButtonsContainer().classList.add('dropdown__body__buttons_space-between');
    }
    if (parseInt(event.target.previousSibling.innerHTML, 10) > 0) {
      enableMinus(event.target.previousSibling.previousSibling);
    }
    return event;
  },

  minusGuestsPickerHandler(event) {
    if (this.getSumOfValues() === 0) {
      removeClearButton(this.element);
      this.getButtonsContainer().classList.remove('dropdown__body__buttons_space-between');
    }
    return event;
  },
}

export default handlersMixin;
