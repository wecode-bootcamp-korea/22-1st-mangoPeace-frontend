import React from 'react';

import ReviewInput from './ReviewInput/ReviewInput';
import ReviewLi from './ReviewLi/ReviewLi';

import './StoreReviewBox.scss';

class StoreReviewBox extends React.Component {
  render() {
    return (
      <div className="storeReviewBox">
        <ReviewInput />
        <section className="reviewListBox">
          <ul className="sortScore">
            <li>
              전체<b>(52)</b>
            </li>
            <li>
              맛있다<b>(42)</b>
            </li>
            <li>
              괜찮다<b>(8)</b>
            </li>
            <li>
              별로<b>(2)</b>
            </li>
          </ul>
          <ul className="reviewUl">
            <ReviewLi />
          </ul>
        </section>
      </div>
    );
  }
}

export default StoreReviewBox;
