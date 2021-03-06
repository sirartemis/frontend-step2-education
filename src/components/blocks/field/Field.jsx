import createElement from "createElement";
import Cleave from "cleave.js";
import Block from "blocks/Block";

export default class Field extends Block {
  constructor(props = {}) {
    super(['field','js-field']);
    this.props = props;
    this.setters = {
      'setMask': [this.props.mask],
      'setWithoutBorderModifier': [this.props.withoutBorder],
      'setPlaceholder': [this.props.placeholder],
      'setReadOnly': [this.props.readOnly],
      'setValue': [this.props.value],
      'setTextTransform': [this.props.textTransform],
      'setColor': [this.props.color],
      'setFontWeight': [this.props.fontWeight],
      'setWithoutLeftPadding': [this.props.withoutLeftPadding],
    };
    this
      .applyProps(this.setters)
      .setClassString(this,this.classList)
      .render();
  }

  setWithoutLeftPadding(without = false) {
    if (without === true) this.classList.add('field_without-left-padding');
    return this;
  }

  setFontWeight(weight = 'normal') {
    this.classList.add(`field_font-weight-${weight}`);
    return this;
  }

  setColor(color = 'dark-shade-75') {
    this.classList.add(`field_with-color-${color}`);
    return this;
  }

  setTextTransform(transform = 'none') {
    this.classList.add(`field_text-transform-${transform}`);
    return this;
  }

  setValue(value = '') {
    this.value = value;
    return this;
  }

  setMask(mask = false) {
    if (mask !== false) {
      this.mask = mask;
      this.classList.add('masked');
    }
    return this;
  }

  setReadOnly(readOnly = false) {
    this.readOnly = readOnly;
    return this;
  }

  setWithoutBorderModifier(withoutBorderModifier = false) {
    if (withoutBorderModifier !== false) this.classList.add('field_without-border');
    return this;
  }

  setPlaceholder(placeholder = '') {
    this.placeholder = placeholder;
    return this;
  }

  applyReadOnly(element,readOnly = false) {
    if (readOnly !== false) element.readOnly = readOnly;
    return this;
  }

  applyCleave(element,mask) {
    this.cleave = new Cleave(element,mask);
    return this;
  }

  render() {
    this.element = (
      <input type='text'
             placeholder={this.placeholder}
             className={this.classString}
             value={this.value}
      />
    );
    if (this.readOnly) this.applyReadOnly(this.element,this.readOnly);
    if (this.mask) this.applyCleave(this.element, this.mask);
    return this;
  }
}
