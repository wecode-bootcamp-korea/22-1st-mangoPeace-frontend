import React, { Component } from 'react';

import './BannerTitle.scss';

class BannerTitle extends Component {
  render() {
    return (
      <section className="titleBox">
        <span className="views">161,311 클릭 | 2021-07-08</span>
        <h2>파전 맛집 베스트 30곳</h2>
        <h3>"비오는 날은 파전에 막걸리지"</h3>
      </section>
    );
  }
}

export default BannerTitle;
