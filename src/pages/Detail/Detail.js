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

  restaurantsAddr = `restaurants/${this.props.match.params.id}`;
  foodsAddr = `restaurants/${this.props.match.params.id}/foods`;
  imgAddr = `restaurants/${this.props.match.params.id}/food/image`;

  componentDidMount = () => {
    this.fetchData(this.restaurantsAddr);
    this.fetchData(this.foodsAddr);
    this.fetchData(this.imgAddr);
    this.fetchReviewData(1, 5, 1);
  };

  handleReviewEdit = reviewId => {
    console.log(reviewId);
    fetch(
      `http://${IP_ADDRESS}:8000/restaurants/${this.props.match.params.id}/review/${reviewId}`,
      {
        method: 'PATCH',
      }
    )
      .then(res => res.json())
      .then(res => console.log(res));
  };

  handleReviewDel = reviewId => {
    fetch(
      `http://${IP_ADDRESS}:8000/restaurants/${this.props.match.params.id}/review/${reviewId}`,
      {
        method: 'DELETE',
      }
    ).then(() => this.fetchReviewData(1, 5, 1));
  };

  sortAddr = addr => {
    const splitAddr = addr.split('/');

    return parseInt(splitAddr[splitAddr.length - 1]) ==
      this.props.match.params.id
      ? splitAddr[0]
      : splitAddr[splitAddr.length - 1];
  };

  fetchReviewData = (min, max, requestNum) => {
    fetch(
      `http://${IP_ADDRESS}:8000/restaurants/${this.props.match.params.id}/review?limit=${requestNum}&rating-min=${min}&rating-max=${max}`,
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(res => {
        if (requestNum !== 1) {
          this.setState({ review: [...this.state.review, ...res.result] });
        } else if (requestNum === 1) {
          this.setState({ review: res.result });
          // this.fetchData(this.restaurantsAddr);
        }
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
          {review.length !== 0 && restaurants && (
            <StoreReviewBox
              storeId={this.props.match.params.id}
              fetchData={this.fetchData}
              fetchReviewData={this.fetchReviewData}
              reFetchReviewData={this.reFetchReviewData}
              reviewRequestNum={this.reviewRequestNum}
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
