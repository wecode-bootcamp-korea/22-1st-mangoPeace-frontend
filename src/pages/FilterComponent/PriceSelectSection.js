import React from 'react';
import '../Filter/Filter.scss';
class PriceSelectSectionComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { idx, stateKey, priceCurrentIdx, checkPriceSelectSection } =
      this.props;

    return (
      <button
        type="button"
        priceCurrentIdx={priceCurrentIdx}
        stateKey="priceCurrentIdx"
        onClick={() => checkPriceSelectSection(stateKey, idx)}
        className={
          priceCurrentIdx === idx ? 'selectPriceList on' : 'selectPriceList'
        }
      >
        {idx.title}
      </button>
    );
  }
}

export default PriceSelectSectionComponent;
