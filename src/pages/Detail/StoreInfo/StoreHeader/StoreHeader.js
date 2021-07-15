import React from 'react';

import { BASE_URL } from '../../../../config';

import './StoreHeader.scss';

class StoreHeader extends React.Component {
  handleClickWish = () => {
    const { is_wished } = this.props.restaurantsData;

    if (is_wished) {
      this.fetchIsWished('DELETE');
    } else if (!is_wished) {
      this.fetchIsWished('POST');
    }
  };

  fetchIsWished = method => {
    fetch(`${BASE_URL}/restaurants/${this.props.storeId}/wishlist`, {
      headers: {
        Authorization: localStorage.getItem('TOKEN'),
      },
      method: method,
    }).then(() => this.props.fetchData(`restaurants/${this.props.storeId}`));
  };

  render() {
    const { restaurantsData } = this.props;

    return (
      <header className="storeHeader">
        <div className="storeTitle">
          <h2>{restaurantsData.name}</h2>
          <strong>{restaurantsData.average_rating.toFixed(1)}</strong>
        </div>
        <div className="storeStatus">
          <i className="fas fa-pen"></i>
          <span>{restaurantsData.review_count.total}</span>
        </div>
        <div onClick={this.handleClickWish} className="wishBox">
          <i
            className={`fa-star ${restaurantsData.is_wished ? 'fas' : 'far'}`}
          ></i>
          <span>가고싶다</span>
        </div>
      </header>
    );
  }
}

export default StoreHeader;
