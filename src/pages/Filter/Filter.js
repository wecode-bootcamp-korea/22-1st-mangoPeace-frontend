import React from 'react';
import './Filter.scss';
import SelectRatingComponent from '../FilterComponent/SelectRatingComponent';
import PriceSelectSectionComponent from '../FilterComponent/PriceSelectSectionComponent';
import MenuCategorySelectSectionComponent from '../FilterComponent/MenuCategorySelectSectionComponent';

const RATING = [
  { id: 0, title: '#별점순' }, // id 라고 해야하는거야 id 라고 해야하는 거야 ?
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
  { id: 4, title: '#불고기' },
  { id: 5, title: '#국수' },
  { id: 6, title: '#초밥' },
  { id: 7, title: '#돈가스' },
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

    const last = [];
    for (let i = 0; i < values.length; i++) {
      last.push(values.find(item => item.id === i).title);
    }
    console.log(last);
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
                    idx={idx} //idx 라는건 뭘까 ??
                    key={idx.title}
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
                  <MenuCategorySelectSectionComponent
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
              onClick={this.props.SearchByFilter(
                ratingCurrentIdx,
                priceCurrentIdx,
                values
              )}
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
