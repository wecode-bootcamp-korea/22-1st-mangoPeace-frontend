import React, { Component } from 'react';

import StoreCard from './StoreCard/StoreCard';
import './BannerList.scss';

class BannerList extends Component {
  render() {
    const { storeList } = this.props;

    return (
      <section className="listBox">
        <ul className="storeList">
          <StoreCard storeList={storeList} />
        </ul>
      </section>
    );
  }
}

export default BannerList;
