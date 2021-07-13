import React, { Component } from 'react';

import StoreCard from './StoreCard/StoreCard';
import './BannerList.scss';

class BannerList extends Component {
  render() {
    return (
      <section className="listBox">
        <ul className="storeList">
          <StoreCard />
        </ul>
      </section>
    );
  }
}

export default BannerList;
