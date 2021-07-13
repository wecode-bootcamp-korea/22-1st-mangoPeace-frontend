import React, { Component } from 'react';

import './StoreCard.scss';

class StoreCard extends Component {
  render() {
    return (
      <li className="storeCard">
        <img
          className="storeImg"
          alt="누룩나무"
          src="https://mp-seoul-image-production-s3.mangoplate.com/17447_1568135250382451.jpg?fit=around|738:738&crop=738:738;*,*&output-format=jpg&output-quality=80"
        />
        <div className="storeBox">
          <div className="storeInfoBox">
            <div className="storeHeadline">
              <h2 className="storeName">1. 누룩나무</h2>
              <h2 className="storeGrade">4.3</h2>
            </div>
            <h3 className="storeLocate">서울특별시 종로구 인사동16길 13</h3>
          </div>
          <div className="storeReviewBox">
            <img
              className="userProfileImg"
              alt="user_img"
              src="http://placehold.it/40x40"
            />
            <div className="storeReview">
              <span className="userNickname">미야미야</span>
              <span className="userReview">
                안주들이 다 훌륭하다. 특히 해물파전이 진짜 예쁘고 맛있음ㅋㅋㅋ
                사실 이 해물파전 비주얼 보고 온건데 맛이 좋아서 다른 안주도
                시킴ㅋㅋㅋ 다 자극적이지 않고 삼삼하니 맛났다 막걸리 종류도 많고
                ! 주인 내외분들도 완전 친절하심 ㅎㅎ
              </span>
            </div>
          </div>
          <span className="storeMore">
            누룩나무 더보기 <i class="fas fa-chevron-right"></i>
          </span>
        </div>
      </li>
    );
  }
}

export default StoreCard;
