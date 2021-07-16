import React from 'react';

import './MyProfile.scss';

class MyProfile extends React.Component {
  render() {
    const { handleWishList } = this.props;

    return (
      <img
        onClick={handleWishList}
        className="mainProfileImg"
        src="https://mblogthumb-phinf.pstatic.net/MjAyMDA3MTVfMjI0/MDAxNTk0ODA4NTYwMTky.iXj_8lvSz4MgWM0RpvbcFysqzybBMvT6uVTmTtk8Oxog.Tfn199XtzcRnLKLNRyD2Bgvp-veCz-sk5jptTgfDT18g.PNG.life_book/1.png?type=w800"
        alt="내정보"
      />
    );
  }
}

export default MyProfile;
