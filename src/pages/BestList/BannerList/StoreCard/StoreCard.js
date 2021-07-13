import React, { Component } from 'react';

import './StoreCard.scss';

class StoreCard extends Component {
  render() {
    const { storeList } = this.props;
    console.log(storeList);

    return (
      <>
        {storeList.map((store, index) => (
          <li className="storeCard">
            <img className="storeImg" alt={store.name} src={store.image} />
            <div className="storeBox">
              <div className="storeInfoBox">
                <div className="storeHeadline">
                  <h2 className="storeName">
                    {index + 1}. {store.name}
                  </h2>
                  <i class="fas fa-star"></i>
                  <h2 className="storeGrade">{store.rating.toFixed(1)}</h2>
                </div>
                <h3 className="storeLocate">{store.address}</h3>
              </div>
              <div className="storeReviewBox">
                <img
                  className="userProfileImg"
                  alt="user_img"
                  src="/images/muyaho.jpeg"
                />
                <div className="storeReview">
                  <span className="userNickname">{store.nickname}</span>
                  <span className="userReview">{store.content}</span>
                </div>
              </div>
              <span className="storeMore">
                {store.name} 더보기 <i class="fas fa-chevron-right"></i>
              </span>
            </div>
          </li>
        ))}
      </>
    );
  }
}

export default StoreCard;
