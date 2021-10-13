import AirDatepicker from "air-datepicker";

const calendars = document.querySelectorAll('.calendar');

calendars.forEach(calendar => {
  new AirDatepicker(calendar, {
    navTitles: {
      days: 'MMMM yyyy'
    }
  });
});
