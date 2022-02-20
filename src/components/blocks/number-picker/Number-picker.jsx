import Block from "../Block";
import Button from "../button/Button";
import createElement from "../../../create-element";
import handlersMixin from "./handlers";

export default class NumberPicker extends Block {
  constructor(props = {}) {
    super(['number-picker','js-number-picker']);
    Object.assign(NumberPicker.prototype, handlersMixin);
    this.props = props;
    this.setters = {
      'setLabel': [this.props.label],
      'setValue': [this.props.value],
    };
    this.handlers = {};
    this
      .applyProps(this.setters)
      .setClassString(this, this.classList)
      .render()
      .addHandlers(this.numberPickerHandlers)
      .element.addEventListener('click', event => this.handler(event));
  }

  setLabel(label = 'count') {
    this.label = {};
    this.label.content = label
    return this;
  }

  setValue(value = '0') {
    this.value = {};
    this.value.content = value;
    return this;
  }

  isValueNull() {
    return this.value.element.innerHTML === '0';
  }

  getNumericValue() {
    return parseInt(this.value.element.innerHTML, 10);
  }

  changeValue(value) {
    this.value.element.innerHTML = value.toString();
    return this;
  }

  increaseValue() {
    this.changeValue(this.getNumericValue() + 1);
    return this;
  }

  decreaseValue() {
    this.changeValue(this.getNumericValue() - 1);
    return this;
  }

  render() {
    this.label.element = (
      <span className='number-picker__label js-number-picker__label'>
        {this.label.content}
      </span>
    );
    this.minus= new Button({ type: 'minus', disabled: true });
    this.value.element = (
      <span className='number-picker__value js-number-picker__value'>
        {this.value.content}
      </span>
    );
    this.plus= new Button({ type: 'plus' });
    this.rightSide = {};
    this.rightSide.element = (
      <div className='number-picker__right-side js-number-picker__right-side'>
        {this.minus.element}
        {this.value.element}
        {this.plus.element}
      </div>
    );
    this.element =  (
      <div className={this.classString}>
        {this.label.element}
        {this.rightSide.element}
      </div>
    );
    return this;
  }
}
