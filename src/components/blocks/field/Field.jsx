import Block from "../Block";
import createElement from "../../../create-element";
import Cleave from 'cleave.js';

export default class Field extends Block {
  constructor(blockName, props = {}) {
    super(blockName);
    this.placeholder = props.placeholder || '';
    this.className = props.className || 'text-field';
    this.type = props.type || 'text';
    this.checkMask(props.mask);
    this.checkBorder(props.withoutBorder);
    this.element = this.render();
    this.element.readOnly = props.readOnly || false;
    return this.element;
  }

  render() {
    return ( <input type={ this.type }
                    placeholder={ this.placeholder }
                    className={`${this.className} ${this.blockName}`} /> );
  }

  cleave() {
    if (this.mask !== undefined) {
      return new Cleave(this.element, this.mask );
    } else {
      console.log( "This element don't has a mask. You must to add mask to the element");
    }
  }

  checkType({ ...props }) {
    const {
      numeral = false,
      date = false,
      time = false,
    } = props;
    this.className = numeral && 'number-field' || date && 'date-field' || time && 'time-field';
  }

  checkMask(mask) {
    if (mask) {
    this.mask = mask;
    this.checkType(mask);
    this.className = `masked ${this.className}`;
    this.cleave();
    }  
  }

  checkBorder(prop) {
    this.withoutBorder = prop;
    this.withoutBorder === true && ( this.className = `${this.className} ${this.className}_without-border` );
  }

}
