import createElement from 'createElement';
import Block from 'blocks/Block';

export default class Checkbox extends Block {
  constructor(id, props = {}) {
    super(['checkbox','js-checkbox']);
    this.id = id;
    this.props = props;
    this.setters = {
      'setChecked': [this.props.checked],
      'setLabel': [this.props.label],
      'setRich': [this.props.rich],
    }
    this
      .applyProps(this.setters)
      .setClassString(this, this.classList)
      .render();
  }

  setRich(rich = false) {
    if (rich) {
      this.rich = (
        <>
        <span className='checkbox__rich js-checkbox__rich'>
          {rich}
        </span><br/>
        </>
      )
    } else this.rich = '';
    return this;
  }

  setChecked(checked = false) {
    this.checked = checked;
    return this;
  }

  setLabel(label = 'checkbox') {
    this.label = label;
    return this;
  }

  render() {
    this.element = (
      <div className={this.classString}>
      <input id={this.id} type='checkbox' />
      <label for={this.id}>
        {this.rich}
        {this.label}
      </label>
      </div>
    )
    if (this.checked) this.element.querySelector('input').checked = this.checked;
  }
}
