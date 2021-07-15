import React, { Component } from 'react';

import BestListImg from './BestListImg/BestListImg';
import './FoodThemeListSection.scss';

//슬라이드 갯수
const totalSlide = 3;

class FoodThemeListSection extends Component {
  render() {
    const { handleBtn, handleDotBtn, slideNum, slideTranslate, bestListImg } =
      this.props;

    return (
      <section className="foodThemeListBox">
        <div className="topBar">
          <h2 className="listText">믿고 보는 맛집 리스트</h2>
          <span className="listMore">
            <u>리스트 더보기</u>
          </span>
        </div>
        <div className="foodThemeBox">
          <button
            className={slideNum > 1 ? 'arrowBtnLeft' : 'none'}
            onClick={handleBtn}
          >
            <i className="fas fa-chevron-left fa-3x" id="arrowLeft"></i>
          </button>
          <ul className="foodThemeImgBox">
            <div
              className="foodThemeImg"
              style={{
                transform: `translateX(${slideTranslate}px)`,
              }}
            >
              {bestListImg.length !== 0 && (
                <BestListImg bestListImg={bestListImg} />
              )}
            </div>
          </ul>
          <button
            className={slideNum < totalSlide ? 'arrowBtnRight' : 'none'}
            onClick={handleBtn}
          >
            <i className="fas fa-chevron-right fa-3x" id="arrowRight"></i>
          </button>
          <ul className="slickDots">
            <li className="slickActive">
              <i
                className="fas fa-circle fa-xs"
                id={slideNum === 1 ? 'colorDot' : ''}
                index={1}
                onClick={handleDotBtn}
              ></i>
            </li>
            <li className="slickActive">
              <i
                className="fas fa-circle fa-xs"
                id={slideNum === 2 ? 'colorDot' : ''}
                index={2}
                onClick={handleDotBtn}
              ></i>
            </li>
            <li className="slickActive">
              <i
                className="fas fa-circle fa-xs"
                id={slideNum === 3 ? 'colorDot' : ''}
                index={3}
                onClick={handleDotBtn}
              ></i>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default FoodThemeListSection;
