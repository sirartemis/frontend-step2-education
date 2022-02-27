import createElement from 'createElement';
import Block from 'blocks/Block';

export default class Checkbox extends Block {
  constructor(id, props = {}) {
    super(['toggle-button','js-toggle-button']);
    this.id = id;
    this.props = props;
    this.setters = {
      'setToggled': [this.props.toggled],
      'setLabel': [this.props.label],
    };
    this
      .applyProps(this.setters)
      .setClassString(this, this.classList)
      .render();
  }

  setToggled(toggled = false) {
    this.toggled = toggled;
    return this;
  }

  setLabel(label = 'tumbler') {
    this.label = label;
    return this;
  }

  render() {
    this.element = (
      <div className={this.classString}>
        <input id={this.id} type='checkbox' />
        <i></i>
        <label for={this.id}>
          {this.label}
        </label>
      </div>
    );
    if (this.checked) this.element.querySelector('input').checked = this.checked;
  }
}
