import React from 'react';

import './ReviewEmpty.scss';

class ReviewEmpty extends React.Component {
  render() {
    return (
      <li className="reviewLi">
        <div className="reviewEmptyBox">
          <i className="reviewEmptyIcon far fa-sad-tear"></i>
          <span className="reviewEmptyText">아직 등록된 리뷰가 없어요</span>
        </div>
      </li>
    );
  }
}

export default ReviewEmpty;
