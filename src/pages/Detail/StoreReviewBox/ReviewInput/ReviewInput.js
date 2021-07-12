import React from 'react';

import './ReviewInput.scss';

class ReviewInput extends React.Component {
  state = {
    isTextValid: false,
    isRatingValid: false,
    reviewRating: 0,
    reviewInput: '',
  };

  storeId = 1; //받아올 음식점 아이디
  restaurantsAddr = `restaurants/${this.storeId}`;

  fetchReviewInput = (addr, method) => {
    const { reviewRating, reviewInput } = this.state;
    const { fetchData } = this.props;

    fetch(`http://${IP_ADDRESS}:8000/${addr}`, {
      method: method,
      body: JSON.stringify({
        rating: reviewRating,
        content: reviewInput,
      }),
    })
      .then(res => res.json())
      .then(() => fetchData(this.restaurantsAddr));
  };

  handleInputBoxOn = () => {
    this.setState({
      isInputBoxOn: !this.state.isInputBoxOn,
    });
  };

  handleReviewSubmit = e => {
    e.preventDefault();

    this.fetchReviewInput(this.reviewInputAddr, 'POST');
    this.setState({
      reviewInput: '',
      reviewRating: 0,
      isRatingValid: false,
      isTextValid: false,
    });
  };

  handleReviewInput = e => {
    const isTextValid = e.target.value.length > 9;
    this.setState({ isTextValid, reviewInput: e.target.value });
  };

  handleReviewRating = index => {
    this.setState({
      reviewRating: index + 1,
    });
  };

  render() {
    const { reviewRating, isTextValid, isRatingValid } = this.state;
    const { storeId, storeName } = this.props;

    return (
      <form className="reviewInputForm" onClick={this.handleInputBoxOn}>
        <p className="reviewTitle">
          <b>{storeName}</b>에 대한 솔직한 리뷰를 써주세요
        </p>
        <div className="reviewInputBox">
          <div className="reviewRatingBox">
            {[...Array(5)].map((_, index) => (
              <i
                key={index}
                onClick={() => this.handleReviewRating(index)}
                idx={index}
                className={`fa-star ${index < reviewRating ? 'fas' : 'far'}`}
              ></i>
            ))}
          </div>
          <textarea
            value={this.state.reviewInput}
            onChange={this.handleReviewInput}
            placeholder="주문하신 메뉴는 어떠셨나요? 식당의 분위기와 서비스도 궁금해요!"
          />
        </div>
        <button
          className="reviewSubmitBtn"
          onClick={this.handleReviewSubmit}
          disabled={!(isTextValid && isRatingValid)}
        >
          리뷰작성
        </button>
      </form>
    );
  }
}

const IP_ADDRESS = '10.58.3.213';
// const IP_ADDRESS = 'localhost';

export default ReviewInput;
