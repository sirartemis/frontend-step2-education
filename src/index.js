import 'styles/main.scss'
import createElement from "createElement";
import DatePicker from 'blocks/date-picker/Date-picker';
import GuestsPicker from 'blocks/guests-picker/Guests-picker';
import Dropdown from 'blocks/dropdown/Dropdown';
import Field from 'blocks/field/Field';
import SubscribeField from 'blocks/subscribe-field/Subscribe-field';

const {
  dropdown = new Dropdown(),
  datePicker = new DatePicker(),
  doubleDatePicker = new DatePicker('double'),
  guestsPicker = new GuestsPicker(),
  subscribeField = new SubscribeField(),
} = {};

const element = (
  <div style='display: inherit; width: 90vw; flex-flow: row wrap; justify-content: space-between'>
    {dropdown.element}
    {datePicker.element}
    {doubleDatePicker.element}
    {guestsPicker.element}
    {subscribeField.element}
  </div>
)

document.body.append(guestsPicker.element);
