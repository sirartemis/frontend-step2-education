import 'styles/main.scss'
import createElement from "createElement";
import DatePicker from 'blocks/date-picker/Date-picker';
import GuestsPicker from 'blocks/guests-picker/Guests-picker';
import Dropdown from 'blocks/dropdown/Dropdown';
import Field from 'blocks/field/Field';
import SubscribeField from 'blocks/subscribe-field/Subscribe-field';
import RoomsPicker from 'blocks/rooms-picker/Rooms-picker';
import List from 'blocks/list/List';
import Checkbox from 'blocks/checkbox/Checkbox';
import Advantage from 'blocks/advantage/Advantage';
import ExpandableCheckboxList from 'blocks/expandable-checkbox-list/Expandable-checkbox-list';
import AdvantageList from 'blocks/advantages-list/Advantages-list';
import RadioGroup from 'blocks/radio-group/Radio-group';
import ToggleButton from 'blocks/toggle-button/Toggle-button';
import Button from 'blocks/button/Button';
import RateButton from 'blocks/rate-button/Rate-button';
import Pagination from 'blocks/pagination/Pagination';

const {
  dropdown = new Dropdown({ withoutBorder: true }),
  datePicker = new DatePicker(),
  doubleDatePicker = new DatePicker('double'),
  guestsPicker = new GuestsPicker(),
  subscribeField = new SubscribeField(),
  roomsPicker = new RoomsPicker(),
  list = new List({ listStyleType: 'bullet' }),
  advantage = new Advantage({ rich: 'Комфорт', content: 'Шумопоглощающие стены' }),
  checkbox = new Checkbox('checkbox_1', { label: 'Можно курить', rich: 'Широкий коридор' }),
  tumbler = new ToggleButton('tumbler', { label: 'Получать спецпредложения', toggle: true }),
  expandableCheckboxList = new ExpandableCheckboxList(),
  advantagesList = new AdvantageList(),
  radioGroup = new RadioGroup('gender'),
  filledButton = new Button({ type: 'filled' }),
  buttonWithBorder = new Button({ type: 'withBorder', disabled: true }),
  defaultButton = new Button(),
  rateButton = new RateButton(),
  bigButton = new Button({ type: 'big' }),
  pagination = new Pagination(),
} = {};

document.body.append(filledButton.element);
document.body.append(buttonWithBorder.element);
document.body.append(defaultButton.element);
document.body.append(pagination.element);
