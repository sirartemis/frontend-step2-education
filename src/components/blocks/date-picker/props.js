import createElement from "../../../create-element";

const defaultProps = {
  head: {
    width: '266',
    field: {
      props: {
        withoutBorder: true,
        readOnly: true,
        placeholder: 'ДД.ММ.ГГГГ - ДД.ММ.ГГГГ',
      }
    }
  },
  body: {
    buttons: true,
    gap: true,
    content: (
      <div className='dropdown__calendar js-dropdown-calendar'></div>
    )
  }
}

const doubleProps = {
  head: {
    double: {
      first: {
        field: {
          props: {
            withoutBorder: true,
            readOnly: true,
            placeholder: 'ДД.ММ.ГГГГ',
          }
        }
      },
      second: {
        field: {
          props: {
            withoutBorder: true,
            readOnly: true,
            placeholder: 'ДД.ММ.ГГГГ',
          }
        }
      }
    }
  },
  body: {
    buttons: true,
    gap: true,
    content: (
      <div className='dropdown__calendar js-dropdown__calendar'></div>
    )
  }
}

export { defaultProps, doubleProps };
