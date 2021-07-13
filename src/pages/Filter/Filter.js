import React from 'react';
import './Filter.scss';
import SelectRatingComponent from '../FilterComponent/SelectRatingComponent';
import PriceSelectSectionComponent from '../FilterComponent/PriceSelectSectionComponent';
import MenuCategorySelectSectionComponent from '../FilterComponent/MenuCategorySelectSectionComponent';

const RATING = [
  { idx: 0, title: '#별점순' },
  { idx: 1, title: '#코멘트순' },
];
const PRICE = [
  { idx: 0, title: '#1만원 이하' },
  { idx: 1, title: '#1만원 이상' },
  { idx: 2, title: '#2만원 이상' },
  { idx: 3, title: '#3만원 이상' },
];
const MENU = [
  { idx: 0, title: '#피자' },
  { idx: 1, title: '#파스타' },
  { idx: 2, title: '#햄버거' },
  { idx: 3, title: '#국밥' },
  { idx: 4, title: '#불고기' },
  { idx: 5, title: '#국수' },
  { idx: 6, title: '#초밥' },
  { idx: 7, title: '#돈가스' },
  { idx: 8, title: '#덮밥' },
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
                  <SelectRatingComponent
                    stateKey="ratingCurrentIdx"
                    ratingCurrentIdx={ratingCurrentIdx}
                    handleIdx={this.handleIdx}
                    idx={idx}
                  />
                );
              })}
            </div>
          </div>
          <div className="priceForOnePerson">
            <div className="selectHead">
              <span className="title">가격/1인당</span>
            </div>
            <div className="priceSelectSection">
              {PRICE.map(idx => {
                return (
                  <PriceSelectSectionComponent
                    stateKey="priceCurrentIdx"
                    priceCurrentIdx={priceCurrentIdx}
                    checkPriceSelectSection={this.checkPriceSelectSection}
                    idx={idx}
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
                  <MenuCategorySelectSectionComponent
                    values={values}
                    idx={idx}
                    handleButton={this.handleButton}
                  />
                );
              })}
            </div>
          </div>
          <div className="cancelOrConfirm">
            <button
              className="confirm"
              disabled={isAllSectionNotValid}
              className={isAllSectionNotValid ? 'confirm' : 'confirm on'}
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
