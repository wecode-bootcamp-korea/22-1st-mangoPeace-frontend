import React from 'react';

import StoreImgBox from './StoreImgBox/StoreImgBox';
import StoreInfo from './StoreInfo/StoreInfo';
import StoreReviewBox from './StoreReviewBox/StoreReviewBox';

import './Detail.scss';

class Detail extends React.Component {
  state = {
    restaurants: null,
    food: null,
    image: null,
    review: [],
  };

  storeId = 1; //받아올 음식점 아이디
  reviewRequestNum = 1;
  reviewRequestNumLimit; //초기값 뭘로 줘야 되는지

  restaurantsAddr = `restaurants/${this.storeId}`;
  foodsAddr = `restaurants/${this.storeId}/food`;
  imgAddr = `restaurants/${this.storeId}/food/image`;
  reviewsAddr = `restaurants/${this.storeId}/review?limit=${this.reviewRequestNum}`;

  componentDidMount = () => {
    this.fetchData(this.restaurantsAddr);
    this.fetchData(this.foodsAddr);
    this.fetchData(this.imgAddr);
    this.fetchReviewData(1, 5);
  };

  componentWillUnmount = () => {
    this.reviewRequestNum = 1;
  };

  setRequestNumLimit = () => {
    const { restaurants } = this.state;

    restaurants.review_count.total % 10 === 0
      ? (this.reviewRequestNumLimit = restaurants.review_count.total / 10)
      : (this.reviewRequestNumLimit =
          Math.floor(restaurants.review_count.total / 10) + 1);
  };

  handleReviewEdit = () => {
    console.log('edit');
  };

  handleReviewDel = reviewId => {
    fetch(`http://${IP_ADDRESS}:8000/${this.reviewsAddr}`, {
      method: 'DELETE',
      body: JSON.stringify({
        review_id: reviewId,
      }),
    }).then(() => this.fetchReviewData(1, 5));
  };

  sortAddr = addr => {
    const splitAddr = addr.split('/');

    return parseInt(splitAddr[splitAddr.length - 1]) === this.storeId
      ? splitAddr[0]
      : splitAddr[splitAddr.length - 1];
  };

  fetchReviewData = (min, max) => {
    fetch(
      `http://${IP_ADDRESS}:8000/restaurants/${this.storeId}/review?limit=${this.reviewRequestNum}&rating-min=${min}&rating-max=${max}`,
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(res => {
        this.setState({ review: [...this.state.review, ...res.result] });
        this.reviewRequestNum += 1;
      });
  };

  fetchData = addr => {
    fetch(`http://${IP_ADDRESS}:8000/${addr}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        const name = this.sortAddr(addr);
        this.setState({
          [name]: res.result,
        });
      });
  };

  render() {
    const { restaurants, food, image, review } = this.state;
    this.state.restaurants && this.setRequestNumLimit();

    return (
      <section className="detailPage">
        {image && <StoreImgBox imagesData={image} />}
        <div className="detailMain">
          {restaurants && food && (
            <StoreInfo
              fetchData={this.fetchData}
              storeId={this.storeId}
              restaurantsData={restaurants}
              foodsData={food}
            />
          )}
          {review.length !== 0 &&
            restaurants &&
            this.reviewRequestNumLimit !== undefined && (
              <StoreReviewBox
                fetchData={this.fetchData}
                fetchReviewData={this.fetchReviewData}
                reviewRequestNum={this.reviewRequestNum}
                reviewRequestNumLimit={this.reviewRequestNumLimit}
                handleReviewDel={this.handleReviewDel}
                handleReviewEdit={this.handleReviewEdit}
                restaurantsData={restaurants}
                reviewsData={review}
              />
            )}
        </div>
      </section>
    );
  }
}

const IP_ADDRESS = '10.58.3.213';
// const IP_ADDRESS = 'localhost';

export default Detail;
