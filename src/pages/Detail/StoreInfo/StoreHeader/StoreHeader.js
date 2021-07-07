import React from 'react';

import './StoreHeader.scss';

class StoreHeader extends React.Component {
  state = {
    isWish: false,
  };

  handleClickWish = () => {
    this.setState({
      isWish: !this.state.isWish,
    });
  };

  render() {
    const { handleClickWish } = this;
    const { isWish } = this.state;
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
        <div onClick={handleClickWish} className="wishBox">
          <i className={`fa-star ${isWish ? 'fas' : 'far'}`}></i>
          <span>가고싶다</span>
        </div>
      </header>
    );
  }
}

export default StoreHeader;
