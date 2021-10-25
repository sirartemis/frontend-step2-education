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

  const dropDownMenu = calendar.parentNode;
  const btns = dropDownMenu.querySelector('.dropdown__btns');
  const dropDown = dropDownMenu.parentNode;

  const expandBtns = dropDown.querySelectorAll('.expand');
  const firstSelect = dropDown.querySelector('.first-select');
  const firstSelectInput = firstSelect.querySelector('input');
  const secondSelect = dropDown.querySelector('.second-select');
  const secondSelectInput = secondSelect.querySelector('input'); 

  const clearButton = dropDown.querySelector('.clear');
  const executeButton = dropDown.querySelector('.execute');

  let clearButtonToggled = false;

  executeButton.addEventListener('click', e => {

    const firstDate = cal.selectedDates[0];
    const secondDate = cal.selectedDates[1];

    const dateToString = date => {
      return cal.formatDate(date,'dd.MM.yyyy')
    }

    const firstDateString = dateToString(firstDate);
    const secondDateString = dateToString(secondDate);

    firstSelectInput.value = firstDateString;
    secondSelectInput.value = secondDateString;

  });

  calendar.addEventListener('click', e => {
    if (cal.selectedDates.length > 0) {

      if (clearButtonToggled === false) {
        clearButton.style.display = 'block';
        btns.classList.add('dropdown__btns_space_between');
        clearButtonToggled = true;

      }
    }
  });


  clearButton.addEventListener('click', e => {

    firstSelectInput.value = '';
    secondSelectInput.value = '';

    cal.clear();

    clearButton.style.display = 'none';
    btns.classList.remove('dropdown__btns_space_between');

    clearButtonToggled = false;
  });

  expandBtns.forEach(expandButton => {

    expandButton.addEventListener('click', e => {

      if (firstSelectInput.value !== ''
       && secondSelectInput.value !== ''
       && clearButtonToggled === false) {

      clearButton.style.display = 'block';
      btns.classList.add('dropdown__btns_space_between');

      clearButtonToggled = true;
    
    };
    });
  });
});
