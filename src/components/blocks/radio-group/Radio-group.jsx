import createElement from 'createElement';
import Block from 'blocks/Block';

export default class RadioGroup extends Block {
  constructor(name, props = {}) {
    super(['radio-group','js-radio-group']);
    this.name = name;
    this.props = props;
    this.setters = {
      'setButtons': [this.props.buttons],
    }
    this
      .applyProps(this.setters)
      .setClassString(this, this.classList)
      .render();
  }

  setButtons(buttons = {
    man: { label: 'Мужчина', checked: true },
    woman:{ label: 'Женщина' },
  }) {
    this.buttons = buttons;
    return this;
  }

  makeButton(button) {
    if (button.checked) return (
      <div className='radio-button js-radio-button'>
      <input type='radio' name={this.name} checked/>
      <label className='radio-button__label js-radio-button__label'>
        {button.label}
      </label>
      </div>
    );
    return (
      <div className='radio-button js-radio-button'>
          <input type='radio' name={this.name}/>
          <label className='radio-button__label js-radio-button__label'>
            {button.label}
          </label>
      </div>
    );
  }

  makeButtons() {
    this.buttons.element = Object.values(this.buttons)
      .map(button => this.makeButton(button));
  }

  render() {
    this.makeButtons();
    this.element = (
      <div className={this.classString}>
        {this.buttons.element}
      </div>
    );
    return this;
  }
}
