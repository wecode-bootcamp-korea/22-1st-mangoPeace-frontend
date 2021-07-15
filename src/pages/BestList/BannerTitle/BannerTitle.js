import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bannerText } from '../../Main/bannerText';
import './BannerTitle.scss';

class BannerTitle extends Component {
  render() {
    const banner = bannerText[this.props.match.params.id - 1];
    return (
      <section className="titleBox">
        <span className="views">
          {banner.click} 클릭 | {banner.date}
        </span>
        <h2>{banner.headLine} 맛집 베스트 5곳</h2>
        <h3>"{banner.subLine}"</h3>
      </section>
    );
  }
}

export default withRouter(BannerTitle);
