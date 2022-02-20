export default class Block {
  constructor(classes = []) {
    this.setClassList(this, classes);
  }

  applyProps(setters) {
    Object.entries(setters).map(([setter, args]) => this[setter](...args));
    return this;
  }

  setClassList(element, classes) {
    element.classList = new Set(classes);
    return this;
  }

  setClassString(element,classList) {
    element.classString = Array.from(classList).join(' ');
    return this;
  }

  applyHandlers(event, handlers) {
    Object.entries(handlers)
      .map(([target, applyFunc]) => event.target.classList.contains(target) && this[applyFunc](event));
  }

  handler(event) {
      this.applyHandlers(event, this.handlers);
  }

  addHandlers(handlers) {
    Object.assign(this.handlers, handlers);
    return this;
  }
}
