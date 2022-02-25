import NumberPicker from 'blocks/number-picker/Number-picker';
import createElement from 'createElement';

const {
  bedrooms = new NumberPicker({ label: 'спальни', value: '2', minusDisabled: false }),
  beds = new NumberPicker({ label: 'кровати', value: '2', minusDisabled: false }),
  bathrooms = new NumberPicker({ label: 'ванные комнаты', value: '0' })
} = {};

const defaultProps = {
  bedrooms: bedrooms,
  beds: beds,
  bathrooms: bathrooms,
  declinations: {
    bedrooms: {
      he: 'спальня',
      him: 'спальни',
      their: 'спален',
    },
    beds: {
      he: 'кровать',
      him: 'кровати',
      their: 'кроватей',
    },
    bathrooms: {
      he: 'ванная комната',
      him: 'ванные комнаты',
      their: 'ванных комнат',
    },
  },
  sharpCorners: true,
  head: {
      width: '266',
      field: {
        props: {
          withoutBorder: true,
          readOnly: true,
          value: '2 спальни, 2 кровати...',
        }
      }
  },
  body: {
    width: '266',
    content: (
      <>
        {bedrooms.element}
        {beds.element}
        {bathrooms.element}
      </>
      )
  }
}

export default defaultProps;
