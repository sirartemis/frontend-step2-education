import Dropdown from 'blocks/dropdown/Dropdown';
import createElement from 'createElement';
import makeDeclination from 'utils/make-declination';
import shortenTheString from 'utils/shorten-the-string';
import defaultProps from './props';
import handlersMixin from './handlers';

export default class RoomsPicker extends Dropdown {
  constructor(props = defaultProps) {
    super(props);
    this.headValue = '2 спальни, 2 кровати';
    this
      .changeBedroomsResult()
      .changeBedsResult()
      .changeBathroomsResult();
    Object.assign(RoomsPicker.prototype, handlersMixin);
    this.addHandlers(this.roomsPickerHandlers);
    this.head.field.element.addEventListener('mouseover', event => this.roomsPickerHeadFieldMouseOverHandler(event));
    this.head.field.element.addEventListener('mouseout', event => this.roomsPickerHeadFieldMouseOutHandler(event));
  }

  changeBedroomsResult() {
    const {
      bedroomsCount = parseInt(this.props.bedrooms.value.element.innerHTML, 10),
      bedroomsDeclination = makeDeclination(this.props.declinations.bedrooms, bedroomsCount)
    } = {};
    this.bedrooms = `${bedroomsCount} ${bedroomsDeclination}`;
    return this;
  }

  changeBedsResult() {
    const {
      bedsCount = parseInt(this.props.beds.value.element.innerHTML, 10),
      bedsDeclination = makeDeclination(this.props.declinations.beds, bedsCount)
    } = {};
    this.beds = `, ${bedsCount} ${bedsDeclination}`;
    return this;
  }

  changeBathroomsResult() {
    const {
      bathroomsCount = parseInt(this.props.bathrooms.value.element.innerHTML, 10),
      bathroomsDeclination = makeDeclination(this.props.declinations.bathrooms, bathroomsCount)
    } = {};
    this.bathrooms = `, ${bathroomsCount} ${bathroomsDeclination}`;
    return this;
  }

  changeHeadValue() {
    this.headValue = `${this.bedrooms}${this.beds}${this.bathrooms}`;
    this.head.field.element.value = shortenTheString(this.headValue, 20);
    return this;
  }
}
