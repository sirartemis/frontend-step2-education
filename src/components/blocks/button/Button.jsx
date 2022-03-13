import createElement from 'createElement';
import Block from 'blocks/Block';
import likeButtonMixin from './_like/_like';

export default class Button extends Block {
  constructor(props = {}) {
    super();
    this.props = props;
    this.handlers = {};
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
      'like': { 'setLikeButton': [this.props.count] },
      'withBorder': { 'setButtonWithBorder': [] },
      'filled': { 'setFilledButton': [] },
      'big': { 'setBigButton': [] },
    }
    this
      .applyProps(this.setters)
      .setClassString(this,this.classList)
      .render();
    if (this.props.type === 'like') {
      Object.assign(Button.prototype, likeButtonMixin);
      this.addHandlers(this.likeButtonHandlers);
      this.element.addEventListener('click', event => this.handler(event));
      this.element.addEventListener('mouseover', event => this.likeButtonMouseOverHandler(event));
      this.element.addEventListener('mouseout', event => this.likeButtonMouseOutHandler(event));
    }
  }

  setType(choose = 'default') {
    Object
      .entries(this.types)
      .map(([type, apply]) => choose === type && Object.entries(apply).map(([func,args]) => this[func](...args)));
    return this;
  }

  setContent(content = 'click me') {
    this.content = content;
    return this;
  }

  setDisabled(disabled = false) {
    if (disabled === true) {
      const blockName = Array.from(this.classList)[0];
      this.classList.add(`${blockName}_disabled`);
      this.disabled = true;
      return this;
    }
  }

  setFilledButton() {
    this.classList.add('button_filled');
    this.classList.add('js-button_filled');
  }

  setBigButton() {
    this.classList.add('big-button');
    this.classList.add('js-big-button');
  }

  setButtonWithBorder() {
    this.classList.add('button_with-border');
    this.classList.add('js-button-with-border');
  }

  setLikeButton(count = '0') {
    this.setContent((
      <>
        favorite_border
      </>
    ));
    this.classList.add('like-button');
    this.classList.add('js-like-button');
    this.classList.add('material-icons');
    this.count = count;
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
    if (this.props.type === 'like') {
      const count = this.count || '';
      this.element = (
        <div className='like-button-wrapper js-like-button-wrapper'>
          <button className={this.classString}>
            {this.content}
          </button>
          <span className='js-count'>{count}</span>
        </div>
      )
    } else {
      this.element = (
      <button className={this.classString}>
        {this.content}
      </button>
    )
    }
    if (this.disabled !== undefined) this.disable(this.element);
    return this;
  }
}
