import React from 'react';

import './StoreImgBox.scss';

const SLIDE_GAP = 14;
const SLIDE_MOVING_UNIT = 500;
const IMG_WIDTH = 400;

class StoreImgList extends React.Component {
  state = {
    slideSpot: 0,
  };

  imgQuantity = this.props.foodsData.flatMap(food => food.images).length;
  slideWidth =
    IMG_WIDTH * this.imgQuantity + (this.imgQuantity - 1) * SLIDE_GAP;
  hiddenedSlideWidth = this.slideWidth - window.innerWidth;
  slideEnd = -1;

  componentDidMount = () => {
    this.slideEnd = this.slideWidth > window.innerWidth ? this.slideEnd : 0;
    this.getFoodImages();
  };

  getFoodImages = () => {
    const { foodsData } = this.props;

    return foodsData.flatMap(food => food.images);
  };

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
    const isSlideReachedEnd =
      this.hiddenedSlideWidth - Math.abs(slideSpot) < SLIDE_MOVING_UNIT;

    if (isSlideReachedEnd) {
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
            {this.getFoodImages().map((img, i) => (
              <li key={i} className="storeImgLi">
                <img src={img} />
              </li>
            ))}
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

export default StoreImgList;
