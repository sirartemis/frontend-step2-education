import NumberPicker from 'blocks/number-picker/Number-picker';
import createElement from "createElement";

const adults = new NumberPicker({ label: 'взрослые' });
const children = new NumberPicker({ label: 'дети' });
const babies = new NumberPicker({ label: 'младенцы' });

const defaultProps = {
  adults: adults,
  children: children,
  babies: babies,
  declinations: {
    guests: {
      he: 'гость',
      him: 'гостя',
      their: 'гостей',
    },
    babies: {
      he: 'младенец',
      him: 'младенца',
      their: 'младенцев'
    },
  },
  sharpCorners: true,
  head: {
    field: {
      props: {
        whithoutBorder: true,
        readOnly: true,
        placeholder: 'Сколько гостей',
      }
    }
  },
  body: {
    buttons: true,
    content: (
      <>
        {adults.element}
        {children.element}
        {babies.element}
      </>
    )
  }
}

export default defaultProps;
