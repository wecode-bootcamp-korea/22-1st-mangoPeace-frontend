import React from 'react';

import './RatingStar.scss';

class RatingStar extends React.Component {
  render() {
    const { handleReviewRating, idx, reviewRating } = this.props;
    return (
      <i
        onClick={() => handleReviewRating(idx)}
        className={`fa-star ${idx < reviewRating ? 'fas' : 'far'}`}
      ></i>
    );
  }
}

export default RatingStar;
