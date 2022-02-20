import { addClearButton, removeClearButton } from "../button/_clear/_clear";

const handlersMixin = {

  datePickerHandlers : {
      'js-clear-button': 'datePickerClearHandler',
      'js-apply-button': 'datePickerApplyHandler',
      'js-dropdown__calendar': 'datePickerCalendarHandler',
    },

  datePickerClearHandler(event) {
    if (this.head.double) {
      this.head.double.first.field.element.value = '';
      this.head.double.second.field.element.value = '';
    } else {
      this.head.field.element.value = '';
    }
    this.calendar.clear();
    removeClearButton(this.element);
    this.getButtonsContainer().classList.remove('dropdown__body__buttons_space-between');
    return event;
  },

  datePickerApplyHandler(event) {
    if (this.head.double) {
        this.head.double.first.field.element.value = this.dateToString(this.getFirstDate());
        this.head.double.second.field.element.value = this.dateToString(this.getSecondDate());
    } else {
        this.head.field.element.value = `${this.dateForSingleHead(this.getFirstDate())} - ${this.dateForSingleHead(this.getSecondDate())}`;
    }
    return event;
  },

  datePickerCalendarHandler(event) {
    if (this.getSelectedDatesCount() > 0) {
      addClearButton(this.element);
      this.getButtonsContainer().classList.add('dropdown__body__buttons_space-between');
    } 
    return event;
  },
}

export default handlersMixin;
