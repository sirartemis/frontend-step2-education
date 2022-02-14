import Dropdown from "../dropdown/Dropdown";
import createElement from "../../../create-element";
import AirDatepicker from "air-datepicker";
import handlersMixin from "./handlers";

export default class DatePicker extends Dropdown {
  constructor(blockName, props = {}, isNotSuper = false) {
    super(blockName, props, isNotSuper);
    Object.assign(DatePicker.prototype, handlersMixin);
    this.element = this.render(props);
    this.makeCalendar();
    this.handler = this.makeDefaultHandler();
    this.datePickerHandler = this.makeDatePickerHandler();
    this.element.addEventListener('click', () => this.datePickerCalendarHandler());
    this.element.addEventListener('click', event => this.datePickerHandler(event));
    this.element.addEventListener('click', event => this.handler(event));

    return this.element;
  }

  checkProps(props = {}) {
    this.checkHeadProps(props);
    this.checkBodyProps(props);
    this.head.field = props.head && props.head.field || {};
    if (props.double) {
      this.head.double = {
        first: {
          class: 'dropdown__first-head js-dropdown__first-head',
          props: {
            placeholder: 'ДД.ММ.ГГГГ',
            withoutBorder: true,
            readOnly: true,
          }
        },
        second: {
          class: 'dropdown__second-head js-dropdown__second-head',
          props: {
            placeholder: 'ДД.ММ.ГГГГ',
            withoutBorder: true,
            readOnly: true,
          }
        }
      };
    } else {
      this.head.field.props = {
        placeholder: 'ДД.ММ.ГГГГ - ДД.ММ.ГГГГ',
        withoutBorder: true,
      }
    }
    this.body.buttons = true;
    this.body.class = `${this.body.class} ${this.body.baseClass}_with-gap` 
    this.body.content = (
      <div className={`${this.className}__calendar js-${this.className}__calendar`}></div>
    )
  }

  makeCalendar() {
    this.calendar = new AirDatepicker(this.element.querySelector(`.js-${this.className}__calendar`), {
      navTitles: {
        days: 'MMMM yyyy'
      },
      prevHtml: "<span class='material-icons'>arrow_back</span>",
      nextHtml: "<span class='material-icons'>arrow_forward</span>",
      range: true,
    });
  }

  getFirstDate() {
    return this.calendar.selectedDates[0];
  }

  getSecondDate() {
    return this.calendar.selectedDates[1];
  }

  getSelectedDatesCount() {
    return this.calendar.selectedDates.length;
  }

  changeSelectedDate(which, value) {
    this.calendar.selectedDates[which - 1] = value;
  }

  dateToString(date) {
    return this.calendar.formatDate(date, 'dd.MM.yyyy');
  }

  dateForSingleHead(date) {
    return this.calendar.formatDate(date, 'dd MMM').toLowerCase();
  }

  getButtonsContainer() {
    return this.element.querySelector('.js-dropdown__body__buttons');
  }
}
