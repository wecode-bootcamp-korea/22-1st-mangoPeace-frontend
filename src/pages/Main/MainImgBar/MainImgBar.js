import React, { Component } from 'react';

import './MainImgBar.scss';

class MainImgBar extends Component {
  render() {
    return (
      <section className="mainImgBar">
        <p>솔직한 리뷰, 믿을 수 있는 평점!</p>
        <p>싸우지망고 🥭</p>
        <div className="mainSearchBar">
          <input
            className="mainSearchInput"
            type="text"
            placeholder="식당 또는 음식"
          />
          <i class="fas fa-search fa-lg" id="mainSearchIcon"></i>
          <button className="mainSearchBtn">검색</button>
        </div>
      </section>
    );
  }
}

export default MainImgBar;
