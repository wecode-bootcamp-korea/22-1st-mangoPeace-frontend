import React, { Component } from 'react';

import MainImgBar from './MainImgBar/MainImgBar';
import FoodThemeListSection from './FoodThemeListSection/FoodThemeListSection';
import PopStoreSection from './PopStoreSection/PopStoreSection';

import './Main.scss';

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
    fetch('http://10.58.3.213:8000/restaurants/banner-list')
      .then(res => res.json())
      .then(data => {
        this.setState({
          bestListImg: data.result,
        });
      });

    // TOP 5 배너
    fetch('http://10.58.3.213:8000/restaurants?filtering=average_rating')
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

    return (
      <main>
        <MainImgBar />
        {bestListImg.length !== 0 && (
          <FoodThemeListSection
            handleBtn={handleBtn}
            handleDotBtn={handleDotBtn}
            slideNum={slideNum}
            slideTranslate={slideTranslate}
            bestListImg={bestListImg}
          />
        )}
        {popStore.length !== 0 && <PopStoreSection popStore={popStore} />}
      </main>
    );
  }
}

export default Main;
