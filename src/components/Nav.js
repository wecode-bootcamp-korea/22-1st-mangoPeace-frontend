import React from 'react';

import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <div className="navBar">
        <div className="logoBox">
          <h1>싸우지망고</h1>
          <img className="logoImg" src="/images/mango.png" alt="로고이미지" />
        </div>
        <div className="navSearchBar">
          <i className="fas fa-search searchIcon"></i>
          <input className="mainSearchInput" placeholder="맛집 검색"></input>
        </div>
        <div className="navProfileBox">
          <button className="mainLoginBtn">로그인</button>
          <button className="mainSignUpBtn">회원가입</button>
          <img
            className="mainProfileImg"
            src="images/profile_img.png"
            alt="내정보"
          />
        </div>
      </div>
    );
  }
}

export default Nav;
