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

  reviewRequestNum = 1;
  reviewRequestNumLimit; //한 번에 10개씩 띄울 경우 총 리뷰 페이지 수

  restaurantsAddr = `restaurants/${this.props.match.params.id}`;
  foodsAddr = `restaurants/${this.props.match.params.id}/food`;
  imgAddr = `restaurants/${this.props.match.params.id}/food/image`;
  reviewsAddr = `restaurants/${this.props.match.params.id}/review?limit=${this.reviewRequestNum}`;

  componentDidMount = () => {
    this.fetchData(this.restaurantsAddr);
    this.fetchData(this.foodsAddr);
    this.fetchData(this.imgAddr);
    this.fetchReviewData(1, 5);
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
    fetch(
      `http://${IP_ADDRESS}:8000/restaurants/${this.props.match.params.id}/review`,
      {
        method: 'DELETE',
        body: JSON.stringify({
          review_id: reviewId,
        }),
      }
    ).then(() => this.reFetchReviewData(1, 5));
  };

  sortAddr = addr => {
    const splitAddr = addr.split('/');

    return parseInt(splitAddr[splitAddr.length - 1]) ==
      this.props.match.params.id
      ? splitAddr[0]
      : splitAddr[splitAddr.length - 1];
  };

  fetchReviewData = (min, max) => {
    fetch(
      `http://${IP_ADDRESS}:8000/restaurants/${this.props.match.params.id}/review?limit=${this.reviewRequestNum}&rating-min=${min}&rating-max=${max}`,
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

  reFetchReviewData = (min, max) => {
    fetch(
      `http://${IP_ADDRESS}:8000/restaurants/${this.props.match.params.id}/review?limit=1&rating-min=${min}&rating-max=${max}`,
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(res => {
        this.setState({ review: res.result });
      });
  };

  fetchData = addr => {
    fetch(`http://${IP_ADDRESS}:8000/${addr}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        const name = this.sortAddr(addr);
        console.log(name, res);
        this.setState({
          [name]: res.result,
        });
      });
  };

  render() {
    const { restaurants, food, image, review } = this.state;
    this.state.restaurants && this.setRequestNumLimit();
    console.log(this.props);

    return (
      <section className="detailPage">
        {image && <StoreImgBox imagesData={image} />}
        <div className="detailMain">
          {restaurants && food && (
            <StoreInfo
              fetchData={this.fetchData}
              storeId={this.props.match.params.id}
              restaurantsData={restaurants}
              foodsData={food}
            />
          )}
          {review.length !== 0 &&
            restaurants &&
            this.reviewRequestNumLimit !== undefined && (
              <StoreReviewBox
                storeId={this.props.match.params.id}
                fetchData={this.fetchData}
                fetchReviewData={this.fetchReviewData}
                reFetchReviewData={this.reFetchReviewData}
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
