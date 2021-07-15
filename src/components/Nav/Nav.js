import React from 'react';
import { withRouter } from 'react-router-dom';

import { BASE_URL } from '../../config';

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
    inputValue: '',
    wishList: null,
  };

  componentDidMount = () => {
    if (this.props.location.search === '') {
      this.setState({ isTransparentNav: true });
      window.addEventListener('scroll', this.handleScroll);
    }

    localStorage.setItem(
      'TOKEN',
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MywiZXhwIjoxNjI2NDYwNzE2fQ.tqGvlidPjzPh5Zy0mVA5Rdk4qPjuXMgDKN1cYcuRdx4'
    );
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

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  };

  fetchWishList = () => {
    fetch(`${BASE_URL}/users/detail`, {
      headers: {
        Authorization: localStorage.getItem('TOKEN'),
      },
    })
      .then(res => res.json())
      .then(res => this.setState({ wishList: res.result.wish_list }));
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

  checkInput = e => {
    const { value } = e.target;
    this.setState({ inputValue: value });
  };

  handleSearchBtn = e => {
    e.preventDefault();

    this.props.history.push(
      `/restaurants/search?keyword=${this.state.inputValue}`
    );
  };

  handleWishList = () => {
    this.setState({ isWishListOn: !this.state.isWishListOn });
    if (this.state.isWishListOn === false) {
      this.fetchWishList();
    }
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
    const { isValidUser, isWishListOn, isTransparentNav, wishList } =
      this.state;

    return (
      <div className={`${isTransparentNav ? 'navBar transparent' : 'navBar'}`}>
        <div className="logoBox" onClick={this.goToMain}>
          <h1>싸우지망고</h1>
          <img className="logoImg" src="/images/logo.png" alt="로고이미지" />
        </div>
        <form onSubmit={this.handleSearchBtn} className="navSearchBar">
          <i className="fas fa-search searchIcon"></i>
          <input
            onChange={this.checkInput}
            className="mainSearchInput"
            placeholder="맛집 검색"
          ></input>
        </form>
        <div className="navProfileBox">
          {isValidUser ? (
            <MyProfile handleWishList={this.handleWishList} />
          ) : (
            <SignBox goToSignUp={this.goToSignUp} goToLogin={this.goToLogin} />
          )}
        </div>
        {isWishListOn && wishList && (
          <WishList handleWishList={this.handleWishList} wishList={wishList} />
        )}
      </div>
    );
  }
}

export default withRouter(Nav);
