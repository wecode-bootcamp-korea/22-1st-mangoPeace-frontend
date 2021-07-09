import React from 'react';

class SearchResultComponent extends React.Component {
  render() {
    console.log(this.props.id); 
    return (
      <>
        <span className="searchResultListContent" key={this.props.id}>
          <img
            className="searchResultMainImage"
            src={this.props.searchResultMainImage}
          ></img>
          <div className="menuInfoContainer">
            <div className="basicInfo">
              <span className="menuName">{this.props.menuName}</span>
              <span className="star">{this.props.star}</span>
            </div>
            <div className="menuDetail">
              <span className="location">{this.props.location}</span>
              <span className="category">{this.props.category}</span>
            </div>
          </div>
        </span>
      </>
    );
  }
}
export default SearchResultComponent;
