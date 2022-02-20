import Block from "../Block";
import createElement from "../../../create-element";
import handlersMixin from "./handlers";
import headMixin from './__head/mixin';
import bodyMixin from "./__body/mixin";

export default class Dropdown extends Block {
  constructor(props = {}) {
    super(['dropdown','js-dropdown']);
    Object.assign(Dropdown.prototype, 
      handlersMixin,
      headMixin,
      bodyMixin,
    );
    this.props = props;
    this.setters = {
      'setSharpCornersForAll': [this.props.sharpCorners],
      'setHead': [this.props.head],
      'setBody': [this.props.body],
    };
    this.handlers = {};
    this
      .applyProps(this.setters)
      .setClassString(this,this.classList)
      .render()
      .addHandlers(this.dropdownHandlers);
    this.element.addEventListener('click', event => this.handler(event));
  }

  setSharpCornersForAll(sharpCorners = false) {
    this.sharpCorners = sharpCorners;
    return this;
  }

  render() {
    this
      .headRender()
      .bodyRender();
    const head = this?.head?.double?.element || this?.head?.element;
    this.element = (
      <div className={this.classString}>
        {head}
        {this.body.element}
      </div>
    );
    return this;
  }
}
