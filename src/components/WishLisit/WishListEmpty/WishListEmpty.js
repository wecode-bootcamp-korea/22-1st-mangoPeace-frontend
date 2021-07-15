import React from 'react';

import './WishListEmpty.scss';

class WishListEmpty extends React.Component {
  render() {
    return (
      <li className="wishListEmptyLi">
        <div className="wishListEmpty">
          <i class="far fa-star"></i>
          <span className="emptyText">격하게 가고 싶다...</span>
        </div>
      </li>
    );
  }
}

export default WishListEmpty;
