import React from 'react';
import { withRouter } from 'react-router-dom';

import MyProfile from './MyProfile/MyProfile';
import SignBox from './SignBox/SignBox';
import WishList from '../WishList/WishList';

import './Nav.scss';

const SEARCH_BAR_HEIGHT = 300;
let debouncer;

class Nav extends React.Component {
  state = {
    isValidUser: false,
    isWishListOn: false,
    scrollSpot: 0,
  };

  componentDidMount = () => {
    if (this.props.match.path === '/') {
      window.addEventListener('scroll', e => this.handleScoll(e));
    }
  };

  handleScoll = e => {
    if (debouncer) {
      clearTimeout(debouncer);
    }

    debouncer = setTimeout(() => {
      this.setState({ scrollSpot: window.scrollY });
    }, 100);
  };

  handleWishList = () => {
    this.setState({ isWishListOn: !this.state.isWishListOn });
  };

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
    const { isValidUser, isWishListOn, scrollSpot } = this.state;

    return (
      <div
        className={`${
          scrollSpot < SEARCH_BAR_HEIGHT ? 'navBar transparent' : 'navBar'
        }`}
      >
        <div className="logoBox" onClick={this.goToMain}>
          <h1>싸우지망고</h1>
          <img className="logoImg" src="/images/logo.png" alt="로고이미지" />
        </div>
        <div className="navSearchBar">
          <i className="fas fa-search searchIcon"></i>
          <input className="mainSearchInput" placeholder="맛집 검색"></input>
        </div>
        <div className="navProfileBox">
          {isValidUser ? (
            <MyProfile handleWishList={this.handleWishList} />
          ) : (
            <SignBox goToSignUp={this.goToSignUp} goToLogin={this.goToLogin} />
          )}
        </div>
        {isWishListOn && <WishList />}
      </div>
    );
  }
}

export default withRouter(Nav);
