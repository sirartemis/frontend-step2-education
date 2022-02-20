import createElement from '../../../create-element';
import Block from '../Block';

export default class Button extends Block {
  constructor(props = {}) {
    super();
    this.props = props;
    this.setters = {
      'setContent': [this.props.content],
      'setType': [this.props.type],
      'setDisabled': [this.props.disabled],
    };
    this.types = {
      'expand': { 'setExpandButton': [] },
      'clear': { 'setClearButton': [this.props.removed] },
      'apply': { 'setApplyButton': [] },
      'default': { 'setDefaultButton': [] },
      'minus': { 'setMinusButton': [this.props.disabled] },
      'plus': { 'setPlusButton': [] },
    }
    this
      .applyProps(this.setters)
      .setClassString(this,this.classList)
      .render();
  }

  setType(choose) {
    Object
      .entries(this.types)
      .map(([type, apply]) => choose === type && Object.entries(apply).map(([func,args]) => this[func](...args)));
    return this;
  }

  setContent(content = 'button') {
    this.content = content;
    return this;
  }

  setDisabled(disabled = false) {
    if (disabled === true) this.disabled = true;
    return this;
  }

  setExpandButton() {
    this.setContent(( 
      <>
        expand_more
      </>
    ));
    this.classList.add('expand-button');
    this.classList.add('js-expand-button');
    this.classList.add('material-icons');
    return this;
  }

  setClearButton(removed = false) {
    this.setContent('очистить');
    this.classList.add('clear-button');
    this.classList.add('js-clear-button');
    if (removed === true) this.classList.add('js-clear-button_removed');
    return this;
  }

  setApplyButton() {
    this.setContent('применить');
    this.classList.add('apply-button');
    this.classList.add('js-apply-button');
    return this;
  }

  setDefaultButton() {
    this.setContent('button');
    this.classList.add('button');
    this.classList.add('js-button');
    return this;
  }

  setMinusButton(disabled = false) {
    this.setContent('-');
    this.classList.add('minus-button');
    this.classList.add('js-minus-button');
    if (disabled === true) this.classList.add('js-minus-button_disabled')
    return this;
  }

  setPlusButton() {
    this.setContent('+');
    this.classList.add('plus-button');
    this.classList.add('js-plus-button');
    return this;
  }

  disable(element) {
    element.disabled = true;
    return this;
  }

  render() {
    this.element = (
      <button className={this.classString}>
        {this.content}
      </button>
    )
    if (this.disabled !== undefined) this.disable(this.element);
    return this;
  }
}
