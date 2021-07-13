import React from 'react';
import '../Filter/Filter.scss';
class PriceSelectSectionComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(`컴포넌트 렌더 this.props.isClicked`, this.props.isClicked2);
    const { isClicked2 } = this.props;
    return (
      <button
        type="button"
        dataIdx2={this.props.dataIdx2}
        key={this.props.dataIdx2}
        onClick={e =>
          this.props.checkPriceSelectSection(e, this.props.dataIdx2)
        }
        className={isClicked2 ? 'selectPriceList on' : 'selectPriceList'}
      >
        {this.props.title}
      </button>
    );
  }
}

export default PriceSelectSectionComponent;
