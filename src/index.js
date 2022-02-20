import './styles/main.scss'
import createElement from "./create-element";
import DatePicker from './components/blocks/date-picker/Date-picker';
import GuestsPicker from './components/blocks/guests-picker/Guests-picker';
import Dropdown from './components/blocks/dropdown/Dropdown';
import Field from './components/blocks/field/Field';

const {
  dropdown = new Dropdown(),
  datePicker = new DatePicker(),
  doubleDatePicker = new DatePicker('double'),
  guestsPicker = new GuestsPicker(),
  field = new Field(),
} = {};

const element = (
  <div style='display: inherit; width: 90vw; justify-content: space-between'>
    {dropdown.element}
    {datePicker.element}
    {doubleDatePicker.element}
    {guestsPicker.element}
    {field.element}
    HI hi hi
  </div>
)

document.body.append(element);
