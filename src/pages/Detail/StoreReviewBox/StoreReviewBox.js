import React from 'react';

import ReviewInput from './ReviewInput/ReviewInput';
import ReviewLi from './ReviewLi/ReviewLi';

import './StoreReviewBox.scss';

class StoreReviewBox extends React.Component {
  state = {
    selectedRateGroup: 0,
    viewMore: true,
  };

  scoreRangeMin = 1;
  scoreRangeMax = 5;
  reviewRequestNum = 2;

  sortScoreData = [
    {
      text: '전체',
      quantity: this.props.restaurantsData.review_count.total,
      min: 1,
      max: 5,
    },
    {
      text: '맛있다',
      quantity:
        this.props.restaurantsData.review_count.rating_four +
        this.props.restaurantsData.review_count.rating_five,
      min: 4,
      max: 5,
    },
    {
      text: '괜찮다',
      quantity: this.props.restaurantsData.review_count.rating_three,
      min: 3,
      max: 3,
    },
    {
      text: '별로',
      quantity:
        this.props.restaurantsData.review_count.rating_one +
        this.props.restaurantsData.review_count.rating_two,
      min: 1,
      max: 2,
    },
  ];

  componentDidMount = () => {
    const { restaurantsData } = this.props;

    restaurantsData.review_count.total < 11
      ? this.setState({
          viewMore: false,
        })
      : this.setState({ viewMore: true });
  };

  componentDidUpdate = () => {};

  handleClickSortScore = index => {
    this.setState({
      viewMore: true,
    });
    this.reviewRequestNum = 1;

    this.scoreRangeMin = this.sortScoreData[index].min;
    this.scoreRangeMax = this.sortScoreData[index].max;
    this.props.fetchReviewData(this.scoreRangeMin, this.scoreRangeMax, 1);
    this.setState({
      selectedRateGroup: index,
    });
  };

  handleClickViewMore = () => {
    this.props.fetchReviewData(
      this.scoreRangeMin,
      this.scoreRangeMax,
      this.reviewRequestNum + 1
    );
    this.reviewRequestNum += 1;
  };

  render() {
    const {
      reviewsData,
      restaurantsData,
      handleReviewDel,
      handleReviewEdit,
      fetchReviewData,
      reFetchReviewData,
      fetchData,
      storeId,
    } = this.props;
    const { selectedRateGroup, viewMore } = this.state;

    return (
      <div className="storeReviewBox">
        <ReviewInput
          fetchData={fetchData}
          fetchReviewData={fetchReviewData}
          reFetchReviewData={reFetchReviewData}
          storeId={storeId}
          storeName={restaurantsData.name}
          scoreRangeMin={this.scoreRangeMin}
          scoreRangeMax={this.scoreRangeMax}
        />
        <section className="reviewListBox">
          <ul className="sortScore">
            {this.sortScoreData.map((sort, i) => (
              <li
                className={i === selectedRateGroup ? 'on' : null}
                onClick={() => this.handleClickSortScore(i)}
                key={i}
              >
                {sort.text}
                <b>({sort.quantity})</b>
              </li>
            ))}
          </ul>
          <ul className="reviewUl">
            {reviewsData.map(review => (
              <ReviewLi
                key={review.id}
                handleReviewDel={handleReviewDel}
                handleReviewEdit={handleReviewEdit}
                reviewId={review.id}
                reviewUserInfo={review.user}
                reviewContent={review.content}
                reviewRate={review.rating}
                createdAt={review.created_at}
              />
            ))}
          </ul>
        </section>
        {viewMore && (
          <div className="viewMoreBox">
            <span onClick={this.handleClickViewMore} className="viewMoreText">
              더보기
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default StoreReviewBox;
