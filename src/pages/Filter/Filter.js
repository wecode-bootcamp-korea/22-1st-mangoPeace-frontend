import React from 'react';
import './Filter.scss';
import SelectRatingComponent from '../FilterComponent/SelectRatingComponent';
import PriceSelectSectionComponent from '../FilterComponent/PriceSelectSectionComponent';
import MenuCategorySelectSectionComponent from '../FilterComponent/MenuCategorySelectSectionComponent';
class Filter extends React.Component {
  constructor() {
    super();
    this.state = {
      isClicked2: false,
      isClicked3: false,
      dataIdx: null,
      currentId: 0,
      currentId2: 0,
      currentId3: 0,
      ratingCurrentIdx: 0,
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

  checkMenuCategorySelectSection = (e, currentidx) => {
    this.setState({
      currentId3: currentidx,
      isClicked3: !this.state.isClicked3,
    });
  };

  render() {
    const array1 = [1, 2];
    const array2 = ['만원 이하', '만원 이상', '2만원 이상', '3만원 이상'];
    //const array2 = [1, 2, 3, 4];

    const array3 = [
      'pizza',
      'pasta',
      'hamburger',
      'soup',
      'barbeque',
      'noodle',
      'sushi',
      'cutlet',
      'donburi',
    ];
    const { ratingCurrentIdx, priceCurrentIdx } = this.state;
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
                    currentIdx={ratingCurrentIdx}
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
                    currentIdx={priceCurrentIdx}
                    handleIdx={this.checkPriceSelectSection}
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
              {array3.map(idx => {
                return (
                  <MenuCategorySelectSectionComponent
                    title={array3[idx]}
                    dataIdx3={idx}
                    key={idx}
                    checkMenuCategorySelectSection={
                      this.checkMenuCategorySelectSection
                    }
                    isClicked3={this.state.currentId3 === idx}
                  />
                );
              })}
            </div>
          </div>
          <div className="cancelOrConfirm">
            <div className="cancel">취소</div>
            <div className="confirm">선택</div>
          </div>
        </div>
      </>
    );
  }
}

export default Filter;
