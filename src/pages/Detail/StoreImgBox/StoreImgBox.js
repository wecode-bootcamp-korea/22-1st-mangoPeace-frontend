import React from 'react';

import './StoreImgBox.scss';

class StoreImgList extends React.Component {
  state = {
    slideSpot: 0,
  };

  n = 10;
  gap = 14;
  slideMovingUnit = 500;
  slideWidth = 400 * this.n + (this.n - 1) * this.gap;
  hiddenedSlideWidth = this.slideWidth - window.innerWidth;
  slideEnd;

  handlePrevBtn = () => {
    if (Math.abs(this.state.slideSpot) < this.slideMovingUnit) {
      this.setState({
        slideSpot: 0,
      });
    } else {
      this.setState({
        slideSpot: this.state.slideSpot + this.slideMovingUnit,
      });
    }
  };

  handleNextBtn = () => {
    if (
      this.hiddenedSlideWidth - Math.abs(this.state.slideSpot) <
      this.slideMovingUnit
    ) {
      this.setState({
        slideSpot:
          this.state.slideSpot -
          (this.hiddenedSlideWidth - Math.abs(this.state.slideSpot)),
      });
      this.slideEnd =
        this.state.slideSpot -
        (this.hiddenedSlideWidth - Math.abs(this.state.slideSpot));
    } else {
      this.setState({
        slideSpot: this.state.slideSpot - this.slideMovingUnit,
      });
    }
  };

  render() {
    const { slideSpot } = this.state;
    console.log(slideSpot);

    return (
      <div className="storeImgBox">
        {this.state.slideSpot !== 0 && (
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
        {this.state.slideSpot !== this.slideEnd && (
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

export default StoreImgList;
