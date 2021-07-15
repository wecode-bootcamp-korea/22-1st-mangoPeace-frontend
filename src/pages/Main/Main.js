import React, { Component } from 'react';

import MainImgBar from './MainImgBar/MainImgBar';
import FoodThemeListSection from './FoodThemeListSection/FoodThemeListSection';
import PopStoreSection from './PopStoreSection/PopStoreSection';
import { BASE_URL } from '../../config';

import './Main.scss';

const slideWidth = 1500;

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      slideNum: 1,
      slideTranslate: 0,
      popStore: [],
      bestListImg: [],
    };
  }

  componentDidMount() {
    fetch(`${BASE_URL}/restaurants/banner-list`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          bestListImg: data.result,
        });
      });

    // TOP 5 배너
    fetch(`${BASE_URL}/restaurants/popular?filtering=average_rating`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          popStore: data.result,
        });
      });
  }

  checkInput = e => {
    const { value } = e.target;
    this.setState({ inputValue: value });
  };

  handleSearchBtn = () => {
    console.log(this.state.inputValue);
    this.state.history.push(
      `/restaurants/search?keyword=${this.state.inputValue}`
    );
  };

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
    const { checkInput, handleSearchBtn, handleBtn, handleDotBtn } = this;
    const { inputValue, slideNum, slideTranslate, popStore, bestListImg } =
      this.state;

    return (
      <main>
        <MainImgBar
          inputValue={inputValue}
          checkInput={checkInput}
          handleSearchBtn={handleSearchBtn}
        />
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
