import React from 'react';

import './ReviewLi.scss';

class ReviewLi extends React.Component {
  render() {
    return (
      <li className="reviewLi">
        <div className="reviewUserInfo">
          <img className="reviewUserImg" src="http://placehold.it/70" />
          <span className="reviewUserName">SJ</span>
        </div>
        <div className="reviewContent">
          <span className="reviewContentDate">2021-02-07</span>
          <p className="reviewContentText">
            JMT 4가지맛(1,3,5,7) + 프라이즈 먹었습니다
            <br />
            콤비네이션, 베이컨+치즈, 콰트로치즈, 포테이토 이렇게였는데
            <br />
            특히 베이컨치즈 제일 맛있었는데 겉보기와달리 엄청 스윗합니다
            <br />
            단짠조화가 미쳤...
            <br />
            프라이즈는 피자랑 진짜 잘 어울렸어요 순삭 홍대떡볶이집 프라이이후로
            맛있는 프라이 발견해서 기쁘네요
          </p>
        </div>
        <div className="reviewScoreBox">
          <i className="far fa-laugh-squint scoreIcon"></i>
          {/* <i className="far fa-smile"></i> */}
          {/* <i className="far fa-frown"></i> */}
          <span className="scoreText">맛있다</span>
        </div>
      </li>
    );
  }
}

export default ReviewLi;
