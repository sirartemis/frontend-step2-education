import Dropdown from "../dropdown/Dropdown";
import NumberPicker from "../number-picker/Number-picker";
import { disableMinus, enableMinus } from "../button/_minus/_minus";
import { addClearButton, removeClearButton } from "../button/_clear/_clear";
import createElement from "../../../create-element";
import handlersMixin from "./handlers";

export default class GuestsPicker extends Dropdown {
  constructor(blockName, props = {}, isNotSuper = false) {
    super(blockName, props, isNotSuper);
    Object.assign(GuestsPicker.prototype, handlersMixin);
    this.adults = new NumberPicker('adults', {label: 'взрослые'});
    this.children = new NumberPicker('children', {label: 'дети'});
    this.babies = new NumberPicker('babies', {label: 'младенцы'});
    this.element = this.render(props);
    this.guestsPickerHandler = this.makeGuestsPickerHandler();
    this.handler = this.makeDefaultHandler();
    this.element.addEventListener('click', event => this.guestsPickerHandler(event));
    this.element.addEventListener('click', event => this.handler(event));

    return this.element;
  }

  getAllValues() {
    return this.element.querySelectorAll('.js-number-picker__value');
  }

  getAllMinuses() {
    return this.element.querySelectorAll('.js-minus-button');
  }

  getButtonsContainer() {
    return this.element.querySelector('.dropdown__body__buttons');
  }

  getSumOfValues() {
    let result = [];
    Object.values(this.getAllValues()).map(value => result.push(parseInt(value.innerHTML, 10)));
    result = result.reduce((prev, next) => prev + next);
    return result;
  }

checkProps(props ={}) {
      this.checkHeadProps(props);
      this.checkBodyProps(props);
      this.sharpCorners = true;
      this.sharpCorners && ( this.body.class = `${this.body.class} ${this.body.baseClass}_border-with-sharp-corners` )
                        && ( this.head.class = `${this.head.class} ${this.head.baseClass}_border-with-sharp-corners` );
      this.body.buttons = true;
      this.body.content = (
        <>
          {this.adults}
          {this.children}
          {this.babies}
        </>
      );
      this.head.field.props = {
        readOnly: true,
        withoutBorder: true,
        placeholder: 'Сколько гостей',
      };
  }
}
