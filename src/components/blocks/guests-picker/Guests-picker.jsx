import Dropdown from "../dropdown/Dropdown";
import createElement from "../../../create-element";
import defaultProps from "./props";
import handlersMixin from "./handlers";

export default class GuestsPicker extends Dropdown {
  constructor(props = defaultProps) {
    super(props);
    Object.assign(GuestsPicker.prototype, handlersMixin);
    this.addHandlers(this.guestsPickerHandlers);
  }

  getAllValues() {
    return this.element.querySelectorAll('.js-number-picker__value');
  }

  getAllMinuses() {
    return this.element.querySelectorAll('.js-minus-button');
  }

  getSumOfValues() {
    let result = [];
    Object.values(this.getAllValues()).map(value => result.push(parseInt(value.innerHTML, 10)));
    result = result.reduce((prev, next) => prev + next);
    return result;
  }
}
