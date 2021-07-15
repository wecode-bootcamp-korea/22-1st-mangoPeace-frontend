import React from 'react';
import { withRouter } from 'react-router-dom';

import './Nav.scss';

class Nav extends React.Component {
  goToMain = () => {
    this.props.history.push('/');
  };

  goToLogin = () => {
    this.props.history.push('/login');
  };

  goToSignUp = () => {
    this.props.history.push('/SignUp');
  };

  render() {
    console.log(this.props);
    return (
      <div className="navBar">
        <div className="logoBox" onClick={this.goToMain}>
          <h1>싸우지망고</h1>
          <img className="logoImg" src="/images/mango.png" alt="로고이미지" />
        </div>
        <div className="navSearchBar">
          <i className="fas fa-search searchIcon"></i>
          <input className="mainSearchInput" placeholder="맛집 검색"></input>
        </div>
        <div className="navProfileBox">
          <button className="mainLoginBtn" onClick={this.goToLogin}>
            로그인
          </button>
          <button className="mainSignUpBtn" onClick={this.goToSignUp}>
            회원가입
          </button>
          <img
            className="mainProfileImg"
            src="/images/profile_img.png"
            alt="내정보"
          />
        </div>
      </div>
    );
  }
}

export default withRouter(Nav);
