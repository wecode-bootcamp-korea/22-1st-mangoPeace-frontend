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
    isTransparentNav: false,
  };

  componentDidMount = () => {
    if (this.props.location.search === '') {
      this.setState({ isTransparentNav: true });
      window.addEventListener('scroll', this.handleScroll);
    }
  };

  componentDidUpdate = () => {
    const { location } = this.props;
    const { isTransparentNav } = this.state;

    if (location.pathname !== '/') {
      window.removeEventListener('scroll', this.handleScroll);
      if (isTransparentNav !== false) {
        this.setState({ isTransparentNav: false });
      }
    }

    if (location.pathname === '/') {
      window.addEventListener('scroll', this.handleScroll);
      if (isTransparentNav !== true && window.scrollY < SEARCH_BAR_HEIGHT) {
        this.setState({ isTransparentNav: true });
      }
    }
  };

  handleScroll = () => {
    if (debouncer) {
      clearTimeout(debouncer);
    }

    debouncer = setTimeout(() => {
      const isScrollBigger = window.scrollY < SEARCH_BAR_HEIGHT;
      this.setState({ isTransparentNav: isScrollBigger });
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
    const { isValidUser, isWishListOn, isTransparentNav } = this.state;

    return (
      <div className={`${isTransparentNav ? 'navBar transparent' : 'navBar'}`}>
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
