import Dropdown from "blocks/dropdown/Dropdown";
import AirDatepicker from "air-datepicker";
import handlersMixin from "./handlers";
import { defaultProps, doubleProps } from "./props";

export default class DatePicker extends Dropdown {
  constructor(type = 'default') {
    if (type === 'default') {
      super(defaultProps)
    } else super(doubleProps);
    Object.assign(DatePicker.prototype, handlersMixin);
    this
      .makeCalendar()
      .addHandlers(this.datePickerHandlers);
    this.body.content.addEventListener('click', event => this.datePickerCalendarHandler(event));
  }

  makeCalendar() {
    this.calendar = new AirDatepicker(this.props.body.content, {
      navTitles: {
        days: 'MMMM yyyy'
      },
      prevHtml: "<span class='material-icons'>arrow_back</span>",
      nextHtml: "<span class='material-icons'>arrow_forward</span>",
      range: true,
    });
    return this;
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
}
