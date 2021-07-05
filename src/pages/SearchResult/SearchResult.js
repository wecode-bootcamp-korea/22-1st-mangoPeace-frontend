import React from 'react';
import './SearchResult.scss';

class SearchResult extends React.Component {
  render() {
    return (
      <>
        <nav>SearchResult</nav>

        <div className="searchResultList">
          <div className="searchResultHead">
            <div className="searchResultTitle">
              <div className="searchKeyword">국밥</div>
              <div className="resultRank"> 맛집 검색 순위</div>
            </div>
            <div className="searchResultFilter">
              <i className="fas fa-list"></i>
              <span className="letterFilter">필터</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SearchResult;
