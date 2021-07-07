import React from 'react';

import './StoreImgBox.scss';

class StoreImgList extends React.Component {
  state = {
    slideSpot: 0,
  };

  n = 7; //이미지 수
  slideGap = 14;
  slideMovingUnit = 500;
  imgWidth = 400;
  slideWidth = this.imgWidth * this.n + (this.n - 1) * this.slideGap;
  hiddenedSlideWidth = this.slideWidth - window.innerWidth;
  slideEnd;

  handlePrevBtn = () => {
    const { slideMovingUnit } = this;
    const { slideSpot } = this.state;

    if (Math.abs(slideSpot) < slideMovingUnit) {
      this.setState({
        slideSpot: 0,
      });
    } else {
      this.setState({
        slideSpot: slideSpot + slideMovingUnit,
      });
    }
  };

  handleNextBtn = () => {
    let { hiddenedSlideWidth, slideMovingUnit } = this;
    const { slideSpot } = this.state;

    if (hiddenedSlideWidth - Math.abs(slideSpot) < slideMovingUnit) {
      this.setState({
        slideSpot: slideSpot - (hiddenedSlideWidth - Math.abs(slideSpot)),
      });
      this.slideEnd = slideSpot - (hiddenedSlideWidth - Math.abs(slideSpot));
    } else {
      this.setState({
        slideSpot: slideSpot - slideMovingUnit,
      });
    }
  };

  render() {
    const { handlePrevBtn, handleNextBtn } = this;
    const { slideSpot } = this.state;

    return (
      <div className="storeImgBox">
        {slideSpot !== 0 && (
          <button onClick={handlePrevBtn} className="slideArrow arrowLeft">
            <i className="fas fa-chevron-left"></i>
          </button>
        )}
        <ul className="storeImgUl">
          <div
            style={{ transform: `translateX(${slideSpot}px)` }}
            className="slideInner"
          >
            <li className="storeImgLi">
              <img src="http://placehold.it/10" />
            </li>
            <li className="storeImgLi">
              <img src="http://placehold.it/20" />
            </li>
            <li className="storeImgLi">
              <img src="http://placehold.it/30" />
            </li>
            <li className="storeImgLi">
              <img src="http://placehold.it/40" />
            </li>
            <li className="storeImgLi">
              <img src="http://placehold.it/50" />
            </li>
            <li className="storeImgLi">
              <img src="http://placehold.it/60" />
            </li>
            <li className="storeImgLi">
              <img src="http://placehold.it/70" />
            </li>
          </div>
        </ul>
        {slideSpot !== this.slideEnd && (
          <button onClick={handleNextBtn} className="slideArrow arrowRight">
            <i className="fas fa-chevron-right"></i>
          </button>
        )}
      </div>
    );
  }
}

export default StoreImgList;
