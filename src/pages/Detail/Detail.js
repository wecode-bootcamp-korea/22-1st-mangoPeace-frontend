import React from 'react';

import StoreImgBox from './StoreImgBox/StoreImgBox';
import StoreInfo from './StoreInfo/StoreInfo';
import StoreReviewBox from './StoreReviewBox/StoreReviewBox';

import './Detail.scss';

class Detail extends React.Component {
  // state = {
  //   data: 'data',
  // };

  // //리뷰 수 10개 단위 무한스크롤
  // infiniteScroll = () => {
  //   const scrollTop = document.documentElement.scrollTop;
  //   const clientHeight = document.documentElement.clientHeight;
  //   const scrollHeight = document.documentElement.scrollHeight;
  //   if (scrollTop + clientHeight === scrollHeight) {
  //     console.log('page end!');
  //   }
  // };

  componentDidMount = () => {
    window.addEventListener('scroll', this.infiniteScroll);
  };

  render() {
    return (
      <section className="detailPage">
        <StoreImgBox />
        <div className="detailMain">
          <StoreInfo />
          <StoreReviewBox />
        </div>
      </section>
    );
  }
}

export default Detail;
