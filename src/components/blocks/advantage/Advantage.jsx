import createElement from 'createElement';
import Block from 'blocks/Block';

export default class Advantage extends Block {
  constructor(props = {}) {
    super(['advantage','js-advatage']);
    this.props = props;
    this.setters = {
      'setIcon': [this.props.icon],
      'setRich': [this.props.rich],
      'setContent': [this.props.content],
    };
    this
      .applyProps(this.setters)
      .setClassString(this, this.classList)
      .render();
  }

  setIcon(icon = ( <span className='advantage__icon js-advantage__icon material-icons'>thumb_up</span> )) {
    this.icon = icon;
    return this;
  }

  setRich(rich = '') {
    this.rich = (
      <span className='advantage__rich js-advantage__rich'>
        {rich}
      </span>
    );
    return this;
  }

  setContent(content = '') {
    this.content = content;
    return this;
  }

  render() {
    this.element = (
      <div className={this.classString}>
        {this.icon}
        <div className='advantage__right-side js-advatage__right-side'>
          {this.rich}<br/>
          {this.content}
        </div>
      </div>
    );
    return this;
  }
}
