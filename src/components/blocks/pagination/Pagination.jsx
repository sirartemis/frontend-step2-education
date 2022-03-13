import createElement from 'createElement';
import Block from 'blocks/Block';
import './pagination.min.js';

export default class Pagination extends Block {
  constructor(props = {}) {
    super(['pagination','js-pagination']);
    this.props = props;
    this.pagination = {};
    this.setters = {
      'setDataSource': [this.props.dataSource],
      'setPageSize': [this.props.pageSize],
      'setCallback': [this.props.callback],
      'setPrevText': [this.props.prevText],
      'setNextText': [this.props.nextText],
    };
    this
      .applyProps(this.setters)
      .setClassString(this, this.classList)
      .render()
      .makePagination();
  }

  defaultCallback() {
    return;
  }

  setCallback(callback = this.defaultCallback()) {
    this.pagination.callback = callback;
  }

  setPrevText(prevText = '<span class="material-icons">arrow_back</span>') {
    this.pagination.prevText = prevText;
  }

  setNextText(nextText = '<span class="material-icons">arrow_forward</span>') {
    this.pagination.nextText = nextText;
  }

  setDataSource(dataSource = [1,2,3,4,5]) {
    let pages = 800;
    let data = [];
    let count = 0;
    while (pages > 0) {
      count += 1;
      data.push(count);
      pages -= 1;
    }
    this.pagination.dataSource = data;
  }

  setPageSize(pageSize = 12) {
    this.pagination.pageSize = pageSize;
  }

  makePagination() {
    this.pagination.element = $(this.element).pagination(this.pagination);
  }

  render() {
    this.element = (
      <div className={this.classString}>
      </div>
    );
    return this;
  }
}
