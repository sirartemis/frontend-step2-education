import Block from '../Block';
import createElement from '../../../create-element';

export default class Button extends Block {
  constructor(blockName, props = {}) {
    super(blockName);
    this.element = this.render(props);
    this.isDisabled(props);

    return this.element;
  }

  isDisabled(props = {}) {
    this.disabled = props.disabled || false;
    if (this.disabled === true) {
      this.element.setAttribute('disabled', 'disabled');
    }
  }
  render(props = {}) {
    this.applyType(props);
    return (
      <button className={`${this.className} ${this.blockName}`}>{this.content}</button>
    )
  }

  applyExpandProps() {
    this.content = ( <span className='material-icons js-expand-button'>expand_more</span> );
    this.className = 'expand-button js-expand-button';
  }

  applyClearProps() {
    this.content = 'очистить';
    this.className = 'clear-button js-clear-button js-clear-button_removed';
  }

  applyApplyProps() {
    this.content = 'применить';
    this.className = 'apply-button js-apply-button';
  }

  applyDefaultProps() {
    this.content = 'button';
    this.className = 'button js-button';
  }

  applyMinusProps() {
    this.content = '-';
    this.className = 'minus-button js-minus-button';
  }

  applyPlusProps() {
    this.content = '+';
    this.className = 'plus-button js-plus-button';
  }

  applyType(props = {}) {
    this.type = props.type || 'default';
    const types = {
      expand: 'applyExpandProps',
      clear: 'applyClearProps',
      apply: 'applyApplyProps',
      default: 'applyDefaultProps',
      minus: 'applyMinusProps',
      plus: 'applyPlusProps',
    };
    Object.entries(types).map( ( [type, applyFunc] ) => (this.type === type) && this[applyFunc]() );
  }
}
