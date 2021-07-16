import React from 'react';

import WishListEmpty from './WishListEmpty/WishListEmpty';
import WishListLi from './WishListLi/WishListLi';

import './WishList.scss';

class WishList extends React.Component {
  render() {
    const { wishList, handleWishList } = this.props;

    return (
      <section className="wishListBox">
        <div className="wishListTitleBox">
          <span className="wishListTitle">가고싶다</span>
        </div>
        <ul className="wishListUl">
          {wishList.length === 0 ? (
            <WishListEmpty />
          ) : (
            <WishListLi handleWishList={handleWishList} wishList={wishList} />
          )}
        </ul>
      </section>
    );
  }
}

export default WishList;
