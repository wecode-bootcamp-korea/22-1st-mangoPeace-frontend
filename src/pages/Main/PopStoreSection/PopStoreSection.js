import React, { Component } from 'react';

import PopStore from './PopStore/PopStore';
import './PopStoreSection.scss';

class PopStoreSection extends React.Component {
  render() {
    const { popStore } = this.props;

    return (
      <section className="popStoreSection">
        <h2>평점이 높은 인기 식당</h2>
        <div className="popStoreListBox">
          <ul>
            <PopStore popStore={popStore} />
          </ul>
        </div>
      </section>
    );
  }
}

export default PopStoreSection;
