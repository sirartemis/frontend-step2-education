import './styles/main.scss'
import createElement from "./create-element";
import Dropdown from './components/blocks/dropdown/Dropdown';
import NumberPicker from './components/blocks/number-picker/Number-picker';
import GuestsPicker from './components/blocks/guests-picker/Guests-picker';
import Field from './components/blocks/field/Field';
import DatePicker from './components/blocks/date-picker/Date-picker';

const numberPickers = {
  adults: new NumberPicker('adults', {label: 'взрослые'}),
  children: new NumberPicker('childern', {label: 'дети'}),
}

const myDatepicker = new DatePicker('my-datepicker', { double: true });
const anotherDatePicker = new DatePicker('anotherDatePicker');
const myGuestsPicker = new GuestsPicker('my-guests-picker');
const anotherDropdown = new Dropdown('another-dropdown', {
  head: {
    double: {
      first: {
        props: {
          placeholder: 'Enter',
          withoutBorder: true,
        }
      },
      second: {
        props: {
          placeholder: 'enter',
          withoutBorder: true,
        }
      }
    }
  },
  body: {
    gap: true,
    content: (
      <>
        {new Field('my-field',{placeholder: 'Введите свое имя',withoutBorder: true})}
      </>
    )
  }
});
const myDropdown = new Dropdown('my-dropdown',{
  head: {
    field: {
      props: {
        readOnly:true,
        placeholder: 'Блаблабла',
      },
    },
  },
  body: {
    gap: true,
    content: (
      <>
      {numberPickers.adults}
      {numberPickers.children}
        {new Field('my-field',{placeholder: 'Введите свое имя',withoutBorder: true})}
      </>
    )
  }
});

const block = (
  <div>
    {myGuestsPicker}
    {myDatepicker}
    {anotherDatePicker}
  </div>
)

document.body.append(block);

