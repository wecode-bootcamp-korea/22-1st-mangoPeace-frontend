import React from 'react';

import './ReviewLi.scss';

class ReviewLi extends React.Component {
  splitCreatedDate = createdDate => {
    return createdDate.slice(0, 10);
  };

  sortingReviewRate = rate => {
    if (rate > 3) {
      return ['fa-laugh-squint', '맛있다'];
    } else if (rate === 3) {
      return ['fa-smile', '괜찮다'];
    } else if (rate < 3) {
      return ['fa-frown', '별로'];
    }
  };

  render() {
    const {
      reviewUserInfo,
      reviewContent,
      reviewRate,
      createdAt,
      handleReviewEdit,
      handleReviewDel,
      reviewId,
    } = this.props;

    return (
      <li className="reviewLi">
        <div className="reviewUserInfo">
          <img className="reviewUserImg" src={reviewUserInfo.profile_image} />
          <span className="reviewUserName">{reviewUserInfo.nickname}</span>
        </div>
        <div className="reviewContent">
          <span className="reviewContentDate">
            {(this.createdDate = this.splitCreatedDate(createdAt))}
          </span>
          <p className="reviewContentText">{reviewContent}</p>
        </div>
        <div className="reviewScoreBox">
          <i
            className={`far scoreIcon ${this.sortingReviewRate(reviewRate)[0]}`}
          ></i>
          <span className="scoreText">
            {this.sortingReviewRate(reviewRate)[1]}
          </span>
        </div>
        <div className="reviewEditOrDel">
          <i
            className="reviewBtn fas fa-edit"
            onClick={() => handleReviewEdit(reviewId)}
          ></i>
          <i
            className="reviewBtn fas fa-eraser"
            onClick={() => handleReviewDel(reviewId)}
          ></i>
        </div>
      </li>
    );
  }
}

export default ReviewLi;
