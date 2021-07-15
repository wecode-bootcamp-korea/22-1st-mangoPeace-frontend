import React from 'react';

import './WishListLi.scss';

class WishListLi extends React.Component {
  render() {
    return (
      <li className="wishListLi">
        <div className="storeImgBox">
          <img src="http://placehold.it/70" />
        </div>
        <div className="storeInfoBox">
          <strong className="storeName">store name</strong>
          <span className="storeSubCategory">sub category</span>
        </div>
        <div className="starBox">
          {/* <i class={`fa-star ${props어쩌구는 ? 'fas' : 'far'}`}></i> */}
          <i class="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default WishListLi;
