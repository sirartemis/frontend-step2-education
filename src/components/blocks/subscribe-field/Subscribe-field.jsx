import Block from '../Block';
import createElement from '../../../create-element';

export default class SubscribeField extends Block {
  constructor(props = {}) {
    super(['subscribe-field','js-subscribe-field']);
    this.props = props;
    this.setters = {
      'setPlaceholder': [this.props.placeholder],
      'setValue': [this.props.value],
      'setName': [this.props.name],
      'setRequired': [this.props.required],
    }
    this.applyProps(this.setters)
      .setClassString(this, this.classList)
      .render();
    this.element.addEventListener('input', event => event.currentTarget.classList.add('js-subscribe-field_on-input'));
    document.addEventListener('click', event => {
      if (this.element.classList.contains('js-subscribe-field_on-input')) this.element.classList.remove('js-subscribe-field_on-input');
    })
  }

  setPlaceholder(placeholder = 'Email') {
    this.placeholder = placeholder;
    return this;
  }

  setValue(value = '') {
    this.value = value;
    return this;
  }

  setName(name = 'email') {
    this.name = name;
    return this;
  }

  setRequired(required = true) {
    if (required === true) this.required = required;
    return this;
  }

  applyEmailFieldToRequired() {
    this.emailField.required = true;
    return this;
  }

  makeEmailField() {
    this.emailField = (
      <input
        type='email'
        className='email-field'
        value={this.value}
        name={this.name}
        placeholder={this.placeholder}
      />
    )
    if (this.required === true) this.applyEmailFieldToRequired();
    return this;
  }

  makeSubmitButton() {
    this.submitButton = (
      <input
        type='submit'
        value='arrow_forward'
        className='material-icons'
        name='subscribe'
      />
    )
  }

  render() {
    this
      .makeEmailField()
      .makeSubmitButton();
    this.element = (
      <form className={this.classString} tabIndex='1'>
        {this.emailField}
        {this.submitButton}
      </form>
    )
    return this;
  }
}
