import React from 'react';
import './Filter.scss';
import SelectRatingComponent from '../FilterComponent/SelectRatingComponent';
import PriceSelectSectionComponent from '../FilterComponent/PriceSelectSectionComponent';
import MenuCategorySelectSectionComponent from '../FilterComponent/MenuCategorySelectSectionComponent';

const BUTTONS = [
  { id: 0, title: 'pizza' },
  { id: 1, title: 'pasta' },
  { id: 2, title: 'hamburger' },
  { id: 3, title: 'soup' },
  { id: 4, title: 'barbeque' },
  { id: 5, title: 'noodle' },
  { id: 6, title: 'sushi' },
  { id: 7, title: 'cutlet' },
  { id: 8, title: 'donburi' },
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
    const array1 = [1, 2];
    const array2 = ['만원 이하', '만원 이상', '2만원 이상', '3만원 이상'];
    //const array2 = [1, 2, 3, 4];

    const { ratingCurrentIdx, priceCurrentIdx, values } = this.state;
    const isAllSectionNotValid =
      ratingCurrentIdx === 0 && priceCurrentIdx === 0 && values.length === 0;

    console.log(`isAllSectionNotValid`, isAllSectionNotValid);
    return (
      <>
        <div className="UpperBox">
          <div className="searchFilter">
            <div className="selectHead">
              <span className="title">검색필터</span>
            </div>
            <div className="selectRating">
              {array1.map(idx => {
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
              {array2.map(idx => {
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
              {BUTTONS.map(idx => {
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
            <div className="cancel">취소</div>
            <button
              className="confirm"
              disabled={isAllSectionNotValid}
              style={{
                backgroundColor: isAllSectionNotValid ? 'gray' : 'orange',
              }}
            >
              선택
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Filter;
