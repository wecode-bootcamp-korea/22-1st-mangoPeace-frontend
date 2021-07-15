import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bannerText } from '../../Main/bannerText';
import { stringToQuery } from '../../../utilities/query';
import './BannerTitle.scss';

class BannerTitle extends Component {
  render() {
    const queryObj = stringToQuery(this.props.history.location.search);
    const banner = bannerText[queryObj.sub_category_id - 1];
    console.log(banner);
    return (
      <section className="titleBox">
        <span className="views">
          {banner.click} 클릭 | {banner.date}
        </span>
        <h2>{banner.headLine}</h2>
        <h3>{banner.subLine}</h3>
      </section>
    );
  }
}

export default withRouter(BannerTitle);
