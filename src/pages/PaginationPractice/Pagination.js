import React from 'react';

// const propTypes  ={

// }

const defaultProps = {
  initialPage: 1,
  pageSize: 10,
};

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pager: {},
    };
  }

  componentWillMount() {
    //아이템 어레이가 비지 않았다면 페이지를 셋
    if (this.props.items && this.props.items.length) {
      this.setPage(this.props.initialPage);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // 아이템 어레이가 바뀌면 페이지를 변경
    if (this.props.items !== prevProps.items) {
      this.setPage(this.props.initialPage);
    }
  }

  setPage(page) {
    var { items, pageSize } = this.props;
    var pager = this.state.pager;

    var pager = this.state.pager;
  }

  render() {
    return;
  }
}

export default Pagination;
