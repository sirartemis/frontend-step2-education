import createElement from 'createElement';
import Block from 'blocks/Block';
import starImg from './star.svg';
import starBorderImg from './star_border.svg';
import './jquery.raty';

export default class RateButton extends Block {
  constructor(props = {}) {
    super(['rate-button','js-rate-button']);
    this.props = props;
    this.ratyObj = {};
    this.setters = {
      'setScore': [this.props.score],
      'setScoreName': [this.props.scoreName],
      'setNumber': [this.props.number],
      'setReadOnly': [this.props.readOnly],
      'setStarOn': [this.props.starOn],
      'setStarOff': [this.props.startOff],
      'setHints': [this.props.hints],
    };
    this
      .applyProps(this.setters)
      .setClassString(this, this.classList)
      .render();
  }

  setScore(score = 0) {
    this.ratyObj.score = score;
  }

  setScoreName(scoreName = 'somescore') {
    this.ratyObj.scoreName = scoreName;
    this.classList.add(scoreName);
  }

  setNumber(number = 5) {
    this.ratyObj.number = number;
  }

  setReadOnly(readOnly = false) {
    this.ratyObj.readOnly = readOnly;
  }

  setStarOn(starOn = starImg) {
    this.ratyObj.starOn = starOn;
  }

  setStarOff(starOff = starBorderImg) {
    this.ratyObj.starOff = starOff;
  }

  setHints(hints = ['1.0','2.0','3.0','4.0','5.0']) {
    this.ratyObj.hints = hints;
  }

  render() {
    this.element = (
      <div className={this.classString}>
      </div>
    );
    $(this.element).raty(this.ratyObj);
    return this;
  }
}
