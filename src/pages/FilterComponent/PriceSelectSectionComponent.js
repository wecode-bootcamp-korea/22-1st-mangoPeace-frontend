import React from 'react';
import '../Filter/Filter.scss';
class PriceSelectSectionComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { idx, stateKey, currentIdx, checkPriceSelectSection } = this.props;
    return (
      <button
        type="button"
        currentIdx={this.props.currentIdx}
        stateKey="priceCurrentIdx"
        onClick={() => checkPriceSelectSection(stateKey, idx)}
        className={
          currentIdx === idx ? 'selectPriceList on' : 'selectPriceList'
        }
      >
        {this.props.title}
      </button>
    );
  }
}

export default PriceSelectSectionComponent;
