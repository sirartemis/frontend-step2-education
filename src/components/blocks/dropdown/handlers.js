const handlersMixin = {

  getHandlers() {
    return {
      'js-expand-button': 'expandHandler',
    }
  },

  applyHandlers(event, handlers) {
    Object.entries(handlers)
      .map(([target, applyFunc]) => event.target.classList.contains(target) && this[applyFunc](event));
  },

  expandHandler(event) {
    this.rotateExpandButton(event);
    this.toggleBody();
  },

  makeDefaultHandler() {
    const handler = event => {
      this.applyHandlers(event, this.getHandlers());
    }
    return handler;
  },
}

export default handlersMixin;
