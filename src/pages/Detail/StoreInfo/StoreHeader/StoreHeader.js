import React from 'react';

import './StoreHeader.scss';

class StoreHeader extends React.Component {
  render() {
    return (
      <header className="storeHeader">
        <div className="storeTitle">
          <h2>더피자보이즈</h2>
          <strong>4.1</strong>
        </div>
        <div className="storeStatus">
          <i className="fas fa-pen"></i>
          <span>46</span>
        </div>
        <div className="wishBox">
          <i className="far fa-star"></i>
          <span>가고싶다</span>
        </div>
      </header>
    );
  }
}

export default StoreHeader;
