import React from 'react';

class SearchResultComponent extends React.Component {
  render() {
    return (
      <>
        <img
          className="searchResultMainImage"
          src={this.props.searchResultMainImage}
        ></img>
        <div className="menuInfoContainer">
          <div className="basicInfo">
            <span className="menuName">{this.props.restaurantName}</span>
            <span className="star">{this.props.starRating}</span>
          </div>
          <div className="menuDetail">
            <span className="location">{this.props.location}</span>
            <span className="category">{this.props.category}</span>
          </div>
        </div>
      </>
    );
  }
}
export default SearchResultComponent;
