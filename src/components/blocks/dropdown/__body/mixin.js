import Button from "blocks/button/Button";
import createElement from "createElement";

const bodyMixin = {

  toggleBody() {
    if (this.isBodyExpanded() === false) {
      this.body.element.classList
        .add('js-dropdown__body_expanded');
    } else {
      this.body.element.classList
        .remove('js-dropdown__body_expanded');
    }
    return this;
  },

  isBodyExpanded() {
    return this.body.element.classList
      .contains('js-dropdown__body_expanded');
  },

  setBody(body = {}) {
    this.body = body;
    this.setClassList(this.body,['dropdown__body','js-dropdown__body'])
    this.body.setters = {
      'setButtonsForBody': [body.buttons],
      'setWidthForBody': [body.width],
      'setSharpCornersForBody': [body.sharpCorners],
      'setGapForBody': [body.gap],
      'setContentForBody': [body.content],
      'setBodyExpanded': [body.expanded],
      'setBodyWithoutBorder': [this.withoutBorder],
    };
    this
      .applyProps(this.body.setters)
      .setClassString(this.body,this.body.classList);
    return this;
  },

  setBodyWithoutBorder(withoutBorder) {
    if (withoutBorder === true) this.body.classList.add('dropdown__body_without-border');
    return this;
  },

  setBodyExpanded(expanded = false) {
    this.body.expanded = expanded;
    return this;
  },

  setWidthForBody(width = '320') {
    this.body.classList.add(`dropdown__body_width-${width}`);
    return this;
  },

  setButtonsForBody(buttons = false) {
    if (buttons === true) {
      this.body.clearButton = new Button({ type: 'clear', removed: true });
      this.body.applyButton = new Button({ type: 'apply' });
      this.body.buttons = (
        <div className='dropdown__body__buttons js-dropdown__body__buttons'>
          {this.body.clearButton.element}
          {this.body.applyButton.element}
        </div>
      );
    } else this.body.buttons = '';
    return this;
  },

  setSharpCornersForBody(sharpCorners = false) {
    if (sharpCorners === true || this.sharpCorners === true) {
      this.body.classList.add('dropdown__body_border-with-sharp-corners');
    }
    return this;
  },

  setGapForBody(gap = false) {
    if (gap === true) this.body.classList.add('dropdown__body_with-gap');
    return this;
  },

  setContentForBody(content = '') {
    this.body.content = content;
    return this;
  },

  bodyRender() {
    this.body.element = (
      <div className={this.body.classString}>
        {this.body.content}
        {this.body.buttons}
      </div>
    );
    if (this.body.expanded) this.rotateExpandButton();
    return this;
  },
}

export default bodyMixin;
