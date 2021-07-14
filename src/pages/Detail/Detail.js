import React from 'react';

import StoreImgBox from './StoreImgBox/StoreImgBox';
import StoreInfo from './StoreInfo/StoreInfo';
import StoreReviewBox from './StoreReviewBox/StoreReviewBox';

import './Detail.scss';

class Detail extends React.Component {
  state = {
    restaurants: null,
    foods: null,
    reviews: [],
    reviewOffset: 0,
  };

  componentDidMount = () => {
    const { id } = this.props.match.params;

    this.fetchData(`restaurants/${id}`);
    this.fetchData(`restaurants/${id}/foods`);
    this.fetchReviewData(1, 5, 1);
  };

  handleReviewEdit = reviewId => {
    // console.log(this.state.reviews);
    const targetedReview = this.state.reviews.filter(
      review => review.id === reviewId
    );
    const targetedReviewText = targetedReview[0].content;

    // fetch(
    //   `${IP_ADDRESS}/restaurants/${this.props.match.params.id}/reviews/${reviewId}`,
    //   {
    //     method: 'PATCH',
    //   }
    // )
    //   .then(res => res.json())
    //   .then(res => console.log(res));
  };

  handleReviewDel = reviewId => {
    fetch(
      `${IP_ADDRESS}/restaurants/${this.props.match.params.id}/reviews/${reviewId}`,
      {
        method: 'DELETE',
      }
    ).then(() => this.fetchReviewData(1, 5, 1));
  };

  sortAddr = addr => {
    const splitAddr = addr.split('/');

    return parseInt(splitAddr[splitAddr.length - 1]) ===
      Number(this.props.match.params.id)
      ? splitAddr[0]
      : splitAddr[splitAddr.length - 1];
  };

  fetchReviewData = (min, max, requestNum) => {
    console.log(min, max, requestNum);
    fetch(
      `${IP_ADDRESS}/restaurants/${this.props.match.params.id}/reviews?offset=${requestNum}&limit=10&rating-min=${min}&rating-max=${max}`
    )
      .then(res => res.json())
      .then(res => {
        if (requestNum !== 1) {
          this.setState(prev => ({ review: [...prev.reviews, ...res.result] }));
        } else if (requestNum === 1) {
          this.setState({ reviews: res.result });
          this.fetchData(this.restaurantsAddr);
        }
      });
  };

  fetchData = addr => {
    fetch(`${IP_ADDRESS}/${addr}`)
      .then(res => res.json())
      .then(res => {
        const name = this.sortAddr(addr);
        this.setState({
          [name]: res.result,
        });
      });
  };

  render() {
    const { restaurants, foods, reviews } = this.state;

    return (
      <section className="detailPage">
        {foods && <StoreImgBox foodsData={foods} />}
        <div className="detailMain">
          {restaurants && foods && (
            <StoreInfo
              fetchData={this.fetchData}
              storeId={this.props.match.params.id}
              restaurantsData={restaurants}
              foodsData={foods}
            />
          )}
          {!!reviews.length && restaurants && (
            <StoreReviewBox
              storeId={this.props.match.params.id}
              fetchData={this.fetchData}
              fetchReviewData={this.fetchReviewData}
              reviewRequestNum={this.reviewRequestNum}
              handleReviewDel={this.handleReviewDel}
              handleReviewEdit={this.handleReviewEdit}
              restaurantsData={restaurants}
              reviewsData={reviews}
            />
          )}
        </div>
      </section>
    );
  }
}

const IP_ADDRESS = 'http://10.58.3.213:8000';
// const IP_ADDRESS = 'localhost';

export default Detail;
