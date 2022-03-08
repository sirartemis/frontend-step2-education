const likeButtonMixin = {
  likeButtonHandlers: {
    'js-like-button-wrapper': 'likeButtonHandler',
    'js-like-button': 'likeButtonHandler',
    'js-count': 'likeButtonHandler',
  },

  likeButtonHandler(event) {
    const count = this.element.querySelector('span').innerHTML;
    if (count > this.count) return event;
    this.element.querySelector('span').innerHTML = parseInt(this.count, 10) + 1;
    this.element.querySelector('.js-like-button').innerHTML = 'favorite';
    this.element.classList.add('js-like-button-wrapper_clicked');
    return event;
  },

  likeButtonMouseOverHandler(event) {
    if (this.element.classList.contains('js-like-button-wrapper_clicked') === false) {
    this.element.classList.add('js-like-button-wrapper_hover');
    }
    return event;
  },

  likeButtonMouseOutHandler(event) {
    if (this.element.classList.contains('js-like-button-wrapper_clicked') === false) {
    this.element.classList.remove('js-like-button-wrapper_hover');
    }
    return event;
  }
}

export default likeButtonMixin;
