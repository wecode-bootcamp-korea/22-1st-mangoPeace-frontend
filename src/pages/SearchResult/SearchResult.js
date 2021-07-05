import React from 'react';
import './SearchResult.scss';

class SearchResult extends React.Component {
  render() {
    return (
      <>
        <nav>SearchResult</nav>

        <div className="searchResultMain">
          <div className="searchResultHead">
            <div className="searchResultTitle">
              <div className="searchKeyword">국밥</div>
              <div className="resultRank"> 맛집 검색 순위</div>
            </div>
            <div className="searchResultFilter">
              <i className="fas fa-list"></i>
              <span className="letterFilter">filter</span>
            </div>
          </div>

          <div className="searchResultBody">
            <div className="searchResultList">
              <span className="searchResultListContent">
                <img
                  className="searchResultMainImage"
                  src="https://mp-seoul-image-production-s3.mangoplate.com/1760/imcyl_8.jpg?fit=around|359:240&crop=359:240;*,*&output-format=jpg&output-quality=80"
                ></img>
                <div className="menuTitleContainer">
                  <span>메뉴명</span>
                  <span>별점</span>
                  <div>
                    <span>위치</span>
                    <span>음식 카테고리</span>
                  </div>
                </div>
              </span>
              <span className="searchResultListContent">
                <img
                  className="searchResultMainImage"
                  src="https://mp-seoul-image-production-s3.mangoplate.com/1760/imcyl_8.jpg?fit=around|359:240&crop=359:240;*,*&output-format=jpg&output-quality=80"
                ></img>
                <div className="menuTitleContainer">
                  <span>메뉴명</span>
                  <span>별점</span>
                  <div>
                    <span>위치</span>
                    <span>음식 카테고리</span>
                  </div>
                </div>
              </span>
              <span className="searchResultListContent">
                <img
                  className="searchResultMainImage"
                  src="https://mp-seoul-image-production-s3.mangoplate.com/1760/imcyl_8.jpg?fit=around|359:240&crop=359:240;*,*&output-format=jpg&output-quality=80"
                ></img>
              </span>
              <span className="searchResultListContent">
                {' '}
                <img
                  className="searchResultMainImage"
                  src="https://mp-seoul-image-production-s3.mangoplate.com/1760/imcyl_8.jpg?fit=around|359:240&crop=359:240;*,*&output-format=jpg&output-quality=80"
                ></img>
              </span>
              <span className="searchResultListContent">
                {' '}
                <img
                  className="searchResultMainImage"
                  src="https://mp-seoul-image-production-s3.mangoplate.com/1760/imcyl_8.jpg?fit=around|359:240&crop=359:240;*,*&output-format=jpg&output-quality=80"
                ></img>
              </span>
              <span className="searchResultListContent">
                {' '}
                <img
                  className="searchResultMainImage"
                  src="https://mp-seoul-image-production-s3.mangoplate.com/1760/imcyl_8.jpg?fit=around|359:240&crop=359:240;*,*&output-format=jpg&output-quality=80"
                ></img>
              </span>
              <span className="searchResultListContent">
                {' '}
                <img
                  className="searchResultMainImage"
                  src="https://mp-seoul-image-production-s3.mangoplate.com/1760/imcyl_8.jpg?fit=around|359:240&crop=359:240;*,*&output-format=jpg&output-quality=80"
                ></img>
              </span>
              <span className="searchResultListContent">
                {' '}
                <img
                  className="searchResultMainImage"
                  src="https://mp-seoul-image-production-s3.mangoplate.com/1760/imcyl_8.jpg?fit=around|359:240&crop=359:240;*,*&output-format=jpg&output-quality=80"
                ></img>
              </span>
            </div>
            <div className="searchResultPaging">
              <span className="paging">1</span>
              <span className="paging">2</span>
              <span className="paging">3</span>
              <span className="paging">4</span>
              <span className="paging">5</span>
              <span className="paging">6</span>
              <span className="paging">7</span>
              <span className="paging">8</span>
              <span className="paging">9</span>
              <span className="paging">10</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SearchResult;
