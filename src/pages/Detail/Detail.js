import React from 'react';

import StoreImgBox from './StoreImgBox/StoreImgBox';
import StoreInfo from './StoreInfo/StoreInfo';
import StoreReviewBox from './StoreReviewBox/StoreReviewBox';

import './Detail.scss';

class Detail extends React.Component {
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
