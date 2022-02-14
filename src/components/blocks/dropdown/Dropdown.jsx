import Button from "../button/Button";
import handlersMixin from "./handlers";
import createElement from "../../../create-element";
import Field from "../field/Field";

export default class Dropdown {
  constructor(blockName, props = {}, isNotSuper = true) {
    this.blockName = `js-${blockName}`;
    Object.assign(Dropdown.prototype, handlersMixin);
    this.className = props.className || 'dropdown';
    if (isNotSuper === true) {
      this.element = this.render(props);

      this.handler = this.makeDefaultHandler();
      this.element.addEventListener('click', event => this.handler(event));

      return this.element;
    }
  }

  toggleBody() {
    const body = this.element.querySelector(`.js-${this.className}__body`);
    const expanded = `js-${this.className}__body_expanded`;
    const isBodyExpanded = body.classList.contains(expanded);
    if (isBodyExpanded === false) {
      body.classList.add(expanded);
    } else {
      body.classList.remove(expanded);
    }
  }

  rotateExpandButton(event) {
    let expandButton;
    if (event.target.classList.contains('material-icons')) {
      expandButton = event.target.parentNode;
    } else {
      expandButton = event.target;
    }
    const rotated = 'js-expand-button_rotated';
    const isButtonRotated = expandButton.classList.contains(rotated);
    if (event.currentTarget.firstChild.classList.contains('dropdown__double-head')) {
      const expandButtons = event.currentTarget.querySelectorAll('.js-expand-button');
      Object.values(expandButtons).map(button => {
        if (expandButton === button) return;
        if (button.classList.contains(rotated) && isButtonRotated === false) {
          button.classList.remove(rotated);
          expandButton.classList.add(rotated);
          this.toggleBody();
        } else {
    if (isButtonRotated === false) {
      expandButton.classList.add(rotated);
    } else {
      expandButton.classList.remove(rotated);
    }
        }
      })
    } else {
    if (isButtonRotated === false) {
      expandButton.classList.add(rotated);
    } else {
      expandButton.classList.remove(rotated);
    }
    }
    return this;
  }

  checkProps(props = {}) {
    this.checkHeadProps(props);
    this.checkBodyProps(props);
    this.sharpCorners = props.sharpCorners || false;
    this.sharpCorners && ( this.body.class = `${this.body.class} ${this.body.baseClass}_border-with-sharp-corners` )
                      && ( this.head.class = `${this.head.class} ${this.head.baseClass}_border-with-sharp-corners` );
      }

  checkHeadProps(props = {}) {
    this.head = props.head || {};
    this.head.baseClass = `${this.className}__head`;
    this.head.class = `${this.head.baseClass}`;
    this.head.sharpCorners = props.head && props.head.sharpCorners || false;
    this.head.sharpCorners && (this.sharpCorners === false)
                           &&( this.head.class =  `${this.head.class} ${this.head.baseClass}_border-with-sharp-corners`);

        if (props.head && props.head.double) {
      this.head.double = props.head.double;
      if (props.head.double.first && props.head.double.first.props) {
        this.head.double.first.postfix = '__first-head';
        this.head.double.first.class = `${this.className}${this.head.double.first.postfix} js-${this.className}${this.head.double.first.postfix}`;
        this.head.double.first.props = props.head.double.first.props || { withoutBorder: true };
      }
      if (props.head.double.second && props.head.double.second.props) {
        this.head.double.second.postfix = '__second-head';
        this.head.double.second.class = `${this.className}${this.head.double.second.postfix} js-${this.className}${this.head.double.second.postfix}`;
        this.head.double.second.props = props.head.double.second.props || { withoutBorder: true };
      }
                } else {
        this.head.field = props.head && props.head.field || {};
        this.head.field.props = props.head 
          && props.head.field
          && props.head.field.props
          || {
        withoutBorder: true
      };

        }
  }

  makeHeadField() {
    this.head.field = new Field('dropdown__head__field', this.head.field.props);
  }

  makeExpandButton() {
    this.expandButton = new Button('dropdown__head__expand-button', { type: 'expand' });
  }

  makeDoubleHead() {
    const firstField = new Field(`${this.head.double.first.class}__field`, this.head.double.first.props);
    const firstExpand = new Button(`${this.head.double.first.class}__expand-button`, { type: 'expand' });
    const secondField = new Field(`${this.head.double.second.class}__field`, this.head.double.second.props);
    const secondExpand = new Button(`${this.head.double.second.class}__expand-button`, { type: 'expand' });
    return (
      <div className='dropdown__double-head js-dropdown__double-head'>
        <div className={this.head.double.first.class}>
          {firstField}{firstExpand}
        </div>
        <div className={this.head.double.second.class}>
          {secondField}{secondExpand}
        </div>
      </div>
    )
  }

  headRender() {
    let headField;
    if (this.head.double) {
      return this.makeDoubleHead();
    } else {
    this.makeHeadField();
    this.makeExpandButton();
    headField = this.head.field || '';
    }
    return (
      <div className={`${this.head.class} js-${this.className}__head`}>
        {headField}{this.expandButton}
      </div>
    )
  }

  checkBodyProps(props = {}) {
    this.body = props.body || {};
    this.body.buttons = props.body && props.body.buttons || false;
    this.body.baseClass = `${this.className}__body`;
    this.body.class = `${this.body.baseClass}`;
    this.body.sharpCorners = props.body && props.body.sharpCorners || false;
    this.body.sharpCorners && (this.sharpCorners === false)
                           && ( this.body.class = `${this.body.class} ${this.body.baseClass}_border-with-sharp-corners` );
    this.body.gap = props.body && props.body.gap || false;
    this.body.gap && ( this.body.class = `${this.body.class} ${this.body.baseClass}_with-gap` );
    this.body.content = props.body && props.body.content || '';
  }

  makeClearButton() {
    this.clearButton = new Button('dropdown__body__clear-button', { type: 'clear' });
  }

  makeApplyButton() {
    this.applyButton = new Button('dropdown__body__apply-button', { type: 'apply' });
  }

  makeButtons() {
    if (this.body.buttons) {
      this.makeClearButton();
      this.makeApplyButton();
      this.body.buttons = (
        <div className='dropdown__body__buttons js-dropdown__body__buttons'>
          {this.clearButton}
          {this.applyButton}
        </div>
      )
    }
  }

  bodyRender() {
    this.makeButtons();
    const buttons = this.body.buttons || '';
    return (
      <div className={`${this.body.class} js-${this.className}__body`}>
        {this.body.content}
        {buttons}
      </div>
    )
  }

  render(props = {}) {
    this.checkProps(props);
    this.head = this.headRender();
    this.body = this.bodyRender();
    return (
      <div className={`${this.blockName} ${this.className} js-${this.className}`}>
        {this.head}{this.body}
      </div>
    )
  }
}
