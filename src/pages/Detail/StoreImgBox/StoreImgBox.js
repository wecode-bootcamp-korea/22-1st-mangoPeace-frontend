import React from 'react';

import './StoreImgBox.scss';

class StoreImgList extends React.Component {
  render() {
    return (
      <div className="storeImgBox">
        <div className="slideArrow arrowLeft">
          <i class="fas fa-chevron-left"></i>
        </div>
        <ul className="storeImgUl">
          <li className="storeImgLi">
            <img src="http://placehold.it/40" />
          </li>
          <li className="storeImgLi">
            <img src="http://placehold.it/40" />
          </li>
          <li className="storeImgLi">
            <img src="http://placehold.it/40" />
          </li>
          <li className="storeImgLi">
            <img src="http://placehold.it/40" />
          </li>
          <li className="storeImgLi">
            <img src="http://placehold.it/40" />
          </li>
          <li className="storeImgLi">
            <img src="http://placehold.it/40" />
          </li>
          <li className="storeImgLi">
            <img src="http://placehold.it/40" />
          </li>
        </ul>
        <div className="slideArrow arrowRight">
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>
    );
  }
}

export default StoreImgList;
