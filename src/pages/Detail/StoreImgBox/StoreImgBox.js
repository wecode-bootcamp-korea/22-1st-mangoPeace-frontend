import React from 'react';

import './StoreImgBox.scss';

class StoreImgList extends React.Component {
  state = {
    slideSpot: 0,
  };

  n = 7; //이미지 수
  slideWidth = IMG_WIDTH * this.n + (this.n - 1) * SLIDE_GAP;
  hiddenedSlideWidth = this.slideWidth - window.innerWidth;
  slideEnd;

  handlePrevBtn = () => {
    const { slideSpot } = this.state;

    if (Math.abs(slideSpot) < SLIDE_MOVING_UNIT) {
      this.setState({
        slideSpot: 0,
      });
    } else {
      this.setState({
        slideSpot: slideSpot + SLIDE_MOVING_UNIT,
      });
    }
  };

  handleNextBtn = () => {
    const { slideSpot } = this.state;

    if (this.hiddenedSlideWidth - Math.abs(slideSpot) < SLIDE_MOVING_UNIT) {
      this.setState({
        slideSpot: slideSpot - (this.hiddenedSlideWidth - Math.abs(slideSpot)),
      });
      this.slideEnd =
        slideSpot - (this.hiddenedSlideWidth - Math.abs(slideSpot));
    } else {
      this.setState({
        slideSpot: slideSpot - SLIDE_MOVING_UNIT,
      });
    }
  };

  render() {
    const { slideSpot } = this.state;

    return (
      <div className="storeImgBox">
        {!!slideSpot && (
          <button onClick={this.handlePrevBtn} className="slideArrow arrowLeft">
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
          <button
            onClick={this.handleNextBtn}
            className="slideArrow arrowRight"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        )}
      </div>
    );
  }
}

const SLIDE_GAP = 14;
const SLIDE_MOVING_UNIT = 500;
const IMG_WIDTH = 400;

export default StoreImgList;
