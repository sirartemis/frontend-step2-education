import handlersMixin from "./handlers";
import Button from "../button/Button";
import { disableMinus } from "../button/_minus/_minus";
import createElement from "../../../create-element";

export default class NumberPicker {
  constructor(blockName, props = {}) {
    this.blockName = `js-${blockName}`;
    Object.assign(NumberPicker.prototype, handlersMixin);
    this.className = props.className || 'number-picker';
    this.label = props.label || 'count';
    this.value = props.value || '0';
    this.element = this.render();
    disableMinus(this.element.querySelector('.js-minus-button'));
    this.handler = this.makeDefaultHandler();
    this.element.addEventListener('click', event => this.handler(event));
    return this.element;
  }

  isValueNull() {
    return this.element.querySelector(`.js-${this.className}__value`).innerHTML === '0';
  }

  getNumericValue() {
    return parseInt(this.element.querySelector(`.js-${this.className}__value`).innerHTML, 10);
  }

  changeValue(value) {
    this.element.querySelector(`.js-${this.className}__value`).innerHTML = value;
  }

  increaseValue() {
    let value = this.getNumericValue();
    value += 1;
    this.changeValue(value.toString());
  }

  decreaseValue() {
    let value = this.getNumericValue();
    value -= 1;
    this.changeValue(value.toString());
  }

  makeMinus() {
    return new Button('number-picker__minus', {type: 'minus'});
  }

  makePlus() {
    return new Button('number-picker__plus', {type: 'plus'});
  }

  render() {
    const [ minus, plus ] = [ this.makeMinus(), this.makePlus() ];
    return (
      <div className={`${this.className} ${this.blockName}`}>
        <label className={`${this.className}__label js-${this.className}__label`}>{this.label}</label>
        <div className='number-picker__right-side js-number-picker__right-side'>
          {minus}
          <span className={`${this.className}__value js-${this.className}__value`}>
            {this.value}
          </span>
          {plus}
        </div>
      </div>
    )
  }
}
