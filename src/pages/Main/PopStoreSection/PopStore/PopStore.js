import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './PopStore.scss';

class PopStore extends Component {
  goToStore = () => {
    this.props.history.push(`/detail/${this.props.restaurant_id}`);
    console.log(this.props.restaurant_id);
  };

  render() {
    const { popStore } = this.props;

    return (
      <>
        {popStore.map(e => (
          <li className="popStore" onClick={this.goToStore}>
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

export default withRouter(PopStore);
