import React from 'react';

import WishListEmpty from './WishListEmpty/WishListEmpty';
import WishListLi from './WishListLi/WishListLi';

import './WishList.scss';

class WishList extends React.Component {
  state = {
    isWishEmpty: false,
  };

  render() {
    const { isWishEmpty } = this.state;

    return (
      <section className="wishListBox">
        <div className="wishListTitleBox">
          <span className="wishListTitle">가고싶다</span>
        </div>
        <ul className="wishListUl">
          {/* wishListLi  map 돌려야 됨  */}
          {isWishEmpty ? <WishListEmpty /> : <WishListLi />}
        </ul>
      </section>
    );
  }
}

export default WishList;
