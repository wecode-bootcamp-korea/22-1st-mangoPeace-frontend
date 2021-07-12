//public에 data 삭제!!

import React, { Component } from 'react';

import MainImgBar from './MainImgBar/MainImgBar';
import BestListImg from './BestListImg/BestListImg';
import PopStoreSection from './PopStoreSection/PopStoreSection';

import './Main.scss';

//슬라이드 갯수
const totalSlide = 3;
const slideWidth = 1500;

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      slideNum: 1,
      slideTranslate: 0,
      popStore: [],
      bestListImg: [],
    };
  }

  componentDidMount() {
    fetch('http://10.58.5.140:8000/restaurants/sub_categories')
      .then(res => res.json())
      .then(data => {
        this.setState({
          bestListImg: data.result,
        });
      });

    fetch('http://10.58.5.140:8000/restaurants/1/high_ratings')
      .then(res => res.json())
      .then(data => {
        this.setState({
          popStore: data.result,
        });
      });
  }

  handleBtn = e => {
    const { slideNum, slideTranslate } = this.state;

    if (e.target.attributes.id.value === 'arrowRight') {
      this.setState({
        slideNum: slideNum + 1,
        slideTranslate: slideTranslate - slideWidth,
      });
    } else {
      this.setState({
        slideNum: slideNum - 1,
        slideTranslate: slideTranslate + slideWidth,
      });
    }
  };

  handleDotBtn = e => {
    const { slideNum, slideTranslate } = this.state;
    const gap = e.target.attributes.index.value - slideNum;

    this.setState({
      slideNum: parseInt(e.target.attributes.index.value),
      slideTranslate: slideTranslate - slideWidth * gap,
    });
  };

  render() {
    const { handleBtn, handleDotBtn } = this;
    const { slideNum, slideTranslate, popStore, bestListImg } = this.state;
    console.log(popStore);

    return (
      <main>
        <MainImgBar />
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
              <i class="fas fa-chevron-left fa-3x" id="arrowLeft"></i>
            </button>
            <ul className="foodThemeImgBox">
              <div
                className="foodThemeImg"
                style={{
                  transform: `translateX(${slideTranslate}px)`,
                }}
              >
                {bestListImg.length !== 0 && (
                  <BestListImg bannerImg={bestListImg} />
                )}
              </div>
            </ul>
            <button
              className={slideNum < totalSlide ? 'arrowBtnRight' : 'none'}
              onClick={handleBtn}
            >
              <i class="fas fa-chevron-right fa-3x" id="arrowRight"></i>
            </button>
            <ul className="slickDots">
              <li className="slickActive">
                <i
                  class="fas fa-circle fa-xs"
                  id={slideNum === 1 ? 'colorDot' : ''}
                  index={1}
                  onClick={handleDotBtn}
                ></i>
              </li>
              <li className="slickActive">
                <i
                  class="fas fa-circle fa-xs"
                  id={slideNum === 2 ? 'colorDot' : ''}
                  index={2}
                  onClick={handleDotBtn}
                ></i>
              </li>
              <li className="slickActive">
                <i
                  class="fas fa-circle fa-xs"
                  id={slideNum === 3 ? 'colorDot' : ''}
                  index={3}
                  onClick={handleDotBtn}
                ></i>
              </li>
            </ul>
          </div>
        </section>
        <PopStoreSection
          sub_category={popStore.sub_category}
          category={popStore.category}
          restaurant_name={popStore.restaurant_name}
          address={popStore.address}
          rating={popStore.rating}
          image={popStore.image}
        />
      </main>
    );
  }
}

export default Main;
