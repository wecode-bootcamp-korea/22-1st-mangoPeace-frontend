import React from 'react';

import { stringToQuery } from '../../utilities/query';

import StoreImgBox from './StoreImgBox/StoreImgBox';
import StoreInfo from './StoreInfo/StoreInfo';
import StoreReviewBox from './StoreReviewBox/StoreReviewBox';

import './Detail.scss';

const LIMIT = 10;

class Detail extends React.Component {
  state = {
    restaurants: null,
    foods: null,
    reviews: null,
  };

  componentDidMount = () => {
    const { id } = this.props.match.params;

    this.props.history.push(`?offset=0&limit=10&rating-min=1&rating-max=5`);

    this.fetchData(`restaurants/${id}`);
    this.fetchData(`restaurants/${id}/foods`);
    this.fetchReviewData();
  };

  handleReviewEdit = reviewId => {
    const targetedReview = this.state.reviews.filter(
      review => review.id === reviewId
    );
    const targetedReviewText = targetedReview[0].content;
    const targetedReviewStar = targetedReview[0].rating;
    // fetch(
    //   `${IP_ADDRESS}/restaurants/${this.props.match.params.id}/review/${reviewId}`,
    //   {
    //     method: 'PATCH',
    //   }
    // )
    //   .then(res => res.json())
    //   .then(res => console.log(res));
  };

  handleReviewDel = reviewId => {
    const { id } = this.props.match.params;

    fetch(`${IP_ADDRESS}/restaurants/${id}/review/${reviewId}`, {
      method: 'DELETE',
    }).then(this.fetchReviewData);
  };

  fetchReviewData = () => {
    const { match, history } = this.props;
    const queryObj = stringToQuery(history.location.search);

    fetch(
      `${IP_ADDRESS}/restaurants/${match.params.id}/reviews?offset=${queryObj.offset}&limit=${LIMIT}&rating-min=${queryObj['rating-min']}&rating-max=${queryObj['rating-max']}`
    )
      .then(res => res.json())
      .then(res => {
        if (Number(queryObj.offset) === 0) {
          this.setState({ reviews: res.result });
        } else {
          this.setState(prev => {
            return { reviews: [...prev.reviews, ...res.result] };
          });
        }
        this.fetchData(`restaurants/${match.params.id}`);
      });
  };

  fetchData = addr => {
    fetch(`${IP_ADDRESS}/${addr}`)
      .then(res => res.json())
      .then(res => {
        const name = sortAddr(addr);
        this.setState({
          [name]: res.result,
        });
      });

    const sortAddr = addr => {
      const splitAddr = addr.split('/');

      return parseInt(splitAddr[splitAddr.length - 1]) ===
        Number(this.props.match.params.id)
        ? splitAddr[0]
        : splitAddr[splitAddr.length - 1];
    };
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
          {reviews && restaurants && (
            <StoreReviewBox
              storeId={this.props.match.params.id}
              fetchData={this.fetchData}
              fetchReviewData={this.fetchReviewData}
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

export default Detail;
