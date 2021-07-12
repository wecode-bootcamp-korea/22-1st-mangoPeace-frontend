import React from 'react';

import './ReviewInput.scss';

class ReviewInput extends React.Component {
  state = {
    isTextValid: false,
    isRatingValid: false,
    _reviewRating: [false, false, false, false, false],
    reviewInput: '',
    ratedScore: 0,
  };

  storeId = 1; //받아올 음식점 아이디
  restaurantsAddr = `restaurants/${this.storeId}`;

  fetchReviewInput = (addr, method) => {
    const { ratedScore, reviewInput } = this.state;
    const { fetchData } = this.props;

    fetch(`http://${IP_ADDRESS}:8000/${addr}`, {
      method: method,
      body: JSON.stringify({
        rating: ratedScore,
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
      _reviewRating: [false, false, false, false, false],
      isRatingValid: false,
      isTextValid: false,
    });
  };

  handleReviewInput = e => {
    const isTextValid = e.target.value.length > 9;
    this.setState({ isTextValid, reviewInput: e.target.value });
  };

  handleReviewRating = e => {
    const { _reviewRating } = this.state;

    const clickedIndex = parseInt(e.target.attributes.idx.value);
    const copiedRating = [..._reviewRating];

    for (let i = 0; i < clickedIndex + 1; i++) {
      copiedRating[i] = true;
    }

    for (let i = 6 - (5 - clickedIndex); i < 5; i++) {
      copiedRating[i] = false;
    }

    this.setState({
      ratedScore: clickedIndex + 1,
      isRatingValid: true,
      _reviewRating: copiedRating,
    });
  };

  render() {
    const { _reviewRating, reviewRating, isTextValid, isRatingValid } =
      this.state;
    const { storeId, storeName } = this.props;

    return (
      <form className="reviewInputForm" onClick={this.handleInputBoxOn}>
        <p className="reviewTitle">
          <b>{storeName}</b>에 대한 솔직한 리뷰를 써주세요
        </p>
        <div className="reviewInputBox">
          <div className="reviewRatingBox">
            {_reviewRating.map((star, index) => (
              <i
                key={index}
                onClick={this.handleReviewRating}
                idx={index}
                className={`fa-star ${_reviewRating[index] ? 'fas' : 'far'}`}
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
