import AirDatepicker from "air-datepicker";
import { addClearHandler, removeClearHandler } from "../../dropdown/__btns/__btns";

const calendars = document.querySelectorAll('.calendar');

calendars.forEach(calendar => {
  const cal = new AirDatepicker(calendar, {
    navTitles: {
      days: 'MMMM yyyy'
    },
    prevHtml: "<span class='material-icons'>arrow_back</span>",
    nextHtml: "<span class='material-icons'>arrow_forward</span>",
    range:true,
  });
  const execute = document.querySelector('.execute');
  execute.addEventListener('click', e => {
    const dropDownButtons = e.target.parentNode;
    const dropDownMenu = dropDownButtons.parentNode;
    const dropDown = dropDownMenu.parentNode;
    const firstSelect = dropDown.querySelector('.first-select');
    const secondSelect = dropDown.querySelector('.second-select');

    const firstDate = cal.selectedDates[0];
    const secondDate = cal.selectedDates[1];

    const dateToString = date => {
      return cal.formatDate(date,'dd.MM.yyyy')
    }

    const firstDateString = dateToString(firstDate);
    const secondDateString = dateToString(secondDate);

    firstSelect.innerHTML = firstDateString;
    secondSelect.innerHTML = secondDateString;

    console.log(cal.selectedDates.length);

  });

  calendar.addEventListener('click', e => {
    if (cal.selectedDates.length > 0) {
      addClearHandler(e);
      console.log(calendar)
    }
  })

});
