import React from 'react';

import './StoreHeader.scss';

class StoreHeader extends React.Component {
  restaurantsAddr = `restaurants/${this.props.storeId}`;

  handleClickWish = () => {
    const { is_wished } = this.props.restaurantsData;

    is_wished ? this.fetchIsWished('DELETE') : this.fetchIsWished('POST');
  };

  fetchIsWished = methodType => {
    fetch(`http://${IP_ADDRESS}:8000/${this.restaurantsAddr}/wishlist`, {
      method: methodType,
    }).then(() => this.props.fetchData(this.restaurantsAddr));
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

const IP_ADDRESS = '10.58.3.213';
// const IP_ADDRESS = 'localhost';

export default StoreHeader;
