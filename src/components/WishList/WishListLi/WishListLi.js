import React from 'react';
import { withRouter } from 'react-router';

import './WishListLi.scss';

class WishListLi extends React.Component {
  goToDetail = storeId => {
    const { history, handleWishList } = this.props;

    history.push(`/detail/${storeId}`);
    handleWishList();
  };

  render() {
    const { wishList } = this.props;

    return wishList.map(li => (
      <li
        key={li.id}
        onClick={() => this.goToDetail(li.id)}
        className="wishListLi"
      >
        <div className="storeImgBox">
          <img src={`${li.food_image}`} />
        </div>
        <div className="storeInfoBox">
          <strong className="storeName">{li.name}</strong>
          <span className="storeSubCategory">{li.sub_category}</span>
        </div>
        <div className="starBox">
          <i className="fas fa-star"></i>
        </div>
      </li>
    ));
  }
}

export default withRouter(WishListLi);
