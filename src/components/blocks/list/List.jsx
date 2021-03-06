import Block from 'blocks/Block';
import createElement from 'createElement';

export default class List extends Block {
  constructor(props = {}) {
    super(['list','js-list']);
    this.props = props;
    this.setters = {
      'setItems': [this.props.items],
      'setListStyleType': [this.props.listStyleType],
      'setLeftPadding' : [this.props.leftPadding],
    };
    this
      .applyProps(this.setters)
      .setClassString(this,this.classList)
      .render();
  }

  setLeftPadding(padding = false) {
    if (padding === true) this.classList.add('list_with-left-padding');
    return this;
  }

  setListStyleType(lst = 'none') {
    this.classList.add(`list_style-type-${lst}`);
    return this;
  }

  setItems(items = { '1' : 'Empty list' }) {
    this.items = {};
    Object.entries(items)
      .map(([key, item]) => {
        this.items[key] = (
          <li className={`${key} js-${key}`}>
            {item}
          </li>
        );
      });
    return this;
  }

  makeItems() {
    this.items.element = Object.values(this.items)
      .map(item => item);
    return this;
  }

  render() {
    this.makeItems();
    this.element = (
      <ul className={this.classString}>
        {this.items.element}
      </ul>
    );
    return this;
  }
}
