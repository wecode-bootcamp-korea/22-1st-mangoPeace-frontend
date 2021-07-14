import React from 'react';

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
    fetch(`${IP_ADDRESS}/restaurants/${this.props.storeId}/wishlist`, {
      method: method,
    })
      .then(res => res.json())
      .then(res => console.log(res));
    // .then(() => this.props.fetchData(`restaurants/${this.props.storeId}`));
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

const IP_ADDRESS = 'http://10.58.3.213:8000';
// const IP_ADDRESS = 'localhost';

export default StoreHeader;
