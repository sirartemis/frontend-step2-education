import createElement from 'createElement';

const handlersMixin = {

  roomsPickerHandlers: {
    'js-minus-button': 'roomsPickerHandler',
    'js-plus-button': 'roomsPickerHandler',
  },

  roomsPickerHandler(event) {
    const {
      targetPicker = event.target.parentNode.parentNode,
      targetLabel = targetPicker.querySelector('.js-number-picker__label').innerHTML
    } = {};
    switch (targetLabel) {
      case 'спальни':
        this.changeBedroomsResult();
        break;
      case 'кровати':
        this.changeBedsResult();
        break;
      case 'ванные комнаты':
        this.changeBathroomsResult();
        break;
      default:
        break;
    }
    this.changeHeadValue();
    return event;
  },

  roomsPickerHeadFieldMouseOverHandler(event) {
    const [x,y] = [event.clientX,event.clientY];
    this.alt = (
      <div className='js-alt'>
        {this.headValue}
      </div>
    );
    this.alt.style.position = 'absolute';
    this.alt.style.left = `${x}px`;
    this.alt.style.top = `${y}px`;
    this.head.element.append(this.alt);
    setTimeout(() => this.alt.classList.add('js-alt_active'),1000);
    return event;
  },

  roomsPickerHeadFieldMouseOutHandler(event) {
    setTimeout(() => this.alt.remove(),100);
    return event;
  }
}

export default handlersMixin;
