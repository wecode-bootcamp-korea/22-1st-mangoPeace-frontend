import React from 'react';

import './ReviewInput.scss';

class ReviewInput extends React.Component {
  render() {
    return (
      <form>
        <p className="reviewTitle">
          <b>더피자보이즈</b>에 대한 솔직한 리뷰를 써주세요
        </p>
        <div className="reviewRatingBox">
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
        </div>
        <textarea
          className="reviewInputBox"
          placeholder="주문하신 메뉴는 어떠셨나요? 식당의 분위기와 서비스도 궁금해요!"
        />
        <button disabled className="reviewSubmitBtn">
          리뷰작성
        </button>
      </form>
    );
  }
}

export default ReviewInput;
