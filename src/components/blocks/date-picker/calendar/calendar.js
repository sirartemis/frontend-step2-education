import AirDatepicker from "air-datepicker";

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
  calendar.addEventListener('click', e => {
    cal.setViewDate(e);
  })
});
