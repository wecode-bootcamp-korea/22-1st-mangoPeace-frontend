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
          {/* {isWishEmpty ? <WishListEmpty /> : <WishListLi wishList={wishList} />} */}
        </ul>
      </section>
    );
  }
}

export default WishList;
