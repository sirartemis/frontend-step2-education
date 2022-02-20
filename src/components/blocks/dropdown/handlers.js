const handlersMixin = {

  dropdownHandlers : {
    'js-expand-button': 'expandHandler',
  },

  expandHandler(event) {
    this.rotateExpandButton(event);
    this.toggleBody();
  },
}

export default handlersMixin;
