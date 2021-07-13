import React, { Component } from 'react';

import './PopStore.scss';

class PopStore extends Component {
  render() {
    const { popStore } = this.props;

    return (
      <>
        {popStore.map(e => (
          <li className="popStore">
            <img className="popStoreImg" alt="식당사진" src={e.image} />
            <div className="popStoreInfoBox">
              <div className="topInfo">
                <h3 className="mainStoreName">{e.restaurant_name}</h3>
                <span className="storeGrade">★ {e.rating}</span>
              </div>
              <div className="bottomInfo">
                <span className="storeLocated">
                  {e.category} - {e.sub_category}
                </span>
              </div>
            </div>
          </li>
        ))}
      </>
    );
  }
}

export default PopStore;
