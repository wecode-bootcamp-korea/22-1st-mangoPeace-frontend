import React from 'react';
import SelectRatingSection from '../FilterComponent/SelectRatingSection';
import PriceSelectSection from '../FilterComponent/PriceSelectSection';
import MenuCategorySelectSection from '../FilterComponent/MenuCategorySelectSection';
import './Filter.scss';

const RATING = [
  { id: 0, title: '#별점순' },
  { id: 1, title: '#코멘트순' },
];
const PRICE = [
  { id: 0, title: '#1만원 미만' },
  { id: 1, title: '#1만원 이상' },
  { id: 2, title: '#2만원 이상' },
  { id: 3, title: '#3만원 이상' },
];
const MENU = [
  { id: 0, title: '#피자' },
  { id: 1, title: '#파스타' },
  { id: 2, title: '#햄버거' },
  { id: 3, title: '#국밥' },
  { id: 4, title: '#숯불구이' },
  { id: 5, title: '#면' },
  { id: 6, title: '#초밥' },
  { id: 7, title: '#돈까스' },
  { id: 8, title: '#덮밥' },
];

class Filter extends React.Component {
  constructor() {
    super();
    this.state = {
      dataIdx: null,
      priceCurrentIdx: 0,
      ratingCurrentIdx: 0,
      values: [],
    };
  }

  handleIdx = (stateKey, idx) => {
    const isSameIndex = this.state[stateKey] === idx;
    this.setState({
      [stateKey]: isSameIndex ? 0 : idx,
    });
  };

  checkPriceSelectSection = (stateKey, idx) => {
    const isSameIndex = this.state[stateKey] === idx;
    this.setState({
      [stateKey]: isSameIndex ? 0 : idx,
    });
  };

  handleButton = button => {
    let tmp = this.state.values;
    if (this.state.values.includes(button)) {
      this.setState({
        values: this.state.values.filter(el => el !== button),
      });
    } else {
      tmp.push(button);
      this.setState({
        values: tmp,
      });
    }
  };

  render() {
    const { ratingCurrentIdx, priceCurrentIdx, values } = this.state;
    const isAllSectionNotValid =
      ratingCurrentIdx === 0 && priceCurrentIdx === 0 && values.length === 0;

    // Object.keys(this.state.values).map(idx => {
    //   menuTitleArr.push(MENU.find(item => item.id === idx).title);
    // });

    return (
      <>
        <span className="FilterBox">
          <div className="searchFilter">
            <div className="selectHead">
              <span className="title">검색필터</span>
            </div>
            <div className="selectRating">
              {RATING.map(idx => {
                return (
                  <SelectRatingSection
                    stateKey="ratingCurrentIdx"
                    ratingCurrentIdx={ratingCurrentIdx}
                    handleIdx={this.handleIdx}
                    idx={idx}
                    key={idx.title}
                  />
                );
              })}
            </div>
          </div>

          <div className="menuCategory">
            <div className="selectHead">
              <span className="title">음식종류</span>
            </div>
            <div className="menuCategorySelectSection">
              {MENU.map(idx => {
                return (
                  <MenuCategorySelectSection
                    values={values}
                    idx={idx}
                    handleButton={this.handleButton}
                    key={idx.title}
                  />
                );
              })}
            </div>
          </div>
          <div className="cancelOrConfirm">
            <button
              disabled={isAllSectionNotValid}
              className={isAllSectionNotValid ? 'confirm' : 'confirm on'}
              onClick={() =>
                this.props.SearchByFilter(
                  ratingCurrentIdx,
                  priceCurrentIdx,
                  values
                )
              }
            >
              선택
            </button>
          </div>
        </span>
      </>
    );
  }
}

export default Filter;
