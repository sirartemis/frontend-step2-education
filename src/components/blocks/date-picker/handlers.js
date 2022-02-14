import { addClearButton, removeClearButton } from "../button/_clear/_clear";

const handlersMixin = {
  getDatePickerHandlers() {
    return {
      'js-clear-button': 'datePickerClearHandler',
      'js-apply-button': 'datePickerApplyHandler',
    }
  },

  applyDatePickerHandlers(event) {
    Object.entries(this.getDatePickerHandlers())
      .map(([target, applyFunc]) => event.target.classList.contains(target) && this[applyFunc]());
  },

  datePickerClearHandler() {
    console.log(this.element.firstChild.classList.contains('dropdown__double-head'));
    if (this.element.firstChild.classList.contains('dropdown__double-head')) {
      this.element.querySelector('.js-dropdown__first-head__field').value = '';
      this.element.querySelector('.js-dropdown__second-head__field').value = '';
    } else {
      this.element.querySelector('.js-dropdown__head__field').value = '';
    }
    this.calendar.clear();
    removeClearButton(this.element);
    this.getButtonsContainer().classList.remove('dropdown__body__buttons_space-between');
  },

  datePickerApplyHandler() {
    if (this.element.firstChild.classList.contains('dropdown__double-head')) {
      this.element
        .querySelector('.js-dropdown__first-head__field')
        .value = this.dateToString(this.getFirstDate());
      this.element
        .querySelector('.js-dropdown__second-head__field')
        .value = this.dateToString(this.getSecondDate());
    } else {
      this.element
        .querySelector('.js-dropdown__head__field')
        .value = `${this.dateForSingleHead(this.getFirstDate())} - ${this.dateForSingleHead(this.getSecondDate())}`;
    }
  },

  datePickerCalendarHandler() {
    if (this.getSelectedDatesCount() > 0) {
      addClearButton(this.element);
      this.getButtonsContainer().classList.add('dropdown__body__buttons_space-between');
    } 
  },

  makeDatePickerHandler() {
    const handler = event => this.applyDatePickerHandlers(event);
    return handler;
  }
}

export default handlersMixin;
