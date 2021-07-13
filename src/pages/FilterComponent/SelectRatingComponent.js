import React from 'react';
import '../Filter/Filter.scss';
class SelectRatingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { idx, stateKey, currentIdx, handleIdx } = this.props;
    return (
      <>
        <button
          type="button"
          currentIdx={this.props.currentIdx}
          stateKey="ratingCurrentIdx"
          onClick={() => handleIdx(stateKey, idx)}
          className={currentIdx === idx ? 'selectList on' : 'selectList'}
          name="star"
        >
          {this.props.title}
        </button>
      </>
    );
  }
}
export default SelectRatingComponent;
