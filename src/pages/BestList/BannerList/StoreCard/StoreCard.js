import React, { Component } from 'react';

import './StoreCard.scss';

class StoreCard extends Component {
  goToStore = id => {
    this.props.history.push(`/detail/${id}`);
  };
  render() {
    const { storeList } = this.props;

    return (
      <>
        {storeList.map((store, index) => (
          <li key={store.restaurant_id} className="storeCard">
            <img
              className="storeImg"
              alt={store.name}
              src={store.image}
              onClick={() => store.restaurant_id}
            />
            <div className="storeBox">
              <div className="storeInfoBox">
                <div className="storeHeadline">
                  <h2 className="storeName">
                    {index + 1}. {store.name}
                  </h2>
                  <i className="fas fa-star"></i>
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
              <span className="storeMore" onClick={() => store.restaurant_id}>
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
