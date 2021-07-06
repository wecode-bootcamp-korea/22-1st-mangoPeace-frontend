import React from 'react';

import './StoreImgBox.scss';

class StoreImgList extends React.Component {
  state = {
    leftBtn: false,
    rightBtn: false,
    imgNumber: 7,
    imgBoxWidth: 3584,
    // (img개수 * img width) + ((img개수 - 1) * 14)
    slideMovingUnit: 0,
  };

  componentDidMount = () => {
    const { imgBoxWidth } = this.state;

    if (imgBoxWidth > window.innerWidth - 20) {
      this.setState({
        rightBtn: true,
      });
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { slideMovingUnit } = this.state;

    if (prevState.slideMovingUnit !== slideMovingUnit) {
      if (slideMovingUnit === 0) {
        this.setState({
          leftBtn: false,
        });
      }
    }
  };

  handlePrevBtn = () => {
    const { slideMovingUnit } = this.state;

    this.setState({
      slideMovingUnit: slideMovingUnit + 400,
    });
    // console.log(slideMovingUnit);
  };

  handleNextBtn = () => {
    const { slideMovingUnit } = this.state;

    this.setState({
      slideMovingUnit: slideMovingUnit - 400,
      leftBtn: true,
    });
    // console.log(slideMovingUnit);
  };

  render() {
    const { leftBtn, rightBtn, slideMovingUnit } = this.state;

    return (
      <div className="storeImgBox">
        <button
          disabled={leftBtn === false ? true : false}
          onClick={this.handlePrevBtn}
          className="slideArrow arrowLeft"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <ul className="storeImgUl">
          <div
            style={{ transform: `translateX(${slideMovingUnit}px)` }}
            className="slideInner"
          >
            <li className="storeImgLi">
              <img src="http://placehold.it/40" />
            </li>
            <li className="storeImgLi">
              <img src="http://placehold.it/40" />
            </li>
            <li className="storeImgLi">
              <img src="http://placehold.it/40" />
            </li>
            <li className="storeImgLi">
              <img src="http://placehold.it/40" />
            </li>
            <li className="storeImgLi">
              <img src="http://placehold.it/40" />
            </li>
            <li className="storeImgLi">
              <img src="http://placehold.it/40" />
            </li>
            <li className="storeImgLi">
              <img src="http://placehold.it/40" />
            </li>
          </div>
        </ul>
        <button
          disabled={rightBtn === false ? true : false}
          onClick={this.handleNextBtn}
          className="slideArrow arrowRight"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    );
  }
}

export default StoreImgList;
