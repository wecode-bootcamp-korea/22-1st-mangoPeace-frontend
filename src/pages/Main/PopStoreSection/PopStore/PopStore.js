import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './PopStore.scss';

class PopStore extends Component {
  goToStore = () => {
    this.props.history.push(`/detail/${this.props.restaurant_id}`);
  };

  render() {
    const { popStore } = this.props;

    return (
      <>
        {popStore.map(store => (
          <li
            key={store.restaurant_id}
            className="popStore"
            onClick={this.goToStore}
          >
            <img className="popStoreImg" alt="식당사진" src={store.image} />
            <div className="popStoreInfoBox">
              <div className="topInfo">
                <h3 className="mainStoreName">{store.restaurant_name}</h3>
                <span className="storeGrade">★ {store.rating}</span>
              </div>
              <div className="bottomInfo">
                <span className="storeLocated">
                  {store.category} - {store.sub_category}
                </span>
              </div>
            </div>
          </li>
        ))}
      </>
    );
  }
}

export default withRouter(PopStore);
