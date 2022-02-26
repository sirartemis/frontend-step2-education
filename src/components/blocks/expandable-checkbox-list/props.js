import Checkbox from 'blocks/checkbox/Checkbox';
import List from 'blocks/list/List';

const {
  checkboxes = {
    breakfast: new Checkbox('breakfast', { label: 'Завтрак' }),
    desk: new Checkbox('desk', { label: 'Письменный стол', checked: true }),
    'feeding-chair': new Checkbox('feeding-chair', { label: 'Стул для кормления', checked: true }),
    crib: new Checkbox('crib', { label: 'Кроватка', checked: true }),
    tv: new Checkbox('tv', { label: 'Телевизор' }),
    shampoo: new Checkbox('shampoo', { label: 'Шампунь' }),
    tv_2: new Checkbox('tv_2', { label: 'Телевизор' }),
    shampoo_2: new Checkbox('shampoo_2', { label: 'Шампунь' }),
  },
  checkboxesElements = {},
} = {};
Object.entries(checkboxes).map(([name, checkbox]) => checkboxesElements[name] = checkbox.element);
const checkboxList = new List({ leftPadding: true, items: checkboxesElements, checkboxes });

const defaultProps = {
  checkboxList,
  withoutBorder: true,
  head: {
    field: {
      props: {
        withoutLeftPadding: true,
        fontWeight: 'bold',
        color: 'dark-shade-100',
        textTransform: 'uppercase',
        withoutBorder: true,
        readOnly: true,
        value: 'expandable checkbox list',
      }
    }
  },
  body: {
    content: checkboxList.element 
  }
}

export default defaultProps;
