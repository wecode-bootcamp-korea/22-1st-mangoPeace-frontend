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

  handleClickReviewEdit = reviewId => {
    this.props.handleReviewEdit(reviewId);
  };

  render() {
    const {
      reviewUserInfo,
      reviewContent,
      reviewRate,
      createdAt,
      handleReviewDel,
      reviewId,
    } = this.props;
    const [iconName, sortRange] = this.sortingReviewRate(reviewRate);

    return (
      <li className="reviewLi">
        <div className="reviewUserInfo">
          <img className="reviewUserImg" src={reviewUserInfo.profile_image} />
          <span className="reviewUserName">{reviewUserInfo.nickname}</span>
        </div>
        <div className="reviewContent">
          <span className="reviewContentDate">
            {this.splitCreatedDate(createdAt)}
          </span>
          <p className="reviewContentText">{reviewContent}</p>
        </div>
        <div className="reviewScoreBox">
          <i className={`far scoreIcon ${iconName}`}></i>
          <span className="scoreText">{sortRange}</span>
        </div>
        <div className="reviewEditOrDel">
          <i
            className="reviewBtn fas fa-edit"
            onClick={() => this.handleClickReviewEdit(reviewId)}
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
