import 'styles/main.scss'
import createElement from "createElement";
import DatePicker from 'blocks/date-picker/Date-picker';
import GuestsPicker from 'blocks/guests-picker/Guests-picker';
import Dropdown from 'blocks/dropdown/Dropdown';
import Field from 'blocks/field/Field';
import SubscribeField from 'blocks/subscribe-field/Subscribe-field';
import RoomsPicker from 'blocks/rooms-picker/Rooms-picker';

const {
  dropdown = new Dropdown(),
  datePicker = new DatePicker(),
  doubleDatePicker = new DatePicker('double'),
  guestsPicker = new GuestsPicker(),
  subscribeField = new SubscribeField(),
  roomsPicker = new RoomsPicker(),
} = {};

document.body.append(roomsPicker.element);
