import React from 'react';

import './MyProfile.scss';

class MyProfile extends React.Component {
  render() {
    const { handleWishList } = this.props;

    return (
      <img
        onClick={handleWishList}
        className="mainProfileImg"
        src="/images/profile_img.png"
        alt="내정보"
      />
    );
  }
}

export default MyProfile;
