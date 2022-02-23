import Field from "blocks/field/Field";
import Button from "blocks/button/Button";
import createElement from "createElement";

const headMixin = {

  rotateExpandButton(event = false) {
    const rotatedClass = 'js-expand-button_rotated';
    if (event === false) {
      if (this.head.double) {
        this.head.double.first.expandButton
          .element.classList.add(rotatedClass)
      } else {
        this.head.expandButton
          .element.classList.add(rotatedClass)
      }
      this.body.element.classList.add('js-dropdown__body_expanded');
      return this;
    }
    const expandButtons = this.element.querySelectorAll('.js-expand-button');
    const targetButtonRotated = event.target.classList.contains(rotatedClass);
    const targetButton = event.target;
    const rotateTarget = event => {
      if (targetButtonRotated === false) {
        targetButton.classList.add(rotatedClass);
      } else {
        targetButton.classList.remove(rotatedClass);
      }
      return event;
    };
    if (this.head.double) {
      Object.values(expandButtons).map(button => {
        if (button === targetButton) return;
        if (button.classList.contains(rotatedClass) === true
          && event.target.classList.contains(rotatedClass) === false) {
          button.classList.remove(rotatedClass);
          targetButton.classList.add(rotatedClass);
          this.toggleBody();
        } else {
          rotateTarget(event);
          }
      })
    } else {
      rotateTarget(event);
    }
    return this;
  },

  setHead(head = {}) {
    this.head = head;
    if (this.head.double) {
      this.setClassList(this.head.double,['dropdown__double-head','js-dropdown__double-head']);
      this.headSetters = {
        'setFirstHeadForDoubleHead': [head.double.first],
        'setSecondHeadForDoubleHead': [head.double.second],
        'setSharpCornersForDoubleHead': [head.double.sharpCorners],
      };
    } else {
      this.setClassList(this.head,['dropdown__head','js-dropdown__head']);
      this.headSetters = {
        'setSharpCornersForHead': [head.sharpCorners],
        'setFieldForHead': [head.field],
        'setWidth': [head.width],
      };
    }
    this.applyProps(this.headSetters);
    if (this.head.double) { 
      this.setClassString(this.head.double, this.head.double.classList)
    } else this.setClassString(this.head, this.head.classList);
    return this;
  },

  setWidth(width = '320') {
    width && this.head.classList.add(`dropdown__head_width-${width}`);
    return this;
  },

  setSharpCornersForHead(sharpCorners = false) {
    if (sharpCorners === true || this.sharpCorners === true) {
      this.head.classList.add('dropdown__head_border-with-sharp-corners');
    }
    return this;
  },

  setSharpCornersForDoubleHead(sharpCorners = false) {
    if (sharpCorners === true || this.sharpCorners === true) {
      this.head.double.first.classList.add('dropdown__first-head_border-with-sharp-corners');
      this.head.double.second.classList.add('dropdown__second-head_border-with-sharp-corners');
    }
    return this;
  },

  setFieldForHead(field = {}) {
    this.head.field = field;
    this.head.field.setters = {
      'setFieldPropsForHead': [field.props],
    };
    this.applyProps(this.head.field.setters);
    return this;
  },

  setFieldPropsForHead(props = { withoutBorder: true }) {
    this.head.field.props = props;
    return this;
  },

  setFirstHeadForDoubleHead(head = {}) {
    this.head.double.first = head;
    this.setClassList(this.head.double.first,['dropdown__first-head','js-dropdown__first-head']);
    this.head.double.first.setters = {
      'setFirstHeadField': [head.field],
    };
    this
      .applyProps(this.head.double.first.setters)
      .setClassString(this.head.double.first, this.head.double.first.classList);
    return this;
  },

  setSecondHeadForDoubleHead(head = {}) {
    this.head.double.second = head;
    this.setClassList(this.head.double.second,['dropdown__second-head','js-dropdown__second-head']);
    this.head.double.second.setters = {
      'setSecondHeadField': [head.field],
    };
    this
      .applyProps(this.head.double.second.setters)
      .setClassString(this.head.double.second, this.head.double.second.classList);
    return this;
  },

  setFirstHeadField(field = {}) {
    this.head.double.first.field = field;
    this.head.double.first.field.setters = {
      'setFirstHeadFieldProps': [field.props],
    };
    this.applyProps(this.head.double.first.field.setters);
    return this;
  },

  setSecondHeadField(field = {}) {
    this.head.double.second.field = field;
    this.head.double.second.setters = {
      'setSecondHeadFieldProps': [field.props],
    };
    this.applyProps(this.head.double.second.setters);
    return this;
  },

  setFirstHeadFieldProps(props = { withoutBorder: true }) {
    this.head.double.first.field.props = props;
    return this;
  },

  setSecondHeadFieldProps(props = { withoutBorder: true }) {
    this.head.double.second.field.props = props;
    return this;
  },

  headRender() {
    if (this.head.double) {
      this.head.double.first.field = new Field(this.head.double.first.field.props);
      this.head.double.first.expandButton = new Button({ type: 'expand' });
      this.head.double.second.field = new Field(this.head.double.second.field.props);
      this.head.double.second.expandButton = new Button({ type: 'expand' });
      this.head.double.element = (
        <div className={this.head.double.classString}>
          <div className={this.head.double.first.classString}>
            {this.head.double.first.field.element}
            {this.head.double.first.expandButton.element}
          </div>
          <div className={this.head.double.second.classString}>
            {this.head.double.second.field.element}
            {this.head.double.second.expandButton.element}
          </div>
        </div>
      );
    } else {
      this.head.class = 'dropdown__head js-dropdown-head';
      this.head.field = new Field(this.head.field.props);
      this.head.expandButton = new Button({ type: 'expand' });
      this.head.element = (
        <div className={this.head.classString}>
          {this.head.field.element}
          {this.head.expandButton.element}
        </div>
      );
    }
    return this;
  },
}

export default headMixin;
